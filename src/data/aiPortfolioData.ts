import { AiContentProject } from '../types';

export function getDriveThumbnail(driveLink?: string): string | null {
  if (!driveLink) return null;
  const match = driveLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (!match || !match[1]) return null;
  return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800`;
}

export const AI_PORTFOLIO_CATEGORIES = [
  'All',
  'UGC',
  'Ads',
  'Marketing',
  'Cinematic',
  'Product Ads',
  '3D Animation',
  'Cartoons',
  'Kids & Education',
  'Rhymes',
  'ASMR',
  'Food / Viral',
  'AI Influencer',
  '2D Animation',
  'AI Music'
];

export const AI_FEATURED_TOP6: AiContentProject[] = [
      {
    id: 'ad-product-01',
    title: 'Product Advertisement 01',
    category: 'Product Ads',
    videoType: 'Product Advertisement',
    description: 'Sleek commercial video showcasing product design, lighting, and detail.',
    driveLink: 'https://drive.google.com/file/d/1PcHkjeHvwLFn4rcI7CoJmCiivoZcjpuT/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'product-anim-03',
    title: 'Product Animation 03',
    category: '3D Animation',
    videoType: '3D / Product Animation',
    description: 'Dynamic 3D animated product showcase with fluid camera rotations and material renders.',
    driveLink: 'https://drive.google.com/file/d/1OAQKMLsEORZuVg78YDo82t3BOst6UAzb/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'cartoon-3d-movie',
    title: 'Cartoon / 3D Movie',
    category: 'Cartoons',
    videoType: '3D Cartoon Movie',
    description: 'Playful 3D animated character film scene for children and entertainment.',
    driveLink: 'https://drive.google.com/file/d/12QoJdZalADg1lRmPwbSSk9nqWjwnsyMD/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'story-viral-cat',
    title: 'Viral Cat Story',
    category: 'Cartoons',
    videoType: 'AI Storytelling / Viral Content',
    description: 'Character-driven viral AI storytelling video crafted for high engagement.',
    driveLink: 'https://drive.google.com/file/d/1e1g4d0SI6OHMnWHN1baMytTz9X4xIMam/view?usp=drive_link',
    isFeatured: true
  }
];

export const AI_SERVICE_CARDS = [
  {
    title: 'AI UGC',
    desc: 'Brand-focused UGC and social advertisements with authentic digital creators.',
    icon: 'Camera'
  },
  {
    title: 'AI Advertising',
    desc: 'Creative advertisements and high-conversion commercial product campaigns.',
    icon: 'Megaphone'
  },
  {
    title: 'AI Cinematic Content',
    desc: 'Movie-style and cinematic visual storytelling with epic lighting and atmosphere.',
    icon: 'Film'
  },
  {
    title: 'AI Animation',
    desc: '2D, 3D and product animation engineered for brands and entertainment.',
    icon: 'Sparkles'
  },
  {
    title: 'Kids & Education',
    desc: 'Preschool content, nursery rhymes, cartoons and educational storytelling with ECE pedagogy.',
    icon: 'Heart'
  },
  {
    title: 'Social & Viral Content',
    desc: 'ASMR, food reviews, AI influencers, reels and short-form creative digital content.',
    icon: 'Zap'
  }
];

export const AI_PORTFOLIO_PROJECTS: AiContentProject[] = [
  // UGC / BRAND CONTENT
  {
    id: 'ugc-sample-1',
    title: 'UGC Sample 01',
    category: 'UGC',
    videoType: 'AI UGC',
    description: 'Handheld creator-style AI testimonial built to drive thumb-stopping engagement on Instagram and TikTok.',
    driveLink: 'https://drive.google.com/file/d/14OkSRsag7dNKVMQPjUgKX-7SQtslNnnA/view?usp=drive_link'
  },
  {
    id: 'ugc-sample-2',
    title: 'UGC Sample 02',
    category: 'UGC',
    videoType: 'AI UGC',
    description: 'Conversational unboxing-style AI reel spotlighting everyday product benefits with natural pacing.',
    driveLink: 'https://drive.google.com/file/d/1iJef_p3Pb9YtpW0a8S3kduMo-6SPUksD/view?usp=drive_link'
  },
  {
    id: 'ugc-sample-3',
    title: 'UGC Sample 03',
    category: 'UGC',
    videoType: 'AI UGC',
    description: 'Direct-to-camera AI spokesperson spot structured with a fast three-second social hook and clear CTA.',
    driveLink: 'https://drive.google.com/file/d/1UfbTW09KoWOBg4x77Y_sjqA1zCBgD5Nx/view?usp=drive_link'
  },
  {
    id: 'beauty-ugc-1',
    title: 'Beauty Product UGC 01',
    category: 'UGC',
    videoType: 'Beauty Product UGC',
    description: 'Soft-lit cosmetic demo showcasing texture, glow, and real-time application for beauty brands.',
    driveLink: 'https://drive.google.com/file/d/1Fkt6E4CIA4Opryna_83ZVP-hV-vbEWqc/view?usp=drive_link'
  },
  {
    id: 'beauty-ugc-2',
    title: 'Beauty Product UGC 02',
    category: 'UGC',
    videoType: 'Beauty Product UGC',
    description: 'Close-up skincare routine reel pairing natural studio daylight with authentic skin detail.',
    driveLink: 'https://drive.google.com/file/d/1ucsZwPhDDLhadih3Rcw1dyLMFJ0ao1-O/view?usp=drive_link'
  },
  {
    id: 'beauty-ugc-3',
    title: 'Beauty Product UGC 03',
    category: 'UGC',
    videoType: 'Beauty Product UGC',
    description: 'Conversion-focused beauty review ad crafted for paid social retargeting and product launches.',
    driveLink: 'https://drive.google.com/file/d/1X8PAwrRLKGqBjNKh4JM1QRESq2TUXI_v/view?usp=drive_link'
  },

  // CINEMATIC
  {
    id: 'animal-creative',
    title: 'Animal Creation',
    category: 'Cinematic',
    videoType: 'AI Creative / Animal',
    description: 'Photorealistic AI wildlife sequence capturing fine fur detail, fluid locomotion, and golden-hour lighting.',
    driveLink: 'https://drive.google.com/file/d/1Z3Ok1o4ahbxDsTw6mnsNpHwh4Wb8Sup0/view?usp=drive_link'
  },

  // MARKETING & BRANDING
  {
    id: 'marketing-ugc-2',
    title: 'Marketing UGC',
    category: 'Marketing',
    videoType: 'Marketing UGC',
    description: 'Performance-driven social marketing clip combining relatable creator framing with crisp brand messaging.',
    driveLink: 'https://drive.google.com/file/d/1Dk_vr36aVklSFNtLlloidd_up5vv9Pp4/view?usp=drive_link'
  },
  {
    id: 'car-marketing-ad',
    title: 'Car Marketing Advertisement',
    category: 'Marketing',
    videoType: 'Marketing / Automotive Advertisement',
    description: 'High-impact automotive commercial featuring sweeping tracking shots, road reflections, and bold pacing.',
    driveLink: 'https://drive.google.com/file/d/15mhQnorhuHqta9rWVPMzCeDjRuLab5y1/view?usp=drive_link'
  },

  // PRODUCT ADS
  {
    id: 'product-ad-01',
    title: 'Product Advertisement 01',
    category: 'Product Ads',
    videoType: 'Product Advertisement',
    description: 'Studio-lit commercial spot highlighting clean industrial design, hero angles, and tactile finish.',
    driveLink: 'https://drive.google.com/file/d/1PcHkjeHvwLFn4rcI7CoJmCiivoZcjpuT/view?usp=drive_link'
  },
  {
    id: 'fruitare-ad',
    title: 'Fruitare Product Advertisement',
    category: 'Product Ads',
    videoType: 'Product Advertisement',
    description: 'Energetic Fruitare beverage spot bursting with high-speed fruit splashes and chilled condensation.',
    driveLink: 'https://drive.google.com/file/d/1P_NQz0gWes83e59jyAGeoKP2pogyOUEl/view?usp=drive_link'
  },
  {
    id: 'perfume-ad',
    title: 'Luxury Fragrance Commercial',
    category: 'Product Ads',
    videoType: 'Product Advertisement',
    description: 'Atmospheric fragrance spot pairing mist, glass refraction, and sensual slow-motion bottle reveals.',
    driveLink: 'https://drive.google.com/file/d/15hCi6fSkhyVo_4kljWwku089aKj1L9p3/view?usp=drive_link'
  },
  {
    id: 'pantene-ad',
    title: 'Pantene Advertisement',
    category: 'Product Ads',
    videoType: 'Product Advertisement',
    description: 'Glossy Pantene haircare commercial highlighting silky slow-motion movement and luminous studio lighting.',
    driveLink: 'https://drive.google.com/file/d/1cKnT0kmVgUEfxn7gYPIk43V9WwCYefeC/view?usp=drive_link'
  },
  {
    id: 'shampoo-ad',
    title: 'Shampoo Advertisement',
    category: 'Product Ads',
    videoType: 'Product Advertisement',
    description: 'Refreshing hair-cleansing commercial rendered with crisp water ribbons and rich botanical lather.',
    driveLink: 'https://drive.google.com/file/d/1ZzIVSrqLBlL3vI4EYvT99I96qzijeGss/view?usp=drive_link'
  },

  // AI INFLUENCER & PODCAST
  {
    id: 'influencer-motivational',
    title: 'Motivational English Influencer',
    category: 'AI Influencer',
    videoType: 'AI Influencer / English',
    description: 'Charismatic English-speaking digital host delivering uplifting short-form mindset commentary.',
    driveLink: 'https://drive.google.com/file/d/1QLjr-hxAwgi3Fk2KP3zIQsRas7ql7kpM/view?usp=drive_link'
  },
  {
    id: 'english-podcast',
    title: 'English AI Podcast',
    category: 'AI Influencer',
    videoType: 'AI Podcast / Social Content',
    description: 'Two-host English AI studio podcast featuring natural back-and-forth rhythm and clean vocal separation.',
    driveLink: 'https://drive.google.com/file/d/1NJs6H12aYeMmHrNGKvCuN08r1DAMTPe3/view?usp=drive_link'
  },
  {
    id: 'influencer-urdu-human',
    title: 'Human Influencer — Urdu',
    category: 'AI Influencer',
    videoType: 'AI Influencer / Urdu',
    description: 'Lifelike Urdu-speaking digital brand ambassador tailored for regional social media storytelling.',
    driveLink: 'https://drive.google.com/file/d/1rfzXuUGaReKyc0Q7bPSUCtQtU5PIAydG/view?usp=drive_link'
  },

  // 3D ANIMATION
  {
    id: 'product-anim-01',
    title: 'Product Animation 01',
    category: '3D Animation',
    videoType: 'Product Animation',
    description: 'Precision 3D motion-graphics showcase built for sleek digital product launches and hero banners.',
    driveLink: 'https://drive.google.com/file/d/1lnmVkAI4gr3NZhkNksa_uVuXdB_UDIcj/view?usp=drive_link'
  },
  {
    id: 'product-anim-02',
    title: 'Product Animation 02',
    category: '3D Animation',
    videoType: 'Product Animation',
    description: 'Close-range 3D product flyaround emphasizing surface contours, metallic sheen, and clean transitions.',
    driveLink: 'https://drive.google.com/file/d/1vv_Q07YlrBP4ybRF0SMOh0AlTrtWw7So/view?usp=drive_link'
  },
  {
    id: 'product-anim-03-full',
    title: 'Product Animation 03',
    category: '3D Animation',
    videoType: '3D / Product Animation',
    description: 'Dynamic 3D commercial animation uniting smooth orbital camera moves with realistic material physics.',
    driveLink: 'https://drive.google.com/file/d/1OAQKMLsEORZuVg78YDo82t3BOst6UAzb/view?usp=drive_link'
  },

  // ASMR
  {
    id: 'asmr-main',
    title: 'Sensory Studio ASMR',
    category: 'ASMR',
    videoType: 'ASMR',
    description: 'Immersive micro-soundscape and soothing visual triggers crafted for deep relaxation channels.',
    driveLink: 'https://drive.google.com/file/d/1Z6nbLrAHb-t8pGcnh7LyXEx6q6WuY1mC/view?usp=drive_link'
  },
  {
    id: 'real-human-asmr-1',
    title: 'Real Human ASMR 01',
    category: 'ASMR',
    videoType: 'Real Human ASMR',
    description: 'Close-mic gentle voice recording with delicate acoustic textures for calming listener sessions.',
    driveLink: 'https://drive.google.com/file/d/1zsHRv1Vk2mIGSz6rNuG2SUUVvTMmrnYi/view?usp=drive_link'
  },
  {
    id: 'real-human-asmr-2',
    title: 'Real Human ASMR 02',
    category: 'ASMR',
    videoType: 'Real Human ASMR',
    description: 'Quiet, breath-controlled whispered narration engineered for sleep, mindfulness, and stress relief.',
    driveLink: 'https://drive.google.com/file/d/1WsC-tcpVvDTQcxuphEh8CkAP-8adTxXC/view?usp=drive_link'
  },
  {
    id: 'paint-asmr',
    title: 'Paint ASMR',
    category: 'ASMR',
    videoType: 'Visual ASMR',
    description: 'Hypnotic pigment-swirling and palette-knife texture ASMR clip with crisp tactile sound design.',
    driveLink: 'https://drive.google.com/file/d/1zNV4B-QMx3ub5y4h6PBRODlLVbVYv144/view?usp=drive_link'
  },
  {
    id: 'cat-asmr',
    title: 'Cat ASMR',
    category: 'ASMR',
    videoType: 'Animal ASMR',
    description: 'Cozy feline visuals layered with warm rhythmic purring for comforting ambient playback.',
    driveLink: 'https://drive.google.com/file/d/1PjhqDI5ZWoc9rTzxhy5njlwRcSd1Wrkh/view?usp=drive_link'
  },

  // FOOD / VIRAL CONTENT
  {
    id: 'food-viral-01',
    title: 'Food Viral Content 01',
    category: 'Food / Viral',
    videoType: 'Food Viral Content',
    description: 'Fast-cut gourmet kitchen reel capturing sizzle, steam, and rich plating built for viral sharing.',
    driveLink: 'https://drive.google.com/file/d/1tiKxzD1suNB56P-SvGksqlxxnC5ORMc9/view?usp=drive_link'
  },
  {
    id: 'food-viral-02',
    title: 'Food Viral Content 02',
    category: 'Food / Viral',
    videoType: 'Food Viral Content',
    description: 'Macro slow-motion culinary showcase designed to maximize retention across Shorts and Reels.',
    driveLink: 'https://drive.google.com/file/d/1KchoRD3dOCidBKNoUAOZJcPg5b7Yu4b9/view?usp=drive_link'
  },
  {
    id: 'food-review-urdu',
    title: 'Food Review — Urdu',
    category: 'Food / Viral',
    videoType: 'Food Review — Urdu',
    description: 'Lively Urdu tasting review pairing expressive voice narration with mouthwatering restaurant shots.',
    driveLink: 'https://drive.google.com/file/d/10240AeaRKZB7tLuO609SXy38mvttR5yh/view?usp=drive_link'
  },

  // CARTOONS
  {
    id: 'urdu-cartoon-01',
    title: 'Urdu Cartoon 01',
    category: 'Cartoons',
    videoType: 'Urdu Cartoon',
    description: 'Heartwarming Urdu animated story weaving positive social habits into playful character dialogue.',
    driveLink: 'https://drive.google.com/file/d/1S9axX2yoJ1NinbfgGfp3HEwreYQDLLlr/view?usp=drive_link'
  },
  {
    id: 'urdu-cartoon-02',
    title: 'Urdu Cartoon 02',
    category: 'Cartoons',
    videoType: 'Urdu Cartoon',
    description: 'Multi-character Urdu cartoon episode brought to life with distinct vocal personalities and timing.',
    driveLink: 'https://drive.google.com/file/d/1nY0QnBIahOnOQMVwFOZ_Xx-sbGaU0vL1/view?usp=drive_link'
  },
  {
    id: 'urdu-cartoon-03',
    title: 'Urdu Cartoon 03',
    category: 'Cartoons',
    videoType: 'Urdu Cartoon',
    description: 'Colorful kids adventure episode narrated in clear, child-friendly Urdu for young viewers.',
    driveLink: 'https://drive.google.com/file/d/1MGDPSgCe_cSwMuXgXOqJ0b0rZXRnJwRu/view?usp=drive_link'
  },
  {
    id: 'cartoon-3d-movie-full',
    title: 'Cartoon / 3D Movie',
    category: 'Cartoons',
    videoType: '3D Cartoon Movie',
    description: 'Theatrical-style 3D animated scene showcasing expressive character animation and rich cinematic staging.',
    driveLink: 'https://drive.google.com/file/d/12QoJdZalADg1lRmPwbSSk9nqWjwnsyMD/view?usp=drive_link'
  },
  {
    id: 'cat-story-viral',
    title: 'Viral Cat Story 01',
    category: 'Cartoons',
    videoType: 'AI Storytelling / Viral Content',
    description: 'Playful animated kitten tale paced with crisp emotional beats for high-shareability social feeds.',
    driveLink: 'https://drive.google.com/file/d/1e1g4d0SI6OHMnWHN1baMytTz9X4xIMam/view?usp=drive_link'
  },
  {
    id: 'cat-story-02',
    title: 'Viral Cat Story 02',
    category: 'Cartoons',
    videoType: 'AI Storytelling',
    description: 'Charming sequel episode pairing whimsical feline animation with lively custom character dubbing.',
    driveLink: 'https://drive.google.com/file/d/1qId7038orQaK4u7FDG0SLn2Vz594EqN7/view?usp=drive_link'
  },
  {
    id: 'cat-story-03',
    title: 'Viral Cat Story 03',
    category: 'Cartoons',
    videoType: 'AI Storytelling',
    description: 'Upbeat animated cat adventure short blending visual comedy with warm narrative storytelling.',
    driveLink: 'https://drive.google.com/file/d/1nrCff1BxktLJct4YMN42wEqyOZjdcakZ/view?usp=drive_link'
  },
  {
    id: 'reel-cartoon',
    title: 'Reel / Cartoon',
    category: 'Cartoons',
    videoType: 'Reel / Cartoon',
    description: 'Vertical animated comedy short engineered specifically for mobile Reels and YouTube Shorts.',
    driveLink: 'https://drive.google.com/file/d/1Mb44tEXjpz4bldPMaPBEvFOpJT4eBWqn/view?usp=drive_link'
  },

  // RHYMES & KIDS
  {
    id: 'english-rhyme-01',
    title: 'English Rhyme 01',
    category: 'Rhymes',
    videoType: 'Kids / Preschool / Nursery Rhymes',
    description: 'Bouncy animated nursery rhyme pairing rhythmic vocals with joyful early-learning visual cues.',
    driveLink: 'https://drive.google.com/file/d/1v2QKNuW9aiAPZQc7xEWS4ABjDWVZIJhp/view?usp=drive_link'
  },
  {
    id: 'english-rhyme-02',
    title: 'English Rhyme 02',
    category: 'Rhymes',
    videoType: 'Kids / Preschool / Nursery Rhymes',
    description: 'Sing-along preschool song built around Early Childhood Education repetition and melody recall.',
    driveLink: 'https://drive.google.com/file/d/16rJgYo0o_A8ZokbRmju5A-dmJ7PyNoG_/view?usp=drive_link'
  },
  {
    id: 'english-rhyme-03',
    title: 'English Rhyme 03',
    category: 'Rhymes',
    videoType: 'Kids / Preschool / Nursery Rhymes',
    description: 'ECE-guided preschool sing-along featuring crystal-clear pronunciation and friendly character motion.',
    driveLink: 'https://drive.google.com/file/d/1qSnhHG7oZ-WryrlPK9QzSVu2I7HI5Rfi/view?usp=drive_link'
  },

  // 2D ANIMATION
  {
    id: '2d-stickman',
    title: '2D Stickman',
    category: '2D Animation',
    videoType: '2D Stickman Animation',
    description: 'Minimalist stick-figure storytelling clip using punchy visual humor for fast-paced social channels.',
    driveLink: 'https://drive.google.com/file/d/1NrnMsOh98DzCPbZIGOi3ol81W1fXIrIz/view?usp=drive_link'
  },
  {
    id: '2d-animation-1',
    title: '2D Animation 01',
    category: '2D Animation',
    videoType: '2D Animation',
    description: 'Expressive flat-vector character clip demonstrating smooth lip-sync and crisp motion graphics.',
    driveLink: 'https://drive.google.com/file/d/1ON5Ij3oMpM6RDPhfEVBoB4WpusIO7vWn/view?usp=drive_link'
  },
  {
    id: '2d-animation-02',
    title: '2D Animation 02',
    category: '2D Animation',
    videoType: '2D Animation',
    description: 'Illustrated 2D explainer motion sequence with seamless scene morphs and clean broadcast timing.',
    driveLink: 'https://drive.google.com/file/d/1I5UI4iVUNIYTSPQxQXF0d_40XJZCusl-/view?usp=drive_link'
  },

  // REELS & CREATIVE
  {
    id: 'reel-creative',
    title: 'Reel / Creative Content',
    category: 'Marketing',
    videoType: 'Reel / Creative Content',
    description: 'Stylized vertical brand reel designed to hold attention through rhythmic cuts and visual flair.',
    driveLink: 'https://drive.google.com/file/d/1JtuRN9pWtWCDurMB5MfO8qFrT-XySx09/view?usp=drive_link'
  },

  // NEW — Drive links only, no MP4 files
  {
    id: 'ugc-woman-sleeping-ad',
    title: 'UGC — Woman Sleeping Ad',
    category: 'UGC',
    videoType: 'AI UGC',
    description: 'Relatable wellness and neck-comfort UGC ad opening on a realistic restless-sleep hook.',
    driveLink: 'https://drive.google.com/file/d/1s0jWXtXcCQEwsIAb3u-Vc551vb1n2bQ5/view?usp=drive_link'
  },
  {
    id: 'science-educational-video',
    title: 'Science Educational Video',
    category: 'Kids & Education',
    videoType: 'Science / Educational Video',
    description: 'Structured STEM explainer breaking down scientific concepts with clear diagrams and narration.',
    driveLink: 'https://drive.google.com/file/d/1GE5BEO9WOSpkCid9fjU-i6tEmVEoQvAz/view?usp=drive_link'
  },
  {
    id: 'influencer-woman-show',
    title: 'Woman Show — AI Influencer',
    category: 'AI Influencer',
    videoType: 'AI Influencer',
    description: 'Talk-show style AI female presenter delivering engaging lifestyle commentary for social feeds.',
    driveLink: 'https://drive.google.com/file/d/1mrCmohGsV74zZTtB-Srn1wXZ0wkHj1vY/view?usp=drive_link'
  },
  {
    id: 'product-male-perfume-01',
    title: 'Male Perfume Advertisement 01',
    category: 'Product Ads',
    videoType: 'Product Advertisement',
    description: 'Bold men’s cologne commercial sculpted with dark chiaroscuro lighting and metallic bottle glints.',
    driveLink: 'https://drive.google.com/file/d/1LmaQzM7EHyqonRc8SbYrU5WzUTNZ5bfa/view?usp=drive_link'
  },
  {
    id: 'product-woman-clothing',
    title: "Women's Clothing Advertisement",
    category: 'Product Ads',
    videoType: 'Product Advertisement',
    description: 'Editorial fashion campaign highlighting flowing fabric motion and contemporary styling.',
    driveLink: 'https://drive.google.com/file/d/1lN9ZKxZbpA7aeu-FEHxPw2hBtSTPpvIX/view?usp=drive_link'
  },
  {
    id: 'marketing-insurance-corporate',
    title: 'Insurance Corporate Advertisement',
    category: 'Marketing',
    videoType: 'Corporate Advertisement',
    description: 'Reassuring family-protection insurance spot built around trust, security, and corporate clarity.',
    driveLink: 'https://drive.google.com/file/d/1jeaMMbMKNTztCn4_emT9bFrfwiuZATIj/view?usp=drive_link'
  },
  {
    id: 'product-woman-shoe',
    title: "Women's Shoe Advertisement",
    category: 'Product Ads',
    videoType: 'Product Advertisement',
    description: 'High-fashion footwear commercial showcasing sleek silhouette angles and dramatic runway lighting.',
    driveLink: 'https://drive.google.com/file/d/1YqGKI_pCn516Wzj7IlhA9_X534dIDE_R/view?usp=drive_link'
  },
  {
    id: 'product-male-perfume-02',
    title: 'Male Perfume Advertisement 02',
    category: 'Product Ads',
    videoType: 'Product Advertisement',
    description: 'Evening luxury fragrance showcase emphasizing atmospheric smoke trails and masculine sophistication.',
    driveLink: 'https://drive.google.com/file/d/1O1YAqunTws14t9UeOWYE2745hcYbSS2u/view?usp=drive_link'
  },
  {
    id: 'product-male-watch',
    title: 'Male Watch Advertisement',
    category: 'Product Ads',
    videoType: 'Product Advertisement',
    description: 'Macro horology commercial spotlighting brushed-metal bezels, sweeping hands, and luxury craftsmanship.',
    driveLink: 'https://drive.google.com/file/d/1tqrSrYTQpMFz1elQxmTlDqr8MO-0KpHp/view?usp=drive_link'
  },
  {
    id: 'anim-claymation-food-cgi',
    title: 'Claymation Pixar-Style Food Ad (CGI)',
    category: '3D Animation',
    videoType: 'Claymation / CGI Food Ad',
    description: 'Whimsical handcrafted claymation food commercial blending tactile textures with playful CGI charm.',
    driveLink: 'https://drive.google.com/file/d/1dO9iZfTRnNRfPwCfJzqRAMBShNYxH3QX/view?usp=drive_link'
  },
  {
    id: 'anim-claymation-prince-chocolate',
    title: 'Claymation Prince Chocolate Ad',
    category: '3D Animation',
    videoType: 'Claymation Advertisement',
    description: 'Storybook claymation spot featuring rich swirling chocolate and charismatic biscuit characters.',
    driveLink: 'https://drive.google.com/file/d/1njE0-tFw8aKFNq8CazRpprHMLHYE8sHD/view?usp=drive_link'
  },
  {
    id: 'anim-claymation-chocolate',
    title: 'Claymation Chocolate Ad',
    category: '3D Animation',
    videoType: 'Claymation Advertisement',
    description: 'Playful stop-motion inspired chocolate commercial bursting with sculpted cocoa pours and warmth.',
    driveLink: 'https://drive.google.com/file/d/10w5NH5Qkw9spkgOBi0Lxq6S14d8LPlI5/view?usp=drive_link'
  },
  {
    id: 'food-cgi-fast-food',
    title: 'Food CGI Ad — Fast Food',
    category: 'Food / Viral',
    videoType: 'Food CGI Advertisement',
    description: 'Explosive CGI quick-service commercial featuring floating ingredients and crisp crave-worthy lighting.',
    driveLink: 'https://drive.google.com/file/d/1VXq5CaopaW99N2JcsUCq4AZ5xNR05kVk/view?usp=drive_link'
  },
  {
    id: 'food-ad-02',
    title: 'Restaurant & Culinary Ad',
    category: 'Food / Viral',
    videoType: 'Food Advertisement',
    description: 'Appetizing restaurant spotlight highlighting fresh plating and dynamic tabletop cinematography.',
    driveLink: 'https://drive.google.com/file/d/1KahU3jdwjNvg3M7NoS7U3UfQz0i3OtVC/view?usp=drive_link'
  },
  {
    id: 'marketing-vehicle-reassemble',
    title: 'Vehicle Reassemble Advertisement',
    category: 'Marketing',
    videoType: 'Automotive Advertisement',
    description: 'High-tech CGI automotive spot assembling precision engine and chassis parts in mid-air.',
    driveLink: 'https://drive.google.com/file/d/12quVCrAFUC7Au7FaG4GVDNI8uSTpHrPp/view?usp=drive_link'
  },
  {
    id: 'anim-claymation-slice-juice',
    title: 'Claymation Slice Juice Ad',
    category: '3D Animation',
    videoType: 'Claymation Advertisement',
    description: 'Vibrant claymation mango-juice commercial pairing tactile miniature sets with refreshing fruit splashes.',
    driveLink: 'https://drive.google.com/file/d/1afpKBT-q1qkVSXQ3UoDM_EKzHJVb_bOj/view?usp=drive_link'
  }
];
