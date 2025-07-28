export interface OrderItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  total: string;
  items: OrderItem[];
  shippingAddress: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: string;
  trackingNumber?: string;
}

export interface ContactMessage {
  id: string;
  subject: string;
  message: string;
  date: string;
  status: 'sent' | 'pending' | 'failed';
} 