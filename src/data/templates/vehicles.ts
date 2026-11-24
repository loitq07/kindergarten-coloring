import { ColoringTemplate } from '../../types';

export const VEHICLE_TEMPLATES: ColoringTemplate[] = [
  // 1. Ô TÔ CON TÍ HON
  {
    id: 'vehicle-car',
    titleVi: 'Ô Tô Con Tí Hon',
    titleEn: 'Cute Little Car',
    category: 'vehicles',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['ô tô', 'car', 'xe hơi', 'giao thông'],
    regions: [
      { id: 'road', labelVi: 'Con đường', d: 'M 0,420 L 500,420 L 500,500 L 0,500 Z' },
      { id: 'car-roof', labelVi: 'Nóc ô tô', d: 'M 160,220 C 190,140 310,140 340,220 Z' },
      { id: 'car-window-front', labelVi: 'Kính trước', d: 'M 175,215 C 195,160 240,160 245,215 Z' },
      { id: 'car-window-back', labelVi: 'Kính sau', d: 'M 255,215 C 260,160 305,160 325,215 Z' },
      { id: 'car-body', labelVi: 'Thân ô tô', d: 'M 70,300 C 60,250 110,230 150,225 L 350,225 C 390,230 440,250 430,300 C 430,340 400,350 370,350 L 130,350 C 100,350 70,340 70,300 Z' },
      { id: 'car-headlight', labelVi: 'Đèn pha trước', d: 'M 70,265 C 60,265 60,290 70,290 Z' },
      { id: 'car-taillight', labelVi: 'Đèn hậu sau', d: 'M 430,265 C 440,265 440,290 430,290 Z' },
      { id: 'car-wheel-front-tire', labelVi: 'Lốp trước', d: 'M 110,350 A 45,45 0 1,0 200,350 A 45,45 0 1,0 110,350 Z' },
      { id: 'car-wheel-front-rim', labelVi: 'Vành bánh trước', d: 'M 135,350 A 20,20 0 1,0 175,350 A 20,20 0 1,0 135,350 Z' },
      { id: 'car-wheel-back-tire', labelVi: 'Lốp sau', d: 'M 300,350 A 45,45 0 1,0 390,350 A 45,45 0 1,0 300,350 Z' },
      { id: 'car-wheel-back-rim', labelVi: 'Vành bánh sau', d: 'M 325,350 A 20,20 0 1,0 365,350 A 20,20 0 1,0 325,350 Z' },
      { id: 'car-door-handle', labelVi: 'Tay nắm cửa', d: 'M 245,245 L 265,245 L 265,252 L 245,252 Z' }
    ]
  },

  // 2. XE BUÝT TRƯỜNG HỌC
  {
    id: 'vehicle-bus',
    titleVi: 'Xe Buýt Trường Học',
    titleEn: 'Yellow School Bus',
    category: 'vehicles',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['xe buýt', 'school bus', 'trường học'],
    regions: [
      { id: 'bus-body', labelVi: 'Thân xe vàng', d: 'M 70,180 C 70,160 90,150 120,150 L 410,150 C 430,150 440,170 440,200 L 440,340 C 440,360 420,360 410,360 L 90,360 C 80,360 70,350 70,330 Z' },
      { id: 'bus-stripe', labelVi: 'Dải sọc đen thân xe', d: 'M 70,270 L 440,270 L 440,290 L 70,290 Z' },
      { id: 'bus-window-driver', labelVi: 'Kính lái', d: 'M 85,170 L 130,170 L 130,245 L 85,245 Z' },
      { id: 'bus-window-1', labelVi: 'Cửa sổ 1', d: 'M 145,170 L 195,170 L 195,245 L 145,245 Z' },
      { id: 'bus-window-2', labelVi: 'Cửa sổ 2', d: 'M 210,170 L 260,170 L 260,245 L 210,245 Z' },
      { id: 'bus-window-3', labelVi: 'Cửa sổ 3', d: 'M 275,170 L 325,170 L 325,245 L 275,245 Z' },
      { id: 'bus-window-4', labelVi: 'Cửa sổ 4', d: 'M 340,170 L 390,170 L 390,245 L 340,245 Z' },
      { id: 'bus-door', labelVi: 'Cửa lên xuống', d: 'M 395,210 L 430,210 L 430,350 L 395,350 Z' },
      { id: 'bus-wheel-front-tire', labelVi: 'Bánh trước ngoài', d: 'M 115,360 A 40,40 0 1,0 195,360 A 40,40 0 1,0 115,360 Z' },
      { id: 'bus-wheel-front-rim', labelVi: 'Mâm bánh trước', d: 'M 137,360 A 18,18 0 1,0 173,360 A 18,18 0 1,0 137,360 Z' },
      { id: 'bus-wheel-back-tire', labelVi: 'Bánh sau ngoài', d: 'M 315,360 A 40,40 0 1,0 395,360 A 40,40 0 1,0 315,360 Z' },
      { id: 'bus-wheel-back-rim', labelVi: 'Mâm bánh sau', d: 'M 337,360 A 18,18 0 1,0 373,360 A 18,18 0 1,0 337,360 Z' }
    ]
  },

  // 3. XE CỨU HỎA ANH HÙNG
  {
    id: 'vehicle-firetruck',
    titleVi: 'Xe Cứu Hỏa Anh Hùng',
    titleEn: 'Brave Fire Truck',
    category: 'vehicles',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['cứu hỏa', 'fire truck', 'xe cứu hỏa'],
    regions: [
      { id: 'ft-siren', labelVi: 'Đèn còi cứu hỏa', d: 'M 130,130 C 130,110 160,110 160,130 Z' },
      { id: 'ft-ladder-bar-1', labelVi: 'Thang cứu hỏa trên nóc', d: 'M 200,120 L 430,120 L 430,140 L 200,140 Z' },
      { id: 'ft-cab', labelVi: 'Đầu xe cứu hỏa đỏ', d: 'M 80,150 L 190,150 L 190,340 L 80,340 Z' },
      { id: 'ft-cab-window', labelVi: 'Kính chắn gió đầu xe', d: 'M 95,170 L 175,170 L 175,235 L 95,235 Z' },
      { id: 'ft-body', labelVi: 'Thùng xe cứu hỏa', d: 'M 190,170 L 430,170 L 430,340 L 190,340 Z' },
      { id: 'ft-water-hose', labelVi: 'Cuộn vòi rồng', d: 'M 220,210 A 30,30 0 1,0 280,210 A 30,30 0 1,0 220,210 Z' },
      { id: 'ft-wheel-1', labelVi: 'Bánh trước', d: 'M 105,340 A 38,38 0 1,0 181,340 A 38,38 0 1,0 105,340 Z' },
      { id: 'ft-wheel-2', labelVi: 'Bánh sau 1', d: 'M 270,340 A 38,38 0 1,0 346,340 A 38,38 0 1,0 270,340 Z' },
      { id: 'ft-wheel-3', labelVi: 'Bánh sau 2', d: 'M 355,340 A 38,38 0 1,0 431,340 A 38,38 0 1,0 355,340 Z' }
    ]
  },

  // 4. MÁY BAY BAY LƯỢN
  {
    id: 'vehicle-airplane',
    titleVi: 'Máy Bay Trên Bầu Trời',
    titleEn: 'Airplane in the Sky',
    category: 'vehicles',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['máy bay', 'airplane', 'phi cơ'],
    regions: [
      { id: 'plane-cloud-1', labelVi: 'Mây bồng bềnh 1', d: 'M 60,110 C 60,80 120,70 140,100 C 170,90 190,130 160,150 L 60,150 Z' },
      { id: 'plane-cloud-2', labelVi: 'Mây bồng bềnh 2', d: 'M 340,360 C 340,330 400,320 420,350 C 450,340 470,380 440,400 L 340,400 Z' },
      { id: 'plane-wing-top', labelVi: 'Cánh trên', d: 'M 230,230 L 290,100 L 330,100 L 290,230 Z' },
      { id: 'plane-tail-fin', labelVi: 'Đuôi đứng', d: 'M 390,200 L 440,110 L 470,110 L 440,240 Z' },
      { id: 'plane-fuselage', labelVi: 'Thân máy bay', d: 'M 70,250 C 70,200 160,200 450,220 C 460,250 430,270 350,270 L 150,270 C 90,270 70,265 70,250 Z' },
      { id: 'plane-cockpit', labelVi: 'Kính buồng lái', d: 'M 100,225 C 120,205 145,205 155,225 Z' },
      { id: 'plane-window-1', labelVi: 'Cửa sổ tròn 1', d: 'M 180,230 A 10,10 0 1,0 200,230 A 10,10 0 1,0 180,230 Z' },
      { id: 'plane-window-2', labelVi: 'Cửa sổ tròn 2', d: 'M 220,230 A 10,10 0 1,0 240,230 A 10,10 0 1,0 220,230 Z' },
      { id: 'plane-window-3', labelVi: 'Cửa sổ tròn 3', d: 'M 260,230 A 10,10 0 1,0 280,230 A 10,10 0 1,0 260,230 Z' },
      { id: 'plane-wing-bot', labelVi: 'Cánh dưới', d: 'M 210,260 L 270,390 L 310,390 L 270,260 Z' }
    ]
  }
];
