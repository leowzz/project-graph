/* eslint-disable */
// @ts-nocheck

/**
 * Auto-generated. Do not edit manually.
 * 2026-05-07T13:31:13.599Z
 */

// ── 第三方类型导入 ──
import type { Color, LimitLengthQueue, LruCache, ProgressNumber, Vector } from "@graphif/data-structures";
import type {
  Circle,
  CubicBezierCurve,
  CubicCatmullRomSpline,
  Line,
  Rectangle,
  Shape,
  SymmetryCurve,
} from "@graphif/shapes";
import type { DirEntry } from "@tauri-apps/plugin-fs";
import type { fetch } from "@tauri-apps/plugin-http";
import type { Store } from "@tauri-apps/plugin-store";
import type {
  AlignCenterHorizontal,
  AlignCenterVertical,
  AlignEndHorizontal,
  AlignEndVertical,
  AlignHorizontalJustifyStart,
  AlignHorizontalSpaceBetween,
  AlignLeft,
  AlignStartHorizontal,
  AlignStartVertical,
  AlignVerticalJustifyStart,
  AlignVerticalSpaceBetween,
  Aperture,
  ArrowDown,
  ArrowDownFromLine,
  ArrowDownToLine,
  ArrowDownUp,
  ArrowLeft,
  ArrowLeftFromLine,
  ArrowLeftRight,
  ArrowLeftToLine,
  ArrowRight,
  ArrowRightFromLine,
  ArrowRightToLine,
  ArrowUp,
  ArrowUpFromLine,
  ArrowUpToLine,
  Box,
  Brush,
  Camera,
  ChevronFirst,
  ChevronLast,
  ChevronsDown,
  ChevronsRightLeft,
  ChevronsUp,
  CircleCheck,
  CircleSlash,
  Clipboard,
  Code,
  Copy,
  CornerUpRight,
  Dot,
  Equal,
  Expand,
  ExternalLink,
  Eye,
  EyeOff,
  FilePlus,
  FileUp,
  FlaskConical,
  Focus,
  Folder,
  FolderPlus,
  Ghost,
  GitBranch,
  GitCompare,
  GraduationCap,
  Grip,
  History,
  Images,
  Layers,
  LayoutDashboard,
  LayoutPanelTop,
  Link,
  Lock,
  LucideProps,
  Maximize,
  Maximize2,
  Merge,
  Minimize,
  Minimize2,
  Moon,
  MousePointer,
  MoveHorizontal,
  MoveUpRight,
  Network,
  Package,
  Palette,
  PenTool,
  Plus,
  Redo,
  RefreshCcw,
  RefreshCcwDot,
  RefreshCw,
  Repeat,
  Save,
  Scissors,
  Search,
  Settings,
  Shrink,
  Slash,
  Sparkle,
  Spline,
  Split,
  SquareDashedBottomCode,
  SquareDot,
  SquareRoundCorner,
  SquareSquare,
  Sun,
  Tag,
  Trash2,
  TreePine,
  Type,
  Undo,
  Wand2,
  X,
  Zap,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { URI } from "vscode-uri";
import type * as react_dialog from "@radix-ui/react-dialog";

// ── 本地类型定义 ──
declare class AIEngine {
  createTransport(project: Project);
  createChatFetch(project: Project): typeof fetch;
  getModels();
  readRequestBody(body: BodyInit | null | undefined): Promise<any>;
}

declare class Association extends StageObject {
  associationList: StageObject[];
  color: Color;
}

declare class AutoAlign {
  constructor(project: Project);
  getSelectionOuterRectangle(entities: Entity[]): Rectangle | null;
  calculateDistanceByRectangle(rectA: Rectangle, rectB: Rectangle);
  alignRectangleToTargetX(selectedRect: Rectangle, otherRect: Rectangle): number;
  alignRectangleToTargetY(selectedRect: Rectangle, otherRect: Rectangle): number;
  _addAlignEffectByRect(selectedRect: Rectangle, otherRect: Rectangle);
  getGridSnapDeltaX(rect: Rectangle);
  getGridSnapDeltaY(rect: Rectangle);
  alignAllSelectedToGrid();
  alignAllSelected();
  preAlignAllSelected();
  onEntityMoveAlignToGrid(selectedEntity: Entity);
  onEntityMoveAlignToGridX(selectedEntity: Entity);
  onEntityMoveAlignToGridY(selectedEntity: Entity);
  onEntityMoveAlignToOtherEntity(selectedEntity: Entity, otherEntities: Entity[], isPreAlign = false);
  _addAlignEffect(selectedEntity: Entity, otherEntity: Entity);
  onEntityMoveAlignToTargetEntityX(selectedEntity: Entity, otherEntity: Entity, isPreAlign = false): number;
  onEntityMoveAlignToTargetEntityY(selectedEntity: Entity, otherEntity: Entity, isPreAlign = false): number;
  calculateDistance(entityA: Entity, entityB: Entity);
  autoLayoutSelectedFastTreeMode(selectedRootEntity: ConnectableEntity);
}

declare class AutoCompleteManager {
  currentWindowId: string | undefined;
  constructor(project: Project);
  handle;
  openWindow(
    node: TextNode,
    entries: Record<string, string>,
    onSelect: (value: string) => void,
    setWindowId: (id: string) => void,
  );
  handleLogic(text: string, node: TextNode, ele: HTMLTextAreaElement, setWindowId: (id: string) => void);
  handleReference;
  handleReferenceFile(searchText: string, node: TextNode, ele: HTMLTextAreaElement, setWindowId: (id: string) => void);
  handleReferenceSection(
    searchText: string,
    node: TextNode,
    ele: HTMLTextAreaElement,
    setWindowId: (id: string) => void,
  );
}

declare class AutoCompute {
  MapOperationNameFunction: StringFunctionMap;
  MapNameFunction: StringFunctionMap;
  MapVariableFunction: VariableFunctionMap;
  MapOtherFunction: OtherFunctionMap;
  variables;
  constructor(project: Project);
  tickNumber;
  tick();
  funcTypeTrans(mF: MathFunctionType): StringFunctionType;
  isTextNodeLogic(node: TextNode): boolean;
  isSectionLogic(section: Section): boolean;
  sortEntityByLocation(entities: ConnectableEntity[]): ConnectableEntity[];
  computeTextNode(node: TextNode);
  computeSection(section: Section);
  computeEdge(edge: LineEdge);
}

declare class AutoComputeUtils {
  constructor(project: Project);
  getParentTextNodes(node: TextNode): TextNode[];
  getParentEntities(node: TextNode): ConnectableEntity[];
  getChildTextNodes(node: TextNode): TextNode[];
  getNodeOneResult(node: TextNode, resultText: string);
  getSectionOneResult(section: Section, resultText: string);
  getSectionMultiResult(section: Section, resultTextList: string[]);
  generateMultiResult(node: TextNode, resultTextList: string[]);
  stringToNumber(str: string);
  isNodeConnectedWithLogicNode(node: ConnectableEntity): boolean;
  isNameIsLogicNode(name: string): boolean;
}

declare class AutoLayout {
  constructor(project: Project);
  isGravityLayoutStart: boolean;
  tick();
  setGravityLayoutStart();
  setGravityLayoutEnd();
  getDAGLayoutInput(entities: ConnectableEntity[]): {
    nodes: Array<{ id: string; rectangle: Rectangle }>;
    edges: Array<{ from: string; to: string }>;
  };
  computeDAGLayout(input: {
    nodes: Array<{ id: string; rectangle: Rectangle }>;
    edges: Array<{ from: string; to: string }>;
  }): { [nodeId: string]: Vector };
  topologicalSort(
    nodes: Array<{ id: string; rectangle: Rectangle }>,
    edges: Array<{ from: string; to: string }>,
  ): { order: string[]; levels: Map<string, number> };
  autoLayoutDAG(entities: ConnectableEntity[]);
  gravityLayoutTick();
}

declare class AutoLayoutFastTree {
  constructor(project: Project);
  getTreeBoundingRectangle(node: ConnectableEntity, skipDashed = false): Rectangle;
  moveTreeRectTo(treeRoot: ConnectableEntity, targetLocation: Vector, skipDashed = false);
  getSortedChildNodes(
    _node: ConnectableEntity,
    childNodes: ConnectableEntity[],
    direction: "col" | "row" = "col",
  ): ConnectableEntity[];
  alignTrees(trees: ConnectableEntity[], direction: "top" | "bottom" | "left" | "right", gap = 10, skipDashed = false);
  adjustChildrenTreesByRootNodeLocation(
    rootNode: ConnectableEntity,
    childList: ConnectableEntity[],
    gap = 100,
    position: "rightCenter" | "leftCenter" | "bottomCenter" | "topCenter" = "rightCenter",
    skipDashed = false,
  );
  resolveSubtreeOverlaps(
    rootNode: ConnectableEntity,
    directionGroups: {
      right?: ConnectableEntity[];
      left?: ConnectableEntity[];
      bottom?: ConnectableEntity[];
      top?: ConnectableEntity[];
    },
    skipDashed = false,
  );
  hasOverlapOrLineIntersection(
    rootNode: ConnectableEntity,
    group1: ConnectableEntity[],
    group2: ConnectableEntity[],
    dir1: "left" | "right" | "top" | "bottom",
    dir2: "left" | "right" | "top" | "bottom",
    skipDashed = false,
  ): boolean;
  autoLayoutFastTreeMode(rootNode: ConnectableEntity);
  treeReverseX(selectedRootEntity: ConnectableEntity);
  treeReverseY(selectedRootEntity: ConnectableEntity);
  treeReverse(selectedRootEntity: ConnectableEntity, direction: "X" | "Y");
}

declare class AutoSaveBackupService {
  lastBackupTime;
  lastBackupHash;
  lastSaveTime;
  constructor(project: Project);
  tick();
  autoSave();
  autoBackup();
  manualBackup();
  resolveAutoBackupDir(candidate: { kind: "custom"; path: string } | { kind: "default" }): Promise<string | null>;
  tryBackupToDir(backupDir: string): Promise<boolean>;
  backupCurrentProject(backupDir: string): Promise<boolean>;
  generateBackupFileName(): string;
  getOriginalFileName(): string;
  createBackupFile(backupFilePath: string): Promise<void>;
  manageBackupFiles(backupDir: string): Promise<void>;
}

declare class BackgroundRenderer {
  constructor(project: Project);
  renderDotBackground(viewRect: Rectangle);
  renderHorizonBackground(viewRect: Rectangle);
  renderVerticalBackground(viewRect: Rectangle);
  renderCartesianBackground(viewRect: Rectangle);
  getCurrentGap(): number;
  getLocationXIterator(viewRect: Rectangle, currentGap: number): IterableIterator<number>;
  getLocationYIterator(viewRect: Rectangle, currentGap: number): IterableIterator<number>;
}

declare class BaseExporter {
  constructor(project: Project);
  getTreeTypeString(textNode: TextNode, nodeToStringFunc: (node: TextNode, level: number) => string);
  getNodeChildrenArray(node: TextNode): ConnectableEntity[];
}

declare class BaseImporter {
  constructor(project: Project);
}

declare class Camera {
  frictionExponent;
  location: Vector;
  targetLocationByScale: Vector;
  speed: Vector;
  accelerateCommander: Vector;
  currentScale: number;
  targetScale: number;
  shakeLocation: Vector;
  savedCameraState: { location: Vector; scale: number } | null;
  shockMoveDiffLocationsQueue;
  pageMove(direction: Direction);
  bombMove(targetLocation: Vector, frameCount = 40);
  tick();
  tickNumber;
  allowScaleFollowMouseLocationTicks;
  setAllowScaleFollowMouseLocationTicks(ticks: number);
  zoomInByKeyboardPress();
  zoomOutByKeyboardPress();
  addScaleFollowMouseLocationTime(sec: number);
  isStartZoomIn: boolean;
  isStartZoomOut: boolean;
  dealCycleSpace();
  setLocationByOtherLocation(otherWorldLocation: Vector, viewLocation: Vector);
  clearMoveCommander();
  stopImmediately();
  dealCameraScaleInTick();
  constructor(project: Project);
  reset();
  resetBySelected();
  resetByRectangle(viewRectangle: Rectangle);
  resetScale();
  resetLocationToZero();
  saveCameraState();
  restoreCameraState();
}

declare class Canvas {
  ctx: CanvasRenderingContext2D;
  constructor(project: Project, element: HTMLCanvasElement = document.createElement("canvas"));
  mount(wrapper: HTMLDivElement);
  dispose();
}

declare interface ClickEventPayload {
  relativeWorldX: number;
  relativeWorldY: number;
  worldX: number;
  worldY: number;
  customData: any;
  uuid: string;
}

declare class CollisionBox {
  shapes: Shape[];
  constructor(shapes: Shape[]);
  updateShapeList(shapes: Shape[]): void;
  isContainsPoint(location: Vector): boolean;
  isIntersectsWithRectangle(rectangle: Rectangle): boolean;
  isContainedByRectangle(rectangle: Rectangle): boolean;
  isIntersectsWithLine(line: Line): boolean;
  getRectangle(): Rectangle;
}

declare class CollisionBoxRenderer {
  constructor(project: Project);
  render(collideBox: CollisionBox, color: Color);
}

declare class ComplexityDetector {
  constructor(project: Project);
  detectorCurrentStage(): CountResultObject;
}

declare class ConnectableAssociation extends Association {
  associationList: ConnectableEntity[];
  reverse();
  get target(): ConnectableEntity;
  set target(value: ConnectableEntity);
  get source(): ConnectableEntity;
  set source(value: ConnectableEntity);
}

declare class ConnectableEntity extends Entity {
  geometryCenter: Vector;
  unknown;
}

declare class ConnectPoint extends ConnectableEntity {
  CONNECT_POINT_SHRINK_RADIUS;
  CONNECT_POINT_EXPAND_RADIUS;
  get geometryCenter(): Vector;
  isHiddenBySectionCollapse: boolean;
  collisionBox: CollisionBox;
  uuid: string;
  get radius(): number;
  _isSelected: boolean;
  get isSelected(): any;
  set isSelected(value: boolean);
  constructor(
    project: Project,
    {
      uuid = crypto.randomUUID() as string,
      collisionBox = new CollisionBox([
        new Rectangle(Vector.getZero(), Vector.same(ConnectPoint.CONNECT_POINT_SHRINK_RADIUS * 2)),
      ]),
      details = [],
    },
    unknown = false,
  );
  move(delta: Vector): void;
  moveTo(location: Vector): void;
}

declare class ContentSearch {
  constructor(project: Project);
  searchResultNodes: StageObject[];
  isCaseSensitive;
  searchScope;
  currentSearchResultIndex;
  getStageObjectText(stageObject: StageObject): string;
  getSelectedObjectsBounds(): Rectangle | null;
  isObjectInBounds(obj: StageObject, bounds: Rectangle): boolean;
  startSearch(searchString: string, autoFocus = true): boolean;
  nextSearchResult();
  previousSearchResult();
}

declare class Controller {
  setCursorNameHook: (_: CursorNameEnum) => void;
  pressingKeySet: Set<string>;
  pressingKeysString(): string;
  isMovingEdge;
  lastMoveLocation;
  mouseLocation;
  isCameraLocked;
  lastSelectedEntityUUID: Set<string>;
  lastSelectedEdgeUUID: Set<string>;
  touchStartLocation;
  touchStartDistance;
  touchDelta;
  lastClickTime;
  lastClickLocation;
  isMouseDown: boolean[];
  lastManipulateTime;
  resetCountdownTimer();
  isManipulateOverTime();
  edgeHoverTolerance;
  constructor(project: Project);
  dispose();
  mousedown(event: MouseEvent);
  mouseup(event: MouseEvent);
  mousewheel(event: WheelEvent);
  handleMousedown(button: number, _x: number, _y: number);
  handleMouseup(button: number, x: number, y: number);
  keydown(event: KeyboardEvent);
  keyup(event: KeyboardEvent);
  touchstart(e: TouchEvent);
  touchmove(e: TouchEvent);
  touchend(e: TouchEvent);
  associationReshape: ControllerAssociationReshapeClass;
  camera: ControllerCameraClass;
  cutting: ControllerCuttingClass;
  edgeEdit: ControllerEdgeEditClass;
  entityClickSelectAndMove: ControllerEntityClickSelectAndMoveClass;
  entityCreate: ControllerEntityCreateClass;
  extensionEntityClick: ControllerExtensionEntityClickClass;
  layerMoving: ControllerLayerMovingClass;
  entityResize: ControllerEntityResizeClass;
  nodeConnection: ControllerNodeConnectionClass;
  nodeEdit: ControllerNodeEditClass;
  penStrokeControl: ControllerPenStrokeControlClass;
  penStrokeDrawing: ControllerPenStrokeDrawingClass;
  rectangleSelect: ControllerRectangleSelectClass;
  sectionEdit: ControllerSectionEditClass;
  imageScale: ControllerImageScaleClass;
}

declare class ControllerAssociationReshapeClass extends ControllerClass {
  mousewheel: (event: WheelEvent) => void;
  lastMoveLocation: Vector;
  mousedown: (event: MouseEvent) => void;
  mousemove: (event: MouseEvent) => void;
  mouseup: (event: MouseEvent) => void;
}

declare class ControllerCameraClass extends ControllerClass {
  isUsingMouseGrabMove;
  lastMousePressLocation: Vector[];
  isPreGrabbingWhenSpace;
  mac;
  keydown: (event: KeyboardEvent) => void;
  keyup: (event: KeyboardEvent) => void;
  mousedown;
  mousemove: (event: MouseEvent) => void;
  mouseMoveOutWindowForcedShutdown(vectorObject: Vector);
  mouseup;
  mousewheel;
  dealStealthMode(event: WheelEvent);
  mousewheelFunction(event: WheelEvent);
  mouseDoubleClick: (event: MouseEvent) => void;
  moveCameraByMouseMove(x: number, y: number, mouseIndex: number);
  moveCameraByTouchPadTwoFingerMove(event: WheelEvent);
  zoomCameraByMouseWheel(event: WheelEvent);
  moveYCameraByMouseWheel(event: WheelEvent);
  moveCameraByMouseSideWheel(event: WheelEvent);
  zoomCameraByMouseSideWheel(event: WheelEvent);
  moveYCameraByMouseSideWheel(event: WheelEvent);
  moveXCameraByMouseWheel(event: WheelEvent);
  moveXCameraByMouseSideWheel(event: WheelEvent);
  isMouseWheel(event: WheelEvent): boolean;
  addDistanceNumberAndDetect(distance: number): boolean;
  detectDeltaY: LimitLengthQueue<number>;
  importantNumbers: Set<number>;
}

declare class ControllerClass {
  constructor(project: Project);
  lastMoveLocation: Vector;
  lastClickTime: number;
  lastClickLocation: Vector;
  keydown: (event: KeyboardEvent) => void;
  keyup: (event: KeyboardEvent) => void;
  mousedown: (event: PointerEvent) => void;
  mouseup: (event: PointerEvent) => void;
  mousemove: (event: PointerEvent) => void;
  mousewheel: (event: WheelEvent) => void;
  mouseDoubleClick: (event: PointerEvent) => void;
  touchstart: (event: TouchEvent) => void;
  touchmove: (event: TouchEvent) => void;
  touchend: (event: TouchEvent) => void;
  dispose();
  _mouseup;
  _touchstart;
  _touchmove;
  onePointTouchMoveLocation: Vector;
  _touchend;
  mouseMoveOutWindowForcedShutdown(_outsideLocation: Vector);
}

declare class ControllerCuttingClass extends ControllerClass {
  _controlKeyEventRegistered;
  _isControlKeyDown;
  onControlKeyDown;
  onControlKeyUp;
  registerControlKeyEvents();
  unregisterControlKeyEvents();
  constructor(project: Project);
  dispose();
  cuttingLine: Line;
  lastMoveLocation;
  warningEntity: Entity[];
  warningSections: Section[];
  warningAssociations: Association[];
  isUsing;
  twoPointsMap: Record<string, Vector[]>;
  cuttingStartLocation;
  mousedown: (event: MouseEvent) => void;
  mouseDownEvent(event: MouseEvent);
  mousemove: (event: MouseEvent) => void;
  clearIsolationPoint();
  mouseUpFunction(mouseUpWindowLocation: Vector);
  mouseup: (event: MouseEvent) => void;
  mouseMoveOutWindowForcedShutdown(outsideLocation: Vector);
  updateWarningObjectByCuttingLine();
  addEffectByWarningEntity();
}

declare class ControllerEdgeEditClass extends ControllerClass {
  editEdgeText(clickedLineEdge: Edge, selectAll = true);
  editMultiTargetEdgeText(clickedEdge: MultiTargetUndirectedEdge, selectAll = true);
  mouseDoubleClick;
  keydown;
}

declare class ControllerEntityClickSelectAndMoveClass extends ControllerClass {
  isMovingEntity;
  mouseDownViewLocation;
  shakeDetector;
  shiftAxisLock: "x" | "y" | null;
  shiftAccumulatedDelta;
  mousedown: (event: MouseEvent) => void;
  mousemove: (event: MouseEvent) => void;
  mouseup: (event: MouseEvent) => void;
  mouseMoveOutWindowForcedShutdown(_outsideLocation: Vector): void;
}

declare class ControllerEntityCreateClass extends ControllerClass {
  constructor(project: Project);
  mouseDoubleClick;
  createConnectPoint(pressLocation: Vector, addToSections: Section[]);
}

declare class ControllerEntityResizeClass extends ControllerClass {
  changeSizeEntity: Entity | null;
  mousedown: (event: MouseEvent) => void;
  mousemove: (event: MouseEvent) => void;
  mouseup: (event: MouseEvent) => void;
}

declare class ControllerExtensionEntityClickClass extends ControllerClass {
  constructor(project: Project);
  mousedown;
}

declare class ControllerImageScaleClass extends ControllerClass {
  mousewheel;
}

declare class ControllerLayerMovingClass extends ControllerClass {
  get isEnabled(): boolean;
  mousemove: (event: MouseEvent) => void;
  mouseup: (event: MouseEvent) => void;
}

declare class ControllerNodeConnectionClass extends ControllerClass {
  _isControlKeyDown;
  _controlKeyEventRegistered;
  onControlKeyDown;
  onControlKeyUp;
  registerControlKeyEvents();
  unregisterControlKeyEvents();
  _lastRightMousePressLocation: Vector;
  _isUsing: boolean;
  get isUsing(): boolean;
  constructor(project: Project);
  dispose();
  connectFromEntities: ConnectableEntity[];
  connectToEntity: ConnectableEntity | null;
  mouseLocations: Vector[];
  getMouseLocationsPoints(): Vector[];
  createConnectPointWhenConnect();
  mousedown: (event: MouseEvent) => void;
  _startImageLocation: Map<string, Vector>;
  _endImageLocation: Vector | null;
  _hoverImageLocation: Vector | null;
  _previewSourceDirection: Direction | null;
  _previewTargetDirection: Direction | null;
  getHoverImageNode(): ImageNode | null;
  getHoverImageLocation(): Vector | null;
  onMouseDown(event: MouseEvent);
  isMouseHoverOnTarget;
  mousemove: (event: MouseEvent) => void;
  mouseMove(event: MouseEvent);
  mouseup: (event: MouseEvent) => void;
  mouseUp(event: MouseEvent);
  getConnectDirectionByMouseTrack(): [Direction | null, Direction | null];
  _hasSourceSparkTriggered;
  _hasTargetSparkTriggered;
  getOppositeDirection(direction: Direction): Direction;
  clickMultiConnect(releaseWorldLocation: Vector);
  clear();
  updatePreviewDirections();
  directionToRate(direction: Direction | null): Vector;
  getPreviewSourceRectangleRate(): Vector;
  getPreviewTargetRectangleRate(): Vector;
  dragMultiConnect(
    connectToEntity: ConnectableEntity,
    sourceDirection: Direction | null = null,
    targetDirection: Direction | null = null,
  );
  isConnecting();
  addConnectEffect(from: ConnectableEntity, to: ConnectableEntity, sourceRectRate?: Vector, targetRectRate?: Vector);
}

declare class ControllerNodeEditClass extends ControllerClass {
  constructor(project: Project);
  mouseDoubleClick;
  mouseup;
  mousemove;
  editUrlNodeTitle(clickedUrlNode: UrlNode);
  editLatexNode(node: LatexNode);
}

declare class ControllerPenStrokeControlClass extends ControllerClass {
  isAdjusting;
  startAdjustWidthLocation: Vector;
  lastAdjustWidthLocation: Vector;
  mousedown: (event: MouseEvent) => void;
  mousemove: (event: MouseEvent) => void;
  mouseup: (event: MouseEvent) => void;
  onMouseMoveWhenAdjusting;
}

declare class ControllerPenStrokeDrawingClass extends ControllerClass {
  _isUsing: boolean;
  currentSegments: PenStrokeSegment[];
  isDrawingLine;
  currentStrokeWidth: number;
  constructor(project: Project);
  mousedown;
  mousemove;
  mouseup;
  releaseMouseAndClear();
  mousewheel: (event: WheelEvent) => void;
  getCurrentStrokeColor();
  changeCurrentStrokeColorAlpha(dAlpha: number);
}

declare class ControllerRectangleSelectClass extends ControllerClass {
  _isUsing: boolean;
  selectingRectangle: Rectangle | null;
  get isUsing(): any;
  shutDown();
  mouseMoveOutWindowForcedShutdown(mouseLocation: Vector);
  mousedown: (event: MouseEvent) => void;
  mousemove: (event: MouseEvent) => void;
  isSelectDirectionRight;
  getSelectMode(): "contain" | "intersect";
  mouseup;
}

declare class ControllerSectionEditClass extends ControllerClass {
  constructor(project: Project);
  mouseDoubleClick;
  mousemove;
  keydown;
  editSectionTitle(section: Section);
}

declare class ControllerUtils {
  autoComplete: AutoCompleteManager;
  constructor(project: Project);
  editTextNode(clickedNode: TextNode, selectAll = true);
  editNodeDetailsByKeyboard();
  editNodeDetails(clickedNode: Entity);
  addTextNodeByLocation(location: Vector, selectCurrent: boolean = false, autoEdit: boolean = false);
  createConnectPoint(location: Vector);
  addTextNodeFromCurrentSelectedNode(direction: Direction, selectCurrent = false);
  textNodeInEditModeByUUID(uuid: string);
  getClickedStageObject(clickedLocation: Vector);
  isClickedResizeRect(clickedLocation: Vector): boolean;
  selectedEntityNormalizing();
}

declare class CopyEngine {
  copyEngineImage: CopyEngineImage;
  copyEngineText: CopyEngineText;
  constructor(project: Project);
  copy();
  paste();
  virtualClipboardPaste();
  cut();
  readSystemClipboardAndPaste();
}

declare class CopyEngineImage {
  constructor(project: Project);
  processClipboardImage();
  processImageStandard();
  copyEnginePasteImage(item: Blob);
  debugImageData(imageData: any): void;
  fixImageData(data: Uint8ClampedArray): Uint8ClampedArray;
  processImageWindowsCompat();
  ensureImageDataFormat(data: any, width: number, height: number): Uint8ClampedArray;
  validateCanvasContent(ctx: CanvasRenderingContext2D, width: number, height: number): void;
  createBlobFromCanvas(canvas: HTMLCanvasElement): Promise<Blob>;
}

declare class CopyEngineText {
  constructor(project: Project);
  copyEnginePastePlainText(item: string);
}

declare class CubicCatmullRomSplineEdge extends Edge {
  uuid: string;
  text: string;
  _source: ConnectableEntity;
  _target: ConnectableEntity;
  color: Color;
  alpha;
  tension;
  controlPoints: Vector[];
  getControlPoints(): Vector[];
  addControlPoint();
  _collisionBox: CollisionBox;
  get collisionBox(): CollisionBox;
  fromTwoEntity(project: Project, source: ConnectableEntity, target: ConnectableEntity): CubicCatmullRomSplineEdge;
  constructor(
    project: Project,
    {
      uuid,
      source,
      target,
      text,
      alpha,
      tension,
      color,
      controlPoints,
      sourceRectRate,
      targetRectRate,
    }: Serialized.CubicCatmullRomSplineEdge,
    unknown = false,
  );
  getShape(): CubicCatmullRomSpline;
  get textRectangle(): Rectangle;
  autoUpdateControlPoints();
  getArrowHead(): { location: Vector; direction: Vector };
  adjustSizeByText(): void;
}

declare enum CursorNameEnum {
  Default = "cursor-default",
  Pointer = "cursor-pointer",
  Crosshair = "cursor-crosshair",
  Move = "cursor-move",
  Grab = "cursor-grab",
  Grabbing = "cursor-grabbing",
  Text = "cursor-text",
  NotAllowed = "cursor-not-allowed",
  EResize = "cursor-e-resize",
  NResize = "cursor-n-resize",
  NeResize = "cursor-ne-resize",
  NwResize = "cursor-nw-resize",
  SResize = "cursor-s-resize",
  SeResize = "cursor-se-resize",
  SwResize = "cursor-sw-resize",
  WResize = "cursor-w-resize",
  NsResize = "cursor-ns-resize",
  NeswResize = "cursor-nesw-resize",
  NwseResize = "cursor-nwse-resize",
  ColResize = "cursor-col-resize",
  RowResize = "cursor-row-resize",
  AllScroll = "cursor-all-scroll",
  ZoomIn = "cursor-zoom-in",
  ZoomOut = "cursor-zoom-out",
  GrabHand = "cursor-grab-hand",
  NotAllowedHand = "cursor-not-allowed-hand",
  Pen = "cursor-pen",
  Eraser = "cursor-eraser",
  Handwriting = "cursor-handwriting",
  ZoomInHand = "cursor-zoom-in-hand",
  ZoomOutHand = "cursor-zoom-out-hand",
}

declare class CurveRenderer {
  constructor(project: Project);
  renderSolidLine(start: Vector, end: Vector, color: Color, width: number): void;
  renderSolidLineMultiple(locations: Vector[], color: Color, width: number): void;
  renderPenStroke(stroke: PenStrokeSegment[], color: Color): void;
  renderSolidLineMultipleSmoothly(locations: Vector[], color: Color, width: number): void;
  smoothPoints(points: Vector[], tension = 0.5);
  renderSolidLineMultipleWithWidth(locations: Vector[], color: Color, widthList: number[]): void;
  renderSolidLineMultipleWithShadow(
    locations: Vector[],
    color: Color,
    width: number,
    shadowColor: Color,
    shadowBlur: number,
  ): void;
  renderDashedLine(start: Vector, end: Vector, color: Color, width: number, dashLength: number): void;
  renderDoubleLine(start: Vector, end: Vector, color: Color, width: number, gap: number): void;
  renderBezierCurve(curve: CubicBezierCurve, color: Color, width: number): void;
  renderDashedBezierCurve(curve: CubicBezierCurve, color: Color, width: number, dashLength: number): void;
  renderDoubleBezierCurve(curve: CubicBezierCurve, color: Color, width: number, gap: number): void;
  renderSymmetryCurve(curve: SymmetryCurve, color: Color, width: number): void;
  renderGradientLine(start: Vector, end: Vector, startColor: Color, endColor: Color, width: number): void;
  renderGradientBezierCurve(curve: CubicBezierCurve, startColor: Color, endColor: Color, width: number): void;
}

declare class DeleteManager {
  deleteHandlers;
  registerHandler<T extends StageObject>(constructor: Constructor<T>, handler: DeleteHandler<T>);
  constructor(project: Project);
  deleteEntities(deleteNodes: Entity[]);
  findDeleteHandler(object: StageObject);
  deleteSvgNode(entity: SvgNode);
  deleteLatexNode(entity: LatexNode);
  deleteReferenceBlockNode(entity: ReferenceBlockNode);
  deleteExtensionEntity(entity: ExtensionEntity);
  deletePenStroke(penStroke: PenStroke);
  deleteSection(entity: Section);
  deleteImageNode(entity: ImageNode);
  deleteUrlNode(entity: UrlNode);
  deleteConnectPoint(entity: ConnectPoint);
  deleteTextNode(entity: TextNode);
  deleteEntityAfterClearAssociation(entity: ConnectableEntity);
  deleteEdge(deleteEdge: Edge): boolean;
  deleteMultiTargetUndirectedEdge(edge: MultiTargetUndirectedEdge);
}

declare function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>);
declare namespace Dialog {
  function confirm(title = "你确定？", description = "", { destructive = false } = {}): Promise<boolean>;
  function input(
    title = "请输入文本",
    description = "",
    { defaultValue = "", placeholder = "...", destructive = false, multiline = false } = {},
  ): Promise<string | undefined>;
  function buttons<
    Buttons extends readonly {
      id: string;
      label: string;
      variant?: Parameters<typeof Button>[number]["variant"];
    }[],
  >(title: string, description: string, buttons: Buttons): Promise<Buttons[number]["id"]>;
  function copy(title = "导出成功", description = "", value = ""): Promise<void>;
}

