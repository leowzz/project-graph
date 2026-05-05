import { Project } from "@/core/Project";
import { sleep } from "@/utils/sleep";
import { Rectangle } from "@graphif/shapes";

const THUMBNAIL_MAX_DIMENSION = 256;

/**
 * 为已加载的 Project 生成缩略图 PNG Blob（整个项目概览）。
 * 会临时调整相机和 Canvas，完成后恢复原状。
 * 如果舞台为空则返回 undefined。
 */
export async function generateThumbnail(project: Project): Promise<Blob | undefined> {
  const stageSize = project.stageManager.getSize();
  const stageCenter = project.stageManager.getCenter();
  const fullRect = new Rectangle(stageCenter.subtract(stageSize.divide(2)), stageSize);

  if (fullRect.width === 0 && fullRect.height === 0) return undefined;

  // 计算缩放比例
  let scaleFactor = 1;
  if (fullRect.width > THUMBNAIL_MAX_DIMENSION || fullRect.height > THUMBNAIL_MAX_DIMENSION) {
    const widthRatio = THUMBNAIL_MAX_DIMENSION / fullRect.width;
    const heightRatio = THUMBNAIL_MAX_DIMENSION / fullRect.height;
    scaleFactor = Math.min(widthRatio, heightRatio);
  }

  // 保存原始相机状态
  const originalLocation = project.camera.location.clone();
  const originalCurrentScale = project.camera.currentScale;
  const originalTargetScale = project.camera.targetScale;

  // 设置相机
  project.camera.currentScale = scaleFactor;
  project.camera.targetScale = scaleFactor;
  project.camera.location = fullRect.center;

  // 创建临时Canvas
  const tempCanvas = document.createElement("canvas");
  const deviceScale = window.devicePixelRatio;
  const canvasWidth = Math.min(fullRect.width * scaleFactor + 2, THUMBNAIL_MAX_DIMENSION + 2);
  const canvasHeight = Math.min(fullRect.height * scaleFactor + 2, THUMBNAIL_MAX_DIMENSION + 2);
  tempCanvas.width = canvasWidth * deviceScale;
  tempCanvas.height = canvasHeight * deviceScale;
  tempCanvas.style.width = `${canvasWidth}px`;
  tempCanvas.style.height = `${canvasHeight}px`;
  const tempCtx = tempCanvas.getContext("2d")!;
  tempCtx.scale(deviceScale, deviceScale);

  // 保存原Canvas和渲染器尺寸
  const originalCanvas = project.canvas.element;
  const originalCtx = project.canvas.ctx;
  const originalRendererWidth = project.renderer.w;
  const originalRendererHeight = project.renderer.h;

  try {
    project.canvas.element = tempCanvas;
    project.canvas.ctx = tempCtx;
    project.renderer.w = canvasWidth;
    project.renderer.h = canvasHeight;

    project.loop();
    await sleep(200);
    project.pause();

    const blob = await new Promise<Blob>((resolve) => {
      tempCanvas.toBlob((b) => {
        resolve(b ?? new Blob());
      }, "image/png");
    });

    return blob;
  } finally {
    // 恢复原Canvas
    project.canvas.element = originalCanvas;
    project.canvas.ctx = originalCtx;
    project.renderer.w = originalRendererWidth;
    project.renderer.h = originalRendererHeight;

    // 恢复相机
    project.camera.location = originalLocation;
    project.camera.currentScale = originalCurrentScale;
    project.camera.targetScale = originalTargetScale;

    tempCanvas.remove();
  }
}
