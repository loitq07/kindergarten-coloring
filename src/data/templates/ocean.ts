import { ColoringTemplate } from '../../types';

export const OCEAN_TEMPLATES: ColoringTemplate[] = [
  // 1. CÁ VOI PHUN NƯỚC
  {
    id: 'ocean-whale',
    titleVi: 'Chú Cá Voi Phun Nước',
    titleEn: 'Happy Whale Spouting Water',
    category: 'ocean',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['cá voi', 'whale', 'biển', 'đại dương'],
    regions: [
      { id: 'water-spout-left', labelVi: 'Tia nước trái', d: 'M 190,130 C 150,110 140,50 170,40 C 185,50 180,90 200,120 Z' },
      { id: 'water-spout-mid', labelVi: 'Tia nước giữa', d: 'M 200,120 C 195,70 215,30 230,35 C 240,50 230,90 210,120 Z' },
      { id: 'water-spout-right', labelVi: 'Tia nước phải', d: 'M 215,125 C 235,90 250,55 275,50 C 285,65 260,110 225,130 Z' },
      { id: 'whale-body', labelVi: 'Lưng cá voi', d: 'M 70,300 C 60,200 160,130 260,150 C 370,170 410,250 450,230 C 470,220 460,270 430,290 C 380,310 320,310 260,340 C 170,380 90,370 70,300 Z' },
      { id: 'whale-belly', labelVi: 'Bụng trắng cá voi', d: 'M 70,300 C 90,370 170,380 260,340 C 240,360 170,395 100,370 C 80,340 70,315 70,300 Z' },
      { id: 'whale-tail-top', labelVi: 'Đuôi trên', d: 'M 440,240 C 460,200 490,205 480,245 C 460,255 450,255 440,240 Z' },
      { id: 'whale-tail-bot', labelVi: 'Đuôi dưới', d: 'M 435,275 C 460,285 485,305 470,325 C 450,320 440,290 435,275 Z' },
      { id: 'whale-fin', labelVi: 'Vây cá voi', d: 'M 190,300 C 220,320 230,360 205,370 C 185,370 175,340 190,300 Z' },
      { id: 'whale-eye', labelVi: 'Mắt cười', d: 'M 130,220 A 10,10 0 1,0 150,220 A 10,10 0 1,0 130,220 Z' },
      { id: 'whale-cheek', labelVi: 'Má hồng', d: 'M 115,245 A 12,8 0 1,0 139,245 A 12,8 0 1,0 115,245 Z' },
      { id: 'wave-1', labelVi: 'Sóng biển 1', d: 'M 20,400 Q 80,370 140,400 Q 200,430 260,400 Q 320,370 380,400 Q 440,430 490,400 L 490,480 L 20,480 Z' }
    ]
  },

  // 2. RÙA BIỂN NHỎ
  {
    id: 'ocean-turtle',
    titleVi: 'Bé Rùa Biển Bơi Lội',
    titleEn: 'Swimming Sea Turtle',
    category: 'ocean',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['rùa biển', 'turtle', 'sinh vật biển'],
    regions: [
      { id: 'turtle-head', labelVi: 'Đầu rùa', d: 'M 220,90 C 220,50 280,50 280,90 C 280,120 220,120 220,90 Z' },
      { id: 'turtle-eye-l', labelVi: 'Mắt trái', d: 'M 230,75 A 6,6 0 1,0 242,75 A 6,6 0 1,0 230,75 Z' },
      { id: 'turtle-eye-r', labelVi: 'Mắt phải', d: 'M 258,75 A 6,6 0 1,0 270,75 A 6,6 0 1,0 258,75 Z' },
      { id: 'turtle-flipper-fl', labelVi: 'Vây trước trái', d: 'M 170,160 C 90,130 50,180 80,240 C 120,240 160,210 175,190 Z' },
      { id: 'turtle-flipper-fr', labelVi: 'Vây trước phải', d: 'M 330,160 C 410,130 450,180 420,240 C 380,240 340,210 325,190 Z' },
      { id: 'turtle-flipper-bl', labelVi: 'Vây sau trái', d: 'M 180,340 C 130,370 140,420 180,410 C 200,390 200,360 190,340 Z' },
      { id: 'turtle-flipper-br', labelVi: 'Vây sau phải', d: 'M 320,340 C 370,370 360,420 320,410 C 300,390 300,360 310,340 Z' },
      { id: 'turtle-shell-rim', labelVi: 'Vành mai rùa', d: 'M 250,120 C 340,120 380,180 380,270 C 380,360 340,400 250,400 C 160,400 120,360 120,270 C 120,180 160,120 250,120 Z' },
      { id: 'turtle-shell-center', labelVi: 'Mảng mai trung tâm', d: 'M 250,210 L 290,240 L 290,290 L 250,320 L 210,290 L 210,240 Z' },
      { id: 'turtle-shell-top', labelVi: 'Mảng mai trên', d: 'M 250,140 C 275,140 285,160 290,195 L 250,210 L 210,195 C 215,160 225,140 250,140 Z' },
      { id: 'turtle-shell-left', labelVi: 'Mảng mai trái', d: 'M 140,260 C 145,210 170,180 200,210 L 210,260 L 195,300 C 165,300 140,280 140,260 Z' },
      { id: 'turtle-shell-right', labelVi: 'Mảng mai phải', d: 'M 360,260 C 355,210 330,180 300,210 L 290,260 L 305,300 C 335,300 360,280 360,260 Z' },
      { id: 'bubble-1', labelVi: 'Bong bóng nhỏ', d: 'M 390,80 A 15,15 0 1,0 420,80 A 15,15 0 1,0 390,80 Z' },
      { id: 'bubble-2', labelVi: 'Bong bóng to', d: 'M 410,40 A 20,20 0 1,0 450,40 A 20,20 0 1,0 410,40 Z' }
    ]
  },

  // 3. BẠCH TUỘC ĐEO NƠ
  {
    id: 'ocean-octopus',
    titleVi: 'Bạch Tuộc Nhỏ Ngộ Nghĩnh',
    titleEn: 'Happy Little Octopus',
    category: 'ocean',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['bạch tuộc', 'octopus', 'biển sâu'],
    regions: [
      { id: 'octo-head', labelVi: 'Đầu tròn bạch tuộc', d: 'M 140,210 C 140,110 360,110 360,210 C 360,280 140,280 140,210 Z' },
      { id: 'octo-bow-left', labelVi: 'Cánh nơ trái', d: 'M 320,100 C 290,85 295,125 320,115 Z' },
      { id: 'octo-bow-right', labelVi: 'Cánh nơ phải', d: 'M 340,105 C 365,85 365,125 340,115 Z' },
      { id: 'octo-bow-center', labelVi: 'Nút nơ', d: 'M 320,105 A 10,10 0 1,0 340,105 A 10,10 0 1,0 320,105 Z' },
      { id: 'octo-eye-left', labelVi: 'Mắt to trái', d: 'M 190,195 A 16,18 0 1,0 222,195 A 16,18 0 1,0 190,195 Z' },
      { id: 'octo-eye-right', labelVi: 'Mắt to phải', d: 'M 278,195 A 16,18 0 1,0 310,195 A 16,18 0 1,0 278,195 Z' },
      { id: 'octo-cheek-left', labelVi: 'Má hồng trái', d: 'M 170,230 A 12,8 0 1,0 194,230 A 12,8 0 1,0 170,230 Z' },
      { id: 'octo-cheek-right', labelVi: 'Má hồng phải', d: 'M 306,230 A 12,8 0 1,0 330,230 A 12,8 0 1,0 306,230 Z' },
      { id: 'octo-mouth', labelVi: 'Miệng cười', d: 'M 235,230 Q 250,255 265,230 Z' },
      { id: 'octo-tentacle-1', labelVi: 'Xúc tu 1 (trái cùng)', d: 'M 150,265 C 100,290 80,360 120,400 C 145,395 140,360 145,320 C 150,300 170,280 175,275 Z' },
      { id: 'octo-tentacle-2', labelVi: 'Xúc tu 2', d: 'M 185,275 C 150,320 160,390 195,430 C 220,420 205,370 210,320 L 215,275 Z' },
      { id: 'octo-tentacle-3', labelVi: 'Xúc tu 3 (giữa)', d: 'M 230,275 C 220,330 225,400 250,440 C 275,400 270,330 260,275 Z' },
      { id: 'octo-tentacle-4', labelVi: 'Xúc tu 4', d: 'M 280,275 C 285,320 280,370 305,430 C 335,390 345,320 310,275 Z' },
      { id: 'octo-tentacle-5', labelVi: 'Xúc tu 5 (phải cùng)', d: 'M 325,270 C 330,290 350,310 355,330 C 360,370 355,400 380,400 C 410,360 400,290 350,265 Z' }
    ]
  },

  // 4. CHÚ CÁ HỀ TUNG TĂNG
  {
    id: 'ocean-clownfish',
    titleVi: 'Chú Cá Hề Bơi Lội',
    titleEn: 'Playful Clownfish',
    category: 'ocean',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['cá hề', 'clownfish', 'nemo'],
    regions: [
      { id: 'coral-left', labelVi: 'Rạn san hô trái', d: 'M 20,470 L 20,370 C 40,360 50,390 60,360 C 80,360 85,420 90,470 Z' },
      { id: 'coral-right', labelVi: 'Rạn san hô phải', d: 'M 410,470 C 420,400 440,410 450,380 C 470,385 480,430 480,470 Z' },
      { id: 'fish-tail', labelVi: 'Đuôi cá tròn', d: 'M 360,230 C 420,180 440,220 440,250 C 440,280 420,320 360,270 Z' },
      { id: 'fish-fin-top', labelVi: 'Vây lưng', d: 'M 190,165 C 240,110 310,140 330,195 Z' },
      { id: 'fish-fin-bot', labelVi: 'Vây bụng', d: 'M 230,320 C 260,370 300,360 305,305 Z' },
      { id: 'fish-body-front', labelVi: 'Đầu cá hề cam', d: 'M 90,250 C 90,170 170,170 180,170 L 180,330 C 170,330 90,330 90,250 Z' },
      { id: 'fish-stripe-1', labelVi: 'Sọc trắng 1', d: 'M 180,170 C 195,170 205,175 210,180 L 210,320 C 205,325 195,330 180,330 Z' },
      { id: 'fish-body-mid', labelVi: 'Thân giữa cam', d: 'M 210,180 C 240,180 270,195 280,205 L 280,295 C 270,305 240,320 210,320 Z' },
      { id: 'fish-stripe-2', labelVi: 'Sọc trắng 2', d: 'M 280,205 C 295,205 305,210 310,215 L 310,285 C 305,290 295,295 280,295 Z' },
      { id: 'fish-body-back', labelVi: 'Đuôi cuống cam', d: 'M 310,215 C 330,220 350,225 360,230 L 360,270 C 350,275 330,280 310,285 Z' },
      { id: 'fish-fin-side', labelVi: 'Vây bơi nhỏ', d: 'M 180,240 C 210,230 220,270 185,280 Z' },
      { id: 'fish-eye', labelVi: 'Mắt cá tròn xoe', d: 'M 125,225 A 12,12 0 1,0 149,225 A 12,12 0 1,0 125,225 Z' }
    ]
  }
];
