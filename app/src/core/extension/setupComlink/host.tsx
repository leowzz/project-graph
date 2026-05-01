import { activeTabAtom, store } from "@/state";
import { deserialize } from "@graphif/serializer";
import * as Comlink from "comlink";

interface ProxyArrayPayload {
  __type: "PROXY_ARRAY";
  data: Array<MessagePort | any>;
}

export function setupComlink(): void {
  Comlink.transferHandlers.set("AUTO_PROXY", {
    canHandle: (e: any): e is object =>
      typeof e === "object" &&
      e !== null &&
      !(e instanceof Promise) &&
      !(e instanceof Date) &&
      !(e instanceof RegExp) &&
      (Array.isArray(e) || e.constructor !== Object),

    serialize: (e: object) => {
      if (Array.isArray(e)) {
        const ports: MessagePort[] = [];
        const serializedArray = e.map((item) => {
          if (typeof item === "object" && item !== null) {
            const { port1, port2 } = new MessageChannel();
            Comlink.expose(item, port1);
            ports.push(port2);
            return port2;
          }
          return item;
        });

        const payload: ProxyArrayPayload = {
          __type: "PROXY_ARRAY",
          data: serializedArray,
        };
        return [payload, ports];
      }

      // 处理单体对象
      const { port1, port2 } = new MessageChannel();
      Comlink.expose(e, port1);
      return [port2, [port2]];
    },

    deserialize: (e: ProxyArrayPayload | MessagePort | any) => {
      // 还原数组容器
      if (e && (e as ProxyArrayPayload).__type === "PROXY_ARRAY") {
        return (e as ProxyArrayPayload).data.map((item) => (item instanceof MessagePort ? Comlink.wrap(item) : item));
      }
      // 还原单体代理
      return e instanceof MessagePort ? Comlink.wrap(e) : e;
    },
  });

  Comlink.transferHandlers.set("CUSTOM_TYPES", {
    // 主线程不发送这种数据类型，直接返回false
    canHandle: (v): v is unknown => false,
    serialize: (v) => [v, []],
    deserialize: (v: { $rpc?: { deserializeWithProject?: boolean }; _: string }) =>
      deserialize(v, v.$rpc?.deserializeWithProject ? store.get(activeTabAtom) : undefined),
  });
}
