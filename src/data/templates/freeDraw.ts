import { ColoringTemplate } from '../../types';

export const FREE_DRAW_TEMPLATE: ColoringTemplate = {
  id: 'free-draw',
  titleVi: 'Trang Trắng Vẽ Tự Do',
  titleEn: 'Blank Canvas (Free Draw)',
  category: 'free',
  difficulty: 'easy',
  viewBox: '0 0 500 500',
  tags: ['vẽ tự do', 'trang trắng', 'sáng tạo'],
  regions: [
    { id: 'paper-bg', labelVi: 'Khổ giấy vẽ', d: 'M 10,10 L 490,10 L 490,490 L 10,490 Z' }
  ]
};
