export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
  rating: number;
  reviews: number;
  features?: string[];
  description?: string;
  specifications?: Record<string, string>;
  inStock?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface ProductListParams {
  category: string;
  subcategory: string;
}

export interface ProductFilter {
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  features?: string[];
  inStock?: boolean;
}

export interface ProductSort {
  field: 'name' | 'price' | 'rating' | 'reviews';
  order: 'asc' | 'desc';
} 