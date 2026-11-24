import { ColoringTemplate } from '../../types';

export const FRUIT_TEMPLATES: ColoringTemplate[] = [
  // 1. LY KEM THIÊN ĐƯỜNG CẦU VỒNG (FANTASY SUNDAE)
  {
    id: 'fruit-sundae',
    titleVi: 'Ly Kem Cầu Vồng Ngọt Ngào',
    titleEn: 'Fantasy Rainbow Sundae',
    category: 'fruits',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['kem', 'ice cream', 'sundae', 'đồ ngọt'],
    regions: [
      { id: 'cherry', labelVi: 'Quả cherry đỏ mọng', d: 'M 230,60 A 22,22 0 1,0 274,60 A 22,22 0 1,0 230,60 Z' },
      { id: 'cherry-stem', labelVi: 'Cuống lá cherry', d: 'M 252,38 C 270,10 300,15 305,22 L 300,25 C 290,20 270,18 252,42 Z' },

      // Wafer Stick (Bánh quế que cắm ly)
      { id: 'wafer-stick', labelVi: 'Que bánh quế giòn', d: 'M 150,40 L 180,40 L 225,180 L 195,180 Z' },
      { id: 'wafer-stripe-1', labelVi: 'Sọc kem quế 1', d: 'M 160,65 L 175,65 L 185,100 L 170,100 Z' },
      { id: 'wafer-stripe-2', labelVi: 'Sọc kem quế 2', d: 'M 180,115 L 195,115 L 205,150 L 190,150 Z' },

      // Whipped Cream Cloud
      { id: 'whipped-cream', labelVi: 'Lớp kem tươi xoắn trắng', d: 'M 210,120 C 190,80 310,80 290,120 C 315,130 315,155 295,160 C 275,160 260,145 250,150 C 240,145 225,160 205,160 C 185,155 185,130 210,120 Z' },

      // Ice Cream Scoop Left (Strawberry Pink)
      { id: 'scoop-strawberry', labelVi: 'Viên kem dâu hồng trái', d: 'M 150,195 C 130,140 220,130 235,175 C 220,210 160,225 150,195 Z' },

      // Ice Cream Scoop Right (Vanilla Yellow)
      { id: 'scoop-vanilla', labelVi: 'Viên kem vani vàng phải', d: 'M 265,175 C 280,130 370,140 350,195 C 340,225 280,210 265,175 Z' },

      // Ice Cream Scoop Center (Chocolate)
      { id: 'scoop-center', labelVi: 'Viên kem socola giữa', d: 'M 180,180 C 180,140 320,140 320,180 C 340,210 330,245 300,245 C 275,235 250,240 225,235 C 195,245 170,210 180,180 Z' },

      // Chocolate Drizzle Drops
      { id: 'choc-drip-1', labelVi: 'Giọt sốt socola chảy 1', d: 'M 205,210 C 200,250 225,250 220,210 Z' },
      { id: 'choc-drip-2', labelVi: 'Giọt sốt socola chảy 2', d: 'M 275,210 C 270,260 295,260 290,210 Z' },

      // Rainbow Sprinkles
      { id: 'sprinkle-1', labelVi: 'Hạt cốm màu 1', d: 'M 220,160 L 235,165 L 232,173 L 217,168 Z' },
      { id: 'sprinkle-2', labelVi: 'Hạt cốm màu 2', d: 'M 270,165 L 285,160 L 287,168 L 272,173 Z' },

      // Glass Sundae Cup
      { id: 'glass-bowl', labelVi: 'Thân ly thủy tinh trong suốt', d: 'M 140,230 L 360,230 C 350,330 280,360 265,360 L 265,420 L 235,420 L 235,360 C 220,360 150,330 140,230 Z' },
      { id: 'glass-base', labelVi: 'Chân đế ly kem', d: 'M 190,420 L 310,420 C 320,455 180,455 190,420 Z' },

      // Sparkles around
      { id: 'sparkle-left', labelVi: 'Ánh lấp lánh trái', d: 'M 100,140 L 105,155 L 120,160 L 105,165 L 100,180 L 95,165 L 80,160 L 95,155 Z' },
      { id: 'sparkle-right', labelVi: 'Ánh lấp lánh phải', d: 'M 400,160 L 405,175 L 420,180 L 405,185 L 400,200 L 395,185 L 380,180 L 395,175 Z' }
    ]
  }
];
