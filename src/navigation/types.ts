import { FeaturedProduct } from '@/screens/main/Home2/home2.types';

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  Onboarding: undefined;
  OTPVerification: {
    phoneNumber: string;
  };
};

export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type HomeStackParamList = {
  Home2: undefined;
  ProductDetail: {
    product?: FeaturedProduct;
  };
  SubCategories: {
    category: { name: string; icon: string };
    subcategories: any[];
  };
  ProductList: {
    category: string;
    subcategory: string;
  };
}; 