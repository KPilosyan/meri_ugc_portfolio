export type Category = "Beauty" | "Skincare" | "Fashion" | "Lifestyle" | "Unboxing" | "Fragrance" | "Makeup";

export interface Project {
  id: string;
  title: string;
  category: Category[]; // Accepts array of categories
  brand: string;
  thumbnail: string;
  videoUrl?: string;
  aspectRatio: "9:16" | "4:5" | "1:1";
  deliverables: string[];
  brief?: string;
  concept?: string;
  results?: { metric: string; label: string }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  brand: string;
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "biodance-mask-ad",
    title: "Overnight Glow with Biodance Mask",
    category: ["Skincare"],
    brand: "Biodance",
    thumbnail: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/thumb_1.png",
    videoUrl: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/1.MP4",
    aspectRatio: "9:16",
    deliverables: [
      "1x Vertical UGC Video (9:16)",
      "3x High-Res Product Photos"
    ],
    brief: "Create an authentic skincare routine featuring the Biodance Bio-Collagen Real Deep Mask, highlighting its unique hydrogel texture, comfortable fit, and fresh, glowing skin finish.",
    concept: "Focus on close-up application shots, the transparent hydrogel texture, natural skin detail, and a relaxed nighttime skincare routine with an authentic voiceover."
  },
  {
    id: "dior-perfume",
    title: "Dior Addict Peachy Glow",
    category: ["Fragrance"], 
    brand: "Dior",
    thumbnail: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/thumb_2.png",
    videoUrl: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/2.MP4",
    aspectRatio: "9:16",
    deliverables: [
      "1x Hero Reel (9:16)",
      "3x Hook Variations",
      "Raw B-Roll Asset Pack"
    ],
    brief: "Capture the luxury aesthetic, bottle craftsmanship, and sensory mood of the fragrance to drive impulse purchases on social feeds.",
    concept: "Scent aesthetics & moodboard storytelling with cinematic macro bottle shots, pulse-point application, and an unboxing experience."
  },
  {
    id: "summer-capsule",
    title: "A Day in a Life",
    category: ["Lifestyle", "Makeup"],
    brand: "",
    thumbnail: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/thumb_3.png",
    videoUrl: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/3.mp4",
    aspectRatio: "9:16",
    deliverables: ["1x Trend-Based Lifestyle Reel"],
    brief: "Create a playful day-in-the-life video using an unexpected point of view filmed from inside a washing machine.",
    concept: "A trend-driven POV concept filmed from inside the washing machine, capturing the routine from an unusual perspective with quick cuts and playful transitions synced to trending audio.",
  },
  {
    id: "matcha-routine",
    title: "Peptide Eye Patch",
    category: ["Skincare"],
    brand: "Rhode",
    thumbnail: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/thumb_4.png",
    videoUrl: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/4.mp4",
    aspectRatio: "9:16",
    deliverables: ["1x Product-Focused UGC Video", "2x High-Res Product Photos"],
    brief: "Showcase the rhode Peptide Eye Patch through an authentic skincare moment, highlighting the product experience, texture, and hydrating feel.",
    concept: "A clean, intimate skincare routine featuring close-up application shots, natural skin texture, product details, and soft lifestyle framing.",
  },

  {
    id: "anua-cleansing-powder",
    title: "Rice + Ceramide Cleansing Powder",
    category: ["Skincare"],
    brand: "Anua",
    thumbnail: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/thumb_5.png",
    videoUrl: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/5.mp4",
    aspectRatio: "9:16",
    deliverables: ["1x Educational Product Video", "4x Product Detail Shots"],
    brief: "Showcase the Anua Rice + Ceramide Cleansing Powder through an authentic cleansing routine, highlighting its powder-to-foam transformation and gentle skincare experience.",
    concept: "Focus on satisfying texture and lather shots, close-up product details, and natural application moments with clean, minimal bathroom visuals."
  },

  {
    id: "vois-facial-cream",
    title: "Bye Bye Bad Vibes Facial Cream",
    category: ["Skincare"],
    brand: "VOIS",
    thumbnail: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/thumb_6.png",
    videoUrl: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/6.mp4",
    aspectRatio: "9:16",
    deliverables: ["1x Product UGC Video", "2x High-Res Product Photos"],
    brief: "Create an authentic skincare-focused video introducing the VOIS Bye Bye Bad Vibes Facial Cream and showcasing the product in use.",
    concept: "A natural, aesthetic skincare routine combining product close-ups, texture shots, application, and lifestyle moments to create an authentic feel-good product story.",
  },

  {
    id: "biodance-mask-ad",
    title: "Overnight Glow with Biodance Mask",
    category: ["Skincare"],
    brand: "Biodance",
    thumbnail: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/thumb_7.png",
    videoUrl: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/7.MP4",
    aspectRatio: "9:16",
    deliverables: ["1x Educational Product Video", "4x Product Detail Shots"],
    brief: "Introduce and explain the four Biodance mask types, clearly highlighting what makes each mask different and who each one is best suited for.",
    concept: "A visually engaging educational presentation using product close-ups, on-screen text, and clear comparisons to break down the four masks in an easy-to-understand format.",
  },

  {
    id: "rhode-eye-patch",
    title: "Peptide Eye Patch",
    category: ["Skincare"],
    brand: "Rhode",
    thumbnail: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/thumb_8.png",
    videoUrl: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/8.mp4",
    aspectRatio: "9:16",
    deliverables: ["1x Product UGC Video", "2x High-Res Product Photos"],
    brief: "Create an authentic skincare-focused video introducing the VOIS Bye Bye Bad Vibes Facial Cream and showcasing the product in use.",
    concept: "A natural, aesthetic skincare routine combining product close-ups, texture shots, application, and lifestyle moments to create an authentic feel-good product story.",
  },
  {
    id: "dior-stick-blush",
    title: "Dior Stick Blush",
    category: ["Makeup"],
    brand: "Dior",
    thumbnail: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/dior-stickblush.png",
    videoUrl: "https://rrxt4mgceuhmmfet.public.blob.vercel-storage.com/dior_stickblush.mp4",
    aspectRatio: "9:16",
    deliverables: ["1x Product UGC Video", "2x High-Res Product Photos"],
    brief: "Create an authentic skincare-focused video introducing the VOIS Bye Bye Bad Vibes Facial Cream and showcasing the product in use.",
    concept: "A natural, aesthetic skincare routine combining product close-ups, texture shots, application, and lifestyle moments to create an authentic feel-good product story.",
  },
];

