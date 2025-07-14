export interface Products {
  id: string | number
  title: string
  price: number
  desc: string
  imageUrl: string
  rating: number
  brand: string
  model: string
  category: string
  discount: number 
  color?: string 
  onSale?: boolean
  popular?: boolean
}
export type Product = {
  id: number | string;
  title: string;
  imageUrl: string;
  price: number;
  desc: string;
  brand: string;
  model: string;
  category: string;
  rating: string;
  color?: string;
  discount?: number | undefined;
  popular?: boolean;
  onSale?: boolean;
};