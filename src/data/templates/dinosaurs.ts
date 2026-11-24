import { ColoringTemplate } from '../../types';

export const DINOSAUR_TEMPLATES: ColoringTemplate[] = [
  // 1. BÉ KHỦNG LONG ĐỘI VỎ TRỨNG (BABY DINO HATCHING)
  {
    id: 'dino-baby-egg',
    titleVi: 'Bé Khủng Long Đội Vỏ Trứng',
    titleEn: 'Baby Dino Hatching from Egg',
    category: 'dinosaurs',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['khủng long', 'dino', 'dễ thương', 'baby dino'],
    regions: [
      { id: 'cloud-top-1', labelVi: 'Mây xanh 1', d: 'M 40,70 C 40,50 80,40 100,60 C 120,45 150,55 155,75 C 170,75 175,95 160,105 L 40,105 Z' },
      { id: 'cloud-top-2', labelVi: 'Mây xanh 2', d: 'M 350,60 C 350,40 390,30 410,50 C 430,35 460,45 465,65 C 480,65 485,85 470,95 L 350,95 Z' },
      { id: 'dino-sun', labelVi: 'Mặt trời chiếu sáng', d: 'M 215,30 A 35,35 0 1,0 285,30 A 35,35 0 1,0 215,30 Z' },

      // Egg Shell Hat on Head
      { id: 'egg-hat', labelVi: 'Vỏ trứng đội đầu', d: 'M 190,120 C 190,65 310,65 310,120 L 290,110 L 270,125 L 250,110 L 230,125 L 210,110 Z' },
      { id: 'egg-hat-spot', labelVi: 'Đốm trứng', d: 'M 240,85 A 10,10 0 1,0 260,85 A 10,10 0 1,0 240,85 Z' },

      // Baby Dino Head
      { id: 'dino-head', labelVi: 'Đầu khủng long xanh', d: 'M 170,140 C 150,180 150,230 180,250 C 200,265 240,265 270,255 C 310,255 340,240 340,190 C 340,135 290,115 220,125 Z' },

      // Big Sparkling Eye
      { id: 'dino-eye-outer', labelVi: 'Mắt to tròn', d: 'M 205,175 C 205,150 245,150 245,175 C 245,200 205,200 205,175 Z' },
      { id: 'dino-eye-shine-1', labelVi: 'Ánh sáng mắt to', d: 'M 215,165 A 6,6 0 1,0 227,165 A 6,6 0 1,0 215,165 Z' },
      { id: 'dino-eye-shine-2', labelVi: 'Ánh sáng mắt nhỏ', d: 'M 230,182 A 3,3 0 1,0 236,182 A 3,3 0 1,0 230,182 Z' },
      { id: 'dino-cheek', labelVi: 'Má hồng thắm', d: 'M 180,215 A 14,9 0 1,0 208,215 A 14,9 0 1,0 180,215 Z' },
      { id: 'dino-mouth', labelVi: 'Miệng cười hé răng sún', d: 'M 225,225 C 245,245 285,245 300,225 C 290,255 240,255 225,225 Z' },

      // Dino Body in Egg Shell
      { id: 'dino-body', labelVi: 'Cổ và lưng khủng long', d: 'M 195,250 C 180,280 180,310 200,330 L 300,330 C 320,310 320,280 305,250 Z' },
      { id: 'dino-arm-l', labelVi: 'Tay nhỏ trái', d: 'M 210,280 C 190,295 195,315 215,310 Z' },
      { id: 'dino-arm-r', labelVi: 'Tay nhỏ phải', d: 'M 280,280 C 300,295 295,315 275,310 Z' },

      // Back Spikes
      { id: 'dino-spike-1', labelVi: 'Gai lưng cam 1', d: 'M 175,170 L 155,160 L 170,185 Z' },
      { id: 'dino-spike-2', labelVi: 'Gai lưng cam 2', d: 'M 170,205 L 150,200 L 170,220 Z' },
      { id: 'dino-spike-3', labelVi: 'Gai lưng cam 3', d: 'M 175,250 L 155,255 L 180,270 Z' },

      // Egg Shell Bottom (Dino sitting inside)
      { id: 'egg-bottom', labelVi: 'Nửa quả trứng dưới', d: 'M 150,320 L 180,305 L 210,325 L 240,305 L 270,325 L 300,305 L 330,325 L 350,320 C 370,360 370,440 330,465 L 170,465 C 130,440 130,360 150,320 Z' },
      { id: 'egg-bottom-spot-1', labelVi: 'Họa tiết trứng 1', d: 'M 180,370 A 18,18 0 1,0 216,370 A 18,18 0 1,0 180,370 Z' },
      { id: 'egg-bottom-spot-2', labelVi: 'Họa tiết trứng 2', d: 'M 280,390 A 22,22 0 1,0 324,390 A 22,22 0 1,0 280,390 Z' },
      { id: 'egg-bottom-spot-3', labelVi: 'Họa tiết trứng 3', d: 'M 220,425 A 14,14 0 1,0 248,425 A 14,14 0 1,0 220,425 Z' },

      // Daisy Flowers on Ground
      { id: 'flower-left', labelVi: 'Hoa cúc trắng trái', d: 'M 70,430 A 20,20 0 1,0 110,430 A 20,20 0 1,0 70,430 Z' },
      { id: 'flower-center-l', labelVi: 'Nhụy hoa trái', d: 'M 83,430 A 7,7 0 1,0 97,430 A 7,7 0 1,0 83,430 Z' },
      { id: 'flower-right', labelVi: 'Hoa cúc trắng phải', d: 'M 390,430 A 20,20 0 1,0 430,430 A 20,20 0 1,0 390,430 Z' },
      { id: 'flower-center-r', labelVi: 'Nhụy hoa phải', d: 'M 403,430 A 7,7 0 1,0 417,430 A 7,7 0 1,0 403,430 Z' },
      { id: 'ground', labelVi: 'Bãi cỏ xanh', d: 'M 10,460 Q 250,445 490,460 L 490,490 L 10,490 Z' }
    ]
  },

  // 2. KHỦNG LONG CỔ DÀI BRACHIO VUI TƯƠI
  {
    id: 'dino-longneck',
    titleVi: 'Khủng Long Cổ Dài & Cây Táo',
    titleEn: 'Gentle Long-Neck Dino',
    category: 'dinosaurs',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['cổ dài', 'brachiosaurus', 'dino'],
    regions: [
      { id: 'tree-leaves', labelVi: 'Tán cây xanh mướt', d: 'M 370,120 C 340,70 420,30 460,70 C 490,70 500,120 470,150 C 490,190 440,210 400,180 C 370,200 340,160 370,120 Z' },
      { id: 'tree-trunk', labelVi: 'Thân cây gỗ', d: 'M 425,180 L 420,460 L 445,460 L 445,180 Z' },
      { id: 'apple-1', labelVi: 'Quả táo đỏ 1', d: 'M 395,115 A 8,8 0 1,0 411,115 A 8,8 0 1,0 395,115 Z' },
      { id: 'apple-2', labelVi: 'Quả táo đỏ 2', d: 'M 440,135 A 8,8 0 1,0 456,135 A 8,8 0 1,0 440,135 Z' },

      // Longneck Dino Head & Smile
      { id: 'dino-head', labelVi: 'Đầu khủng long', d: 'M 300,140 C 300,105 345,105 355,135 C 365,155 340,175 305,170 Z' },
      { id: 'dino-eye', labelVi: 'Mắt hiền lành', d: 'M 320,125 A 6,6 0 1,0 332,125 A 6,6 0 1,0 320,125 Z' },
      { id: 'dino-cheek', labelVi: 'Má hồng', d: 'M 335,145 A 7,5 0 1,0 349,145 A 7,5 0 1,0 335,145 Z' },

      // Long Graceful Neck
      { id: 'dino-neck', labelVi: 'Chiếc cổ vươn cao', d: 'M 295,160 C 270,230 220,290 195,320 L 235,330 C 265,290 320,220 330,155 Z' },

      // Body & Spots
      { id: 'dino-body', labelVi: 'Thân khủng long mập', d: 'M 80,360 C 40,360 40,335 20,330 C 40,365 75,410 130,415 L 260,410 C 280,360 260,320 220,320 C 160,320 110,340 80,360 Z' },
      { id: 'dino-spot-1', labelVi: 'Đốm lưng vàng 1', d: 'M 130,345 A 14,14 0 1,0 158,345 A 14,14 0 1,0 130,345 Z' },
      { id: 'dino-spot-2', labelVi: 'Đốm lưng vàng 2', d: 'M 180,355 A 12,12 0 1,0 204,355 A 12,12 0 1,0 180,355 Z' },

      // Legs
      { id: 'dino-leg-fl', labelVi: 'Chân trước 1', d: 'M 195,395 L 195,465 L 225,465 L 230,395 Z' },
      { id: 'dino-leg-fr', labelVi: 'Chân trước 2', d: 'M 235,385 L 235,455 L 260,455 L 260,385 Z' },
      { id: 'dino-leg-bl', labelVi: 'Chân sau 1', d: 'M 95,395 L 95,465 L 125,465 L 130,395 Z' },
      { id: 'dino-leg-br', labelVi: 'Chân sau 2', d: 'M 135,385 L 135,455 L 160,455 L 160,385 Z' }
    ]
  }
];
