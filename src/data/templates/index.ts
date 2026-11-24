import { ColoringTemplate } from '../../types';
import { CURATED_TEMPLATES } from './curated';
import { ANIMAL_TEMPLATES } from './animals';
import { OCEAN_TEMPLATES } from './ocean';
import { VEHICLE_TEMPLATES } from './vehicles';
import { DINOSAUR_TEMPLATES } from './dinosaurs';
import { FAIRYTALE_TEMPLATES } from './fairytale';
import { FRUIT_TEMPLATES } from './fruits';
import { SPACE_TEMPLATES } from './space';
import { NATURE_TEMPLATES } from './nature';
import { FREE_DRAW_TEMPLATE } from './freeDraw';

export const ALL_TEMPLATES: ColoringTemplate[] = [
  ...CURATED_TEMPLATES,
  ...ANIMAL_TEMPLATES,
  ...OCEAN_TEMPLATES,
  ...VEHICLE_TEMPLATES,
  ...DINOSAUR_TEMPLATES,
  ...FAIRYTALE_TEMPLATES,
  ...FRUIT_TEMPLATES,
  ...SPACE_TEMPLATES,
  ...NATURE_TEMPLATES,
  FREE_DRAW_TEMPLATE
];

export function getTemplateById(id: string): ColoringTemplate {
  const found = ALL_TEMPLATES.find(t => t.id === id);
  return found || ALL_TEMPLATES[0];
}

export function getTemplatesByCategory(category: string): ColoringTemplate[] {
  if (category === 'all') return ALL_TEMPLATES;
  return ALL_TEMPLATES.filter(t => t.category === category);
}
