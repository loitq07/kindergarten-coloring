import { ColoringTemplate } from '../../types';

export const ANIMAL_TEMPLATES: ColoringTemplate[] = [
  // 1. MÈO CON ĐIỆU ĐÀ (KAWAII KITTY)
  {
    id: 'animal-cat',
    titleVi: 'Bé Mèo Con Điệu Đà',
    titleEn: 'Cute Kawaii Kitty',
    category: 'animals',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['mèo', 'kitty', 'cat', 'dễ thương', 'kawaii'],
    regions: [
      // Background items
      { id: 'bg-cloud-1', labelVi: 'Đám mây bồng bềnh 1', d: 'M 50,80 C 40,60 80,45 105,60 C 120,40 160,50 165,75 C 185,75 190,105 170,115 L 50,115 Z' },
      { id: 'bg-star-1', labelVi: 'Ngôi sao nhỏ 1', d: 'M 400,60 L 406,75 L 422,77 L 410,88 L 414,104 L 400,95 L 386,104 L 390,88 L 378,77 L 394,75 Z' },
      { id: 'bg-star-2', labelVi: 'Ngôi sao nhỏ 2', d: 'M 440,130 L 444,142 L 456,143 L 447,152 L 450,164 L 440,157 L 430,164 L 433,152 L 424,143 L 436,142 Z' },
      { id: 'butterfly-wing-l', labelVi: 'Cánh bướm trái', d: 'M 390,210 C 360,180 370,140 405,160 C 405,185 395,200 390,210 Z' },
      { id: 'butterfly-wing-r', labelVi: 'Cánh bướm phải', d: 'M 415,210 C 445,180 435,140 400,160 C 400,185 410,200 415,210 Z' },
      { id: 'butterfly-body', labelVi: 'Thân bướm xinh', d: 'M 400,165 C 395,180 395,210 402,220 C 409,210 409,180 404,165 Z' },

      // Cat Head & Ears
      { id: 'cat-ear-l-out', labelVi: 'Tai ngoài trái', d: 'M 140,150 C 130,90 170,80 195,115 Z' },
      { id: 'cat-ear-l-in', labelVi: 'Lòng tai hồng trái', d: 'M 150,140 C 145,105 170,100 185,122 Z' },
      { id: 'cat-ear-r-out', labelVi: 'Tai ngoài phải', d: 'M 310,115 C 335,80 375,90 365,150 Z' },
      { id: 'cat-ear-r-in', labelVi: 'Lòng tai hồng phải', d: 'M 320,122 C 335,100 360,105 355,140 Z' },
      { id: 'cat-head', labelVi: 'Khuôn mặt tròn xinh', d: 'M 145,150 C 110,190 110,260 160,285 C 195,295 310,295 345,285 C 395,260 395,190 360,150 C 315,130 190,130 145,150 Z' },

      // Bow on Head
      { id: 'cat-bow-l', labelVi: 'Cánh nơ tóc trái', d: 'M 180,95 C 150,85 155,125 180,110 Z' },
      { id: 'cat-bow-r', labelVi: 'Cánh nơ tóc phải', d: 'M 200,110 C 225,125 230,85 200,95 Z' },
      { id: 'cat-bow-mid', labelVi: 'Nút nơ tròn', d: 'M 180,95 A 10,10 0 1,0 200,95 A 10,10 0 1,0 180,95 Z' },

      // Cat Eyes & Face Details
      { id: 'cat-eye-l', labelVi: 'Mắt long lanh trái', d: 'M 175,200 C 175,170 215,170 215,200 C 215,230 175,230 175,200 Z' },
      { id: 'cat-eye-shine-l1', labelVi: 'Đốm sáng mắt trái 1', d: 'M 185,190 A 7,7 0 1,0 199,190 A 7,7 0 1,0 185,190 Z' },
      { id: 'cat-eye-shine-l2', labelVi: 'Đốm sáng mắt trái 2', d: 'M 200,205 A 3,3 0 1,0 206,205 A 3,3 0 1,0 200,205 Z' },
      { id: 'cat-eye-r', labelVi: 'Mắt long lanh phải', d: 'M 290,200 C 290,170 330,170 330,200 C 330,230 290,230 290,200 Z' },
      { id: 'cat-eye-shine-r1', labelVi: 'Đốm sáng mắt phải 1', d: 'M 300,190 A 7,7 0 1,0 314,190 A 7,7 0 1,0 300,190 Z' },
      { id: 'cat-eye-shine-r2', labelVi: 'Đốm sáng mắt phải 2', d: 'M 315,205 A 3,3 0 1,0 321,205 A 3,3 0 1,0 315,205 Z' },
      { id: 'cat-cheek-l', labelVi: 'Má phúng phính trái', d: 'M 145,235 A 14,9 0 1,0 173,235 A 14,9 0 1,0 145,235 Z' },
      { id: 'cat-cheek-r', labelVi: 'Má phúng phính phải', d: 'M 330,235 A 14,9 0 1,0 358,235 A 14,9 0 1,0 330,235 Z' },
      { id: 'cat-nose', labelVi: 'Mũi tam giác nhỏ', d: 'M 245,215 Q 252,210 260,215 Q 252,225 245,215 Z' },
      { id: 'cat-mouth', labelVi: 'Miệng cười chúm chím', d: 'M 242,225 Q 252,240 262,225 Q 252,250 242,225 Z' },

      // Cat Body & Paws
      { id: 'cat-collar', labelVi: 'Vòng cổ chuông', d: 'M 200,285 C 230,305 275,305 305,285 L 308,300 C 275,320 230,320 197,300 Z' },
      { id: 'cat-bell', labelVi: 'Chuông vàng nhỏ', d: 'M 242,310 A 12,12 0 1,0 266,310 A 12,12 0 1,0 242,310 Z' },
      { id: 'cat-body', labelVi: 'Thân mèo béo tròn', d: 'M 180,300 C 150,340 150,420 180,455 L 325,455 C 355,420 355,340 325,300 Z' },
      { id: 'cat-belly', labelVi: 'Bụng trắng mềm', d: 'M 210,335 C 190,380 190,430 225,445 L 280,445 C 315,430 315,380 295,335 Z' },
      { id: 'cat-paw-l', labelVi: 'Bàn chân trước trái', d: 'M 205,420 C 195,455 235,465 240,430 Z' },
      { id: 'cat-paw-r', labelVi: 'Bàn chân trước phải', d: 'M 265,430 C 270,465 310,455 300,420 Z' },

      // Tail & Ball of Yarn
      { id: 'cat-tail', labelVi: 'Đuôi cong vẫy', d: 'M 330,410 C 390,400 420,350 410,310 C 400,285 380,290 385,310 C 395,335 375,375 325,390 Z' },
      { id: 'yarn-ball', labelVi: 'Cuộn len chơi đùa', d: 'M 80,410 A 35,35 0 1,0 150,410 A 35,35 0 1,0 80,410 Z' },
      { id: 'yarn-stripe-1', labelVi: 'Vệt sợi len 1', d: 'M 90,395 Q 115,420 140,395 Q 115,380 90,395 Z' },
      { id: 'yarn-stripe-2', labelVi: 'Vệt sợi len 2', d: 'M 95,425 Q 115,400 135,425 Q 115,445 95,425 Z' },
      { id: 'ground', labelVi: 'Thảm cỏ hoa', d: 'M 20,455 Q 250,440 480,455 L 480,490 L 20,490 Z' }
    ]
  },

  // 2. CÚN TAI CỤP CƯỜI TƯƠI
  {
    id: 'animal-puppy',
    titleVi: 'Chú Cún Con Đáng Yêu',
    titleEn: 'Happy Puppy & Bone',
    category: 'animals',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['chó', 'cún', 'puppy', 'dog'],
    regions: [
      { id: 'pup-sun', labelVi: 'Ông mặt trời tỏa nắng', d: 'M 60,60 A 35,35 0 1,0 130,60 A 35,35 0 1,0 60,60 Z' },
      { id: 'pup-flower-1', labelVi: 'Bông hoa nhỏ trái', d: 'M 80,420 A 15,15 0 1,0 110,420 A 15,15 0 1,0 80,420 Z' },
      { id: 'pup-flower-center', labelVi: 'Nhụy hoa vàng', d: 'M 90,420 A 5,5 0 1,0 100,420 A 5,5 0 1,0 90,420 Z' },

      // Puppy Ears
      { id: 'pup-ear-l-out', labelVi: 'Tai cụp trái', d: 'M 160,140 C 90,170 85,280 130,290 C 160,270 160,200 165,155 Z' },
      { id: 'pup-ear-l-in', labelVi: 'Lòng tai trong trái', d: 'M 145,170 C 110,195 105,260 135,270 C 150,250 150,210 150,180 Z' },
      { id: 'pup-ear-r-out', labelVi: 'Tai cụp phải', d: 'M 335,140 C 405,170 410,280 365,290 C 335,270 335,200 330,155 Z' },
      { id: 'pup-ear-r-in', labelVi: 'Lòng tai trong phải', d: 'M 350,170 C 385,195 390,260 360,270 C 345,250 345,210 345,180 Z' },

      // Head & Spot
      { id: 'pup-head', labelVi: 'Đầu cún tròn', d: 'M 160,180 C 160,110 335,110 335,180 C 335,270 160,270 160,180 Z' },
      { id: 'pup-eye-spot', labelVi: 'Đốm mắt tròn cưng', d: 'M 170,175 C 165,135 225,135 225,175 C 225,215 175,215 170,175 Z' },

      // Big Eyes
      { id: 'pup-eye-l', labelVi: 'Mắt đen trái', d: 'M 185,180 C 185,160 215,160 215,180 C 215,200 185,200 185,180 Z' },
      { id: 'pup-eye-shine-l', labelVi: 'Ánh sáng mắt trái', d: 'M 190,172 A 5,5 0 1,0 200,172 A 5,5 0 1,0 190,172 Z' },
      { id: 'pup-eye-r', labelVi: 'Mắt đen phải', d: 'M 285,180 C 285,160 315,160 315,180 C 315,200 285,200 285,180 Z' },
      { id: 'pup-eye-shine-r', labelVi: 'Ánh sáng mắt phải', d: 'M 290,172 A 5,5 0 1,0 300,172 A 5,5 0 1,0 290,172 Z' },

      // Muzzle & Tongue
      { id: 'pup-muzzle', labelVi: 'Mõm cún trắng', d: 'M 250,210 C 285,210 295,250 275,265 C 255,275 240,275 220,265 C 205,250 215,210 250,210 Z' },
      { id: 'pup-nose', labelVi: 'Mũi tim đen', d: 'M 240,225 C 240,215 260,215 260,225 C 260,240 240,240 240,225 Z' },
      { id: 'pup-tongue', labelVi: 'Lưỡi hồng thè ra', d: 'M 243,260 C 235,285 260,285 255,260 Z' },

      // Collar & Body
      { id: 'pup-collar', labelVi: 'Vòng cổ đỏ', d: 'M 205,285 L 295,285 L 290,305 L 210,305 Z' },
      { id: 'pup-collar-tag', labelVi: 'Thẻ bài trái tim', d: 'M 250,305 C 240,295 230,310 250,330 C 270,310 260,295 250,305 Z' },
      { id: 'pup-body', labelVi: 'Thân cún', d: 'M 190,305 C 160,350 160,420 190,445 L 310,445 C 340,420 340,350 310,305 Z' },
      { id: 'pup-belly', labelVi: 'Bụng trắng mịn', d: 'M 215,340 C 200,380 200,420 250,435 C 300,420 300,380 285,340 Z' },

      // Paws & Bone
      { id: 'pup-paw-l', labelVi: 'Bàn chân trái', d: 'M 185,415 C 175,450 220,450 220,415 Z' },
      { id: 'pup-paw-r', labelVi: 'Bàn chân phải', d: 'M 280,415 C 280,450 325,450 315,415 Z' },
      { id: 'bone-body', labelVi: 'Khúc xương thơm', d: 'M 210,440 L 290,440 L 290,460 L 210,460 Z' },
      { id: 'bone-left', labelVi: 'Đầu xương tròn trái', d: 'M 205,435 C 190,425 190,470 205,465 Z' },
      { id: 'bone-right', labelVi: 'Đầu xương tròn phải', d: 'M 295,435 C 310,425 310,470 295,465 Z' },
      { id: 'pup-tail', labelVi: 'Đuôi cún vẫy', d: 'M 325,370 C 390,340 430,280 410,270 C 390,270 375,310 325,350 Z' }
    ]
  },

  // 3. SƯ TỬ CON DỄ THƯƠNG
  {
    id: 'animal-lion',
    titleVi: 'Sư Tử Con Thần Thái',
    titleEn: 'Happy Chibi Lion',
    category: 'animals',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['sư tử', 'lion', 'chibi'],
    regions: [
      { id: 'sun', labelVi: 'Ông mặt trời', d: 'M 60,60 A 40,40 0 1,0 140,60 A 40,40 0 1,0 60,60 Z' },
      { id: 'lion-mane', labelVi: 'Bờm hoa xòe tròn', d: 'M 250,55 C 295,45 340,75 365,110 C 400,120 420,165 410,210 C 430,245 410,300 385,325 C 385,365 345,400 300,400 C 265,420 220,410 185,385 C 145,395 110,355 110,310 C 80,285 80,230 100,185 C 90,140 120,95 160,85 C 185,55 220,45 250,55 Z' },
      { id: 'lion-ear-l', labelVi: 'Tai trái', d: 'M 160,120 C 130,110 120,150 150,170 Z' },
      { id: 'lion-ear-r', labelVi: 'Tai phải', d: 'M 340,120 C 370,110 380,150 350,170 Z' },
      { id: 'lion-head', labelVi: 'Khuôn mặt tròn vàng', d: 'M 250,115 C 320,115 350,160 350,230 C 350,305 305,335 250,335 C 195,335 150,305 150,230 C 150,160 180,115 250,115 Z' },
      { id: 'lion-eye-l', labelVi: 'Mắt to tròn trái', d: 'M 195,195 C 195,170 230,170 230,195 C 230,220 195,220 195,195 Z' },
      { id: 'lion-eye-r', labelVi: 'Mắt to tròn phải', d: 'M 270,195 C 270,170 305,170 305,195 C 305,220 270,220 270,195 Z' },
      { id: 'lion-cheek-l', labelVi: 'Má hồng trái', d: 'M 170,230 A 12,8 0 1,0 194,230 A 12,8 0 1,0 170,230 Z' },
      { id: 'lion-cheek-r', labelVi: 'Má hồng phải', d: 'M 306,230 A 12,8 0 1,0 330,230 A 12,8 0 1,0 306,230 Z' },
      { id: 'lion-muzzle', labelVi: 'Mõm trắng xinh', d: 'M 250,220 C 275,220 285,250 275,270 C 265,285 235,285 225,270 C 215,250 225,220 250,220 Z' },
      { id: 'lion-nose', labelVi: 'Mũi nâu nhỏ', d: 'M 240,230 Q 250,225 260,230 Q 250,245 240,230 Z' },
      { id: 'lion-body', labelVi: 'Thân sư tử', d: 'M 190,330 C 180,380 180,425 200,455 L 300,455 C 320,425 320,380 310,330 Z' },
      { id: 'lion-belly', labelVi: 'Bụng trắng', d: 'M 215,355 C 210,395 210,430 225,445 L 275,445 C 290,430 290,395 285,355 Z' },
      { id: 'lion-paw-l', labelVi: 'Chân trái', d: 'M 180,440 C 170,465 210,475 220,440 Z' },
      { id: 'lion-paw-r', labelVi: 'Chân phải', d: 'M 280,440 C 290,475 330,465 320,440 Z' },
      { id: 'lion-tail', labelVi: 'Đuôi cong', d: 'M 310,390 C 380,390 400,340 420,350 C 430,355 420,380 390,405 C 360,425 320,415 310,405 Z' },
      { id: 'lion-tail-puff', labelVi: 'Búi lông đuôi nâu', d: 'M 410,340 C 435,320 460,340 450,365 C 440,385 415,375 410,340 Z' }
    ]
  }
];
