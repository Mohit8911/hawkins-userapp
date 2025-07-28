export interface CartItem {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  quantity: number;
  image: string;
  capacity?: string;
  thickness?: string;
  weight?: string;
  guarantee?: string;
  cartonDimensions?: string;
  idealFor?: string;
} 