declare enum Direction {
  Up,
  Down,
  Left,
  Right,
}

declare class DrawingControllerRenderer {
  constructor(project: Project);
  renderTempDrawing();
  renderTrace(currentStrokeColor: Color);
  renderMouse(currentStrokeColor: Color);
  renderAdjusting(currentStrokeColor: Color);
  renderAxisMouse();
  diffAngle;
  rotateUpAngle();
  rotateDownAngle();
  renderAngleMouse(mouseLocation: Vector);
  renderLine(lineStart: Vector, lineEnd: Vector);
}

declare class Edge extends ConnectableAssociation {
  uuid: string;
  text: string;
  collisionBox: CollisionBox;
  get isHiddenBySectionCollapse(): boolean;
  _isSelected: boolean;
  get isSelected(): boolean;
  set isSelected(value: boolean);
  get textRectangle(): Rectangle;
  get bodyLine(): Line;
  get sourceLocation(): Vector;
  get targetLocation(): Vector;
  targetRectangleRate: Vector;
  sourceRectangleRate: Vector;
  getCenterLine(source: ConnectableEntity, target: ConnectableEntity): Line;
  getNormalVectorByRate(rate: Vector): Vector | null;
  getExactEdgePositionByRate(rect: Rectangle, rate: Vector): Vector | null;
  adjustSizeByText(): void;
  rename(text: string);
  isIntersectsWithRectangle(rectangle: Rectangle): boolean;
  isIntersectsWithLocation(location: Vector): boolean;
  isIntersectsWithLine(line: Line): boolean;
  isLeftToRight(): boolean;
  isRightToLeft(): boolean;
  isTopToBottom(): boolean;
  isBottomToTop(): boolean;
  isUnknownDirection(): boolean;
}

