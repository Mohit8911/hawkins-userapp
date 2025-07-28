export interface ProfileSection {
  id: string;
  title: string;
  icon: string;
  onPress: () => void;
}

export interface ProfileMenuItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  onPress: () => void;
  showArrow?: boolean;
}

export interface OrderHistoryItem {
  order: import('@/models/Order').Order;
  onPress: () => void;
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'chat';
  title: string;
  value: string;
  icon: string;
  onPress: () => void;
} 