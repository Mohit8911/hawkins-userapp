export interface Banner {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: string;
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