declare class EdgeRenderer {
  currentRenderer: EdgeRendererClass;
  constructor(project: Project);
  checkRendererBySettings(lineStyle: Settings["lineStyle"]);
  updateRenderer(style: Settings["lineStyle"]);
  renderLineEdge(edge: LineEdge);
  renderCrEdge(edge: CubicCatmullRomSplineEdge);
  getMinNonCollapseParentSection(innerEntity: ConnectableEntity): Section;
  getEdgeView(edge: LineEdge): LineEdge;
  getEdgeSvg(edge: LineEdge): React.ReactNode;
  renderVirtualEdge(startNode: ConnectableEntity, mouseLocation: Vector, sourceRectangleRate?: Vector);
  renderVirtualConfirmedEdge(
    startNode: ConnectableEntity,
    endNode: ConnectableEntity,
    sourceRectangleRate?: Vector,
    targetRectangleRate?: Vector,
  );
  getCuttingEffects(edge: Edge);
  getConnectedEffects(
    startNode: ConnectableEntity,
    toNode: ConnectableEntity,
    sourceRectangleRate?: Vector,
    targetRectangleRate?: Vector,
  );
  renderArrowHead(endPoint: Vector, direction: Vector, size: number, color: Color);
  generateArrowHeadSvg(endPoint: Vector, direction: Vector, size: number, edgeColor: Color): React.ReactNode;
}

declare class EdgeRendererClass {
  constructor();
  isCycleState(edge: LineEdge): boolean;
  isNormalState(edge: LineEdge): boolean;
  renderNormalState(edge: LineEdge): void;
  renderShiftingState(edge: LineEdge): void;
  renderCycleState(edge: LineEdge): void;
  getNormalStageSvg(edge: LineEdge): React.ReactNode;
  getShiftingStageSvg(edge: LineEdge): React.ReactNode;
  getCycleStageSvg(edge: LineEdge): React.ReactNode;
  renderVirtualEdge(startNode: ConnectableEntity, mouseLocation: Vector, sourceRectangleRate?: Vector): void;
  renderVirtualConfirmedEdge(
    startNode: ConnectableEntity,
    endNode: ConnectableEntity,
    sourceRectangleRate?: Vector,
    targetRectangleRate?: Vector,
  ): void;
  getCuttingEffects(edge: Edge): Effect[];
  getConnectedEffects(
    startNode: ConnectableEntity,
    toNode: ConnectableEntity,
    sourceRectangleRate?: Vector,
    targetRectangleRate?: Vector,
  ): Effect[];
}

declare class Effect {
  constructor(timeProgress: ProgressNumber, delay: number = 0);
  subEffects: Effect[];
  tick(project: Project): void;
  render(project: Project): void;
}

declare class Effects {
  constructor(project: Project);
  effects: Effect[];
  addEffect(effect: Effect);
  get effectsCount(): any;
  addEffects(effects: Effect[]);
  tick();
}

declare class Entity extends StageObject {
  move(delta: Vector): void;
  isAlignExcluded;
  moveTo(location: Vector): void;
  details: Value;
  isMouseHover: boolean;
  detailsButtonRectangle(): Rectangle;
  isMouseInDetailsButton(mouseWorldLocation: Vector): boolean;
  referenceButtonCircle(): Circle;
  isMouseInReferenceButton(mouseWorldLocation: Vector): boolean;
  updateFatherSectionByMove();
  updateOtherEntityLocationByMove();
  collideWithOtherEntity(other: Entity);
  isHiddenBySectionCollapse: boolean;
  detailsManager;
}

declare class EntityDetailsButtonRenderer {
  constructor(project: Project);
  render(entity: Entity);
}

declare class EntityMoveManager {
  constructor(project: Project);
  moveAccelerateCommander: Vector;
  moveSpeed: Vector;
  frictionExponent;
  tick();
  continuousMoveKeyPress(direction: Vector);
  continuousMoveKeyRelease(direction: Vector);
  stopImmediately();
  canMoveEntity(entity: Entity): boolean;
  moveEntityUtils(entity: Entity, delta: Vector, isAutoAdjustSection: boolean = true);
  jumpMoveEntityUtils(entity: Entity, delta: Vector);
  moveEntityToUtils(entity: Entity, location: Vector);
  moveSelectedEntities(delta: Vector, isAutoAdjustSection: boolean = true);
  jumpMoveSelectedConnectableEntities(delta: Vector);
  moveEntitiesWithChildren(delta: Vector, skipDashed = true);
  moveWithChildren(node: ConnectableEntity, delta: Vector, skipDashed = false);
}

declare class EntityRenderer {
  sectionSortedZIndex: Section[];
  extensionEntityRenderer: ExtensionEntityRenderer;
  constructor(project: Project);
  sortSectionsByZIndex();
  tickNumber;
  renderAllSectionsBackground(viewRectangle: Rectangle);
  renderAllSectionsBigTitle(viewRectangle: Rectangle);
  shouldSkipEntity(entity: Entity, viewRectangle: Rectangle): boolean;
  isBackgroundImageNode(entity: Entity): boolean;
  renderAllEntities(viewRectangle: Rectangle);
  renderEntity(entity: Entity);
  renderEntityDebug(entity: Entity);
  renderConnectPoint(connectPoint: ConnectPoint);
  renderImageNode(imageNode: ImageNode);
  renderPenStroke(penStroke: PenStroke);
  renderEntityDetails(entity: Entity);
  _renderEntityDetails(entity: Entity, limitLiens: number);
  renderEntityTagShap(entity: Entity);
}

declare class ExtensionEntity extends ConnectableEntity {
  get geometryCenter(): Vector;
  uuid: string;
  extensionId;
  typeName;
  customData: any;
  collisionBox: CollisionBox;
  isHiddenBySectionCollapse;
  _bitmapCache: ImageBitmap | null;
  _isDirty;
  _isRendering;
  _renderFailed;
  constructor(
    project: Project,
    {
      uuid = crypto.randomUUID(),
      extensionId = "",
      typeName = "",
      customData = {},
      collisionBox = new CollisionBox([new Rectangle(Vector.getZero(), new Vector(100, 80))]),
    }: {
      uuid?: string;
      extensionId?: string;
      typeName?: string;
      customData?: any;
      collisionBox?: CollisionBox;
    } = {},
  );
  get rectangle(): Rectangle;
  get location(): Vector;
  set location(v: Vector);
  move(delta: Vector): void;
  moveTo(location: Vector): void;
  markDirty();
  setCustomData(data: any);
}

declare interface ExtensionEntityConfig {
  initialData: any;
  collisionBox: CollisionBox;
}

declare class ExtensionEntityRenderer {
  constructor(project: Project);
  render(entity: ExtensionEntity);
  drawPendingBox(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number);
  drawErrorBox(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    text: string,
    extensionId: string,
    color: string,
  );
  drawCollisionBox(ctx: CanvasRenderingContext2D, entity: ExtensionEntity, scale: number);
  renderSelectionOutline(ctx: CanvasRenderingContext2D, entity: ExtensionEntity, scale: number);
  triggerWorkerRender(entity: ExtensionEntity);
}

declare interface FileSystemProvider {
  read(uri: URI): Promise<Uint8Array>;
  readDir(uri: URI): Promise<DirEntry[]>;
  write(uri: URI, content: Uint8Array): Promise<void>;
  remove(uri: URI): Promise<void>;
  exists(uri: URI): Promise<boolean>;
  mkdir(uri: URI): Promise<void>;
  rename(oldUri: URI, newUri: URI): Promise<void>;
}

declare class GenerateFromFolder {
  constructor(project: Project);
  generateFromFolder(folderPath: string): Promise<void>;
  generateTreeFromFolder(folderPath: string): Promise<void>;
  getColorByPath(path: string): Color;
  fileExtColorMap: Record<string, string>;
}

declare class GraphImporter extends BaseImporter {
  constructor(project: Project);
  import(text: string, diffLocation: Vector = Vector.getZero()): void;
}

