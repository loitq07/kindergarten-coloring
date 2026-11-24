import { ColoringTemplate } from '../../types';

export const FAIRYTALE_TEMPLATES: ColoringTemplate[] = [
  // 1. KỲ LÂN CẦU VỒNG (CHIBI UNICORN)
  {
    id: 'fairy-unicorn',
    titleVi: 'Kỳ Lân Cầu Vồng Thần Tiên',
    titleEn: 'Magical Rainbow Unicorn',
    category: 'fairytale',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['kỳ lân', 'unicorn', 'công chúa', 'cầu vồng'],
    regions: [
      { id: 'moon', labelVi: 'Mặt trăng khuyết vàng', d: 'M 400,50 C 440,65 460,110 445,150 C 425,120 400,105 385,115 C 375,85 385,60 400,50 Z' },
      { id: 'star-1', labelVi: 'Ngôi sao thần tiên 1', d: 'M 80,80 L 86,95 L 102,97 L 90,108 L 94,124 L 80,115 L 66,124 L 70,108 L 58,97 L 74,95 Z' },
      { id: 'star-2', labelVi: 'Ngôi sao thần tiên 2', d: 'M 140,50 L 144,60 L 155,61 L 147,68 L 150,79 L 140,73 L 130,79 L 133,68 L 125,61 L 136,60 Z' },

      // Horn & Ears
      { id: 'uni-horn', labelVi: 'Sừng phép thuật xoắn ốc', d: 'M 215,120 L 190,30 L 245,100 Z' },
      { id: 'uni-horn-ring-1', labelVi: 'Vòng sừng 1', d: 'M 200,60 L 225,80 L 235,70 L 210,50 Z' },
      { id: 'uni-horn-ring-2', labelVi: 'Vòng sừng 2', d: 'M 208,85 L 235,105 L 243,95 L 216,75 Z' },
      { id: 'uni-ear-out', labelVi: 'Tai trắng nhỏ', d: 'M 270,105 C 280,65 315,70 305,115 Z' },
      { id: 'uni-ear-in', labelVi: 'Lòng tai hồng', d: 'M 278,100 C 285,75 305,80 300,110 Z' },

      // Head & Face
      { id: 'uni-head', labelVi: 'Khuôn mặt tròn xinh', d: 'M 140,200 C 140,145 220,115 275,135 C 295,180 280,250 220,245 L 175,240 C 145,240 140,225 140,200 Z' },
      { id: 'uni-eye-lash', labelVi: 'Đôi mi mắt cong', d: 'M 205,180 C 215,200 235,200 245,180 Z' },
      { id: 'uni-cheek', labelVi: 'Má hồng hình tim', d: 'M 185,210 C 180,200 170,210 190,225 C 210,210 200,200 195,210 Z' },

      // Flowing Rainbow Mane (4 locks)
      { id: 'uni-mane-1', labelVi: 'Lọn tóc cầu vồng 1 (Hồng)', d: 'M 260,125 C 315,110 350,160 320,195 C 295,175 275,155 260,125 Z' },
      { id: 'uni-mane-2', labelVi: 'Lọn tóc cầu vồng 2 (Tím)', d: 'M 290,175 C 360,180 375,245 330,265 C 300,235 285,205 290,175 Z' },
      { id: 'uni-mane-3', labelVi: 'Lọn tóc cầu vồng 3 (Lam)', d: 'M 285,235 C 350,265 350,330 300,340 C 275,300 275,265 285,235 Z' },

      // Wings
      { id: 'uni-wing-top', labelVi: 'Cánh lông vũ trên', d: 'M 290,270 C 370,220 410,270 380,310 C 340,305 310,290 290,270 Z' },
      { id: 'uni-wing-bot', labelVi: 'Cánh lông vũ dưới', d: 'M 320,305 C 360,320 370,350 340,360 C 320,350 310,330 320,305 Z' },

      // Body & Legs
      { id: 'uni-body', labelVi: 'Thân kỳ lân', d: 'M 195,250 C 195,330 185,400 220,430 L 320,430 C 370,400 360,330 330,270 C 290,250 235,240 195,250 Z' },
      { id: 'uni-hoof-fl', labelVi: 'Móng vàng trước trái', d: 'M 210,415 L 245,415 L 245,435 L 210,435 Z' },
      { id: 'uni-hoof-fr', labelVi: 'Móng vàng trước phải', d: 'M 285,415 L 320,415 L 320,435 L 285,435 Z' },

      // Cloud Bed under feet
      { id: 'cloud-bed', labelVi: 'Đệm mây bồng bềnh', d: 'M 60,440 C 40,400 120,390 150,420 C 180,390 260,390 290,420 C 320,390 400,390 430,420 C 470,410 490,460 450,480 L 60,480 Z' }
    ]
  }
];
