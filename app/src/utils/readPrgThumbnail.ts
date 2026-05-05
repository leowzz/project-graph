import { readFile } from "@tauri-apps/plugin-fs";
import { BlobWriter, Uint8ArrayReader, ZipReader } from "@zip.js/zip.js";

/**
 * 从 PRG 文件（ZIP 格式）中提取 thumbnail.png，不加载整个项目。
 * @param fsPath PRG 文件的文件系统路径
 * @returns thumbnail PNG 的 Blob，如果不存在则返回 undefined
 */
export async function readPrgThumbnail(fsPath: string): Promise<Blob | undefined> {
  const fileContent = await readFile(fsPath);
  const reader = new ZipReader(new Uint8ArrayReader(fileContent));
  const entries = await reader.getEntries();

  for (const entry of entries) {
    if (entry.filename === "thumbnail.png" && entry.getData) {
      const blob = await entry.getData(new BlobWriter("image/png"));
      await reader.close();
      return blob;
    }
  }

  await reader.close();
  return undefined;
}
