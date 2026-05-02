import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "@/components/ui/context-menu";
import { Project } from "@/core/Project";
import { KeyBindsUI } from "@/core/service/controlService/shortcutKeysEngine/KeyBindsUI";
import { allKeyBinds } from "@/core/service/controlService/shortcutKeysEngine/shortcutKeysRegister";
import { Settings } from "@/core/service/Settings";
import { activeTabAtom } from "@/state";
import ColorPaletteWindow from "@/sub/ColorPaletteWindow";
import ColorWindow from "@/sub/ColorWindow";
import { Color } from "@graphif/data-structures";
import { useAtom } from "jotai";
import type { LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import tailwindColors from "tailwindcss/colors";
import KeyTooltip from "./key-tooltip";
import { Button } from "./ui/button";

const Content = ContextMenuContent;
const Item = ContextMenuItem;
const Sub = ContextMenuSub;
const SubTrigger = ContextMenuSubTrigger;
const SubContent = ContextMenuSubContent;

/**
 * 右键菜单
 * @returns
 */
export default function MyContextMenuContent() {
  const [tab] = useAtom(activeTabAtom);
  const p = tab instanceof Project ? tab : undefined;
  const { t } = useTranslation("contextMenu");
  const { t: tKeyBind } = useTranslation("keyBinds");
  const [config] = Settings.use("contextMenuConfig");

  if (!p) return <></>;

  type ContextMenuConfigItem = (typeof Settings)["contextMenuConfig"][number];

  const getIcon = (itemId?: string, iconName?: string) => {
    if (iconName) {
      const IconComp = (LucideIcons as unknown as Record<string, ComponentType<LucideProps>>)[iconName];
      if (IconComp) return <IconComp />;
    }
    if (itemId) {
      const kb = allKeyBinds.find((k) => k.id === itemId);
      if (kb?.icon) {
        const IconComp = kb.icon;
        return <IconComp />;
      }
    }
    return null;
  };

  const getItemTitle = (itemId: string, label?: string) =>
    label || tKeyBind(`${itemId}.title`, { defaultValue: t(itemId, { defaultValue: itemId }) });

  const checkVisible = (itemId: string) => {
    const kb = allKeyBinds.find((k) => k.id === itemId);
    if (kb && kb.when(p) === false) return false;
    return true;
  };

  const isConfigVisible = (it: ContextMenuConfigItem): boolean => {
    if (it.visible === false) return false;
    if (it.type === "separator") return true;
    if (it.type === "setColorForSelected") {
      return p.stageManager.getSelectedStageObjects().some((obj) => "color" in obj);
    }
    if (it.type === "group" || it.type === "sub") {
      return (it.children || []).some(isConfigVisible);
    }
    return checkVisible(it.id);
  };

  const renderButtonGroupChild = (it: ContextMenuConfigItem, isGrid: boolean = false) => {
    if (!isConfigVisible(it)) return null;
    if (it.type === "separator") return <div key={it.id} />;

    const keyBind = KeyBindsUI.getUIKeyBind(it.id);

    return (
      <KeyTooltip key={`tooltip-${it.id}`} keyId={it.id}>
        <Button
          variant="ghost"
          size="icon"
          className={isGrid ? "size-6" : ""}
          onClick={() => {
            keyBind?.onPress?.(p);
            if ((keyBind?.isContinuous || keyBind?.onRelease) && keyBind?.onRelease) {
              setTimeout(() => {
                keyBind.onRelease?.(p);
              }, 100);
            }
          }}
        >
          {getIcon(it.id, it.icon)}
        </Button>
      </KeyTooltip>
    );
  };

  const renderGridGroupContent = (groupConfig: ContextMenuConfigItem) => (
    <div
      key={groupConfig.id}
      className="grid gap-0"
      style={{
        gridTemplateColumns: `repeat(${groupConfig.cols || 3}, 1fr)`,
      }}
    >
      {groupConfig.children?.map((it: any) => renderButtonGroupChild(it, true))}
    </div>
  );

  const renderSetColorForSelected = (itemConfig: ContextMenuConfigItem) => {
    const hasColorableSelectedObject = p.stageManager.getSelectedStageObjects().some((it) => "color" in it);
    if (!hasColorableSelectedObject) return null;

    return (
      <Sub key={itemConfig.id}>
        <SubTrigger>
          {getIcon(itemConfig.id, itemConfig.icon)}
          {getItemTitle(itemConfig.id, itemConfig.label)}
        </SubTrigger>
        <SubContent>
          <Item onClick={() => p.stageObjectColorManager.setSelectedStageObjectColor(Color.Transparent)}>
            {getIcon("resetSelectedStageObjectColor", "Slash")}
            {t("resetColor")}
          </Item>
          <Item className="bg-transparent! grid grid-cols-11 gap-0">
            {Object.values(tailwindColors)
              .filter((it) => typeof it !== "string")
              .slice(4)
              .flatMap((it) => Object.values(it).map(Color.fromCss))
              .map((color, index) => (
                <div
                  key={index}
                  className="hover:outline-accent-foreground size-4 -outline-offset-2 hover:outline-2"
                  style={{ backgroundColor: color.toString() }}
                  onMouseEnter={() => p.stageObjectColorManager.setSelectedStageObjectColor(color)}
                />
              ))}
          </Item>
          <Item onClick={() => p.stageObjectColorManager.setSelectedStageObjectColor(new Color(11, 45, 14, 0))}>
            改为强制特殊透明色
          </Item>
          <Item onClick={() => ColorWindow.open()}>打开调色板</Item>
          <Item onClick={() => ColorPaletteWindow.open()}>打开舞台颜色分布表</Item>
        </SubContent>
      </Sub>
    );
  };

  const renderSetPenStrokeColor = (itemConfig: ContextMenuConfigItem) => {
    return (
      <Sub key={itemConfig.id}>
        <SubTrigger>
          {getIcon(itemConfig.id, itemConfig.icon)}
          {getItemTitle(itemConfig.id, itemConfig.label)}
        </SubTrigger>
        <SubContent>
          <Item onClick={() => (Settings.autoFillPenStrokeColor = Color.Transparent.toArray())}>
            {getIcon("resetPenStrokeColor", "Slash")}
            {t("resetColor")}
          </Item>
          <Item className="bg-transparent! grid grid-cols-11 gap-0">
            {Object.values(tailwindColors)
              .filter((it) => typeof it !== "string")
              .slice(4)
              .flatMap((it) => Object.values(it).map(Color.fromCss))
              .map((color, index) => (
                <div
                  key={index}
                  className="hover:outline-accent-foreground size-4 -outline-offset-2 hover:outline-2"
                  style={{ backgroundColor: color.toString() }}
                  onMouseEnter={() => (Settings.autoFillPenStrokeColor = color.toArray())}
                />
              ))}
          </Item>
          <Item onClick={() => ColorWindow.open()}>打开调色板</Item>
        </SubContent>
      </Sub>
    );
  };

  const renderItem = (itemConfig: ContextMenuConfigItem): ReactNode => {
    if (!isConfigVisible(itemConfig)) return null;

    if (itemConfig.type === "separator") {
      return <div key={itemConfig.id} className="bg-border my-1 h-px" />;
    }

    if (itemConfig.type === "group" && itemConfig.layout === "row") {
      return (
        <Item key={itemConfig.id} className="bg-transparent! gap-0 p-0">
          {itemConfig.children?.map((it: any) => renderButtonGroupChild(it))}
        </Item>
      );
    }

    if (itemConfig.type === "group" && itemConfig.layout === "grid") {
      return (
        <Item key={itemConfig.id} className="bg-transparent! gap-0 p-0">
          {renderGridGroupContent(itemConfig)}
        </Item>
      );
    }

    if (itemConfig.type === "setColorForSelected") {
      return renderSetColorForSelected(itemConfig);
    }

    if (itemConfig.type === "setPenStrokeColor") {
      return renderSetPenStrokeColor(itemConfig);
    }

    if (itemConfig.type === "sub") {
      return (
        <Sub key={itemConfig.id}>
          <SubTrigger>
            {getIcon(itemConfig.id, itemConfig.icon)}
            {getItemTitle(itemConfig.id, itemConfig.label)}
          </SubTrigger>
          <SubContent>{renderItems(itemConfig.children || [])}</SubContent>
        </Sub>
      );
    }

    // Standard item
    if (!checkVisible(itemConfig.id)) return null;
    const keyBind = KeyBindsUI.getUIKeyBind(itemConfig.id);
    const action = keyBind?.onPress;
    const release = keyBind?.onRelease;
    const isContinuous = keyBind?.isContinuous;
    const shortcut = keyBind?.key;

    const handleClick = () => {
      action?.(p);
      if ((isContinuous || release) && release) {
        setTimeout(() => {
          release?.(p);
        }, 100);
      }
    };

    return (
      <Item key={itemConfig.id} onClick={handleClick} disabled={!action}>
        {getIcon(itemConfig.id, itemConfig.icon)}
        {getItemTitle(itemConfig.id, itemConfig.label)}
        {shortcut && <ContextMenuShortcut>{shortcut}</ContextMenuShortcut>}
      </Item>
    );
  };

  const renderItems = (items: ContextMenuConfigItem[]) => {
    const rendered: ReactNode[] = [];

    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      if (!isConfigVisible(item)) continue;

      if (item.type === "group" && item.layout === "grid") {
        const gridGroups = [item];
        while (
          index + 1 < items.length &&
          isConfigVisible(items[index + 1]) &&
          items[index + 1].type === "group" &&
          items[index + 1].layout === "grid"
        ) {
          gridGroups.push(items[index + 1]);
          index++;
        }

        rendered.push(
          <Item key={gridGroups.map((group) => group.id).join("-")} className="bg-transparent! gap-0 p-0">
            {gridGroups.map((group) => renderGridGroupContent(group))}
          </Item>,
        );
        continue;
      }

      rendered.push(renderItem(item));
    }

    return rendered;
  };

  return <Content>{renderItems(config)}</Content>;
}
