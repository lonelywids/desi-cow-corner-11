
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "pure-desi-ghee",
    title: "Pure Desi Ghee",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    price: "₹1200/litre",
    description: "Hand-churned A2 ghee from our Gir cows, rich in Omega-3 and essential nutrients.",
    details: "Our Pure Desi Ghee is meticulously prepared using the traditional bilona method, where milk from our indigenous Gir cows is first turned into curd, then churned to extract butter, which is finally clarified to produce golden, aromatic ghee. Each batch is slow-cooked to perfection, allowing the natural flavors to develop fully. Contains no preservatives or additives.",
    benefits: [
      "Rich in butyric acid which supports gut health",
      "Contains fat-soluble vitamins A, D, E, and K",
      "High smoke point makes it ideal for cooking",
      "Enhances the flavor of traditional Indian dishes",
      "Supports joint health and aids digestion"
    ],
    category: "ghee",
    featured: true,
    bestSeller: true
  },
  {
    id: "fresh-a2-milk",
    title: "Fresh A2 Milk",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    price: "₹120/litre",
    description: "Unprocessed, farm-fresh A2 milk delivered within 24 hours of milking.",
    details: "Our Fresh A2 Milk comes directly from our ethically raised indigenous cows. Unlike commercial milk that contains A1 protein which can cause inflammation and digestive issues, our milk contains only the A2 protein that is easier to digest and healthier. The milk is gently pasteurized to preserve its natural goodness and delivered fresh to your doorstep within 24 hours of milking.",
    benefits: [
      "Contains only the A2 beta-casein protein, which is easier to digest",
      "Rich in calcium, protein, and essential nutrients",
      "No hormones or antibiotics used in our farming practices",
      "Creamier taste compared to commercial milk",
      "Suitable for people with mild lactose intolerance"
    ],
    category: "milk",
    featured: true
  },
  {
    id: "artisanal-paneer",
    title: "Artisanal Paneer",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    price: "₹600/kg",
    description: "Soft, crumbly paneer made fresh daily using traditional techniques.",
    details: "Our Artisanal Paneer is handcrafted daily using our farm-fresh A2 milk. We follow a traditional method where the milk is curdled using natural food acids rather than artificial agents. The result is a soft, crumbly paneer with a delicate flavor that enhances any dish. Our paneer contains no preservatives and is delivered fresh to maintain its authentic taste and texture.",
    benefits: [
      "High in protein and calcium",
      "Made from pure A2 milk for better digestibility",
      "No preservatives or additives",
      "Versatile ingredient for various Indian and fusion dishes",
      "Holds shape well when cooked"
    ],
    category: "paneer",
    featured: true
  },
  {
    id: "buttermilk",
    title: "Traditional Buttermilk",
    image: "https://images.unsplash.com/photo-1626078437430-99b5b24f7604",
    price: "₹70/litre",
    description: "Refreshing probiotic buttermilk churned from A2 curd, seasoned with cumin and herbs.",
    details: "Our Traditional Buttermilk is a byproduct of our butter-making process. It's naturally rich in probiotics that support gut health. We lightly season it with roasted cumin, curry leaves, and a hint of rock salt to create a refreshing drink that aids digestion and keeps you cool during hot weather.",
    benefits: [
      "Rich in probiotics for gut health",
      "Aids digestion, especially after heavy meals",
      "Natural cooling effect during summer",
      "Low in fat but high in nutrients",
      "Helps maintain electrolyte balance"
    ],
    category: "other"
  },
  {
    id: "cultured-butter",
    title: "Cultured Butter",
    image: "https://images.unsplash.com/photo-1589985270958-bf4426b98ae1",
    price: "₹850/kg",
    description: "European-style cultured butter with rich flavor and creamy texture.",
    details: "Our Cultured Butter is made using traditional European methods where cream is fermented before churning. This fermentation develops complex flavors and a slightly tangy note that makes our butter special. Made from the cream of our A2 milk, this butter has a higher fat content and less moisture than regular butter, making it perfect for baking and spreading on artisanal bread.",
    benefits: [
      "Contains beneficial fatty acids and fat-soluble vitamins",
      "Higher fat content makes it ideal for baking",
      "Rich, complex flavor enhances both sweet and savory dishes",
      "Easier to digest than regular butter due to the fermentation process",
      "No artificial colors or preservatives"
    ],
    category: "other",
    bestSeller: true
  },
  {
    id: "flavored-ghee",
    title: "Herbal Infused Ghee",
    image: "https://images.unsplash.com/photo-1631914193139-5a7df13b3d5a",
    price: "₹1400/litre",
    description: "A2 ghee infused with traditional Ayurvedic herbs for enhanced health benefits.",
    details: "Our Herbal Infused Ghee combines the goodness of pure A2 ghee with carefully selected Ayurvedic herbs. Available in three varieties: Tulsi (Holy Basil), Turmeric, and Ashwagandha. Each herb is slowly infused into the ghee to extract its beneficial properties, creating a product that not only enhances the flavor of your food but also provides additional health benefits according to Ayurvedic principles.",
    benefits: [
      "Combines the benefits of ghee with medicinal herbs",
      "Tulsi variant supports immunity and respiratory health",
      "Turmeric variant has anti-inflammatory properties",
      "Ashwagandha variant helps reduce stress and improve vitality",
      "Can be used in cooking or as a supplement"
    ],
    category: "ghee"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};
