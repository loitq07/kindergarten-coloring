import { Category, StampItem } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'dinosaurs',
    nameVi: 'Khủng long bạo chúa',
    nameEn: 'Mighty Dinosaurs',
    icon: '🦖',
    color: '#10B981',
    bgColor: '#ECFDF5',
    descriptionVi: 'Bạo chúa T-Rex gầm vang, ba sừng Triceratops, thằn lằn bay...'
  },
  {
    id: 'vehicles',
    nameVi: 'Siêu xe & Công trình',
    nameEn: 'Super Cars & Trucks',
    icon: '🏎️',
    color: '#EF4444',
    bgColor: '#FEF2F2',
    descriptionVi: 'Siêu xe đua F1, xe tải quái vật bánh to, máy múc công trình, phi cơ...'
  },
  {
    id: 'robots',
    nameVi: 'Robot & Vũ trụ',
    nameEn: 'Robots & Space',
    icon: '🤖',
    color: '#3B82F6',
    bgColor: '#EFF6FF',
    descriptionVi: 'Robot chiến binh Titan, tên lửa Sao Hỏa, xe cảnh sát tuần tra...'
  },
  {
    id: 'ocean',
    nameVi: 'Đại dương & Cá mập',
    nameEn: 'Ocean & Sharks',
    icon: '🦈',
    color: '#06B6D4',
    bgColor: '#ECFEFF',
    descriptionVi: 'Hàm cá mập trắng, cậu bé lướt sóng, sứa biển phát sáng...'
  },
  {
    id: 'animals',
    nameVi: 'Động vật đáng yêu',
    nameEn: 'Cute Animals',
    icon: '🦁',
    color: '#F59E0B',
    bgColor: '#FFFBEB',
    descriptionVi: 'Gấu bông, mèo con, bò sữa, cú mèo, thỏ ngọc, chú ếch...'
  },
  {
    id: 'fairytale',
    nameVi: 'Hiệp sĩ & Cổ tích',
    nameEn: 'Knights & Fairy Tales',
    icon: '⚔️',
    color: '#8B5CF6',
    bgColor: '#F5F3FF',
    descriptionVi: 'Hiệp sĩ giáp sắt, rồng lửa khổng lồ, ngựa thần kỳ lân, công chúa...'
  },
  {
    id: 'nature',
    nameVi: 'Thiên nhiên & Hoa cỏ',
    nameEn: 'Nature & Flowers',
    icon: '🌸',
    color: '#14B8A6',
    bgColor: '#F0FDFA',
    descriptionVi: 'Bươm bướm khoe sắc, vườn hoa mùa xuân rực rỡ...'
  },
  {
    id: 'fruits',
    nameVi: 'Bánh ngọt & Đồ ăn',
    nameEn: 'Yummy Treats',
    icon: '🎂',
    color: '#EC4899',
    bgColor: '#FDF2F8',
    descriptionVi: 'Bánh kem sinh nhật, bánh donut kẹo ngọt...'
  }
];

export const STAMPS: StampItem[] = [
  { id: 'fire', emoji: '🔥', nameVi: 'Ngọn lửa nhiệt huyết', nameEn: 'Fire' },
  { id: 'star', emoji: '⭐', nameVi: 'Ngôi sao vàng', nameEn: 'Star' },
  { id: 'trophy', emoji: '🏆', nameVi: 'Cúp vô địch', nameEn: 'Trophy' },
  { id: 'medal', emoji: '🏅', nameVi: 'Huy chương vàng', nameEn: 'Medal' },
  { id: 'lightning', emoji: '⚡', nameVi: 'Tia sét siêu tốc', nameEn: 'Lightning' },
  { id: 'rocket', emoji: '🚀', nameVi: 'Tên lửa vũ trụ', nameEn: 'Rocket' },
  { id: 'dino', emoji: '🦖', nameVi: 'Khủng long xanh', nameEn: 'Dino' },
  { id: 'car', emoji: '🏎️', nameVi: 'Xe đua tốc độ', nameEn: 'Race Car' },
  { id: 'robot', emoji: '🤖', nameVi: 'Robot thông minh', nameEn: 'Robot' },
  { id: 'crown', emoji: '👑', nameVi: 'Vương miện dũng sĩ', nameEn: 'Crown' },
  { id: 'heart', emoji: '💖', nameVi: 'Trái tim yêu thương', nameEn: 'Heart' },
  { id: 'rainbow', emoji: '🌈', nameVi: 'Cầu vồng rực rỡ', nameEn: 'Rainbow' },
  { id: 'sparkles', emoji: '✨', nameVi: 'Ánh sao lấp lánh', nameEn: 'Sparkles' },
  { id: 'balloon', emoji: '🎈', nameVi: 'Bóng bay sắc màu', nameEn: 'Balloon' },
  { id: 'paw', emoji: '🐾', nameVi: 'Dấu chân thú', nameEn: 'Paw Print' },
  { id: 'diamond', emoji: '💎', nameVi: 'Kim cương xanh', nameEn: 'Diamond' }
];

export const PALETTES = [
  {
    nameVi: 'Siêu anh hùng & Chiến binh',
    nameEn: 'Super Heroes',
    colors: [
      '#E63946', '#D90429', '#FFB703', '#FB8500', '#023E8A', '#0077B6',
      '#0096C7', '#2A9D8F', '#264653', '#6A040F', '#370617', '#14213D'
    ]
  },
  {
    nameVi: 'Khủng long tiền sử',
    nameEn: 'Prehistoric Dino',
    colors: [
      '#2D6A4F', '#40916C', '#52B788', '#74C69D', '#DDA15E', '#BC6C25',
      '#99582A', '#6B705C', '#A5A58D', '#B7B7A4', '#FFE6A7', '#6F1D1B'
    ]
  },
  {
    nameVi: 'Cầu vồng rực rỡ',
    nameEn: 'Vibrant Rainbow',
    colors: [
      '#EF476F', '#F78C6B', '#FFD166', '#06D6A0', '#118AB2', '#073B4C',
      '#8338EC', '#3A86FF', '#FF006E', '#FB5607', '#FFBE0B', '#70E000'
    ]
  },
  {
    nameVi: 'Pastel kẹo ngọt',
    nameEn: 'Pastel Candy',
    colors: [
      '#FFB5A7', '#FCD5CE', '#F8EDEB', '#F9DCC4', '#FEC89A', '#D8E2DC',
      '#FFE5D9', '#FFCAD4', '#B7E4C7', '#A0C4FF', '#BDB2FF', '#FFC6FF'
    ]
  }
];