declare class GraphMethods {
  constructor(project: Project);
  isTree(node: ConnectableEntity, skipDashed = false): boolean;
  getNodeDisplayName(node: ConnectableEntity): string;
  validateTreeStructure(rootNode: ConnectableEntity, skipDashed = false): TreeValidationResult;
  nodeChildrenArray(node: ConnectableEntity, skipDashed = false): ConnectableEntity[];
  nodeParentArray(node: ConnectableEntity, skipDashed = false): ConnectableEntity[];
  edgeChildrenArray(node: ConnectableEntity): Edge[];
  edgeParentArray(node: ConnectableEntity): Edge[];
  getReversedEdgeDict(skipDashed = false): Record<string, string>;
  isCurrentNodeInTreeStructAndNotRoot(node: ConnectableEntity): boolean;
  getRoots(node: ConnectableEntity, skipDashed = false): ConnectableEntity[];
  isConnected(node: ConnectableEntity, target: ConnectableEntity): boolean;
  getSuccessorSet(node: ConnectableEntity, isHaveSelf: boolean = true, skipDashed = false): ConnectableEntity[];
  getOneStepSuccessorSet(node: ConnectableEntity): ConnectableEntity[];
  getEdgesBetween(node1: ConnectableEntity, node2: ConnectableEntity): Edge[];
  getEdgeFromTwoEntity(fromNode: ConnectableEntity, toNode: ConnectableEntity): Edge | null;
  getHyperEdgesByNode(node: ConnectableEntity): MultiTargetUndirectedEdge[];
  getOutgoingEdges(node: ConnectableEntity): Edge[];
  getIncomingEdges(node: ConnectableEntity): Edge[];
  getNodesConnectedByHyperEdges(node: ConnectableEntity): ConnectableEntity[];
  nodeChildrenArrayWithinSet(node: ConnectableEntity, nodeSet: Set<string>): ConnectableEntity[];
  nodeParentArrayWithinSet(node: ConnectableEntity, nodeSet: Set<string>): ConnectableEntity[];
  getTreeRootByNodes(nodes: ConnectableEntity[]): ConnectableEntity | null;
  isTreeByNodes(nodes: ConnectableEntity[]): boolean;
  isDAGByNodes(nodes: ConnectableEntity[]): boolean;
}

declare class HistoryManager extends HistoryManagerAbs {
  memoryEfficient: HistoryManagerAbs;
  timeEfficient: HistoryManagerAbs;
  currentManager: HistoryManagerAbs;
  constructor(project: Project);
  recordStep(): void;
  undo(): void;
  redo(): void;
  get(index: number): Record<string, any>[];
  clearHistory(): void;
  switchMode(useTimeEfficient: boolean): void;
}

declare class ImageNode extends ConnectableEntity implements ResizeAble {
  isHiddenBySectionCollapse: boolean;
  uuid: string;
  collisionBox: CollisionBox;
  attachmentId: string;
  scale: number;
  isBackground: boolean;
  _isSelected: boolean;
  get isSelected(): any;
  set isSelected(value: boolean);
  bitmap: ImageBitmap | undefined;
  state: "loading" | "success" | "notFound";
  constructor(
    project: Project,
    {
      uuid = crypto.randomUUID() as string,
      collisionBox = new CollisionBox([new Rectangle(Vector.getZero(), Vector.getZero())]),
      details = [],
      attachmentId = "",
      scale = 1,
      isBackground = false,
    },
    unknown = false,
  );
  scaleUpdate(scaleDiff: number);
  get rectangle(): Rectangle;
  get geometryCenter(): any;
  move(delta: Vector): void;
  moveTo(location: Vector): void;
  reverseColors();
  swapRedBlueChannels();
  resizeHandle(delta: Vector);
  getResizeHandleRect(): Rectangle;
}

declare class ImageRenderer {
  constructor(project: Project);
  renderImageElement(
    source: Exclude<CanvasImageSource, VideoFrame | SVGElement>,
    location: Vector,
    scale: number = 1 / (window.devicePixelRatio || 1),
  );
  renderImageBitmap(
    bitmap: ImageBitmap | undefined,
    location: Vector,
    scale: number = 1 / (window.devicePixelRatio || 1),
  );
}

declare class InputElement {
  input(
    location: Vector,
    defaultValue: string,
    onChange: (value: string) => void = () => {},
    style: Partial<CSSStyleDeclaration> = {},
  ): Promise<string>;
  textarea(
    defaultValue: string,
    onChange: (value: string, element: HTMLTextAreaElement) => void = () => {},
    style: Partial<CSSStyleDeclaration> = {},
    selectAllWhenCreated = true,
  ): Promise<string>;
  addSuccessEffect();
  addFailEffect(withToast = true);
  constructor(project: Project);
}

declare class KeyBindHintEngine {
  constructor(project: Project);
  ITEMS_PER_PAGE;
  currentPage;
  currentModifierCombo: string;
  lastModifierCombo: string;
  isShowingHint;
  hasOtherKeyPressed;
  hasModifierReleased;
  cachedKeyBinds: Array<{
    id: string;
    key: string;
    displayKey: string;
    title: string;
  }>;
  getCurrentModifierCombo(): string;
  isOnlyModifiersPressed(): boolean;
  convertModifierComboForMatching(combo: string): string;
  isKeyBindMatchModifier(key: string, modifierCombo: string): boolean;
  getMatchingKeyBinds(modifierCombo: string): Array<{
    id: string;
    key: string;
    displayKey: string;
    title: string;
  }>;
  getKeyBindTitle(id: string): string;
  update();
  render();
}

declare type KeyBindIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

declare type KeyBindWhen = (project?: Project) => boolean | Promise<boolean>;

declare class KeyboardOnlyEngine {
  constructor(project: Project);
  openning;
  setOpenning(value: boolean);
  isOpenning();
  dispose();
  startEditNode;
  onKeyUp;
  onKeyDown;
  addSuccessEffect();
  addFailEffect();
}

declare class KeyboardOnlyGraphEngine {
  targetLocationController;
  virtualTargetLocation(): Vector;
  tick();
  constructor(project: Project);
  isEnableVirtualCreate(): boolean;
  _isCreating;
  _creatingFromUUID: string | null;
  creatingFromUUID(): string | null;
  isCreating(): boolean;
  createStart(): void;
  lastPressTabTime;
  getPressTabTimeInterval(): number;
  createFinished();
  moveVirtualTarget(delta: Vector): void;
  createCancel(): void;
  isTargetLocationHaveEntity(): boolean;
}

declare class KeyboardOnlyTreeEngine {
  constructor(project: Project);
  getNodePreDirection(node: ConnectableEntity): "right" | "left" | "down" | "up";
  preDirectionCacheMap: Map<string, "right" | "left" | "down" | "up">;
  getGrowthLineStart(node: ConnectableEntity, direction: "right" | "left" | "down" | "up"): Vector;
  getGrowthLineEnd(node: ConnectableEntity, direction: "right" | "left" | "down" | "up"): Vector;
  findConnectTargetByGrowthLine(
    node: ConnectableEntity,
    direction: "right" | "left" | "down" | "up",
  ): ConnectableEntity | null;
  changePreDirection(nodes: ConnectableEntity[], direction: "right" | "left" | "down" | "up"): void;
  addNodeEffectByPreDirection(node: ConnectableEntity): void;
  onDeepGenerateNode(defaultText = "新节点", selectAll = true);
  onBroadGenerateNode();
  adjustTreeNode(entity: ConnectableEntity, withEffect = true);
  onDeleteCurrentNode();
  calculateNewNodeFontScaleLevel(parentNode: ConnectableEntity, preDirection: "right" | "left" | "down" | "up"): number;
}

declare class LatexNode extends ConnectableEntity {
  uuid: string;
  latexSource: string;
  collisionBox: CollisionBox;
  color: Color;
  fontScaleLevel: number;
  isHiddenBySectionCollapse: boolean;
  image: HTMLImageElement;
  svgOriginalSize: Vector;
  state: "loading" | "success" | "error";
  currentRenderedColorCss: string;
  _isSelected: boolean;
  get isSelected(): any;
  set isSelected(value: boolean);
  get rectangle(): Rectangle;
  get geometryCenter(): Vector;
  constructor(
    project: Project,
    {
      uuid = crypto.randomUUID(),
      details = [],
      latexSource = "",
      collisionBox = new CollisionBox([new Rectangle(Vector.getZero(), Vector.getZero())]),
      color = Color.Transparent.clone(),
      fontScaleLevel = 0,
    }: {
      uuid?: string;
      details?: any;
      latexSource?: string;
      collisionBox?: CollisionBox;
      color?: Color;
      fontScaleLevel?: number;
    },
  );
  getScale(): number;
  increaseFontSize(anchorRate?: Vector): void;
  decreaseFontSize(anchorRate?: Vector): void;
  updateCollisionBoxByScale(anchorRate?: Vector): void;
  _adjustLocationToKeepAnchor(oldRect: Rectangle, anchorRate: Vector): void;
  updateLatex(newLatex: string, colorCss?: string): Promise<void>;
  reRenderWithColor(colorCss: string): Promise<void>;
  renderLatexToImage(latex: string, colorCss: string = "#000000"): Promise<void>;
  move(delta: Vector): void;
  moveTo(location: Vector): void;
}

declare class LatexNodeRenderer {
  constructor(project: Project);
  getTargetColorCss(node: LatexNode): string;
  render(node: LatexNode);
}

declare class LayoutManager {
  constructor(project: Project);
  alignLeft();
  alignRight();
  alignTop();
  alignBottom();
  alignCenterHorizontal();
  alignCenterVertical();
  alignHorizontalSpaceBetween();
  alignVerticalSpaceBetween();
  alignLeftToRightNoSpace();
  alignTopToBottomNoSpace();
  layoutBySelected(layoutFunction: (entities: Entity[]) => void, isDeep: boolean);
  adjustSelectedTextNodeWidth(mode: "maxWidth" | "minWidth" | "average");
  layoutToSquare(entities: Entity[]);
  layoutToTightSquare(entities: Entity[]);
}

declare class LineEdge extends Edge {
  uuid: string;
  text: string;
  color: Color;
  lineType: string;
  get collisionBox(): CollisionBox;
  get shiftingIndex(): number;
  set shiftingIndex(value: number);
  _shiftingIndex: number;
  constructor(
    project: Project,
    {
      associationList = [] as ConnectableEntity[],
      text = "",
      uuid = crypto.randomUUID() as string,
      color = Color.Transparent,
      sourceRectangleRate = Vector.same(0.5),
      targetRectangleRate = Vector.same(0.5),
      lineType = "solid",
    },
    unknown = false,
  );
  fromTwoEntity(project: Project, source: ConnectableEntity, target: ConnectableEntity): LineEdge;
  rename(text: string);
  get edgeWidth(): number;
  get textFontSize(): number;
  get textRectangle(): Rectangle;
  get shiftingMidPoint(): Vector;
  adjustSizeByText(): void;
}

declare enum LogicNodeNameEnum {
  AND = "#AND#",
  OR = "#OR#",
  NOT = "#NOT#",
  XOR = "#XOR#",
  TEST = "#TEST#",
  ADD = "#ADD#",
  SUBTRACT = "#SUB#",
  MULTIPLY = "#MUL#",
  DIVIDE = "#DIV#",
  MODULO = "#MOD#",
  FLOOR = "#FLOOR#",
  CEIL = "#CEIL#",
  ROUND = "#ROUND#",
  SQRT = "#SQRT#",
  POWER = "#POW#",
  LOG = "#LOG#",
  ABS = "#ABS#",
  RANDOM = "#RANDOM#",
  RANDOM_INT = "#RANDOM_INT#",
  RANDOM_FLOAT = "#RANDOM_FLOAT#",
  RANDOM_ITEM = "#RANDOM_ITEM#",
  RANDOM_ITEMS = "#RANDOM_ITEMS#",
  RANDOM_POISSON = "#RANDOM_POISSON#",
  SIN = "#SIN#",
  COS = "#COS#",
  TAN = "#TAN#",
  ASIN = "#ASIN#",
  ACOS = "#ACOS#",
  ATAN = "#ATAN#",
  LN = "#LN#",
  EXP = "#EXP#",
  MAX = "#MAX#",
  MIN = "#MIN#",
  LT = "#LT#",
  GT = "#GT#",
  LTE = "#LTE#",
  GTE = "#GTE#",
  EQ = "#EQ#",
  NEQ = "#NEQ#",
  UPPER = "#UPPER#",
  LOWER = "#LOWER#",
  LEN = "#LEN#",
  COPY = "#COPY#",
  SPLIT = "#SPLIT#",
  REPLACE = "#REPLACE#",
  CONNECT = "#CONNECT#",
  CHECK_REGEX_MATCH = "#CHECK_REGEX_MATCH#",
  COUNT = "#COUNT#",
  AVE = "#AVE#",
  MEDIAN = "#MEDIAN#",
  MODE = "#MODE#",
  VARIANCE = "#VARIANCE#",
  STANDARD_DEVIATION = "#STANDARD_DEVIATION#",
  SET_VAR = "#SET_VAR#",
  GET_VAR = "#GET_VAR#",
  RGB = "#RGB#",
  RGBA = "#RGBA#",
  GET_LOCATION = "#GET_LOCATION#",
  SET_LOCATION = "#SET_LOCATION#",
  SET_LOCATION_BY_UUID = "#SET_LOCATION_BY_UUID#",
  GET_LOCATION_BY_UUID = "#GET_LOCATION_BY_UUID#",
  GET_SIZE = "#GET_SIZE#",
  GET_MOUSE_LOCATION = "#GET_MOUSE_LOCATION#",
  GET_MOUSE_WORLD_LOCATION = "#GET_MOUSE_WORLD_LOCATION#",
  GET_CAMERA_LOCATION = "#GET_CAMERA_LOCATION#",
  SET_CAMERA_LOCATION = "#SET_CAMERA_LOCATION#",
  GET_CAMERA_SCALE = "#GET_CAMERA_SCALE#",
  SET_CAMERA_SCALE = "#SET_CAMERA_SCALE#",
  IS_COLLISION = "#IS_COLLISION#",
  GET_TIME = "#GET_TIME#",
  GET_DATE_TIME = "#GET_DATE_TIME#",
  ADD_DATE_TIME = "#ADD_DATE_TIME#",
  PLAY_SOUND = "#PLAY_SOUND#",
  GET_NODE_UUID = "#GET_NODE_UUID#",
  GET_NODE_RGBA = "#GET_NODE_RGBA#",
  COLLECT_NODE_DETAILS_BY_RGBA = "#COLLECT_NODE_DETAILS_BY_RGBA#",
  COLLECT_NODE_NAME_BY_RGBA = "#COLLECT_NODE_NAME_BY_RGBA#",
  FPS = "#FPS#",
  CREATE_TEXT_NODE_ON_LOCATION = "#CREATE_TEXT_NODE_ON_LOCATION#",
  IS_HAVE_ENTITY_ON_LOCATION = "#IS_HAVE_ENTITY_ON_LOCATION#",
  REPLACE_GLOBAL_CONTENT = "#REPLACE_GLOBAL_CONTENT#",
  SEARCH_CONTENT = "#SEARCH_CONTENT#",
  DELETE_PEN_STROKE_BY_COLOR = "#DELETE_PEN_STROKE_BY_COLOR#",
  DELAY_COPY = "#DELAY_COPY#",
}

