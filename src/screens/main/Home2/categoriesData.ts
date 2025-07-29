import { Category } from './home2.types';

// Sample categories data based on Hawkins website with subcategories
export const categoriesData: Category[] = [
  { 
    id: '1', 
    name: 'PRESSURE_COOKERS', 
    icon: '🥘', 
    imageUrl: 'https://www.buyhawkins.in/assets/images/cooker-icon.jpg',
    count: '50+',
    subcategories: [
      { id: '1.1', name: 'CLASSIC', icon: '🥘', count: '8+', description: 'Traditional pressure cookers' },
      { id: '1.2', name: 'INSTAA', icon: '⚡', count: '6+', description: 'Quick cooking pressure cookers' },
      { id: '1.3', name: 'CONTURA', icon: '🔧', count: '12+', description: 'Premium hard anodised cookers' },
      { id: '1.4', name: 'CONTURA_BLACK', icon: '⚫', count: '8+', description: 'Black finish contura cookers' },
      { id: '1.5', name: 'CONTURA_BLACK_XT', icon: '⚫', count: '4+', description: 'Extended range contura black' },
      { id: '1.6', name: 'STAINLESS_STEEL_CONTURA', icon: '🔩', count: '6+', description: 'Stainless steel contura series' },
      { id: '1.7', name: 'STAINLESS_STEEL', icon: '🔩', count: '10+', description: 'Classic stainless steel cookers' },
      { id: '1.8', name: 'TRI_PLY_STAINLESS_STEEL', icon: '🔩', count: '8+', description: 'Tri-ply stainless steel cookers' },
      { id: '1.9', name: 'STAINLESS_STEEL_FUTURA', icon: '🔩', count: '6+', description: 'Futura stainless steel series' },
      { id: '1.10', name: 'FUTURA', icon: '🚀', count: '12+', description: 'Advanced futura cookers' },
      { id: '1.11', name: 'MISS_MARY', icon: '👩', count: '4+', description: 'Miss Mary series cookers' },
      { id: '1.12', name: 'MISS_MARY_HANDI', icon: '👩', count: '3+', description: 'Miss Mary handi cookers' },
      { id: '1.13', name: 'HEVIBASE', icon: '🏗️', count: '5+', description: 'Heavy base cookers' },
      { id: '1.14', name: 'BIGBOY', icon: '🦾', count: '4+', description: 'Large capacity cookers' },
      { id: '1.15', name: 'CERAMIC_NONSTICK', icon: '🧪', count: '6+', description: 'Ceramic nonstick cookers' }
    ]
  },
  { 
    id: '2', 
    name: 'COOKWARE', 
    icon: '🍳', 
    imageUrl: 'https://www.buyhawkins.in/assets/images/kadhai-icon.jpg',
    count: '30+',
    subcategories: [
      { id: '2.1', name: 'HARD_ANODISED', icon: '🔧', count: '15+', description: 'Hard anodised cookware' },
      { id: '2.2', name: 'NONSTICK', icon: '🍳', count: '12+', description: 'Nonstick cookware' },
      { id: '2.3', name: 'TRI_PLY_STEEL', icon: '🔩', count: '8+', description: 'Tri-ply steel cookware' },
      { id: '2.4', name: 'STAINLESS_STEEL', icon: '🔩', count: '10+', description: 'Stainless steel cookware' },
      { id: '2.5', name: 'DIE_CAST', icon: '🏗️', count: '6+', description: 'Die cast cookware' },
      { id: '2.6', name: 'CAST_IRON', icon: '🦾', count: '4+', description: 'Cast iron cookware' },
      { id: '2.7', name: 'CERAMIC_NONSTICK', icon: '🧪', count: '8+', description: 'Ceramic nonstick cookware' },
      { id: '2.8', name: 'PRO', icon: '👨‍🍳', count: '12+', description: 'Professional cookware series' },
      { id: '2.9', name: 'AQUA', icon: '💧', count: '8+', description: 'Aqua cookware collection' }
    ]
  },
  { 
    id: '3', 
    name: 'ELECTRICALS', 
    icon: '🫕', 
    imageUrl: 'https://www.buyhawkins.in/assets/images/kettle-icon.jpg',
    count: '25+',
    subcategories: [
      { id: '3.1', name: 'ELECTRIC_PRESSURE_COOKERS', icon: '⚡', count: '8+', description: 'Electric pressure cookers' },
      { id: '3.2', name: 'ELECTRIC_COOKERS', icon: '🍳', count: '6+', description: 'Electric cookers' },
      { id: '3.3', name: 'ELECTRIC_KETTLES', icon: '🫖', count: '4+', description: 'Electric kettles' },
      { id: '3.4', name: 'ELECTRIC_PANS', icon: '🥘', count: '7+', description: 'Electric frying pans' }
    ]
  },
  { 
    id: '4', 
    name: 'FRYING_PAN', 
    icon: '🥄', 
    imageUrl: 'https://www.buyhawkins.in/assets/images/pan-icon.jpg',
    count: '40+',
    subcategories: [
      { id: '4.1', name: 'NONSTICK_FRYING_PANS', icon: '🍳', count: '15+', description: 'Nonstick frying pans' },
      { id: '4.2', name: 'HARD_ANODISED_FRYING_PANS', icon: '🔧', count: '12+', description: 'Hard anodised frying pans' },
      { id: '4.3', name: 'STAINLESS_STEEL_FRYING_PANS', icon: '🔩', count: '8+', description: 'Stainless steel frying pans' },
      { id: '4.4', name: 'CERAMIC_FRYING_PANS', icon: '🧪', count: '5+', description: 'Ceramic frying pans' }
    ]
  },
  { 
    id: '5', 
    name: 'TAVA', 
    icon: '🫓', 
    imageUrl: 'https://www.buyhawkins.in/assets/images/tava-icon.jpg',
    count: '20+',
    subcategories: [
      { id: '5.1', name: 'NONSTICK_TAVA', icon: '🫓', count: '8+', description: 'Nonstick tava' },
      { id: '5.2', name: 'HARD_ANODISED_TAVA', icon: '🔧', count: '6+', description: 'Hard anodised tava' },
      { id: '5.3', name: 'STAINLESS_STEEL_TAVA', icon: '🔩', count: '4+', description: 'Stainless steel tava' },
      { id: '5.4', name: 'CAST_IRON_TAVA', icon: '🦾', count: '2+', description: 'Cast iron tava' }
    ]
  },
  { 
    id: '6', 
    name: 'DEEP_FRYING_PAN', 
    icon: '🫖', 
    imageUrl: 'https://www.buyhawkins.in/assets/images/dfp-icon.jpg',
    count: '15+',
    subcategories: [
      { id: '6.1', name: 'NONSTICK_DEEP_FRYING_PAN', icon: '🍳', count: '15+', description: 'Nonstick deep frying pans' },
      { id: '6.2', name: 'HARD_ANODISED_DEEP_FRYING_PAN', icon: '🔧', count: '12+', description: 'Hard anodised deep frying pans' },
      { id: '6.3', name: 'STAINLESS_STEEL_DEEP_FRYING_PAN', icon: '🔩', count: '8+', description: 'Stainless steel deep frying pans' }
    ]
  },
  { 
    id: '7', 
    name: 'SETS', 
    icon: '🥣', 
    imageUrl: 'https://www.buyhawkins.in/assets/images/set-icon.jpg',
    count: '35+',
    subcategories: [
      { id: '7.1', name: 'PRESSURE_COOKER_SETS', icon: '🥘', count: '12+', description: 'Pressure cooker sets' },
      { id: '7.2', name: 'COOKWARE_SETS', icon: '🍳', count: '15+', description: 'Cookware sets' },
      { id: '7.3', name: 'MIXED_SETS', icon: '🥣', count: '8+', description: 'Mixed cookware sets' }
    ]
  },
  { 
    id: '8', 
    name: 'SAUCEPAN', 
    icon: '🍲', 
    imageUrl: 'https://www.buyhawkins.in/assets/images/saucepan-icon.jpg',
    count: '18+',
    subcategories: [
      { id: '8.1', name: 'NONSTICK_SAUCEPAN', icon: '🍲', count: '8+', description: 'Nonstick saucepans' },
      { id: '8.2', name: 'HARD_ANODISED_SAUCEPAN', icon: '🔧', count: '6+', description: 'Hard anodised saucepans' },
      { id: '8.3', name: 'STAINLESS_STEEL_SAUCEPAN', icon: '🔩', count: '4+', description: 'Stainless steel saucepans' }
    ]
  },
  { 
    id: '9', 
    name: 'HANDI', 
    icon: '🔧', 
    imageUrl: 'https://www.buyhawkins.in/assets/images/handi-icon.jpg',
    count: '60+',
    subcategories: [
      { id: '9.1', name: 'ALUMINIUM_HANDI', icon: '🔧', count: '20+', description: 'Aluminium handi' },
      { id: '9.2', name: 'HARD_ANODISED_HANDI', icon: '🔧', count: '15+', description: 'Hard anodised handi' },
      { id: '9.3', name: 'STAINLESS_STEEL_HANDI', icon: '🔩', count: '12+', description: 'Stainless steel handi' },
      { id: '9.4', name: 'CERAMIC_NONSTICK_HANDI', icon: '🧪', count: '8+', description: 'Ceramic nonstick handi' },
      { id: '9.5', name: 'CAST_IRON_HANDI', icon: '🦾', count: '5+', description: 'Cast iron handi' }
    ]
  },
  { 
    id: '10', 
    name: 'PARTS_AND_ACCESSORIES', 
    icon: '📦', 
    imageUrl: 'https://www.buyhawkins.in/assets/images/idly-icon.jpg',
    count: '25+',
    subcategories: [
      { id: '10.1', name: 'GASKETS', icon: '🔧', count: '8+', description: 'Pressure cooker gaskets' },
      { id: '10.2', name: 'SAFETY_VALVES', icon: '🔒', count: '6+', description: 'Safety valves' },
      { id: '10.3', name: 'HANDLES', icon: '🤏', count: '4+', description: 'Cookware handles' },
      { id: '10.4', name: 'LIDS', icon: '🔄', count: '7+', description: 'Cookware lids' }
    ]
  }
]; 