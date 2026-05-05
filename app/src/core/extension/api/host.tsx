import { Dialog } from "@/components/ui/dialog";
import { Project } from "@/core/Project";
import { KeyBindIcon } from "@/core/service/controlService/shortcutKeysEngine/KeyBindsUI";
import { Settings } from "@/core/service/Settings";
import { activeTabAtom, store, tabsAtom } from "@/state";
import { Vector } from "@graphif/data-structures";
import { Rectangle } from "@graphif/shapes";
import { invoke } from "@tauri-apps/api/core";
import { fetch } from "@tauri-apps/plugin-http";
import { proxy } from "comlink";
import { toast } from "sonner";
import { CollisionBox } from "../../stage/stageObject/collisionBox/collisionBox";
import { ExtensionEntity, ExtensionEntityConfig } from "../../stage/stageObject/entity/ExtensionEntity";
import { Extension } from "../Extension";
import { ExtensionKeyBindManager } from "../ExtensionKeyBindManager";
import { extensionObjectRegistry } from "../ExtensionObjectRegistry";

export function extensionHostApiFactory(extension: Extension) {
  const extensionName = extension.metadata.extension?.name || "未知扩展";
  const extensionId = extension.metadata.extension?.id || "unknown";

  function cloneCollisionBox(cb: CollisionBox): CollisionBox {
    const clonedShapes = cb.shapes.map((s) => {
      const r = s.getRectangle();
      return new Rectangle(r.location.clone(), r.size.clone());
    });
    return new CollisionBox(clonedShapes);
  }

  return {
    //region toast
    async toast(message: string) {
      toast(
        <div className="flex flex-col gap-0.5">
          <p>{message}</p>
          <p className="text-xs opacity-50">来自扩展: {extensionName}</p>
        </div>,
      );
    },
    async toast_success(message: string) {
      toast.success(
        <div className="flex flex-col gap-0.5">
          <p>{message}</p>
          <p className="text-xs opacity-50">来自扩展: {extensionName}</p>
        </div>,
      );
    },
    async toast_error(message: string) {
      toast.error(
        <div className="flex flex-col gap-0.5">
          <p>{message}</p>
          <p className="text-xs opacity-50">来自扩展: {extensionName}</p>
        </div>,
      );
    },
    async toast_warning(message: string) {
      toast.warning(
        <div className="flex flex-col gap-0.5">
          <p>{message}</p>
          <p className="text-xs opacity-50">来自扩展: {extensionName}</p>
        </div>,
      );
    },

    //region dialog
    dialog_confirm: ((title, description = "", options?) =>
      Dialog.confirm(title, `${description}\n(来自扩展: ${extensionName})`, options)) satisfies typeof Dialog.confirm,
    dialog_input: ((title, description = "", options?) =>
      Dialog.input(title, `${description}\n(来自扩展: ${extensionName})`, options)) satisfies typeof Dialog.input,
    dialog_copy: ((title, description = "", value) =>
      Dialog.copy(title, `${description}\n(来自扩展: ${extensionName})`, value)) satisfies typeof Dialog.copy,
    dialog_buttons: ((title, description = "", buttons) =>
      Dialog.buttons(title, `${description}\n(来自扩展: ${extensionName})`, buttons)) satisfies typeof Dialog.buttons,

    //region 网络请求
    fetch,

    async fetch_base64(url: string): Promise<string> {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      let binary = "";
      for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      const mimeType = response.headers.get("content-type") || "image/png";
      return `data:${mimeType};base64,${btoa(binary)}`;
    },

    async fetch_json(url: string): Promise<unknown> {
      const response = await fetch(url);
      const text = await response.text();
      return JSON.parse(text);
    },

    async fetch_binary(url: string) {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      const mimeType = response.headers.get("content-type") || "image/png";
      return { buffer, mimeType };
    },

    //region 系统命令
    async shell_execute(program: string, args?: string[], stdin?: string) {
      return invoke<{ code: number | null; stdout: string; stderr: string }>("run_command", {
        program,
        cmdArgs: args ?? [],
        stdin,
      });
    },

    //region 设置
    async settings_getOwn(key: string) {
      return Settings.extensionSettings[extensionId]?.[key];
    },
    async settings_setOwn(key: string, value: unknown) {
      const current = Settings.extensionSettings[extensionId] ?? {};
      Settings.extensionSettings = {
        ...Settings.extensionSettings,
        [extensionId]: {
          ...current,
          [key]: value,
        },
      };
    },
    async settings_getGlobal(key: string) {
      if (key === "aiApiKey") {
        throw new Error("出于安全考虑，扩展无法访问 aiApiKey 设置项");
      }
      return (Settings as any)[key];
    },
    async settings_setGlobal(key: string, value: unknown) {
      if (key === "aiApiBaseUrl") {
        throw new Error("出于安全考虑，扩展无法修改 aiApiBaseUrl 设置项");
      }
      return ((Settings as any)[key] = value);
    },

    //region 快捷键
    async keybinds_register(
      id: string,
      icon: KeyBindIcon,
      defaultKey: string,
      onPress: () => void,
      onRelease?: () => void,
      isContinuous?: boolean,
    ) {
      return ExtensionKeyBindManager.register(extensionId, {
        id,
        icon,
        defaultKey,
        onPress,
        onRelease,
        isContinuous,
      });
    },
    async keybinds_unregisterAll() {
      return ExtensionKeyBindManager.unregisterAll(extensionId);
    },

    //region Tab,Project
    async tabs_getAll() {
      return store.get(tabsAtom).map((it) => proxy(it));
    },
    async tabs_getAllProjects() {
      return store
        .get(tabsAtom)
        .filter((it) => it instanceof Project)
        .map((it) => proxy(it));
    },
    async tabs_getCurrent() {
      const activeTab = store.get(activeTabAtom);
      return activeTab ? proxy(activeTab) : null;
    },
    async tabs_getCurrentProject() {
      const activeTab = store.get(activeTabAtom);
      if (activeTab instanceof Project) {
        return proxy(activeTab);
      }
      return null;
    },

    //region 自定义 Entity
    async entity_registerType(
      typeName: string,
      initialData: any,
      collisionBox: CollisionBox,
      renderFn: (data: any) => Promise<ImageBitmap>,
    ) {
      const config: ExtensionEntityConfig = { initialData, collisionBox };
      extensionObjectRegistry.registerType(extensionId, typeName, config, renderFn);
      patchLoadedEntities(typeName, collisionBox);
    },

    async entity_onClick(
      typeName: string,
      handler: (payload: import("../ExtensionObjectRegistry").ClickEventPayload) => void,
    ) {
      extensionObjectRegistry.registerClickHandler(extensionId, typeName, handler);
    },

    async entity_create(typeName: string, data: any, location: { x: number; y: number }) {
      const activeTab = store.get(activeTabAtom);
      if (!(activeTab instanceof Project)) {
        throw new Error("当前标签页不是一个项目，无法创建实体");
      }

      const config = extensionObjectRegistry.getConfig(extensionId, typeName);
      const entity = new ExtensionEntity(activeTab, {
        extensionId,
        typeName,
        customData: data,
        collisionBox: config ? cloneCollisionBox(config.collisionBox) : undefined,
      });
      entity.location = new Vector(location.x, location.y);

      activeTab.stageManager.add(entity);
      return proxy(entity);
    },
  };

  function patchLoadedEntities(typeName: string, collisionBox: CollisionBox) {
    for (const tab of store.get(tabsAtom)) {
      if (!(tab instanceof Project)) continue;
      for (const obj of tab.stage) {
        if (!(obj instanceof ExtensionEntity)) continue;
        if (obj.extensionId !== extensionId || obj.typeName !== typeName) continue;
        const rect = obj.collisionBox.getRectangle();
        if (rect.size.x === 0 && rect.size.y === 0) {
          obj.collisionBox = cloneCollisionBox(collisionBox);
          obj._isDirty = true;
        }
      }
    }
  }
}
