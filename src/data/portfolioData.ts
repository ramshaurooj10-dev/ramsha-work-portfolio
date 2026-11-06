import { VoiceDemo, ClientOrg, CountryProject, ProcessStep, TestimonialItem } from '../types';

export const PERSONAL_INFO = {
  name: "Ramsha Shaikh",
  title: "Voice Over Artist | Dubbing Artist | AI Content Creator",
  voExperience: "8+ Years",
  aiExperience: "3+ Years",
  languages: ["Urdu", "English", "American English Accent"],
  tagline: "Professional Voice Over, Dubbing, Multilingual Production & AI Content Solutions",
  bioHeadline: "8+ Years of Professional Voice Over & Dubbing Excellence",
  bioFull: `I’m Ramsha Shaikh, a professional Voice Over Artist, Dubbing Artist and AI Content Creator with 8+ years of experience in voice-over and audio production.

I work in Urdu and English, including American English accent, and provide professional voice-over, dubbing and synchronized dubbing services for brands, organizations, educational projects, films, documentaries, advertisements and digital content.

Alongside my individual work, I also work with a professional dubbing team, allowing me to provide complete multilingual dubbing solutions and coordinate voice production for larger projects.

For the past 3+ years, I have also been working as an AI Content Creator, creating AI-powered advertisements, children's content, educational videos, animated stories, realistic videos, UGC-style content and AI films.`,
  eceHighlight: `My background in Early Childhood Education (ECE) gives me an additional advantage when creating content for young children. I understand how preschool-age children learn, engage and respond to content, allowing me to create educational and entertaining content that is engaging and age-appropriate.`,
  email: "ramshaurooj10@gmail.com",
  linkedin: "https://www.linkedin.com/in/ramsha-urooj-3400381b2/",
  facebook: "https://www.facebook.com/suman.shaikh3/photos/",
};

export const QUICK_STATS = [
  { value: "8+", label: "Years Voice Over Experience", desc: "Professional VO & narration across digital & broadcast media" },
  { value: "3+", label: "Years AI Content Creation", desc: "Pioneering AI video, animation, and realistic brand content" },
  { value: "Multilingual", label: "Dubbing Production", desc: "Team-backed multi-character and synchronized dubbing" },
  { value: "International", label: "Clients & Projects", desc: "Trusted by UN, UNICEF, agencies, and global production houses" },
];

export const TRUSTED_ORGANIZATIONS: ClientOrg[] = [
  { name: "United Nations", region: "Global / International", type: "International NGO", description: "Narrations and humanitarian campaign voices" },
  { name: "UNICEF", region: "Global / International", type: "Children & Education", description: "Educational, health awareness & youth content" },
  { name: "Ministry of Defence, Pakistan", region: "Pakistan", type: "Government Project", description: "Official institutional documentaries and announcements" },
  { name: "Sunjok Organization, Bangladesh", region: "Bangladesh", type: "International Organization", description: "Cross-border educational & promotional voiceover" },
  { name: "Voice of Australians Australia", region: "Australia", type: "Media & Broadcasting", description: "Radio, podcast & digital media production" },
  { name: "Magna Vox, UK", region: "United Kingdom", type: "Production Studio", description: "Commercial dubbing and character voice matching" },
  { name: "Big Mouth, New Zealand", region: "New Zealand", type: "Voice Agency", description: "International brand commercials & American accent VO" },
  { name: "R&M, Riyadh, Saudi Arabia", region: "Saudi Arabia", type: "Corporate & Media", description: "Corporate narrations & multilingual brand videos" },
  { name: "MMG Global, Vietnam", region: "Vietnam", type: "Global Media", description: "Digital advertisements and AI video production" },
  { name: "Pakistani Government Projects", region: "Pakistan", type: "Public Sector", description: "National public awareness and documentary projects" },
  { name: "International Clients & Projects", region: "Worldwide", type: "Global Agencies", description: "Commercials, e-learning and e-commerce video production" }
];