export const SERVICES: Service[] = [
  {
    id: "short-form-video",
    number: "01",
    title: "SHORT-FORM VIDEO",
    description: "Engaging TikToks, Reels, and YouTube Shorts designed for organic reach and paid ad campaigns.",
    features: ["Hook variations", "Voiceover & Subtitles", "Optimized 9:16 format", "Trend integration"],
  },
  {
    id: "product-photography",
    number: "02",
    title: "PRODUCT PHOTOGRAPHY",
    description: "High-end, aesthetic lifestyle and studio imagery tailored to your brand's visual identity.",
    features: ["High-resolution delivery", "Styled prop composition", "Color-matched editing", "Commercial usage rights"],
  },
  {
    id: "testimonials",
    number: "03",
    title: "TESTIMONIALS & DEMOS",
    description: "Authentic first-person reviews and problem-solution demonstrations that build trust.",
    features: ["Genuine problem-solving story", "Before & After format", "Clear call-to-action", "Natural presentation"],
  },
  {
    id: "content-strategy",
    number: "04",
    title: "CREATIVE STRATEGY",
    description: "Data-informed concepts, hook ideation, scriptwriting, and visual moodboards.",
    features: ["Competitor research", "Hook & Script generation", "Shot list planning", "Audience positioning"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Mary delivered content that captured our brand's luxury aesthetic perfectly. The engagement rate on her video exceeded our benchmark by 40%.",
    author: "[CLIENT NAME]",
    role: "Marketing Director",
    brand: "[BRAND NAME]",
  },
  {
    id: "t2",
    quote: "Fast turnaround, incredible attention to lighting and detail, and video scripts that actually converted. Will definitely collaborate again!",
    author: "[CLIENT NAME]",
    role: "Founder",
    brand: "[BRAND NAME]",
  },
];