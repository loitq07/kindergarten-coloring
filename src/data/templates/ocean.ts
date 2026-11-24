import { ColoringTemplate } from '../../types';

export const OCEAN_TEMPLATES: ColoringTemplate[] = [
  // 1. CÁ HEO VUI VẺ NHẢY SÓNG
  {
    id: 'ocean-dolphin',
    titleVi: 'Cá Heo Nhảy Múa Dưới Biển',
    titleEn: 'Dancing Baby Dolphin',
    category: 'ocean',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['cá heo', 'dolphin', 'đại dương', 'biển'],
    regions: [
      { id: 'sun', labelVi: 'Mặt trời chiếu biển', d: 'M 40,40 A 40,40 0 1,0 120,40 A 40,40 0 1,0 40,40 Z' },
      { id: 'bubble-1', labelVi: 'Bong bóng nhỏ 1', d: 'M 350,110 A 12,12 0 1,0 374,110 A 12,12 0 1,0 350,110 Z' },
      { id: 'bubble-2', labelVi: 'Bong bóng to 2', d: 'M 380,60 A 18,18 0 1,0 416,60 A 18,18 0 1,0 380,60 Z' },
      { id: 'bubble-3', labelVi: 'Bong bóng nhỏ 3', d: 'M 430,100 A 10,10 0 1,0 450,100 A 10,10 0 1,0 430,100 Z' },

      // Dolphin Body
      { id: 'dol-back', labelVi: 'Lưng cá heo xanh', d: 'M 100,280 C 120,180 240,120 340,150 C 400,170 420,230 460,250 C 420,265 370,250 320,285 C 240,340 140,340 100,280 Z' },
      { id: 'dol-belly', labelVi: 'Bụng cá heo trắng', d: 'M 110,290 C 130,230 200,220 280,240 C 320,250 350,280 320,285 C 240,340 140,340 110,290 Z' },
      { id: 'dol-fin-top', labelVi: 'Vây lưng', d: 'M 240,140 C 270,90 305,115 300,150 Z' },
      { id: 'dol-fin-front', labelVi: 'Vây bơi trước', d: 'M 200,260 C 230,285 240,335 210,340 C 190,340 185,300 200,260 Z' },
      { id: 'dol-tail-top', labelVi: 'Đuôi cá heo trên', d: 'M 445,245 C 465,210 495,220 485,255 Z' },
      { id: 'dol-tail-bot', labelVi: 'Đuôi cá heo dưới', d: 'M 450,255 C 480,270 495,300 465,310 Z' },

      // Head & Eye
      { id: 'dol-eye', labelVi: 'Mắt đen cười', d: 'M 160,230 A 9,9 0 1,0 178,230 A 9,9 0 1,0 160,230 Z' },
      { id: 'dol-eye-shine', labelVi: 'Đốm sáng mắt', d: 'M 165,225 A 3,3 0 1,0 171,225 A 3,3 0 1,0 165,225 Z' },
      { id: 'dol-cheek', labelVi: 'Má hồng', d: 'M 145,250 A 10,7 0 1,0 165,250 A 10,7 0 1,0 145,250 Z' },

      // Sea Star on Rock
      { id: 'starfish', labelVi: 'Sao biển cam cười', d: 'M 90,400 L 98,420 L 120,420 L 102,432 L 109,452 L 90,440 L 71,452 L 78,432 L 60,420 L 82,420 Z' },
      { id: 'starfish-eye-l', labelVi: 'Mắt sao biển trái', d: 'M 84,426 A 2,2 0 1,0 88,426 A 2,2 0 1,0 84,426 Z' },
      { id: 'starfish-eye-r', labelVi: 'Mắt sao biển phải', d: 'M 92,426 A 2,2 0 1,0 96,426 A 2,2 0 1,0 92,426 Z' },

      // Ocean Waves
      { id: 'wave-crest-1', labelVi: 'Ngọn sóng 1', d: 'M 0,380 Q 70,330 140,380 Q 210,430 280,380 Q 350,330 420,380 Q 460,410 500,380 L 500,430 L 0,430 Z' },
      { id: 'wave-crest-2', labelVi: 'Đáy biển xanh', d: 'M 0,430 Q 80,390 160,430 Q 240,470 320,430 Q 400,390 500,430 L 500,500 L 0,500 Z' }
    ]
  }
];
