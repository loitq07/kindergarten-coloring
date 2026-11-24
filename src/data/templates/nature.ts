import { ColoringTemplate } from '../../types';

export const NATURE_TEMPLATES: ColoringTemplate[] = [
  // 1. NHÀ NẤM CỔ TÍCH
  {
    id: 'nature-mushroom-house',
    titleVi: 'Ngôi Nhà Nấm Cổ Tích',
    titleEn: 'Fairy Mushroom House',
    category: 'nature',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['nhà nấm', 'mushroom', 'cổ tích', 'hoa cỏ'],
    regions: [
      { id: 'mush-cap', labelVi: 'Mũ nấm đỏ rực', d: 'M 100,250 C 90,110 410,110 400,250 C 340,270 160,270 100,250 Z' },
      { id: 'mush-spot-1', labelVi: 'Đốm tròn trắng 1', d: 'M 160,180 A 25,25 0 1,0 210,180 A 25,25 0 1,0 160,180 Z' },
      { id: 'mush-spot-2', labelVi: 'Đốm tròn trắng 2', d: 'M 290,165 A 30,30 0 1,0 350,165 A 30,30 0 1,0 290,165 Z' },
      { id: 'mush-spot-3', labelVi: 'Đốm tròn trắng 3', d: 'M 230,225 A 20,20 0 1,0 270,225 A 20,20 0 1,0 230,225 Z' },
      { id: 'mush-stem', labelVi: 'Thân nhà nấm', d: 'M 170,260 C 160,330 160,400 180,440 L 320,440 C 340,400 340,330 330,260 Z' },
      { id: 'mush-door', labelVi: 'Cửa ra vào gỗ xinh', d: 'M 220,440 L 220,360 C 220,335 280,335 280,360 L 280,440 Z' },
      { id: 'mush-door-knob', labelVi: 'Tay nắm cửa', d: 'M 268,395 A 4,4 0 1,0 276,395 A 4,4 0 1,0 268,395 Z' },
      { id: 'mush-window', labelVi: 'Cửa sổ tròn tầng trên', d: 'M 230,295 A 20,20 0 1,0 270,295 A 20,20 0 1,0 230,295 Z' },
      { id: 'mush-grass', labelVi: 'Bụi cỏ quanh nhà', d: 'M 40,440 Q 250,420 460,440 L 460,480 L 40,480 Z' }
    ]
  },

  // 2. HOA HƯỚNG DƯƠNG RẠNG RỠ
  {
    id: 'nature-sunflower',
    titleVi: 'Hoa Hướng Dương Rạng Rỡ',
    titleEn: 'Happy Sunflower',
    category: 'nature',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['hoa hướng dương', 'sunflower', 'mặt trời'],
    regions: [
      { id: 'sf-stem', labelVi: 'Thân cây xanh', d: 'M 240,310 L 240,480 L 260,480 L 260,310 Z' },
      { id: 'sf-leaf-l', labelVi: 'Lá cây to trái', d: 'M 240,380 C 160,350 140,410 180,440 C 210,430 230,410 240,380 Z' },
      { id: 'sf-leaf-r', labelVi: 'Lá cây to phải', d: 'M 260,360 C 340,330 360,390 320,420 C 290,410 270,390 260,360 Z' },
      { id: 'sf-petal-top', labelVi: 'Cánh hoa trên', d: 'M 230,130 C 240,70 260,70 270,130 Z' },
      { id: 'sf-petal-bot', labelVi: 'Cánh hoa dưới', d: 'M 230,290 C 240,350 260,350 270,290 Z' },
      { id: 'sf-petal-left', labelVi: 'Cánh hoa trái', d: 'M 170,190 C 110,200 110,220 170,230 Z' },
      { id: 'sf-petal-right', labelVi: 'Cánh hoa phải', d: 'M 330,190 C 390,200 390,220 330,230 Z' },
      { id: 'sf-petal-tl', labelVi: 'Cánh hoa chéo trên trái', d: 'M 185,150 C 140,105 155,90 205,135 Z' },
      { id: 'sf-petal-tr', labelVi: 'Cánh hoa chéo trên phải', d: 'M 315,150 C 360,105 345,90 295,135 Z' },
      { id: 'sf-petal-bl', labelVi: 'Cánh hoa chéo dưới trái', d: 'M 185,270 C 140,315 155,330 205,285 Z' },
      { id: 'sf-petal-br', labelVi: 'Cánh hoa chéo dưới phải', d: 'M 315,270 C 360,315 345,330 295,285 Z' },
      { id: 'sf-center', labelVi: 'Nhụy hoa mặt cười', d: 'M 170,210 A 80,80 0 1,0 330,210 A 80,80 0 1,0 170,210 Z' },
      { id: 'sf-eye-l', labelVi: 'Mắt hoa trái', d: 'M 215,195 A 10,12 0 1,0 235,195 A 10,12 0 1,0 215,195 Z' },
      { id: 'sf-eye-r', labelVi: 'Mắt hoa phải', d: 'M 265,195 A 10,12 0 1,0 285,195 A 10,12 0 1,0 265,195 Z' },
      { id: 'sf-mouth', labelVi: 'Miệng cười rạng rỡ', d: 'M 230,225 Q 250,250 270,225 Z' }
    ]
  },

  // 3. CẦU VỒNG SAU MƯA
  {
    id: 'nature-rainbow',
    titleVi: 'Cầu Vồng & Mặt Trời Cười',
    titleEn: 'Smiling Rainbow & Sun',
    category: 'nature',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['cầu vồng', 'rainbow', 'mặt trời', 'mây'],
    regions: [
      { id: 'rb-sun', labelVi: 'Mặt trời tỏa nắng', d: 'M 70,120 A 45,45 0 1,0 160,120 A 45,45 0 1,0 70,120 Z' },
      { id: 'rb-arc-1', labelVi: 'Dải màu 1 (Đỏ)', d: 'M 60,380 A 190,190 0 0,1 440,380 L 415,380 A 165,165 0 0,0 85,380 Z' },
      { id: 'rb-arc-2', labelVi: 'Dải màu 2 (Cam)', d: 'M 85,380 A 165,165 0 0,1 415,380 L 390,380 A 140,140 0 0,0 110,380 Z' },
      { id: 'rb-arc-3', labelVi: 'Dải màu 3 (Vàng)', d: 'M 110,380 A 140,140 0 0,1 390,380 L 365,380 A 115,115 0 0,0 135,380 Z' },
      { id: 'rb-arc-4', labelVi: 'Dải màu 4 (Lục)', d: 'M 135,380 A 115,115 0 0,1 365,380 L 340,380 A 90,90 0 0,0 160,380 Z' },
      { id: 'rb-arc-5', labelVi: 'Dải màu 5 (Lam)', d: 'M 160,380 A 90,90 0 0,1 340,380 L 315,380 A 65,65 0 0,0 185,380 Z' },
      { id: 'rb-cloud-left', labelVi: 'Mây trắng bồng bềnh trái', d: 'M 40,380 C 30,340 70,320 100,340 C 120,310 160,320 170,350 C 190,360 180,410 150,420 L 60,420 C 30,410 30,390 40,380 Z' },
      { id: 'rb-cloud-right', labelVi: 'Mây trắng bồng bềnh phải', d: 'M 330,380 C 320,340 360,320 390,340 C 410,310 450,320 460,350 C 480,360 470,410 440,420 L 350,420 C 320,410 320,390 330,380 Z' }
    ]
  }
];
