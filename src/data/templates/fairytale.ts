import { ColoringTemplate } from '../../types';

export const FAIRYTALE_TEMPLATES: ColoringTemplate[] = [
  // 1. KỲ LÂN CẦU VỒNG
  {
    id: 'fairy-unicorn',
    titleVi: 'Kỳ Lân Một Sừng Cầu Vồng',
    titleEn: 'Magical Rainbow Unicorn',
    category: 'fairytale',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['kỳ lân', 'unicorn', 'công chúa', 'cầu vồng'],
    regions: [
      { id: 'uni-horn', labelVi: 'Sừng phép thuật vàng', d: 'M 220,120 L 200,40 L 245,100 Z' },
      { id: 'uni-ear-out', labelVi: 'Tai kỳ lân', d: 'M 270,110 C 280,75 305,80 300,120 Z' },
      { id: 'uni-ear-in', labelVi: 'Lòng tai hồng', d: 'M 275,105 C 280,85 295,90 292,115 Z' },
      { id: 'uni-head', labelVi: 'Khuôn mặt kỳ lân trắng', d: 'M 140,210 C 140,160 210,120 270,140 C 290,190 270,260 210,250 L 170,245 C 145,245 140,230 140,210 Z' },
      { id: 'uni-eye', labelVi: 'Đôi mắt thiên thần', d: 'M 200,185 C 210,205 230,205 240,185 Z' },
      { id: 'uni-cheek', labelVi: 'Má hồng thắm', d: 'M 185,215 A 12,8 0 1,0 209,215 A 12,8 0 1,0 185,215 Z' },
      { id: 'uni-mane-1', labelVi: 'Bờm cầu vồng lọn 1', d: 'M 260,130 C 310,120 340,170 310,200 C 290,180 270,160 260,130 Z' },
      { id: 'uni-mane-2', labelVi: 'Bờm cầu vồng lọn 2', d: 'M 290,180 C 350,190 360,250 320,270 C 290,240 280,210 290,180 Z' },
      { id: 'uni-mane-3', labelVi: 'Bờm cầu vồng lọn 3', d: 'M 280,240 C 340,270 340,330 290,340 C 270,300 270,270 280,240 Z' },
      { id: 'uni-body', labelVi: 'Thân mình kỳ lân', d: 'M 190,260 C 190,340 180,410 220,440 L 320,440 C 370,410 360,340 330,280 C 290,260 230,250 190,260 Z' },
      { id: 'uni-tail-1', labelVi: 'Đuôi thần tiên lọn 1', d: 'M 350,330 C 420,340 450,400 410,430 C 370,410 360,370 350,330 Z' },
      { id: 'uni-tail-2', labelVi: 'Đuôi thần tiên lọn 2', d: 'M 345,370 C 400,400 430,450 380,470 C 350,450 340,410 345,370 Z' },
      { id: 'uni-hoof-fl', labelVi: 'Móng vàng trước trái', d: 'M 210,425 L 245,425 L 245,445 L 210,445 Z' },
      { id: 'uni-hoof-fr', labelVi: 'Móng vàng trước phải', d: 'M 285,425 L 320,425 L 320,445 L 285,445 Z' }
    ]
  },

  // 2. LÂU ĐÀI CỔ TÍCH NGUY NGA
  {
    id: 'fairy-castle',
    titleVi: 'Lâu Đài Cổ Tích Nguy Nga',
    titleEn: 'Magical Fairy Castle',
    category: 'fairytale',
    difficulty: 'hard',
    viewBox: '0 0 500 500',
    tags: ['lâu đài', 'castle', 'cổ tích'],
    regions: [
      { id: 'cas-tower-mid-roof', labelVi: 'Chóp mái tháp giữa', d: 'M 215,110 L 250,40 L 285,110 Z' },
      { id: 'cas-tower-mid', labelVi: 'Tháp chính giữa', d: 'M 215,110 L 285,110 L 285,240 L 215,240 Z' },
      { id: 'cas-flag-mid', labelVi: 'Lá cờ tháp giữa', d: 'M 250,40 L 250,20 L 280,30 L 250,40 Z' },
      { id: 'cas-tower-left-roof', labelVi: 'Chóp tháp trái', d: 'M 100,170 L 140,90 L 180,170 Z' },
      { id: 'cas-tower-left', labelVi: 'Thân tháp trái', d: 'M 110,170 L 170,170 L 170,360 L 110,360 Z' },
      { id: 'cas-tower-right-roof', labelVi: 'Chóp tháp phải', d: 'M 320,170 L 360,90 L 400,170 Z' },
      { id: 'cas-tower-right', labelVi: 'Thân tháp phải', d: 'M 330,170 L 390,170 L 390,360 L 330,360 Z' },
      { id: 'cas-wall-center', labelVi: 'Tường thành trung tâm', d: 'M 170,240 L 330,240 L 330,420 L 170,420 Z' },
      { id: 'cas-door', labelVi: 'Cổng thành mái vòm', d: 'M 220,420 L 220,330 C 220,300 280,300 280,330 L 280,420 Z' },
      { id: 'cas-hill', labelVi: 'Đồi cỏ xanh', d: 'M 20,420 Q 250,380 480,420 L 480,490 L 20,490 Z' }
    ]
  },

  // 3. CÔNG CHÚA NHỎ ĐÁNG YÊU
  {
    id: 'fairy-princess',
    titleVi: 'Công Chúa Nhỏ Đáng Yêu',
    titleEn: 'Sweet Little Princess',
    category: 'fairytale',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['công chúa', 'princess', 'vương miện'],
    regions: [
      { id: 'pr-crown', labelVi: 'Vương miện vàng', d: 'M 215,95 L 220,60 L 235,80 L 250,50 L 265,80 L 280,60 L 285,95 Z' },
      { id: 'pr-hair-top', labelVi: 'Mái tóc bồng bềnh', d: 'M 170,140 C 170,80 330,80 330,140 C 350,220 340,280 310,290 C 300,220 300,180 290,160 C 260,180 240,180 210,160 C 200,180 200,220 190,290 C 160,280 150,220 170,140 Z' },
      { id: 'pr-face', labelVi: 'Khuôn mặt tròn xinh', d: 'M 205,150 C 205,130 295,130 295,150 C 295,215 205,215 205,150 Z' },
      { id: 'pr-eye-l', labelVi: 'Mắt búp bê trái', d: 'M 225,165 A 7,9 0 1,0 239,165 A 7,9 0 1,0 225,165 Z' },
      { id: 'pr-eye-r', labelVi: 'Mắt búp bê phải', d: 'M 261,165 A 7,9 0 1,0 275,165 A 7,9 0 1,0 261,165 Z' },
      { id: 'pr-cheek-l', labelVi: 'Má hồng xinh trái', d: 'M 215,185 A 9,6 0 1,0 233,185 A 9,6 0 1,0 215,185 Z' },
      { id: 'pr-cheek-r', labelVi: 'Má hồng xinh phải', d: 'M 267,185 A 9,6 0 1,0 285,185 A 9,6 0 1,0 267,185 Z' },
      { id: 'pr-dress-top', labelVi: 'Áo đầm công chúa', d: 'M 220,215 L 280,215 L 290,270 L 210,270 Z' },
      { id: 'pr-dress-skirt', labelVi: 'Váy xòe lộng lẫy', d: 'M 210,270 L 290,270 C 340,320 390,400 380,450 L 120,450 C 110,400 160,320 210,270 Z' },
      { id: 'pr-wand-star', labelVi: 'Đũa phép ngôi sao', d: 'M 130,240 L 140,265 L 165,265 L 145,280 L 155,305 L 130,290 L 105,305 L 115,280 L 95,265 L 120,265 Z' },
      { id: 'pr-wand-stick', labelVi: 'Thân đũa thần', d: 'M 128,290 L 132,290 L 145,390 L 141,390 Z' }
    ]
  }
];