export const COUNTRY_MAP_PROJECTS: CountryProject[] = [
  { country: "Pakistan", flag: "🇵🇰", regionName: "South Asia", projectCount: "150+", highlights: ["Ministry of Defence", "Government Public Campaigns", "Urdu Commercials"], coordinates: { x: 68, y: 44 } },
  { country: "Bangladesh", flag: "🇧🇩", regionName: "South Asia", projectCount: "40+", highlights: ["Sunjok Organization", "Educational Media"], coordinates: { x: 74, y: 46 } },
  { country: "United Kingdom", flag: "🇬🇧", regionName: "Europe", projectCount: "60+", highlights: ["Magna Vox UK", "Character Dubbing & Narration"], coordinates: { x: 47, y: 28 } },
  { country: "New Zealand", flag: "🇳🇿", regionName: "Oceania", projectCount: "35+", highlights: ["Big Mouth Agency", "American Accent Campaigns"], coordinates: { x: 92, y: 82 } },
  { country: "Saudi Arabia", flag: "🇸🇦", regionName: "Middle East", projectCount: "50+", highlights: ["R&M Riyadh", "Corporate Narrations"], coordinates: { x: 60, y: 48 } },
  { country: "Vietnam", flag: "🇻🇳", regionName: "Southeast Asia", projectCount: "25+", highlights: ["MMG Global", "AI Video & UGC Content"], coordinates: { x: 78, y: 52 } },
  { country: "Australia", flag: "🇦🇺", regionName: "Oceania", projectCount: "45+", highlights: ["Voice of Australians", "Radio & Digital Media"], coordinates: { x: 88, y: 72 } },
  { country: "International", flag: "🌐", regionName: "Global / Online", projectCount: "200+", highlights: ["UN & UNICEF Projects", "Global E-Learning"], coordinates: { x: 50, y: 50 } },
];

export const AI_CONTENT_CATEGORIES = [
  { title: "AI Movies", desc: "Short cinematic films with AI visuals, rich voiceovers, and dynamic sound design.", icon: "Clapperboard" },
  { title: "AI Animated Films", desc: "Stylized story-driven animations with custom character consistency.", icon: "Sparkles" },
  { title: "AI Cartoon Content", desc: "Vibrant cartoon series tailored for kids and digital audiences.", icon: "Smile" },
  { title: "Realistic AI Videos", desc: "Hyper-realistic video creation featuring life-like digital avatars and scenes.", icon: "Video" },
  { title: "AI Advertisements", desc: "Conversion-focused commercial spots with AI visuals and persuasive narration.", icon: "Megaphone" },
  { title: "UGC-Style Brand Videos", desc: "Authentic, relatable user-generated style videos for social media growth.", icon: "UserCheck" },
  { title: "Children's Stories", desc: "Engaging moral and fantasy tales enriched with ECE pedagogical insights.", icon: "BookOpen" },
  { title: "Educational Videos", desc: "Structured learning modules breaking down complex topics visually.", icon: "GraduationCap" },
  { title: "Character-Based Stories", desc: "Multi-character animated narratives with distinct voice dubbing.", icon: "Users" },
  { title: "Product Videos", desc: "Sleek product showcase reels and promotional demonstrations.", icon: "Package" },
  { title: "Social Media Content", desc: "High-engagement short-form videos tailored for Reels, TikTok & Shorts.", icon: "Share2" },
  { title: "Storytelling Content", desc: "Emotionally resonant narrative audio-visual experiences.", icon: "Heart" },
];

export const AI_PROCESS_STEPS: ProcessStep[] = [
  { step: "01", title: "Concept", description: "Brainstorming storyline, brand hooks, target emotion, and visual aesthetics.", iconName: "Lightbulb" },
  { step: "02", title: "Script", description: "Crafting impactful scripts tailored for narration, timing, and engagement.", iconName: "FileText" },
  { step: "03", title: "Voice", description: "Recording high-definition voiceover in Urdu, English, or American Accent.", iconName: "Mic" },
  { step: "04", title: "Characters", description: "Generating persistent, high-fidelity AI character models and assets.", iconName: "User" },
  { step: "05", title: "AI Visuals", description: "Rendering cinematic frames, animations, and camera motion sequences.", iconName: "Image" },
  { step: "06", title: "Video", description: "Composing clips, lip-syncing, sound effects, and color grading.", iconName: "Film" },
  { step: "07", title: "Final Content", description: "Exporting broadcast-ready high-resolution video tailored for your platform.", iconName: "CheckCircle" },
];