declare class MarkdownExporter extends BaseExporter {
  export(textNode: TextNode): string;
  getNodeMarkdown(node: TextNode, level: number): string;
}

declare class MarkdownImporter extends BaseImporter {
  constructor(project: Project);
  import(markdownText: string, diffLocation: Vector = Vector.getZero(), autoLayout = true): void;
}

declare interface MarkdownNode {
  title: string;
  content: string;
  children: MarkdownNode[];
}

declare class MermaidExporter {
  constructor(project: Project);
  export(entities: Entity[]): string;
}

declare class MermaidImporter extends BaseImporter {
  constructor(project: Project);
  import(text: string, diffLocation: Vector = Vector.getZero()): void;
  normalizeLine(line: string): string;
  decodeMermaidText(value: string): string;
  sanitizeLabel(raw: string | undefined): string | undefined;
  parseNodeToken(token: string): MermaidNodeToken;
}

declare class MouseInteraction {
  constructor(project: Project);
  _hoverEdges: Edge[];
  _hoverSections: Section[];
  _hoverConnectPoints: ConnectPoint[];
  _hoverMultiTargetEdges: MultiTargetUndirectedEdge[];
  get hoverEdges(): Edge[];
  get firstHoverEdge(): Edge | undefined;
  get hoverSections(): Section[];
  get hoverConnectPoints(): ConnectPoint[];
  get firstHoverSection(): Section | undefined;
  get hoverMultiTargetEdges(): MultiTargetUndirectedEdge[];
  get firstHoverMultiTargetEdge(): MultiTargetUndirectedEdge | undefined;
  updateByMouseMove(mouseWorldLocation: Vector): void;
}

declare class MultiTargetEdgeMove {
  constructor(project: Project);
  moveMultiTargetEdge(diffLocation: Vector);
}

declare class MultiTargetUndirectedEdge extends ConnectableAssociation {
  uuid: string;
  get collisionBox(): CollisionBox;
  text: string;
  color: Color;
  rectRates: Vector[];
  centerRate: Vector;
  arrow: UndirectedEdgeArrowType;
  renderType: MultiTargetUndirectedEdgeRenderType;
  padding: number;
  rename(text: string);
  constructor(
    project: Project,
    {
      associationList = [] as ConnectableEntity[],
      text = "",
      uuid = crypto.randomUUID() as string,
      color = Color.Transparent,
      rectRates = associationList.map(() => Vector.same(0.5)),
      arrow = "none" as UndirectedEdgeArrowType,
      centerRate = Vector.same(0.5),
      padding = 10,
      renderType = "line" as MultiTargetUndirectedEdgeRenderType,
    }: {
      associationList?: ConnectableEntity[];
      text?: string;
      uuid?: string;
      color?: Color;
      rectRates?: Vector[];
      arrow?: UndirectedEdgeArrowType;
      centerRate?: Vector;
      padding?: number;
      renderType?: MultiTargetUndirectedEdgeRenderType;
    },
    unknown = false,
  );
  get centerLocation(): Vector;
  get textRectangle(): Rectangle;
  createFromSomeEntity(project: Project, entities: ConnectableEntity[]);
  _isSelected: boolean;
  get isSelected(): boolean;
  set isSelected(value: boolean);
}

declare class MultiTargetUndirectedEdgeRenderer {
  constructor(project: Project);
  render(edge: MultiTargetUndirectedEdge);
  renderLineShape(edge: MultiTargetUndirectedEdge, edgeColor: Color, centerLocation: Vector): void;
  renderConvexShape(edge: MultiTargetUndirectedEdge, edgeColor: Color): void;
  renderCircle(edge: MultiTargetUndirectedEdge, edgeColor: Color): void;
}

declare class NodeAdder {
  constructor(project: Project);
  addTextNodeByClick(
    clickWorldLocation: Vector,
    addToSections: Section[],
    selectCurrent = false,
    shouldRecordHistory = true,
    options?: {
      overrideFontScaleLevel?: number;
    },
  ): Promise<string>;
  addTextNodeFromCurrentSelectedNode(
    direction: Direction,
    addToSections: Section[],
    selectCurrent = false,
  ): Promise<string>;
  getAutoName(): Promise<string>;
  getAutoColor(): Color;
  addConnectPoint(clickWorldLocation: Vector, addToSections: Section[]): string;
  addNodeGraphByText(text: string, diffLocation: Vector = Vector.getZero()): void;
  addNodeTreeByText(text: string, indention: number, diffLocation: Vector = Vector.getZero()): void;
  addNodeMermaidByText(text: string, diffLocation: Vector = Vector.getZero()): void;
  addNodeByMarkdown(markdownText: string, diffLocation: Vector = Vector.getZero(), autoLayout = true);
  getIndentLevel(line: string, indention: number): number;
}

declare class NodeConnector {
  constructor(project: Project);
  isConnectable(fromNode: ConnectableEntity, toNode: ConnectableEntity): boolean;
  connectConnectableEntity(
    fromNode: ConnectableEntity,
    toNode: ConnectableEntity,
    text: string = "",
    targetRectRate?: [number, number],
    sourceRectRate?: [number, number],
  ): void;
  connectEntityFast(fromNode: ConnectableEntity, toNode: ConnectableEntity, text: string = ""): void;
  addCrEdge(fromNode: ConnectableEntity, toNode: ConnectableEntity): void;
  reverseEdges(edges: LineEdge[]);
  changeEdgeTarget(edge: LineEdge, newTarget: ConnectableEntity);
  changeEdgeSource(edge: LineEdge, newSource: ConnectableEntity);
  changeSelectedEdgeTarget(newTarget: ConnectableEntity);
  changeSelectedEdgeSource(newSource: ConnectableEntity);
}

declare class PenStroke extends Entity {
  isAlignExcluded: boolean;
  isHiddenBySectionCollapse: boolean;
  collisionBox: CollisionBox;
  uuid: string;
  move(delta: Vector): void;
  moveTo(location: Vector): void;
  updateCollisionBoxBySegmentList();
  segments: PenStrokeSegment[];
  color: Color;
  getPath(): Vector[];
  constructor(
    project: Project,
    { uuid = crypto.randomUUID() as string, segments = [] as PenStrokeSegment[], color = Color.White },
  );
  getCollisionBoxFromSegmentList(segmentList: PenStrokeSegment[]): CollisionBox;
}

declare class PenStrokeSegment {
  location: Vector;
  pressure: number;
  constructor(location: Vector, pressure: number);
}

declare class PlainTextExporter {
  constructor(project: Project);
  export(nodes: Entity[]): string;
}

declare interface PrgMetadata {
  version: string;
  extension?: ExtensionMetadata;
}

declare class Project extends Tab {
  latestVersion;
  _uri: URI;
  _projectState: ProjectState;
  _isSaving;
  stage: StageObject[];
  tags: string[];
  attachments;
  encoder;
  decoder;
  constructor(uri: URI);
  newDraft(): Project;
  compareVersion(version1: string, version2: string): number;
  checkAndConfirmUpgrade(currentVersion: string, latestVersion: string): Promise<boolean>;
  parseProjectFile(): Promise<{
    serializedStageObjects: any[];
    tags: string[];
    references: { sections: Record<string, string[]>; files: string[] };
    metadata: PrgMetadata;
    readme?: string;
  }>;
  init();
  get isDraft(): any;
  get title(): string;
  get icon(): any;
  get uri(): any;
  set uri(uri: URI);
  stash();
  save();
  references: { sections: Record<string, string[]>; files: string[] };
  metadata: PrgMetadata;
  readme?: string;
  getFileContent();
  get stageHash(): any;
  addAttachment(data: Blob);
  set projectState(state: ProjectState);
  get projectState(): ProjectState;
  set isSaving(isSaving: boolean);
  get isSaving(): boolean;
  containerRef;
  loadService(service: { id?: string; new (...args: any[]): any });
  componentDidMount(): void;
  currentComponent: React.ComponentType | null;
  getComponent(): React.ComponentType;
  render(): React.ReactNode;
  canvas: Canvas;
  inputElement: InputElement;
  controllerUtils: ControllerUtils;
  autoComputeUtils: AutoComputeUtils;
  renderUtils: RenderUtils;
  worldRenderUtils: WorldRenderUtils;
  historyManager: HistoryManager;
  stageManager: StageManager;
  camera: Camera;
  effects: Effects;
  autoCompute: AutoCompute;
  rectangleSelect: RectangleSelect;
  stageNodeRotate: StageNodeRotate;
  complexityDetector: ComplexityDetector;
  aiEngine: AIEngine;
  copyEngine: CopyEngine;
  autoLayout: AutoLayout;
  autoLayoutFastTree: AutoLayoutFastTree;
  layoutManager: LayoutManager;
  autoAlign: AutoAlign;
  mouseInteraction: MouseInteraction;
  contentSearch: ContentSearch;
  deleteManager: DeleteManager;
  nodeAdder: NodeAdder;
  entityMoveManager: EntityMoveManager;
  stageUtils: StageUtils;
  multiTargetEdgeMove: MultiTargetEdgeMove;
  nodeConnector: NodeConnector;
  stageObjectColorManager: StageObjectColorManager;
  stageObjectSelectCounter: StageObjectSelectCounter;
  sectionInOutManager: SectionInOutManager;
  sectionPackManager: SectionPackManager;
  sectionCollisionSolver: SectionCollisionSolver;
  tagManager: TagManager;
  syncAssociationManager: StageSyncAssociationManager;
  keyboardOnlyEngine: KeyboardOnlyEngine;
  keyboardOnlyGraphEngine: KeyboardOnlyGraphEngine;
  keyboardOnlyTreeEngine: KeyboardOnlyTreeEngine;
  selectChangeEngine: SelectChangeEngine;
  textRenderer: TextRenderer;
  imageRenderer: ImageRenderer;
  referenceBlockRenderer: ReferenceBlockRenderer;
  shapeRenderer: ShapeRenderer;
  entityRenderer: EntityRenderer;
  edgeRenderer: EdgeRenderer;
  multiTargetUndirectedEdgeRenderer: MultiTargetUndirectedEdgeRenderer;
  curveRenderer: CurveRenderer;
  svgRenderer: SvgRenderer;
  drawingControllerRenderer: DrawingControllerRenderer;
  collisionBoxRenderer: CollisionBoxRenderer;
  entityDetailsButtonRenderer: EntityDetailsButtonRenderer;
  straightEdgeRenderer: StraightEdgeRenderer;
  symmetryCurveEdgeRenderer: SymmetryCurveEdgeRenderer;
  verticalPolyEdgeRenderer: VerticalPolyEdgeRenderer;
  sectionRenderer: SectionRenderer;
  svgNodeRenderer: SvgNodeRenderer;
  latexNodeRenderer: LatexNodeRenderer;
  textNodeRenderer: TextNodeRenderer;
  urlNodeRenderer: UrlNodeRenderer;
  backgroundRenderer: BackgroundRenderer;
  searchContentHighlightRenderer: SearchContentHighlightRenderer;
  renderer: Renderer;
  controller: Controller;
  stageExport: StageExport;
  stageExportPng: StageExportPng;
  stageExportSvg: StageExportSvg;
  stageImport: StageImport;
  generateFromFolder: GenerateFromFolder;
  keyBindHintEngine: KeyBindHintEngine;
  sectionMethods: SectionMethods;
  graphMethods: GraphMethods;
  stageStyleManager: StageStyleManager;
  autoSaveBackup: AutoSaveBackupService;
  referenceManager: ReferenceManager;
}

declare namespace RecentFileManager {
  const store: Store;
  declare type RecentFile = {
    uri: URI;
    /**
     * 上次保存或打开的时间戳
     */
    time: number;
  };
  function init();
  function addRecentFile(file: RecentFile);
  function addRecentFileByUri(uri: URI);
  function addRecentFilesByUris(uris: URI[]);
  function removeRecentFileByUri(uri: URI);
  function clearAllRecentFiles();
  function getRecentFiles(): Promise<RecentFile[]>;
  function validAndRefreshRecentFiles();
  function sortTimeRecentFiles();
  function clearRecentFiles();
}

declare class RectangleSelect {
  constructor(project: Project);
  selectStartLocation;
  selectEndLocation;
  getSelectStartLocation(): Vector;
  getSelectEndLocation(): Vector;
  selectingRectangle: Rectangle | null;
  limitSection: Section | null;
  isSelectDirectionRight;
  getRectangle(): Rectangle | null;
  shutDown();
  startSelecting(worldLocation: Vector);
  moveSelecting(newEndLocation: Vector);
  endSelecting();
  updateStageObjectByMove();
  isSelectWithEntity(entity: StageObject);
  getSelectMode(): "contain" | "intersect";
  getSelectMoveDistance(): number;
}

