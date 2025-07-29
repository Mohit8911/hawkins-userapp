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
  imageUrl?: string;
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

export interface Recipe {
  id: string;
  name: string;
  category: string;
  cookingTime: string;
  servings: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
} 