export const KIDS_SERVICES = [
  "Nursery Rhymes & Jingles",
  "Educational Songs & Music",
  "Preschool Learning Videos",
  "Alphabet & Phonics Content",
  "Numbers & Counting Stories",
  "Shapes & Colors Exploration",
  "Moral & Value-Based Stories",
  "Interactive Learning Modules",
  "Animated Children's Stories",
  "Character-Based E-Learning"
];

export const BRAND_UGC_SERVICES = [
  "Product Advertisements",
  "UGC-Style Social Videos",
  "Product Demonstrations",
  "Social Media Ads (Reels/TikTok)",
  "Brand Storytelling Campaigns",
  "Promotional Commercials",
  "AI Character Advertisements",
  "Realistic Brand Narratives",
  "Animated Brand Videos",
  "Voice-Over Commercial Spots"
];

export const PORTFOLIO_DEMOS: VoiceDemo[] = [
  {
    id: "un-urdu-vo",
    title: "United Nations — Urdu Voice Over",
    category: "Institutional / Documentary",
    language: "Urdu",
    projectType: "Institutional / Voice Over",
    description: "Professional Urdu voice-over sample created for United Nations-related content.",
    driveLink: "https://drive.google.com/file/d/1qECtKZ2ansXqG3BGXVgNenufAi4tM6ZT/view?usp=drive_link",
    audioUrl: "https://docs.google.com/uc?export=download&id=1qECtKZ2ansXqG3BGXVgNenufAi4tM6ZT",
    fileName: "United Nations Urdu.mp3",
    buttonText: "Listen to Demo",
    isFeatured: true,
    mediaType: "international"
  },
  {
    id: "blackholes-eng-vo",
    title: "Blackholes — English Documentary Narration",
    category: "Documentary",
    language: "English",
    projectType: "Documentary Narration",
    description: "English documentary-style narration demonstrating clear and professional storytelling delivery.",
    driveLink: "https://drive.google.com/file/d/1NQEvR4FthSpEaihFkJ4ncTzY5zYYotNf/view?usp=drive_link",
    audioUrl: "https://docs.google.com/uc?export=download&id=1NQEvR4FthSpEaihFkJ4ncTzY5zYYotNf",
    fileName: "Blackholes.wav",
    buttonText: "Listen to Demo",
    isFeatured: true,
    mediaType: "voice"
  },
  {
    id: "american-arizona-vo",
    title: "American English — Arizona Narration",
    category: "American English / Documentary Narration",
    language: "English",
    accent: "American English",
    projectType: "Documentary / Narration",
    description: "American English narration sample demonstrating Ramsha's American accent and natural English delivery.",
    driveLink: "https://drive.google.com/file/d/1vc9LuMgXjSsEjMqHk9Hf7w0vwY9nLs5Y/view?usp=drive_link",
    audioUrl: "https://docs.google.com/uc?export=download&id=1vc9LuMgXjSsEjMqHk9Hf7w0vwY9nLs5Y",
    fileName: "American Arizona New Sample.wav",
    buttonText: "Listen to Demo",
    isFeatured: true,
    mediaType: "voice"
  },
  {
    id: "urdu-doc-vo",
    title: "Urdu Documentary Narration",
    category: "Documentary",
    language: "Urdu",
    projectType: "Documentary Narration",
    description: "Professional Urdu documentary narration demonstrating clear, authoritative and natural delivery.",
    driveLink: "https://drive.google.com/file/d/1ejMUj4FivgdcFtnODtmMQ8TQM5Ql_gwP/view?usp=drive_link",
    audioUrl: "https://docs.google.com/uc?export=download&id=1ejMUj4FivgdcFtnODtmMQ8TQM5Ql_gwP",
    fileName: "Urdu Documentary.mp3",
    buttonText: "Listen to Demo",
    isFeatured: false,
    mediaType: "voice"
  },
  {
    id: "urdu-explainer-vo",
    title: "Urdu Explainer Voice Over",
    category: "Explainer",
    language: "Urdu",
    projectType: "Explainer Narration",
    description: "Clean studio-quality Urdu narration for explainer and informational content.",
    driveLink: "https://drive.google.com/file/d/1WYQsZhcAIMk4PLg3Auen2cLo0GphYijj/view?usp=drive_link",
    audioUrl: "https://docs.google.com/uc?export=download&id=1WYQsZhcAIMk4PLg3Auen2cLo0GphYijj",
    fileName: "Urdu Explainer.mp3",
    buttonText: "Listen to Demo",
    isFeatured: false,
    mediaType: "voice"
  },
  {
    id: "urdu-ad-vo",
    title: "Urdu Advertisement / TVC",
    category: "Commercial / Advertisement",
    language: "Urdu",
    projectType: "Commercial / TVC",
    description: "Commercial Urdu voice performance for advertising and branded content.",
    driveLink: "https://drive.google.com/file/d/1HfIvZDQi-eBT_3BB39T34y7YlgJjPy1C/view?usp=drive_link",
    audioUrl: "https://docs.google.com/uc?export=download&id=1HfIvZDQi-eBT_3BB39T34y7YlgJjPy1C",
    fileName: "Urdu Ad.mp3",
    buttonText: "Listen to Demo",
    isFeatured: false,
    mediaType: "ad"
  },
  {
    id: "urdu-ivr-vo",
    title: "Urdu IVR",
    category: "IVR",
    language: "Urdu",
    projectType: "IVR / Phone Prompts",
    description: "Professional Urdu IVR voice recording.",
    driveLink: "https://drive.google.com/file/d/1L_QzoanusIwkpPdDE46y1OY7YA9_uvB4/view?usp=drive_link",
    audioUrl: "https://docs.google.com/uc?export=download&id=1L_QzoanusIwkpPdDE46y1OY7YA9_uvB4",
    fileName: "Urdu IVR.wav",
    buttonText: "Listen to Demo",
    isFeatured: false,
    mediaType: "ivr"
  },
  {
    id: "urdu-poetry-vo",
    title: "Urdu Poetry — Ramsha's Own Voice",
    category: "Poetry / Emotional",
    language: "Urdu",
    projectType: "Poetry & Emotional Narration",
    description: "An expressive Urdu poetry performance recorded in Ramsha's own voice.",
    driveLink: "https://drive.google.com/file/d/1WYQsZhcAIMk4PLg3Auen2cLo0GphYijj/view?usp=drive_link",
    audioUrl: "https://docs.google.com/uc?export=download&id=1WYQsZhcAIMk4PLg3Auen2cLo0GphYijj",
    fileName: "Urdu Poetry.mp3",
    buttonText: "Listen to Demo",
    isFeatured: false,
    mediaType: "voice",
    isPoetryStyle: true
  },
  {
    id: "english-ivr-vo",
    title: "English IVR",
    category: "IVR",
    language: "English",
    projectType: "IVR / Telephone Voice",
    description: "Professional English IVR voice-over sample.",
    driveLink: "https://drive.google.com/file/d/11P8lCs-84vOfMf-G2dZMDVrc76tCjjOj/view?usp=drive_link",
    audioUrl: "https://docs.google.com/uc?export=download&id=11P8lCs-84vOfMf-G2dZMDVrc76tCjjOj",
    fileName: "IVR Done.wav",
    buttonText: "Listen to Demo",
    isFeatured: false,
    mediaType: "ivr"
  },
  {
    id: "national-bank-vo",
    title: "National Bank — English Corporate Voice Over",
    category: "Corporate / Financial",
    language: "English",
    projectType: "Corporate Narration",
    description: "Professional English corporate narration for financial and institutional communication.",
    driveLink: "https://drive.google.com/file/d/1g6gOaimL3PCFWwxiNgztik_bgAr0kg7u/view?usp=drive_link",
    audioUrl: "https://docs.google.com/uc?export=download&id=1g6gOaimL3PCFWwxiNgztik_bgAr0kg7u",
    fileName: "National Bank.wav",
    buttonText: "Listen to Demo",
    isFeatured: false,
    mediaType: "voice"
  },
  {
    id: "english-doc-vo",
    title: "English Documentary Narration",
    category: "Documentary",
    language: "English",
    projectType: "Documentary Narration",
    description: "English documentary narration demonstrating natural pacing and professional storytelling.",
    driveLink: "https://drive.google.com/file/d/1NQEvR4FthSpEaihFkJ4ncTzY5zYYotNf/view?usp=drive_link",
    audioUrl: "https://docs.google.com/uc?export=download&id=1NQEvR4FthSpEaihFkJ4ncTzY5zYYotNf",
    fileName: "Documentory.mp3",
    buttonText: "Listen to Demo",
    isFeatured: false,
    mediaType: "voice"
  }
];