declare class ReferenceBlockNode extends ConnectableEntity implements ResizeAble {
  isHiddenBySectionCollapse: boolean;
  uuid: string;
  collisionBox: CollisionBox;
  fileName: string;
  sectionName: string;
  scale: number;
  attachmentId: string;
  _isSelected: boolean;
  bitmap: ImageBitmap | undefined;
  state: "loading" | "success" | "notFound";
  constructor(
    project: Project,
    {
      uuid = crypto.randomUUID() as string,
      collisionBox = new CollisionBox([new Rectangle(Vector.getZero(), new Vector(400, 200))]),
      fileName = "",
      sectionName = "",
      scale = 1,
      attachmentId = "",
      details = [],
    },
    unknown = false,
  );
  get isSelected(): any;
  set isSelected(value: boolean);
  loadImageFromAttachment();
  generateScreenshot();
  updateCollisionBox();
  scaleUpdate(scaleDiff: number);
  get rectangle(): Rectangle;
  get geometryCenter(): any;
  move(delta: Vector): void;
  moveTo(location: Vector): void;
  refresh();
  goToSource();
  focusSectionInProject(project: Project);
  resizeHandle(delta: Vector);
  getResizeHandleRect(): Rectangle;
}

declare class ReferenceBlockRenderer {
  constructor(project: Project);
  render(referenceBlockNode: ReferenceBlockNode);
  renderBrackets(rect: Rectangle, color: Color);
  renderSourceSectionBorder(section: Section, countNumber: number, color: Color = new Color(118, 78, 209));
}

declare class ReferenceManager {
  constructor(project: Project);
  referenceBlockTextParser(text: string): parserResult;
  onClickReferenceNumber(clickLocation: Vector);
  buildSectionName2SectionMap(sectionNames: string[]): Record<string, Section>;
  updateOneSectionReferenceInfo(recentFiles: RecentFileManager.RecentFile[], sectionName: string);
  updateCurrentProjectReference();
  checkReferenceBlockInProject(project: Project, fileName: string, sectionName: string);
  insertRefDataToSourcePrgFile(fileName: string, sectionName: string);
  jumpToReferenceLocation(fileName: string, referenceBlockNodeSectionName: string);
  openSectionReferencePanel(section: Section);
}

declare class Renderer {
  FONT_SIZE;
  NODE_PADDING;
  NODE_ROUNDED_RADIUS;
  w;
  h;
  renderedEdges: number;
  timings: { [key: string]: number };
  deltaTime;
  lastTime;
  frameCount;
  frameIndex;
  fps;
  resizeWindow(newW: number, newH: number);
  constructor(project: Project);
  tick();
  tick_();
  renderViewElements(_viewRectangle: Rectangle);
  renderZoomLevelStage();
  renderMainStageElements(viewRectangle: Rectangle);
  renderStageElementsWithoutReactions(viewRectangle: Rectangle);
  isOverView(viewRectangle: Rectangle, entity: StageObject): boolean;
  renderCenterPointer();
  renderHoverCollisionBox();
  renderSelectingRectangle();
  renderCuttingLine();
  renderConnectingLine();
  renderCrosshairOnHoverImage();
  renderKeyboardOnly();
  rendererLayerMovingLine();
  renderJumpLine(startLocation: Vector, endLocation: Vector);
  renderWarningStageObjects();
  renderTags();
  renderEntities(viewRectangle: Rectangle);
  renderEdges(viewRectangle: Rectangle);
  renderBackground();
  updateFPS();
  renderDebugDetails();
  renderSpecialKeys();
  transformWorld2View(location: Vector): Vector;
  transformWorld2View(rectangle: Rectangle): Rectangle;
  transformWorld2View(arg1: Vector | Rectangle): Vector | Rectangle;
  transformView2World(location: Vector): Vector;
  transformView2World(rectangle: Rectangle): Rectangle;
  transformView2World(arg1: Vector | Rectangle): Vector | Rectangle;
  getCoverWorldRectangle(): Rectangle;
}

declare class RenderUtils {
  constructor(project: Project);
  renderPixel(location: Vector, color: Color);
  renderArrow(direction: Vector, location: Vector, color: Color, size: number);
}

declare interface ResizeAble {
  resizeHandle(delta: Vector): void;
  getResizeHandleRect(): Rectangle;
}

declare class SearchContentHighlightRenderer {
  constructor(project: Project);
  render(frameTickIndex: number);
}

declare class Section extends ConnectableEntity {
  _isSelected: boolean;
  uuid: string;
  _isEditingTitle: boolean;
  _collisionBoxWhenCollapsed: CollisionBox;
  _collisionBoxNormal: CollisionBox;
  get isEditingTitle(): any;
  set isEditingTitle(value: boolean);
  bigTitleCameraScale;
  get collisionBox(): CollisionBox;
  collapsedCollisionBox(): CollisionBox;
  color: Color;
  text: string;
  children: Entity[];
  isCollapsed: boolean;
  locked: boolean;
  isHiddenBySectionCollapse;
  constructor(
    project: Project,
    {
      uuid = crypto.randomUUID() as string,
      text = "",
      collisionBox = new CollisionBox([new Rectangle(new Vector(0, 0), new Vector(0, 0))]),
      _collisionBoxNormal: collisionBoxNormal = undefined as CollisionBox | undefined,
      color = Color.Transparent,
      locked = false,
      isCollapsed = false,
      children = [] as Entity[],
      details = [] as Value,
    } = {},
    unknown = false,
  );
  fromEntities(project: Project, entities: Entity[]): Section;
  rename(newName: string);
  adjustLocationAndSize();
  adjustChildrenStateByCollapse(parentCollapsed = false);
  get isSelected(): any;
  set isSelected(value: boolean);
  get rectangle(): Rectangle;
  get geometryCenter(): any;
  move(delta: Vector): void;
  collideWithOtherEntity(other: Entity): void;
  moveTo(location: Vector): void;
}

declare class SectionCollisionSolver {
  constructor(project: Project);
  solveOverlaps(grownSection: Section, visited: Set<string> = new Set()): void;
  updateAncestorsAfterShift(entity: Entity, visited: Set<string>): void;
  getSiblingsSections(section: Section): Section[];
  computePushDelta(grownRect: Rectangle, siblingRect: Rectangle): Vector;
  rawShiftEntityTree(entity: Entity, delta: Vector): void;
}

declare class SectionInOutManager {
  constructor(project: Project);
  goInSection(entities: Entity[], section: Section);
  goInSections(entities: Entity[], sections: Section[]);
  goOutSection(entities: Entity[], section: Section);
  entityDropParent(entity: Entity);
  sectionDropChild(section: Section, entity: Entity);
  convertSectionToTextNode(section: Section);
}

declare class SectionMethods {
  constructor(project: Project);
  getFatherSections(entity: Entity): Section[];
  isObjectBeLockedBySection(object: StageObject): boolean;
  getFatherSectionsList(entity: Entity): Section[];
  getSectionsByInnerLocation(location: Vector): Section[];
  deeperSections(sections: Section[]): Section[];
  shallowerSection(sections: Section[]): Section[];
  shallowerNotSectionEntities(entities: Entity[]): Entity[];
  isEntityInSection(entity: Entity, section: Section): boolean;
  isEntityInSection_fake(entity: Entity, section: Section): boolean;
  _isEntityInSection(entity: Entity, section: Section, deep = 0): boolean;
  isTreePack(rootNode: Section);
  getSectionMaxDeep(section: Section): number;
  getAllEntitiesInSelectedSectionsOrEntities(selectedEntities: Entity[]): Entity[];
  getSortedSectionsByZ(sections: Section[]): Section[];
}

declare class SectionPackManager {
  constructor(project: Project);
  packSection(): void;
  modifyHiddenDfs(section: Section, isCollapsed: boolean);
  unpackSection(): void;
  switchCollapse(): void;
  textNodeToSection(): void;
  textNodeTreeToSection(rootNode: TextNode): void;
  textNodeTreeToSectionNoDeep(rootNode: TextNode): void;
  targetTextNodeToSection(textNode: TextNode, ignoreEdges: boolean = false, addConnectPoints: boolean = false): Section;
  unpackSelectedSections();
  unpackSections(entities: Entity[]);
  packEntityToSection(addEntities: Entity[]);
  createSectionFromSelectionRectangle(): void;
  packSelectedEntitiesToSection(): void;
  getSmartSectionTitle(addEntities: Entity[]): string;
}

declare class SectionRenderer {
  constructor(project: Project);
  renderCollapsed(section: Section);
  renderNoCollapse(section: Section);
  renderBackgroundColor(section: Section);
  renderBigCoveredTitle(section: Section);
  renderTopTitle(section: Section);
  render(section: Section): void;
}

declare class SelectChangeEngine {
  lastSelectNodeByKeyboardUUID;
  constructor(project: Project);
  selectUp(addSelect = false);
  selectDown(addSelect = false);
  selectLeft(addSelect = false);
  selectRight(addSelect = false);
  navigateInDirection(selectedNode: ConnectableEntity, direction: Direction): ConnectableEntity | null;
  getSameLevelCandidates(parentSection: Section, excludeNode: ConnectableEntity): ConnectableEntity[];
  getTopLevelCandidates(excludeNode: ConnectableEntity): ConnectableEntity[];
  expandSelect(isKeepExpand = false, reversed: boolean = false);
  afterSelect(
    selectedNodeRect: ConnectableEntity,
    newSelectedConnectableEntity: ConnectableEntity | null,
    clearOldSelect = true,
  );
  getCurrentSelectedNode(): ConnectableEntity | null;
  addEffect(selectedNodeRect: Rectangle, newSelectNodeRect: Rectangle);
  getMostNearConnectableEntity(nodes: ConnectableEntity[], location: Vector): ConnectableEntity | null;
  selectMostNearLocationNode(location: Vector): ConnectableEntity | null;
  collectNodesInStrip(
    node: ConnectableEntity,
    direction: Direction,
    candidates: ConnectableEntity[],
  ): ConnectableEntity[];
  getMostNearInStripByDh(
    nodes: ConnectableEntity[],
    nodeRect: Rectangle,
    direction: Direction,
  ): ConnectableEntity | null;
  collectFanNodes(node: ConnectableEntity, direction: Direction, candidates: ConnectableEntity[]): ConnectableEntity[];
  collectTopNodes(node: ConnectableEntity, candidates?: ConnectableEntity[]): ConnectableEntity[];
  collectBottomNodes(node: ConnectableEntity, candidates?: ConnectableEntity[]): ConnectableEntity[];
  collectLeftNodes(node: ConnectableEntity, candidates?: ConnectableEntity[]): ConnectableEntity[];
  collectRightNodes(node: ConnectableEntity, candidates?: ConnectableEntity[]): ConnectableEntity[];
}

declare namespace Serialized {
  declare type Vector = [number, number];
  declare type Color = [number, number, number, number];
  declare type StageObject = {
    uuid: string;
    type: string;
  };
  declare type Entity = StageObject & {
    location: Vector;
    details: string;
  };
  declare type TextNodeSizeAdjust = "auto" | "manual";
  declare type TextNode = Entity & {
    type: "core:text_node";
    size: Vector;
    text: string;
    color: Color;
    sizeAdjust: TextNodeSizeAdjust;
  };
  function isTextNode(obj: StageObject): obj is TextNode;
  declare type Section = Entity & {
    type: "core:section";
    size: Vector;
    text: string;
    color: Color;

    children: string[]; // uuid[]
    isHidden: boolean;
    isCollapsed: boolean;
  };
  function isSection(obj: StageObject): obj is Section;
  declare type ConnectPoint = Entity & {
    type: "core:connect_point";
  };
  function isConnectPoint(obj: StageObject): obj is ConnectPoint;
  declare type ImageNode = Entity & {
    path: string;
    size: Vector;
    scale: number;
    type: "core:image_node";
  };
  function isImageNode(obj: StageObject): obj is ImageNode;
  declare type UrlNode = Entity & {
    url: string;
    title: string;
    size: Vector;
    color: Color;
    type: "core:url_node";
  };
  function isUrlNode(obj: StageObject): obj is UrlNode;
  declare type PortalNode = Entity & {
    // 连接的文件
    portalFilePath: string;
    targetLocation: Vector;
    cameraScale: number;
    // 显示的可更改标题
    title: string;
    // 传送门的大小
    size: Vector;
    // 颜色
    color: Color;
    type: "core:portal_node";
  };
  function isPortalNode(obj: StageObject): obj is PortalNode;
  declare type PenStroke = Entity & {
    type: "core:pen_stroke";
    content: string;
    color: Color;
  };
  function isPenStroke(obj: StageObject): obj is PenStroke;
  declare type SvgNode = Entity & {
    type: "core:svg_node";
    content: string;
    size: Vector;
    color: Color;
    scale: number;
  };
  function isSvgNode(obj: StageObject): obj is SvgNode;
  declare type Association = StageObject & {
    text: string;
    color: Color;
  };
  declare type UndirectedEdgeArrowType = "inner" | "outer" | "none";
  declare type MultiTargetUndirectedEdgeRenderType = "line" | "convex";
  declare type MultiTargetUndirectedEdge = Association & {
    type: "core:multi_target_undirected_edge";
    targets: string[];
    arrow: UndirectedEdgeArrowType;
    rectRates: [number, number][]; // 默认中心 0.5, 0.5
    centerRate: [number, number]; // 默认中心 0.5, 0.5
    padding: number;
    renderType: MultiTargetUndirectedEdgeRenderType;
  };
  function isMultiTargetUndirectedEdge(obj: StageObject): obj is MultiTargetUndirectedEdge;
  declare type Edge = Association & {
    source: string;
    target: string;
    sourceRectRate: [number, number]; // 默认中心 0.5, 0.5
    targetRectRate: [number, number]; // 默认中心 0.5, 0.5
  };
  function isEdge(obj: StageObject): obj is Edge;
  declare type LineEdge = Edge & {
    type: "core:line_edge";
    color: Color;
    text: string;
  };
  function isLineEdge(obj: StageObject): obj is LineEdge;
  function isCubicCatmullRomSplineEdge(obj: StageObject): obj is CubicCatmullRomSplineEdge;
  declare type CubicCatmullRomSplineEdge = Edge & {
    type: "core:cublic_catmull_rom_spline_edge";
    text: string;
    controlPoints: Vector[];
    alpha: number;
    tension: number;
  };
  declare type CoreEntity = TextNode | Section | ConnectPoint | ImageNode | UrlNode | PenStroke | PortalNode | SvgNode;
  function isCoreEntity(obj: StageObject): obj is CoreEntity;
  declare type CoreAssociation = LineEdge | CubicCatmullRomSplineEdge | MultiTargetUndirectedEdge;
  declare type File = {
    version: typeof Project.latestVersion;
    entities: CoreEntity[];
    associations: CoreAssociation[];
    tags: string[];
  };
}

