export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  marketplaces: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  isPopular?: boolean;
  features: string[];
  whatsappMessage: string;
}

export interface MarketplaceInfo {
  id: string;
  name: string;
  tagline: string;
  url: string;
  highlights: string[];
  bestFor: string;
  activeSellersAvgGrowth: string;
}

export const PHONE_NUMBER = "916203836621";
export const DISPLAY_PHONE = "+91 62038 36621";

export function getWhatsAppUrl(customMessage: string): string {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(customMessage)}`;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "account-management",
    number: "01",
    title: "Account Management",
    description: "End-to-end management of your marketplace accounts, daily orders, returns tracking, and daily operational health.",
    deliverables: [
      "Daily order monitoring & dispatch SLA oversight",
      "Customer support & marketplace ticket resolution",
      "Negative review & feedback escalation",
      "Account health score & seller tier protection"
    ],
    turnaround: "Daily dedicated support",
    marketplaces: ["Flipkart", "Myntra", "Shopsy", "Meesho"]
  },
  {
    id: "account-relaunch",
    number: "02",
    title: "Account Relaunch",
    description: "Strategic support for inactive, paused, restricted, or underperforming seller accounts seeking a clean fresh start.",
    deliverables: [
      "Diagnostic account health & listing audit",
      "Dead inventory and suppressed listing clean-up",
      "Re-indexing with updated keywords and attributes",
      "30-day velocity revival promotional push"
    ],
    turnaround: "3 to 5 business days",
    marketplaces: ["Flipkart", "Myntra", "Meesho"]
  },
  {
    id: "brand-approval",
    number: "03",
    title: "Brand Approval",
    description: "Assistance with marketplace brand approval, trademark verification, classification documentation, and portal submission.",
    deliverables: [
      "TM application / registration verification",
      "Packaging photo compliance verification",
      "Flipkart Brand Approval ticket filing & follow-up",
      "Resolving Brand Registry rejection errors"
    ],
    turnaround: "2 to 4 business days",
    marketplaces: ["Flipkart", "Myntra"]
  },
  {
    id: "brand-authorization",
    number: "04",
    title: "Brand Authorization",
    description: "Support with formal brand authorization documentation, reseller letters, and OEM compliance requirements.",
    deliverables: [
      "Drafting legal Brand Authorization Letter formats",
      "GST & manufacturer entity validation",
      "Authorized reseller portal approval submissions",
      "Marketplace dispute response management"
    ],
    turnaround: "2 to 3 business days",
    marketplaces: ["Flipkart", "Myntra", "Meesho"]
  },
  {
    id: "catalog-management",
    number: "05",
    title: "Catalog Management",
    description: "Accurate product listing, bulk catalog creation, parent-child variant grouping, and aesthetic marketplace presentation.",
    deliverables: [
      "Bulk Excel sheet upload preparation",
      "Variant matrix configuration (Size, Color, Fit)",
      "High-resolution image aspect-ratio formatting",
      "Mandatory & optional attribute completeness"
    ],
    turnaround: "Continuous & batch uploads",
    marketplaces: ["Flipkart", "Myntra", "Shopsy", "Meesho"]
  },
  {
    id: "seller-onboarding",
    number: "06",
    title: "Seller Onboarding",
    description: "Get your new marketplace accounts and initial catalogs structured and verified for a rapid, hassle-free launch.",
    deliverables: [
      "GSTIN, Bank verification & pickup address setup",
      "Warehouse & shipping model configuration",
      "Initial 20-50 SKU catalog indexing",
      "First order processing training & assistance"
    ],
    turnaround: "48 to 72 hours",
    marketplaces: ["Flipkart", "Myntra", "Shopsy", "Meesho"]
  },
  {
    id: "growth-planning",
    number: "07",
    title: "Growth Planning",
    description: "Identify high-leverage opportunities to multiply organic visibility, conversions, and multi-channel revenue.",
    deliverables: [
      "Competitor price & bestseller benchmarking",
      "Festive campaign (BBD, EORS, Maha Indian Sale) roadmaps",
      "Marketplace sponsored ad (PLA / PCA) strategy",
      "Stock replenishment & inventory forecasting"
    ],
    turnaround: "Bi-weekly strategy reviews",
    marketplaces: ["Flipkart", "Myntra", "Shopsy", "Meesho"]
  },
  {
    id: "performance-insights",
    number: "08",
    title: "Performance Insights",
    description: "Weekly actionable reports tracking GMV, return rates, buyer search trends, and operational bottlenecks.",
    deliverables: [
      "Weekly sales & margin breakdown dashboard",
      "RTO (Return to Origin) & damaged return analysis",
      "Fast-moving vs. slow-moving stock identification",
      "Conversion rate and click-through metrics"
    ],
    turnaround: "Weekly & monthly reports",
    marketplaces: ["Flipkart", "Myntra", "Shopsy", "Meesho"]
  },
  {
    id: "listing-optimization",
    number: "09",
    title: "Listing Optimization",
    description: "Refine product titles, backend search keywords, bullet descriptions, and visual cards for maximum search ranking.",
    deliverables: [
      "High-search-volume keyword integration",
      "Marketplace search algorithm (SEO) optimization",
      "Enhanced description copywriting",
      "Catalog quality score improvement to 95%+"
    ],
    turnaround: "2 to 3 days per batch",
    marketplaces: ["Flipkart", "Myntra", "Shopsy", "Meesho"]
  }
];

export const MARKETPLACES: MarketplaceInfo[] = [
  {
    id: "myntra",
    name: "MYNTRA",
    tagline: "India's premier fashion & lifestyle destination",
    url: "https://www.myntra.com",
    highlights: [
      "Curated brand positioning & premium shopper base",
      "Strict catalog & model photography standards",
      "High Average Order Value (AOV) fashion demographics",
      "Participate in marquee EORS (End of Reason Sale) events"
    ],
    bestFor: "Apparel, Footwear, Accessories, Beauty & Personal Care brands",
    activeSellersAvgGrowth: "3.2x GMV in 90 days"
  },
  {
    id: "flipkart",
    name: "FLIPKART",
    tagline: "India's largest multi-category e-commerce platform",
    url: "https://www.flipkart.com",
    highlights: [
      "Massive nationwide customer reach across Tier 1, 2 & 3 cities",
      "Structured Tier badges (Bronze, Silver, Gold)",
      "High volume during Big Billion Days and monthly sales",
      "Integrated Flipkart Ads & Smart Fulfillment network"
    ],
    bestFor: "Fashion, Electronics, Home Decor, Kitchenware & FMCG",
    activeSellersAvgGrowth: "2.8x GMV in 60 days"
  },
  {
    id: "shopsy",
    name: "SHOPSY",
    tagline: "Flipkart's hyper-growth value commerce app",
    url: "https://www.shopsy.in",
    highlights: [
      "Zero commission on select budget categories",
      "Rapidly scaling Tier 2, 3 & rural shopper demographics",
      "Seamless catalog syncing with your Flipkart account",
      "High repeat purchase velocity for affordable daily essentials"
    ],
    bestFor: "Budget fashion, utility items, mobile accessories & daily goods",
    activeSellersAvgGrowth: "4.1x order volume"
  },
  {
    id: "meesho",
    name: "MEESHO",
    tagline: "India's zero-commission social & direct commerce giant",
    url: "https://www.meesho.com",
    highlights: [
      "0% commission structure maximizing direct seller margins",
      "Massive viral catalog distribution across social sellers",
      "Simplified single-panel order processing and label printing",
      "Transparent national shipping & return dispute settlement"
    ],
    bestFor: "Manufacturers, wholesalers, unbranded & mass-market items",
    activeSellersAvgGrowth: "3.5x daily orders"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "myntra",
    name: "Myntra",
    price: "₹7,000",
    period: "/ month",
    isPopular: false,
    features: [
      "Dedicated Myntra Account Manager",
      "Partner Portal Listing & Catalog Uploads",
      "EORS Campaign & Promotion Planning",
      "Return Rate & RTO Dispute Auditing",
      "Lookbook & Attribute Compliance Guidance",
      "Weekly Sales & Stock Health Reports"
    ],
    whatsappMessage: "Hello SELLERS HUB, I am interested in Myntra management (₹7,000/month plan)."
  },
  {
    id: "flipkart-shopsy",
    name: "Flipkart + Shopsy",
    price: "₹5,000",
    period: "/ month",
    isPopular: true,
    features: [
      "Flipkart & Shopsy Dual Account Management",
      "Product Cataloging & Variation Grouping",
      "Listing SEO & High-Converting Titles",
      "Big Billion Days / Sale Event Enrollments",
      "Tier Upgrade Strategy (Bronze to Silver/Gold)",
      "Flipkart PLA Sponsored Ads Management Support"
    ],
    whatsappMessage: "Hello SELLERS HUB, I am interested in Flipkart and Shopsy management (₹5,000/month plan)."
  },
  {
    id: "meesho",
    name: "Meesho",
    price: "₹3,000",
    period: "/ month",
    isPopular: false,
    features: [
      "Complete Meesho Supplier Panel Management",
      "Bulk Catalog Uploads & Price Indexing",
      "0% Commission Profitability Optimization",
      "Damage Return & Courier Dispute Filing",
      "Meesho Advertisement Campaign Optimization",
      "Daily Dispatch & Order Tracking Oversight"
    ],
    whatsappMessage: "Hello SELLERS HUB, I am interested in Meesho management (₹3,000/month plan)."
  },
  {
    id: "multi-marketplace",
    name: "Multi-Marketplace",
    price: "Custom",
    period: "Flexible",
    isPopular: false,
    features: [
      "All 4 Marketplaces Managed in Sync",
      "Cross-Platform Inventory & Price Balancing",
      "Flipkart Brand Approval & Brand Authorization",
      "Dedicated Senior E-commerce Growth Lead",
      "Custom Packaging & Barcode Compliance Guidance",
      "Priority WhatsApp & Direct Call Support"
    ],
    whatsappMessage: "Hello SELLERS HUB, I need a custom multi-marketplace plan for my brand."
  }
];

export const FAQS = [
  {
    q: "Do I need a registered Trademark to sell on Flipkart or Myntra?",
    a: "Not necessarily to start selling, but to get official Brand Approval on Flipkart and Myntra, you need either a registered Trademark (Class-specific Certificate) or an active Trademark application status (TM Application Number with TM-A copy), or an official Brand Authorization Letter from the trademark holder. We assist you through the complete documentation process."
  },
  {
    q: "How does SELLERS HUB manage my account securely?",
    a: "We use official marketplace sub-user or manager delegations (such as Flipkart Sub-User permissions and Myntra User Access). You retain master owner control of your account, bank details, and primary OTP credentials at all times."
  },
  {
    q: "What is your typical turnaround time for an Account Relaunch?",
    a: "A standard account audit and catalog clean-up takes 3 to 5 business days. We diagnose blocked or suppressed listings, correct indexing errors, optimize titles and keywords, and activate strategic promotional enrollments."
  },
  {
    q: "Can you help if my Flipkart Brand Approval request was rejected?",
    a: "Yes. Brand approval rejections typically occur due to brand tag mismatches on packaging photos, invoice discrepancies, or improper TM Class designations. We review the rejection notice, restructure the documentation package, and re-submit the case for expedited clearance."
  },
  {
    q: "Are there any hidden charges or percentage cuts from my sales?",
    a: "No. Our monthly management fees (e.g. ₹7,000 for Myntra, ₹5,000 for Flipkart+Shopsy, ₹3,000 for Meesho) are completely fixed and transparent. We do not charge percentage commissions on your sales unless you request a specialized high-volume custom growth contract."
  },
  {
    q: "How do we get started today?",
    a: "Click any 'Get Started' button or message us directly on WhatsApp at +91 62038 36621. We will review your current store link or catalog, discuss your goals, and activate your onboarding within 24 to 48 hours."
  }
];
