
export type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
  description: string;
  details: string;
  benefits: string[];
  category: 'milk' | 'ghee' | 'paneer' | 'other';
  featured?: boolean;
  bestSeller?: boolean;
};