declare interface Service {
  tick(): void;
  dispose(): void | Promise<void>;
}

declare type Settings = z.infer<typeof settingsSchema>;

declare class ShapeRenderer {
  constructor(project: Project);
  renderCircle(centerLocation: Vector, radius: number, color: Color, strokeColor: Color, strokeWidth: number): void;
  renderArc(
    centerLocation: Vector,
    radius: number,
    angle1: number,
    angle2: number,
    strokeColor: Color,
    strokeWidth: number,
  ): void;
  renderRectFromCenter(
    centerLocation: Vector,
    width: number,
    height: number,
    color: Color,
    strokeColor: Color,
    strokeWidth: number,
    radius: number = 0,
  ): void;
  renderRect(rect: Rectangle, color: Color, strokeColor: Color, strokeWidth: number, radius: number = 0);
  renderDashedRect(
    rect: Rectangle,
    color: Color,
    strokeColor: Color,
    strokeWidth: number,
    radius: number = 0,
    dashLength = 5,
  );
  renderRectWithShadow(
    rect: Rectangle,
    fillColor: Color,
    strokeColor: Color,
    strokeWidth: number,
    shadowColor: Color,
    shadowBlur: number,
    shadowOffsetX: number = 0,
    shadowOffsetY: number = 0,
    radius: number = 0,
  );
  renderPolygonAndFill(
    points: Vector[],
    fillColor: Color,
    strokeColor: Color,
    strokeWidth: number,
    lineJoin: "round" | "bevel" = "round",
  ): void;
  renderTriangleFromCenter(
    centerLocation: Vector,
    size: number,
    rotation: number,
    fillColor: Color,
    strokeColor: Color,
    strokeWidth: number,
  ): void;
  renderSquareFromCenter(
    centerLocation: Vector,
    size: number,
    rotation: number,
    fillColor: Color,
    strokeColor: Color,
    strokeWidth: number,
  ): void;
  renderCircleTransition(viewLocation: Vector, radius: number, centerColor: Color);
  renderCameraShapeBorder(rect: Rectangle, borderColor: Color, borderWidth: number);
  renderResizeArrow(rect: Rectangle, color: Color, strokeWidth: number);
}

declare class StageExport {
  plainTextExporter: PlainTextExporter;
  markdownExporter: MarkdownExporter;
  tabExporter: TabExporter;
  mermaidExporter: MermaidExporter;
  constructor(project: Project);
  getPlainTextByEntities(nodes: Entity[]);
  getMarkdownStringByTextNode(textNode: TextNode);
  getTabStringByTextNode(textNode: TextNode);
  getMermaidTextByEntities(entities: Entity[]): string;
}

declare class StageExportPng {
  constructor(project: Project);
  exportStage_(emitter: EventEmitter<EventMap>, signal: AbortSignal, sleepTime: number);
  exportStage(signal: AbortSignal, sleepTime: number = 2);
  generateCanvasNode(): HTMLCanvasElement;
}

declare class StageExportSvg {
  constructor(project: Project);
  svgConfig: SvgExportConfig;
  exportContext: {
    outputDir: string;
    imageMap: Map<string, string>; // attachmentId -> relative file path
  } | null;
  setConfig(config: SvgExportConfig);
  dumpNode(node: TextNode);
  dumpSection(section: Section);
  dumpSectionBase(section: Section);
  dumpEdge(edge: LineEdge): React.ReactNode;
  dumpEntityDetails(entity: Entity): React.ReactNode;
  getEntityDetailsDataAttribute(entity: Entity): string | undefined;
  dumpUrlNode(node: UrlNode);
  dumpImageNode(node: ImageNode, svgConfigObject: SvgExportConfig);
  getEntitiesOuterRectangle(entities: Entity[], padding: number): Rectangle;
  dumpSelected(): React.ReactNode;
  dumpStage(): React.ReactNode;
  dumpStageToSVGString(): string;
  dumpSelectedToSVGString(): string;
  exportStageToSVGFile(filePath: string): Promise<void>;
  exportSelectedToSVGFile(filePath: string): Promise<void>;
}

declare class StageImport {
  graphImporter: GraphImporter;
  treeImporter: TreeImporter;
  mermaidImporter: MermaidImporter;
  markdownImporter: MarkdownImporter;
  constructor(project: Project);
  addNodeGraphByText(text: string, diffLocation: Vector = Vector.getZero());
  addNodeTreeByText(text: string, indention: number, diffLocation: Vector = Vector.getZero());
  addNodeTreeByTextFromNode(
    uuid: string,
    text: string,
    indention: number,
  ): { success: boolean; error?: string; nodeCount?: number };
  addNodeMermaidByText(text: string, diffLocation: Vector = Vector.getZero());
  addNodeByMarkdown(markdownText: string, diffLocation: Vector = Vector.getZero(), autoLayout = true);
}

declare class StageManager {
  constructor(project: Project);
  get(uuid: string);
  isEmpty(): boolean;
  getTextNodes(): TextNode[];
  getConnectableEntity(): ConnectableEntity[];
  isEntityExists(uuid: string): boolean;
  getSections(): Section[];
  getImageNodes(): ImageNode[];
  getConnectPoints(): ConnectPoint[];
  getUrlNodes(): UrlNode[];
  getPenStrokes(): PenStroke[];
  getSvgNodes(): SvgNode[];
  getLatexNodes(): LatexNode[];
  getStageObjects(): StageObject[];
  getEntities(): Entity[];
  getEntitiesByUUIDs(uuids: string[]): Entity[];
  isNoEntity(): boolean;
  delete(stageObject: StageObject);
  getAssociations(): Association[];
  getEdges(): Edge[];
  getLineEdges(): LineEdge[];
  getCrEdges(): CubicCatmullRomSplineEdge[];
  add(stageObject: StageObject);
  updateReferences();
  getTextNodeByUUID(uuid: string): TextNode | null;
  getConnectableEntityByUUID(uuid: string): ConnectableEntity | null;
  isSectionByUUID(uuid: string): boolean;
  getSectionByUUID(uuid: string): Section | null;
  getCenter(): Vector;
  getSize(): Vector;
  getBoundingRectangle(): Rectangle;
  findTextNodeByLocation(location: Vector): TextNode | null;
  findLineEdgeByLocation(location: Vector): LineEdge | null;
  findAssociationByLocation(location: Vector): Association | null;
  findSectionByLocation(location: Vector): Section | null;
  findImageNodeByLocation(location: Vector): ImageNode | null;
  findConnectableEntityByLocation(location: Vector): ConnectableEntity | null;
  findEntityByLocation(location: Vector): Entity | null;
  findConnectPointByLocation(location: Vector): ConnectPoint | null;
  isHaveEntitySelected(): boolean;
  getSelectedEntities(): Entity[];
  getSelectedAssociations(): Association[];
  getSelectedStageObjects(): StageObject[];
  getBoundingBoxOfSelected(): Rectangle;
  isEntityOnLocation(location: Vector): boolean;
  isAssociationOnLocation(location: Vector): boolean;
  deleteEntities(deleteNodes: Entity[]);
  deleteSelectedStageObjects();
  deleteAssociation(deleteAssociation: Association): boolean;
  deleteEdge(deleteEdge: Edge): boolean;
  w;
  connectEntity(fromNode: ConnectableEntity, toNode: ConnectableEntity, isCrEdge: boolean = false);
  connectMultipleEntities(
    fromNodes: ConnectableEntity[],
    toNode: ConnectableEntity,
    isCrEdge: boolean = false,
    sourceRectRate?: [number, number],
    targetRectRate?: [number, number],
  );
  reverseNodeEdges(connectEntity: ConnectableEntity);
  reverseSelectedNodeEdge();
  reverseSelectedEdges();
  generateNodeTreeByText(text: string, indention: number = 4, location = this.project.camera.location);
  generateNodeGraphByText(text: string, location = this.project.camera.location);
  generateNodeMermaidByText(text: string, location = this.project.camera.location);
  generateNodeByMarkdown(text: string, location = this.project.camera.location, autoLayout = true);
  packEntityToSection(addEntities: Entity[]);
  packEntityToSectionBySelected();
  goInSection(entities: Entity[], section: Section);
  goOutSection(entities: Entity[], section: Section);
  packSelectedSection();
  unpackSelectedSection();
  sectionSwitchCollapse();
  connectEntityByCrEdge(fromNode: ConnectableEntity, toNode: ConnectableEntity);
  refreshAllStageObjects();
  refreshSelected();
  changeSelectedEdgeConnectLocation(direction: Direction | null, isSource: boolean = false);
  changeEdgesConnectLocation(edges: Edge[], direction: Direction | null, isSource: boolean = false);
  switchLineEdgeToCrEdge();
  switchEdgeToUndirectedEdge();
  switchUndirectedEdgeToEdge();
  addSelectedCREdgeControlPoint();
  addSelectedCREdgeTension();
  reduceSelectedCREdgeTension();
  setSelectedEdgeLineType(lineType: string);
  selectAll();
  clearSelectAll();
}

declare class StageNodeRotate {
  constructor(project: Project);
  moveEdges(lastMoveLocation: Vector, diffLocation: Vector);
  rotateNodeDfs(
    rotateCenterNode: ConnectableEntity,
    currentNode: ConnectableEntity,
    degrees: number,
    visitedUUIDs: string[],
  ): void;
}

declare class StageObject {
  project: Project;
  uuid: string;
  collisionBox: CollisionBox;
  get isPhysical(): boolean;
  _isSelected: boolean;
  get isSelected(): boolean;
  set isSelected(value: boolean);
  _isSyncing: boolean;
}

declare class StageObjectColorManager {
  constructor(project: Project);
  setSelectedStageObjectColor(color: Color);
  darkenNodeColor();
  lightenNodeColor();
}

declare class StageObjectSelectCounter {
  constructor(project: Project);
  selectedStageObjectCount;
  selectedEntityCount;
  selectedAssociationCount;
  selectedEdgeCount;
  selectedCREdgeCount;
  selectedImageNodeCount;
  selectedTextNodeCount;
  selectedSectionCount;
  selectedMultiTargetUndirectedEdgeCount;
  lastUpdateTimestamp;
  update();
}

declare class StageStyleManager {
  currentStyle;
  constructor();
}

declare class StageSyncAssociationManager {
  constructor(project: Project);
  createTwinsFromSelectedEntities(): void;
  getSyncAssociations(): SyncAssociation[];
  getSyncAssociationsByMember(member: StageObject): SyncAssociation[];
  getSyncSiblings(member: StageObject): StageObject[];
  createTwinTextNode(source: TextNode): TextNode;
  syncFrom(source: StageObject, key: SyncableKey, syncingSet: Set<string> = new Set()): void;
  onStageObjectDeleted(deleted: StageObject): void;
}

declare class StageUtils {
  constructor(project: Project);
  replaceAutoNameWithoutStage(template: string): string;
  replaceAutoNameTemplate(currentName: string, targetStageObject: StageObject): string;
  isNameConflictWithTextNodes(name: string): boolean;
  isNameConflictWithSections(name: string): boolean;
}

declare class StraightEdgeRenderer extends EdgeRendererClass {
  constructor(project: Project);
  getCuttingEffects(edge: LineEdge): Effect[];
  getConnectedEffects(
    startNode: ConnectableEntity,
    toNode: ConnectableEntity,
    sourceRectangleRate?: Vector,
    targetRectangleRate?: Vector,
  ): Effect[];
  renderLine(start: Vector, end: Vector, edge: LineEdge, width: number): void;
  renderNormalState(edge: LineEdge): void;
  getNormalStageSvg(edge: LineEdge): React.ReactNode;
  getCycleStageSvg(): React.ReactNode;
  getShiftingStageSvg(): React.ReactNode;
  renderArrowHead(edge: LineEdge, direction: Vector, endPoint = edge.bodyLine.end.clone(), size = 15);
  shouldRenderTargetArrow(edge: LineEdge): boolean;
  renderShiftingState(edge: LineEdge): void;
  renderCycleState(edge: LineEdge): void;
  renderVirtualEdge(startNode: ConnectableEntity, mouseLocation: Vector, sourceRectangleRate?: Vector): void;
  renderVirtualConfirmedEdge(
    startNode: ConnectableEntity,
    endNode: ConnectableEntity,
    sourceRectangleRate?: Vector,
    targetRectangleRate?: Vector,
  ): void;
}

declare class SvgNode extends ConnectableEntity implements ResizeAble {
  color: Color;
  uuid: string;
  scale: number;
  collisionBox: CollisionBox;
  attachmentId: string;
  isHiddenBySectionCollapse: boolean;
  originalSize: Vector;
  image: HTMLImageElement;
  constructor(
    project: Project,
    {
      uuid = crypto.randomUUID(),
      details = [],
      attachmentId = "",
      collisionBox = new CollisionBox([new Rectangle(Vector.getZero(), Vector.getZero())]),
      scale = 1,
      color = Color.Transparent,
    },
  );
  get geometryCenter(): Vector;
  scaleUpdate(scaleDiff: number);
  move(delta: Vector): void;
  moveTo(location: Vector): void;
  changeColor(newColor: Color, mode: "fill" | "stroke" = "fill");
  resizeHandle(delta: Vector);
  getResizeHandleRect(): Rectangle;
}

declare class SvgNodeRenderer {
  constructor(project: Project);
  render(svgNode: SvgNode);
}

declare class SvgRenderer {
  svgCache: { [key: string]: HTMLImageElement };
  constructor(project: Project);
  renderSvgFromLeftTop(svg: string, location: Vector, width: number, height: number): void;
  renderSvgFromCenter(svg: string, centerLocation: Vector, width: number, height: number): void;
  renderSvgFromLeftTopWithoutSize(svg: string, location: Vector, scaleNumber = 1): void;
  renderSvgFromCenterWithoutSize(svg: string, centerLocation: Vector): void;
}

