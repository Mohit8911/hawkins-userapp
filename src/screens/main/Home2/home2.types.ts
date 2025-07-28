export interface Banner {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

export interface SubCategory {
  id: string;
  name: string;
  icon: string;
  count: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: string;
  subcategories?: SubCategory[];
}

export interface FeaturedProduct {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  rating: number;
  reviews: number;
} 