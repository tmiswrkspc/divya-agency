export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  shortDescription: string;
  category: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "premium-drip-irrigation-kit",
    title: "Premium Drip Irrigation Kit",
    price: 15999,
    originalPrice: 18999,
    image: "/images/products/1-premium-drip-irrigation-kit.png",
    description: "Complete drip irrigation system perfect for medium-sized agricultural plots. Includes all necessary components for efficient water distribution.",
    shortDescription: "Complete system for medium-sized plots",
    category: "Complete Systems",
    features: [
      "Water-efficient design saves up to 50% water",
      "Easy installation with detailed instructions",
      "Covers up to 1 acre of farmland",
      "Durable materials with 5-year warranty",
      "Adjustable flow rate control"
    ],
    specifications: {
      "Coverage Area": "Up to 1 acre",
      "Flow Rate": "2-4 liters per hour",
      "Pressure Rating": "1.5-2.5 kg/cm²",
      "Pipe Diameter": "16mm main line",
      "Warranty": "5 years"
    },
    inStock: true,
    featured: true
  },
  {
    id: "2",
    slug: "micro-sprinkler-system",
    title: "Micro Sprinkler System",
    price: 8999,
    originalPrice: 10999,
    image: "/images/products/2-micro-sprinkler-system.png",
    description: "Advanced micro sprinkler system ideal for fruit trees and vegetable gardens. Provides uniform water distribution with minimal wastage.",
    shortDescription: "Perfect for fruit trees and vegetables",
    category: "Sprinkler Systems",
    features: [
      "360-degree water coverage",
      "Adjustable spray pattern",
      "Prevents soil erosion",
      "Suitable for all crop types",
      "Easy maintenance"
    ],
    specifications: {
      "Coverage Radius": "3-5 meters",
      "Flow Rate": "20-40 liters per hour",
      "Operating Pressure": "1.0-2.0 kg/cm²",
      "Material": "High-grade plastic",
      "Warranty": "3 years"
    },
    inStock: true,
    featured: true
  },
  {
    id: "3",
    slug: "emitter-tubes-50m",
    title: "Emitter Tubes (50m Roll)",
    price: 3499,
    image: "/images/products/3-emitter-tubes.png",
    description: "High-quality emitter tubes for precise water delivery. Perfect for row crops and greenhouse applications.",
    shortDescription: "Precision water delivery for row crops",
    category: "Tubes & Pipes",
    features: [
      "Self-compensating emitters",
      "Clog-resistant design",
      "UV stabilized material",
      "Uniform water distribution",
      "Long-lasting durability"
    ],
    specifications: {
      "Length": "50 meters",
      "Emitter Spacing": "20cm",
      "Flow Rate": "2 liters per hour per emitter",
      "Pipe Diameter": "16mm",
      "Warranty": "2 years"
    },
    inStock: true,
    featured: true
  },
  {
    id: "4",
    slug: "pressure-regulator-valve",
    title: "Pressure Regulator Valve",
    price: 1299,
    image: "/images/products/7-pressure-regulator.png",
    description: "Essential pressure regulator valve to maintain optimal water pressure throughout your irrigation system.",
    shortDescription: "Maintains optimal water pressure",
    category: "Valves & Fittings",
    features: [
      "Precise pressure control",
      "Prevents system damage",
      "Corrosion resistant",
      "Easy installation",
      "Maintenance-free operation"
    ],
    specifications: {
      "Pressure Range": "0.5-3.0 kg/cm²",
      "Inlet Size": "3/4 inch",
      "Outlet Size": "3/4 inch",
      "Material": "Brass body",
      "Warranty": "2 years"
    },
    inStock: true,
    featured: false
  },
  {
    id: "5",
    slug: "filtration-system-deluxe",
    title: "Filtration System Deluxe",
    price: 12999,
    image: "/images/products/6-filtration-system.png",
    description: "Professional-grade filtration system to protect your irrigation equipment from debris and contaminants.",
    shortDescription: "Professional-grade water filtration",
    category: "Filtration Systems",
    features: [
      "Multi-stage filtration",
      "Automatic backwash",
      "High dirt holding capacity",
      "Extends equipment life",
      "Easy maintenance"
    ],
    specifications: {
      "Filter Rating": "120 mesh",
      "Flow Rate": "100 liters per minute",
      "Inlet/Outlet": "2 inch",
      "Material": "Stainless steel screen",
      "Warranty": "3 years"
    },
    inStock: true,
    featured: true
  },
  {
    id: "6",
    slug: "timer-controller-digital",
    title: "Digital Timer Controller",
    price: 4999,
    image: "/images/products/10-time-controller.png",
    description: "Smart digital timer controller for automated irrigation scheduling. Program multiple watering cycles for optimal crop growth.",
    shortDescription: "Smart automated irrigation scheduling",
    category: "Controllers",
    features: [
      "LCD display with easy programming",
      "Multiple zone control",
      "Rain sensor compatibility",
      "Battery backup",
      "Weather-resistant housing"
    ],
    specifications: {
      "Zones": "6 zones",
      "Programs": "4 independent programs",
      "Runtime": "1 minute to 6 hours",
      "Power": "24V AC",
      "Warranty": "2 years"
    },
    inStock: true,
    featured: true
  }
];

