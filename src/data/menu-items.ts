import type { MenuItem, MenuCategory } from './menu-item-types';
export type { MenuItem, MenuCategory, LocationId, LocationInfo, TasteProfile, DietaryInfo, PairingItem, RelatedItem, FAQ, HeatLevel } from './menu-item-types';
export { locations } from './menu-item-types';

import { hibachi } from './menu-items-hibachi';
import { sushiRolls } from './menu-items-sushi-rolls';
import { appetizers } from './menu-items-appetizers';
import { sashimi } from './menu-items-sashimi';
import { cocktails } from './menu-items-cocktails';

export const allMenuItems: MenuItem[] = [
    ...hibachi,
    ...sushiRolls,
    ...appetizers,
    ...sashimi,
    ...cocktails,
];

export const menuItemsByCategory: Record<MenuCategory, MenuItem[]> = {
    'hibachi': hibachi,
    'sushi-rolls': sushiRolls,
    'appetizers': appetizers,
    'sashimi': sashimi,
    'cocktails': cocktails,
};

export const categoryLabels: Record<MenuCategory, string> = {
    'hibachi': 'Hibachi',
    'sushi-rolls': 'Sushi Rolls',
    'appetizers': 'Appetizers',
    'sashimi': 'Sashimi',
    'cocktails': 'Cocktails',
};

export function getMenuItem(slug: string, category: MenuCategory): MenuItem | undefined {
    return menuItemsByCategory[category]?.find((item) => item.slug === slug);
}

export function getMenuItemsByCategory(category: MenuCategory): MenuItem[] {
    return menuItemsByCategory[category] || [];
}
