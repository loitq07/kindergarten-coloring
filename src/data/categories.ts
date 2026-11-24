import { Category, StampItem } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'animals',
    nameVi: 'Động vật cưng',
    nameEn: 'Cute Animals',
    icon: '🦁',
    color: '#FF9F1C',
    bgColor: '#FFF3E0',
    descriptionVi: 'Sư tử, cún con, mèo máy, thỏ ngọc, gấu trúc...'
  },
  {
    id: 'ocean',
    nameVi: 'Đại dương xanh',
    nameEn: 'Ocean Life',
    icon: '🐬',
    color: '#06D6A0',
    bgColor: '#E1FBF3',
    descriptionVi: 'Cá heo, cá voi, rùa biển, bạch tuộc, sao biển...'
  },
  {
    id: 'vehicles',
    nameVi: 'Xe & Phương tiện',
    nameEn: 'Cool Vehicles',
    icon: '🚗',
    color: '#EF476F',
    bgColor: '#FDECEF',
    descriptionVi: 'Ô tô, xe buýt, xe cứu hỏa, máy bay, tàu hỏa...'
  },
  {
    id: 'dinosaurs',
    nameVi: 'Khủng long bé',
    nameEn: 'Dino World',
    icon: '🦖',
    color: '#52B788',
    bgColor: '#EAF7EE',
    descriptionVi: 'T-Rex tí hon, khủng long cổ dài, ba sừng ngộ nghĩnh...'
  },
  {
    id: 'fairytale',
    nameVi: 'Cổ tích & Kỳ lân',
    nameEn: 'Fairy Tale',
    icon: '🦄',
    color: '#B5179E',
    bgColor: '#FAE6F5',
    descriptionVi: 'Kỳ lân cầu vồng, lâu đài nguy nga, công chúa nhỏ...'
  },
  {
    id: 'fruits',
    nameVi: 'Trái cây & Bánh ngọt',
    nameEn: 'Yummy Treats',
    icon: '🍓',
    color: '#FF477E',
    bgColor: '#FFEBF1',
    descriptionVi: 'Kem ốc quế, dâu tây, dưa hấu, bánh kem cupcake...'
  },
  {
    id: 'space',
    nameVi: 'Vũ trụ diệu kỳ',
    nameEn: 'Space Odyssey',
    icon: '🚀',
    color: '#4361EE',
    bgColor: '#ECEFFE',
    descriptionVi: 'Phi hành gia nhí, tên lửa, đĩa bay người ngoài hành tinh...'
  },
  {
    id: 'nature',
    nameVi: 'Thiên nhiên & Hoa',
    nameEn: 'Nature & Flowers',
    icon: '🌸',
    color: '#F77F00',
    bgColor: '#FEF0DF',
    descriptionVi: 'Cầu vồng rực rỡ, nhà nấm cổ tích, hoa hướng dương...'
  }
];

export const STAMPS: StampItem[] = [
  { id: 'star', emoji: '⭐', nameVi: 'Ngôi sao vàng', nameEn: 'Star' },
  { id: 'heart', emoji: '💖', nameVi: 'Trái tim hồng', nameEn: 'Heart' },
  { id: 'rainbow', emoji: '🌈', nameVi: 'Cầu vồng', nameEn: 'Rainbow' },
  { id: 'crown', emoji: '👑', nameVi: 'Vương miện', nameEn: 'Crown' },
  { id: 'sparkles', emoji: '✨', nameVi: 'Lấp lánh', nameEn: 'Sparkles' },
  { id: 'flower', emoji: '🌸', nameVi: 'Hoa anh đào', nameEn: 'Flower' },
  { id: 'sun', emoji: '☀️', nameVi: 'Mặt trời', nameEn: 'Sun' },
  { id: 'butterfly', emoji: '🦋', nameVi: 'Bướm xinh', nameEn: 'Butterfly' },
  { id: 'paw', emoji: '🐾', nameVi: 'Dấu chân cún', nameEn: 'Paw Print' },
  { id: 'music', emoji: '🎵', nameVi: 'Nốt nhạc', nameEn: 'Music' },
  { id: 'candy', emoji: '🍭', nameVi: 'Kẹo mút', nameEn: 'Lollipop' },
  { id: 'balloon', emoji: '🎈', nameVi: 'Bóng bay', nameEn: 'Balloon' },
  { id: 'diamond', emoji: '💎', nameVi: 'Kim cương', nameEn: 'Diamond' },
  { id: 'apple', emoji: '🍎', nameVi: 'Quả táo', nameEn: 'Apple' },
  { id: 'clover', emoji: '🍀', nameVi: 'Cỏ 4 lá', nameEn: 'Clover' },
  { id: 'medal', emoji: '🏅', nameVi: 'Huy chương', nameEn: 'Medal' }
];

export const PALETTES = [
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
  },
  {
    nameVi: 'Tự nhiên & Trái đất',
    nameEn: 'Earth & Nature',
    colors: [
      '#606C38', '#283618', '#FEFAE0', '#DDA15E', '#BC6C25', '#8C52FF',
      '#495057', '#6C757D', '#ADB5BD', '#CED4DA', '#343A40', '#212529'
    ]
  },
  {
    nameVi: 'Màu cơ bản cho bé',
    nameEn: 'Classic Colors',
    colors: [
      '#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557', '#F4A261',
      '#E76F51', '#2A9D8F', '#E9C46A', '#9B5DE5', '#00BBF9', '#00F5D4'
    ]
  }
];