export const WHY_WORK_WITH_RAMSHA = [
  {
    title: "8+ Years Experience",
    desc: "Proven track record in voice over, commercials, documentaries, and dubbing across diverse broadcast channels.",
    icon: "Award"
  },
  {
    title: "Professional Voice & Accent",
    desc: "Versatile delivery in Urdu, English, and authentic American English accent tailored to your target audience.",
    icon: "Mic"
  },
  {
    title: "Complete Dubbing Solution",
    desc: "Individual character dubbing as well as multi-character and multilingual team coordination for large productions.",
    icon: "Layers"
  },
  {
    title: "AI Content Expertise",
    desc: "3+ years of practical AI video generation, prompt engineering, AI animation, and realistic digital media creation.",
    icon: "Sparkles"
  },
  {
    title: "Children's Content Expertise",
    desc: "Early Childhood Education (ECE) academic background ensures age-appropriate, pedagogically sound kids' media.",
    icon: "Heart"
  },
  {
    title: "International Experience",
    desc: "Trusted by top global organizations like UN, UNICEF, government agencies, and international production studios.",
    icon: "Globe"
  },
  {
    title: "Flexible Production",
    desc: "Capable of solo voice delivery or managing a full voice casting and dubbing team for large-scale series.",
    icon: "Zap"
  }
];

