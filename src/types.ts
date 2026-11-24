export type ToolType = 
  | 'fill'      // Đổ màu vào mảng (Tap to fill)
  | 'crayon'    // Bút sáp màu (Crayon texture)
  | 'brush'     // Cọ vẽ / Bút lông (Paintbrush)
  | 'glitter'   // Bút kim tuyến lấp lánh (Sparkle pen)
  | 'neon'      // Bút dạ quang phát sáng (Neon glow)
  | 'stamp'     // Con dấu dán hình sticker (Stamps)
  | 'eraser';   // Tẩy (Eraser)

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface Category {
  id: string;
  nameVi: string;
  nameEn: string;
  icon: string;
  color: string;
  bgColor: string;
  descriptionVi: string;
}

export interface SvgRegion {
  id: string;
  d: string;
  labelVi?: string;
  defaultColor?: string;
  strokeWidth?: number;
  stroke?: string;
}

export interface ColoringTemplate {
  id: string;
  titleVi: string;
  titleEn: string;
  category: string;
  difficulty: DifficultyLevel;
  thumbnail?: string;
  viewBox: string;
  // Regions that can be filled
  regions: SvgRegion[];
  // Static outline/lines that render on top so lines stay sharp
  outlinePaths?: string[];
  tags: string[];
}

export interface StampItem {
  id: string;
  emoji: string;
  nameVi: string;
  nameEn: string;
}

export interface SavedArtwork {
  id: string;
  templateId: string;
  title: string;
  date: number;
  thumbnailDataUrl: string;
  filledRegions: Record<string, string>;
  canvasDataUrl?: string;
}

export interface DrawingHistoryStep {
  filledRegions: Record<string, string>;
  canvasImageData?: ImageData | null;
}