declare class SymmetryCurveEdgeRenderer extends EdgeRendererClass {
  constructor(project: Project);
  shouldRenderTargetArrow(edge: LineEdge): boolean;
  getCuttingEffects(edge: LineEdge): Effect[];
  getConnectedEffects(
    startNode: ConnectableEntity,
    toNode: ConnectableEntity,
    sourceRectangleRate?: Vector,
    targetRectangleRate?: Vector,
  ): Effect[];
  renderNormalState(edge: LineEdge): void;
  renderShiftingState(edge: LineEdge): void;
  renderCycleState(edge: LineEdge): void;
  getNormalStageSvg(edge: LineEdge): React.ReactNode;
  getCycleStageSvg(): React.ReactNode;
  getShiftingStageSvg(): React.ReactNode;
  renderVirtualEdge(startNode: ConnectableEntity, mouseLocation: Vector, sourceRectangleRate?: Vector): void;
  renderVirtualConfirmedEdge(
    startNode: ConnectableEntity,
    endNode: ConnectableEntity,
    sourceRectangleRate?: Vector,
    targetRectangleRate?: Vector,
  ): void;
  renderArrowCurve(curve: SymmetryCurve, color: Color, width = 2, edge?: LineEdge): void;
  renderText(curve: SymmetryCurve, edge: LineEdge): void;
}

declare type SyncableKey = "text" | "color" | "details";

declare class SyncAssociation extends Association {
  uuid: string;
  keys: SyncableKey[];
  associationList: StageObject[];
  get collisionBox(): CollisionBox;
  get isPhysical(): boolean;
  _isSelected: boolean;
  get isSelected(): boolean;
  set isSelected(value: boolean);
  constructor(
    project: Project,
    {
      uuid = crypto.randomUUID() as string,
      keys = ["text", "color", "details"] as SyncableKey[],
      associationList = [] as StageObject[],
      color = Color.Transparent,
    }: {
      uuid?: string;
      keys?: SyncableKey[];
      associationList?: StageObject[];
      color?: Color;
    },
    unknown = false,
  );
  applyFrom(source: StageObject): void;
}

declare class Tab extends React.Component<Record<string, never>, Record<string, never>> {
  eventEmitter;
  services;
  fileSystemProviders;
  tickableServices: Service[];
  rafHandle;
  getComponent(): React.ComponentType;
  get title(): string;
  get icon(): React.ComponentType<any> | null;
  constructor(props: Record<string, never>);
  registerFileSystemProvider(scheme: string, provider: { new (...args: any[]): FileSystemProvider });
  get fs(): FileSystemProvider;
  on(event: string | symbol, listener: (...args: any[]) => void): this;
  emit(event: string | symbol, ...args: any[]): boolean;
  removeAllListeners(event?: string | symbol): this;
  loadService(service: { id?: string; new (...args: any[]): any });
  disposeService(serviceId: string);
  getService<T extends keyof this & string>(serviceId: T): this[T];
  init(): Promise<void>;
  loop();
  pause();
  tick();
  dispose();
  get isRunning(): boolean;
  render(): React.ReactNode;
}

declare class TabExporter extends BaseExporter {
  export(textNode: TextNode): string;
  getTabText(node: TextNode, level: number): string;
}

declare class TagManager {
  constructor(project: Project);
  tagSet: Set<string>;
  reset(uuids: string[]);
  addTag(uuid: string);
  removeTag(uuid: string);
  hasTag(uuid: string): boolean;
  updateTags();
  moveUpTag(uuid: string);
  moveDownTag(uuid: string);
  changeTagBySelected();
  refreshTagNamesUI();
  moveCameraToTag(tagUUID: string);
}

declare class TextNode extends ConnectableEntity implements ResizeAble {
  uuid: string;
  text: string;
  collisionBox: CollisionBox;
  color: Color;
  isAiGenerating: boolean;
  fontScaleLevel: number;
  enableResizeCharCount;
  sizeAdjust: string;
  _isSelected: boolean;
  get isSelected(): any;
  get rectangle(): Rectangle;
  get geometryCenter(): any;
  set isSelected(value: boolean);
  _isEditing: boolean;
  get isEditing(): any;
  set isEditing(value: boolean);
  isHiddenBySectionCollapse;
  constructor(
    project: Project,
    {
      uuid = crypto.randomUUID() as string,
      text = "",
      details = [],
      collisionBox = new CollisionBox([new Rectangle(Vector.getZero(), Vector.getZero())]),
      color = Color.Transparent,
      sizeAdjust = "auto",
      fontScaleLevel = 0,
    }: {
      uuid?: string;
      text?: string;
      details?: Value;
      color?: Color;
      sizeAdjust?: "auto" | "manual";
      collisionBox?: CollisionBox;
      fontScaleLevel?: number;
    },
    unknown = false,
  );
  fontSizeCache: number;
  getFontSize(): number;
  getPadding(): number;
  getBorderWidth(): number;
  getBorderRadius(): number;
  updateFontSizeCache(): void;
  setFontScaleLevel(level: number);
  increaseFontSize(anchorRate?: Vector): void;
  decreaseFontSize(anchorRate?: Vector): void;
  _adjustLocationToKeepAnchor(oldRect: Rectangle, anchorRate: Vector): void;
  adjustSizeByText();
  adjustHeightByText();
  forceAdjustSizeByText();
  rename(text: string);
  resizeHandle(delta: Vector);
  resizeWidthTo(width: number);
  getResizeHandleRect(): Rectangle;
  move(delta: Vector);
  collideWithOtherEntity(other: Entity): void;
  moveTo(location: Vector);
}

declare class TextNodeRenderer {
  constructor(project: Project);
  renderTextNode(node: TextNode);
  renderKeyboardTreeHint(node: TextNode): void;
  renderLogicNodeWarningTrap(node: TextNode);
  renderTextNodeTextLayer(node: TextNode);
}

declare class TextRenderer {
  cache;
  constructor(project: Project);
  hash(text: string, size: number): string;
  getCache(text: string, size: number);
  getCacheNearestSize(text: string, size: number): ImageBitmap | undefined;
  buildCache(text: string, size: number, color: Color): CanvasImageSource;
  renderText(text: string, location: Vector, size: number, color: Color = Color.White): void;
  renderTempText(text: string, location: Vector, size: number, color: Color = Color.White): void;
  renderTextFromCenter(text: string, centerLocation: Vector, size: number, color: Color = Color.White): void;
  renderTempTextFromCenter(text: string, centerLocation: Vector, size: number, color: Color = Color.White): void;
  renderTextInRectangle(text: string, rectangle: Rectangle, color: Color): void;
  getFontSizeByRectangleSize(text: string, rectangle: Rectangle): Vector;
  renderMultiLineText(
    text: string,
    location: Vector,
    fontSize: number,
    limitWidth: number,
    color: Color = Color.White,
    lineHeight: number = 1.2,
    limitLines: number = Infinity,
  ): void;
  renderTempMultiLineText(
    text: string,
    location: Vector,
    fontSize: number,
    limitWidth: number,
    color: Color = Color.White,
    lineHeight: number = 1.2,
    limitLines: number = Infinity,
  ): void;
  renderMultiLineTextFromCenterWithStroke(
    text: string,
    centerLocation: Vector,
    size: number,
    fillColor: Color,
    strokeColor: Color,
    limitWidth: number = Infinity,
    lineHeight: number = 1.2,
  ): void;
  renderMultiLineTextFromCenter(
    text: string,
    centerLocation: Vector,
    size: number,
    limitWidth: number,
    color: Color,
    lineHeight: number = 1.2,
    limitLines: number = Infinity,
  ): void;
  renderTempMultiLineTextFromCenter(
    text: string,
    centerLocation: Vector,
    size: number,
    limitWidth: number,
    color: Color,
    lineHeight: number = 1.2,
    limitLines: number = Infinity,
  ): void;
  textArrayCache: LruCache<string, string[]>;
  textToTextArrayWrapCache(text: string, fontSize: number, limitWidth: number): string[];
  textToTextArray(text: string, fontSize: number, limitWidth: number): string[];
  measureMultiLineTextSize(text: string, fontSize: number, limitWidth: number, lineHeight: number = 1.2): Vector;
}

declare const transformedKeys;

declare class TreeImporter extends BaseImporter {
  constructor(project: Project);
  import(text: string, indention: number, diffLocation: Vector = Vector.getZero()): void;
  importFromNode(
    uuid: string,
    text: string,
    indention: number,
  ): { success: boolean; error?: string; nodeCount?: number };
  getIndentLevel(line: string, indention: number): number;
}

declare interface UIKeyBind {
  id: string;
  key: string;
  isEnabled: boolean;
  onPress: (project?: Project) => void;
  when: KeyBindWhen;
  icon?: KeyBindIcon;
  isContinuous?: boolean;
  onRelease?: (project?: Project) => void;
}

declare class UrlNode extends ConnectableEntity {
  uuid: string;
  title: string;
  url: string;
  color: Color;
  collisionBox: CollisionBox;
  width: number;
  height: number;
  titleHeight: number;
  _isEditingTitle: boolean;
  isMouseHoverTitle: boolean;
  isMouseHoverUrl: boolean;
  get isEditingTitle(): any;
  set isEditingTitle(value: boolean);
  get geometryCenter(): Vector;
  get titleRectangle(): Rectangle;
  get urlRectangle(): Rectangle;
  get rectangle(): Rectangle;
  move(delta: Vector): void;
  moveTo(location: Vector): void;
  isHiddenBySectionCollapse: boolean;
  constructor(
    project: Project,
    {
      uuid = crypto.randomUUID() as string,
      title = "",
      details = [],
      url = "",
      collisionBox = new CollisionBox([new Rectangle(Vector.getZero(), new Vector(UrlNode.width, UrlNode.height))]),
      color = Color.Transparent,
    },
  );
  rename(title: string): void;
  adjustSizeByText();
}

declare class UrlNodeRenderer {
  constructor(project: Project);
  render(urlNode: UrlNode): void;
  renderHoverState(urlNode: UrlNode): void;
}

declare class VerticalPolyEdgeRenderer extends EdgeRendererClass {
  constructor(project: Project);
  getCuttingEffects(edge: LineEdge): Effect[];
  getConnectedEffects(
    startNode: ConnectableEntity,
    toNode: ConnectableEntity,
    sourceRectangleRate?: Vector,
    targetRectangleRate?: Vector,
  ): Effect[];
  getVerticalDirection(edge: LineEdge): Vector;
  fixedLength: number;
  renderTest(edge: LineEdge);
  gaussianFunction(x: number);
  renderNormalState(edge: LineEdge): void;
  renderShiftingState(edge: LineEdge): void;
  shouldRenderTargetArrow(edge: LineEdge): boolean;
  renderArrowHead(edge: LineEdge, direction: Vector, endPoint = edge.bodyLine.end.clone());
  renderCycleState(edge: LineEdge): void;
  getNormalStageSvg(edge: LineEdge): React.ReactNode;
  getCycleStageSvg(): React.ReactNode;
  getShiftingStageSvg(): React.ReactNode;
  renderVirtualEdge(startNode: ConnectableEntity, mouseLocation: Vector, sourceRectangleRate?: Vector): void;
  renderVirtualConfirmedEdge(
    startNode: ConnectableEntity,
    endNode: ConnectableEntity,
    sourceRectangleRate?: Vector,
    targetRectangleRate?: Vector,
  ): void;
}

declare class WorldRenderUtils {
  constructor(project: Project);
  renderCubicCatmullRomSpline(spline: CubicCatmullRomSpline, color: Color, width: number): void;
  renderBezierCurve(curve: CubicBezierCurve, color: Color, width: number): void;
  renderSymmetryCurve(curve: SymmetryCurve, color: Color, width: number): void;
  renderDashedSymmetryCurve(curve: SymmetryCurve, color: Color, width: number, dashLength: number): void;
  renderDoubleSymmetryCurve(curve: SymmetryCurve, color: Color, width: number, gap: number): void;
  renderLaser(start: Vector, end: Vector, width: number, color: Color): void;
  renderPrismaticBlock(
    centerLocation: Vector,
    radius: number,
    color: Color,
    strokeColor: Color,
    strokeWidth: number,
  ): void;
  renderRectangleFlash(rectangle: Rectangle, shadowColor: Color, shadowBlur: number, roundedRadius = 0);
  renderCuttingFlash(start: Vector, end: Vector, width: number, shadowColor: Color): void;
}

// ── 扩展宿主 API ──

export declare function extensionHostApiFactory(extension: Extension): {
  toast(message: string): Promise<void>;
  toast_success(message: string): Promise<void>;
  toast_error(message: string): Promise<void>;
  toast_warning(message: string): Promise<void>;
  dialog_confirm: typeof Dialog.confirm;
  dialog_input: typeof Dialog.input;
  dialog_copy: typeof Dialog.copy;
  dialog_buttons: typeof Dialog.buttons;
  fetch: fetch;
  fetch_base64(url: string): Promise<string>;
  fetch_json(url: string): Promise<unknown>;
  fetch_binary(url: string): Promise<{ buffer: Uint8Array; mimeType: string }>;
  shell_execute(
    program: string,
    args?: string[],
    stdin?: string,
  ): Promise<{ code: number | null; stdout: string; stderr: string }>;
  settings_getOwn(key: string): Promise<any>;
  settings_setOwn(key: string, value: unknown): Promise<void>;
  settings_getGlobal(key: string): Promise<any>;
  settings_setGlobal(key: string, value: unknown): Promise<any>;
  keybinds_register(
    id: string,
    icon: KeyBindIcon,
    defaultKey: string,
    onPress: () => void,
    onRelease?: () => void,
    isContinuous?: boolean,
  ): Promise<void>;
  keybinds_unregisterAll(): Promise<void>;
  tabs_getAll(): Promise<Tab[]>;
  tabs_getAllProjects(): Promise<Project[]>;
  tabs_getCurrent(): Promise<Tab | null>;
  tabs_getCurrentProject(): Promise<Project | null>;
  entity_registerType(
    typeName: string,
    initialData: any,
    collisionBox: CollisionBox,
    renderFn: (data: any) => Promise<ImageBitmap>,
  ): Promise<void>;
  entity_onClick(typeName: string, handler: (payload: ClickEventPayload) => void): Promise<void>;
  entity_create(typeName: string, data: any, location: { x: number; y: number }): Promise<ExtensionEntity>;
};

declare global {
  interface DedicatedWorkerGlobalScope {
    prg: ReturnType<typeof extensionHostApiFactory>;
  }
}
