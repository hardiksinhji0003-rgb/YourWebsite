export type ProductCategory =
  | 'All'
  | 'Silver Necklaces'
  | 'Silver Pendants'
  | 'Silver Rings'
  | 'Silver Earrings'
  | 'Silver Chains'
  | 'Custom Jewellery';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  image: string;
  additionalImages?: string[];
  description: string;
  purity: string;
  hallmark: string;
  weight: string;
  dimensions?: string;
  inStock: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  demoNote?: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  categoryKey: ProductCategory;
  image: string;
  itemCount: number;
  tagline: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
  itemPurchased: string;
  isDemoNotice: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
  url: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  jewelleryInterest: string;
  message: string;
}
