export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  surface: number;
  rooms: number;
  bedrooms: number;
  description: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
  aiScore: number;
  aiRecommendation: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface Statistic {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Appartement lumineux au cœur de Paris",
    address: "25 Rue de Rivoli, 75004 Paris",
    price: 850000,
    surface: 85,
    rooms: 4,
    bedrooms: 2,
    description: "Magnifique appartement haussmannien entièrement rénové avec une vue imprenable sur la Seine.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["Vue exceptionnelle", "Rénové", "Calme"],
    featured: true,
    aiScore: 92,
    aiRecommendation: "Investissement idéal pour une résidence principale ou locative avec un fort potentiel d'appréciation."
  },
  {
    id: 2,
    title: "Villa contemporaine avec piscine",
    address: "8 Avenue des Pins, 06400 Cannes",
    price: 1250000,
    surface: 180,
    rooms: 6,
    bedrooms: 4,
    description: "Luxueuse villa moderne avec piscine à débordement et vue panoramique sur la mer Méditerranée.",
    imageUrl: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["Piscine", "Vue mer", "Luxe"],
    featured: true,
    aiScore: 95,
    aiRecommendation: "Propriété d'exception avec un potentiel locatif saisonnier très rentable."
  },
  {
    id: 3,
    title: "Loft industriel à Lyon",
    address: "12 Rue Sainte-Catherine, 69001 Lyon",
    price: 495000,
    surface: 120,
    rooms: 3,
    bedrooms: 2,
    description: "Ancien atelier transformé en loft spacieux avec de grandes hauteurs sous plafond et finitions haut de gamme.",
    imageUrl: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["Industriel", "Atypique", "Centre-ville"],
    featured: false,
    aiScore: 87,
    aiRecommendation: "Bien unique avec un fort potentiel de valorisation dans un quartier en plein essor."
  },
  {
    id: 4,
    title: "Maison de campagne rénovée",
    address: "5 Chemin des Vignes, 37270 Montlouis-sur-Loire",
    price: 380000,
    surface: 150,
    rooms: 5,
    bedrooms: 3,
    description: "Charmante maison en pierre rénovée avec goût, offrant un cadre de vie paisible en pleine nature.",
    imageUrl: "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["Rénové", "Calme", "Jardin"],
    featured: false,
    aiScore: 83,
    aiRecommendation: "Excellent rapport qualité-prix avec possibilité de générer des revenus locatifs saisonniers."
  },
  {
    id: 5,
    title: "Duplex moderne au cœur de Bordeaux",
    address: "18 Cours de l'Intendance, 33000 Bordeaux",
    price: 620000,
    surface: 110,
    rooms: 4,
    bedrooms: 3,
    description: "Duplex contemporain avec terrasse privative dans un immeuble historique entièrement réhabilité.",
    imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["Terrasse", "Centre-ville", "Moderne"],
    featured: true,
    aiScore: 90,
    aiRecommendation: "Très bon placement immobilier dans un marché dynamique avec forte demande locative."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "L'impact de l'IA sur le marché immobilier en 2025",
    excerpt: "Découvrez comment l'intelligence artificielle révolutionne la recherche et l'évaluation des biens immobiliers.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "15 avril 2025",
    author: "Sophie Martin",
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Technologie"
  },
  {
    id: 2,
    title: "Les quartiers émergents à surveiller en 2025",
    excerpt: "Notre analyse prédictive révèle les zones urbaines qui connaîtront la plus forte appréciation immobilière.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2 avril 2025",
    author: "Thomas Dubois",
    imageUrl: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Marché"
  },
  {
    id: 3,
    title: "Rénovation écologique : maximiser la valeur de votre bien",
    excerpt: "Guide complet sur les travaux de rénovation énergétique et leur impact sur la valorisation de votre propriété.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "28 mars 2025",
    author: "Claire Bernard",
    imageUrl: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    category: "Rénovation"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Propriétaire",
    text: "Grâce à IntelligenceImmoAI, j'ai vendu mon appartement en moins de 2 semaines à un prix supérieur à mes attentes. Les recommandations basées sur l'IA m'ont permis de valoriser parfaitement mon bien.",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5
  },
  {
    id: 2,
    name: "Marie Lefevre",
    role: "Acheteuse",
    text: "La technologie d'Intelligence Immo m'a fait gagner un temps précieux dans ma recherche. Les suggestions personnalisées correspondaient exactement à mes critères, même ceux que je n'avais pas explicitement formulés !",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5
  },
  {
    id: 3,
    name: "Pierre Moreau",
    role: "Investisseur",
    text: "En tant qu'investisseur, j'apprécie particulièrement l'analyse prédictive qui m'aide à identifier les opportunités rentables. Un outil indispensable pour optimiser mon portefeuille immobilier.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4
  }
];

export const STATISTICS: Statistic[] = [
  {
    id: 1,
    value: "97%",
    label: "Taux de satisfaction client",
    icon: "star"
  },
  {
    id: 2,
    value: "15 jours",
    label: "Temps moyen de vente",
    icon: "clock"
  },
  {
    id: 3,
    value: "25 000+",
    label: "Biens analysés par IA",
    icon: "chart"
  },
  {
    id: 4,
    value: "92%",
    label: "Précision des estimations",
    icon: "target"
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Émilie Durand",
    role: "Directrice de l'Innovation",
    avatar: "https://i.pravatar.cc/300?img=10",
    bio: "Experte en intelligence artificielle appliquée à l'immobilier, Émilie dirige notre équipe de data scientists."
  },
  {
    id: 2,
    name: "Alexandre Martin",
    role: "Responsable Commercial",
    avatar: "https://i.pravatar.cc/300?img=12",
    bio: "Fort de 15 ans d'expérience dans l'immobilier de luxe, Alexandre comprend parfaitement les attentes de notre clientèle."
  },
  {
    id: 3,
    name: "Sophie Legrand",
    role: "Architecte d'Intérieur",
    avatar: "https://i.pravatar.cc/300?img=23",
    bio: "Sophie accompagne nos clients dans la valorisation de leurs biens grâce à des conseils d'aménagement personnalisés."
  }
];