export const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Brief & Objectives",
    desc: "Reviewing your project goals, script, audience demographics, tone preferences, and format specifications."
  },
  {
    num: "02",
    title: "Voice & Creative Direction",
    desc: "Selecting the ideal voice tone, language, accent style, pacing, or AI visual aesthetic direction."
  },
  {
    num: "03",
    title: "Production & Generation",
    desc: "Recording pristine studio voiceover, executing dubbing takes, or rendering state-of-the-art AI video visuals."
  },
  {
    num: "04",
    title: "Editing & Synchronization",
    desc: "Precise lip-sync matching, audio post-processing, noise removal, sound design, and video timing alignment."
  },
  {
    num: "05",
    title: "Final Delivery",
    desc: "Delivering broadcast-quality WAV/MP4 files formatted to your exact platform requirements with quick revisions."
  }
];

export const CLIENT_TYPES = [
  { title: "Brands & Enterprises", desc: "Commercial voiceovers, product launch ads, and brand story videos" },
  { title: "Production Companies", desc: "Film dubbing, documentary narrations, and character voice matching" },
  { title: "Advertising Agencies", desc: "TVCs, radio commercials, and viral social media campaigns" },
  { title: "Educational Companies", desc: "E-learning courses, instructional guides, and training videos" },
  { title: "Children's Content Creators", desc: "Animated nursery rhymes, educational apps, and storybooks" },
  { title: "Film & Animation Projects", desc: "Character voice acting and multi-character synchronized dubbing" },
  { title: "Government Projects", desc: "Institutional awareness, public safety announcements, and documentaries" },
  { title: "International Organizations", desc: "Humanitarian campaigns, global outreach, and non-profit media" },
  { title: "YouTube & Streaming Creators", desc: "Channel voiceovers, documentary series, and automated AI channels" },
  { title: "Digital Media Agencies", desc: "UGC ads, TikTok reels, and AI powered marketing campaigns" }
];

export const PLACEHOLDER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "International Production Client",
    company: "Global Media Group",
    quote: "Client testimonial will be added here.",
    role: "Senior Audio Producer",
    rating: 5,
    isPlaceholder: true
  },
  {
    id: "test-2",
    clientName: "Educational Media Agency",
    company: "EdTech World",
    quote: "Client testimonial will be added here.",
    role: "Creative Director",
    rating: 5,
    isPlaceholder: true
  },
  {
    id: "test-3",
    clientName: "Brand Campaign Manager",
    company: "International Agency",
    quote: "Client testimonial will be added here.",
    role: "Marketing Director",
    rating: 5,
    isPlaceholder: true
  }
];