// Add the new drip irrigation products
products.push(
  {
    id: "7",
    slug: "drip-irrigation-1-acre-normal-crops",
    title: "Drip Irrigation System - 1 Acre (Normal Crops)",
    price: 25000,
    image: "/images/products/9-drip-irrigation-system-normal-crops.png",
    description: "Complete drip irrigation system designed specifically for 1 acre of normal crops including vegetables, grains, and standard field crops. This system provides efficient water distribution with optimal coverage for traditional farming needs.",
    shortDescription: "Complete system for 1 acre normal crops",
    category: "Complete Systems",
    features: [
      "Covers exactly 1 acre of farmland",
      "Optimized for normal crops (vegetables, grains, pulses)",
      "Water-efficient design saves up to 40% water",
      "Easy installation with comprehensive manual",
      "Durable materials with 5-year warranty",
      "Includes main line, laterals, and emitters",
      "Pressure compensating drippers",
      "Complete filtration system included"
    ],
    specifications: {
      "Coverage Area": "1 acre (4047 sq meters)",
      "Crop Type": "Normal crops (vegetables, grains, pulses)",
      "Flow Rate": "2-4 liters per hour per dripper",
      "Pressure Rating": "1.0-2.5 kg/cm²",
      "Main Line": "63mm HDPE pipe",
      "Lateral Lines": "16mm with inline drippers",
      "Dripper Spacing": "30cm",
      "Filtration": "120 mesh screen filter",
      "Warranty": "5 years"
    },
    inStock: true,
    featured: true
  },
  {
    id: "8",
    slug: "drip-irrigation-1-acre-special-crops",
    title: "Drip Irrigation System - 1 Acre (Special Crops)",
    price: 48500,
    image: "/images/products/8-drip-irrigation-system-special-crops.png",
    description: "Premium drip irrigation system engineered for 1 acre of special crops including fruits, flowers, medicinal plants, and high-value horticultural crops. Features advanced components and precision control for optimal growth conditions.",
    shortDescription: "Premium system for 1 acre special crops",
    category: "Complete Systems",
    features: [
      "Covers exactly 1 acre of farmland",
      "Specialized for high-value crops (fruits, flowers, medicinal plants)",
      "Advanced pressure compensating technology",
      "Precision flow control for delicate crops",
      "Premium quality components with extended warranty",
      "Multi-stage filtration system",
      "Adjustable dripper flow rates",
      "UV-stabilized pipes and fittings",
      "Professional installation support included",
      "Fertigation compatibility"
    ],
    specifications: {
      "Coverage Area": "1 acre (4047 sq meters)",
      "Crop Type": "Special crops (fruits, flowers, medicinal plants)",
      "Flow Rate": "1-8 liters per hour (adjustable)",
      "Pressure Rating": "1.0-3.0 kg/cm²",
      "Main Line": "75mm HDPE pipe with pressure regulation",
      "Lateral Lines": "16mm with pressure compensating drippers",
      "Dripper Spacing": "20cm (adjustable)",
      "Filtration": "Multi-stage (sand + screen + disc filters)",
      "Additional Features": "Fertigation unit, pressure gauges",
      "Warranty": "7 years"
    },
    inStock: true,
    featured: true
  }
);
export const categories = [
  "Complete Systems",
  "Sprinkler Systems", 
  "Tubes & Pipes",
  "Valves & Fittings",
  "Filtration Systems",
  "Controllers"
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getAllProductSlugs(): string[] {
  return products.map(product => product.slug);
}