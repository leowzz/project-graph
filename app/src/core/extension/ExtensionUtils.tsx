/**
 * 将 Uint8Array 转换为 base64 字符串
 * 分块处理，避免大文件时 String.fromCharCode(...bytes) 导致 call stack 溢出
 */
export function uint8ArrayToBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunkSize = 8192;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

/**
 * 根据文件扩展名推断图标的 MIME 类型
 * 支持 png、jpg/jpeg、svg、webp
 */
export function getMimeType(filename: string): string {
  const lower = filename.toLowerCase();
  if (lower.endsWith(".svg")) return "image/svg+xml";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".webp")) return "image/webp";
  return "image/png";
}

/**
 * 处理 SVG 文本，使其适合 inline 渲染：
 * 将根 <svg> 的 width/height 固定属性替换为 100%，确保由外层容器控制尺寸
 */
export function prepareSvgForInline(svgText: string): string {
  return svgText.replace(/<svg([^>]*)>/i, (_match, attrs: string) => {
    const cleaned = attrs.replace(/\bwidth=(["'])[^"']*\1/g, "").replace(/\bheight=(["'])[^"']*\1/g, "");
    return `<svg${cleaned} width="100%" height="100%">`;
  });
}
