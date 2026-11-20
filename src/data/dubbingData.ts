import { DubbingProject } from '../types';

export const DUBBING_FILTERS = [
  'All',
  'Urdu Dubbing',
  'English Dubbing',
  'Drama',
  'Movie',
  'Cartoon',
  'Character Dubbing'
];

export const DUBBING_CAPABILITIES = [
  'Character Dubbing',
  'Sync Dubbing',
  'Movie Dubbing',
  'Drama Dubbing',
  'Cartoon Dubbing',
  'Children\'s Dubbing',
  'Multilingual Dubbing',
  'Team-Based Dubbing'
];

export const DUBBING_PROJECTS: DubbingProject[] = [
  // --- URDU DUBBING ---
  {
    id: 'dubbing-baby-urdu',
    title: 'Baby Dubbing',
    category: 'Character Dubbing',
    language: 'Urdu',
    type: "Character / Children's Dubbing",
    description: 'High-pitched, playful Urdu infant and toddler voice acting matched to animated expressions.',
    driveLink: 'https://drive.google.com/file/d/1WYs8YPv4Iim77Eu_tEi31aIbt1mWIGRf/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'dubbing-mermaid-urdu',
    title: 'Mermaid Dubbing',
    category: 'Character Dubbing',
    language: 'Urdu',
    type: 'Character / Fantasy Dubbing',
    description: 'Lyrical Urdu fantasy dubbing capturing underwater wonder, breath timing, and emotional warmth.',
    driveLink: 'https://drive.google.com/file/d/1vJK-JgBf10O3wq3Trxapx5EentOa_81A/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'dubbing-chinese-drama-urdu',
    title: 'Chinese Drama Dubbing',
    category: 'Drama',
    language: 'Urdu',
    type: 'Drama Dubbing',
    description: 'Frame-accurate lip-synced Urdu dialogue adaptation for serialized East Asian television drama.',
    driveLink: 'https://drive.google.com/file/d/1EX9HT6JOjQxX_kZIEf6iU0TOknJCmBxv/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'dubbing-ertugrul-urdu',
    title: 'Halima / Ertugrul — Historical Drama Dubbing',
    category: 'Drama',
    language: 'Urdu',
    type: 'Historical Drama Dubbing',
    description: 'Poised, dramatic Urdu period performance synchronized to Turkish historical series dialogue.',
    driveLink: 'https://drive.google.com/file/d/1ukfkMew7h5AfWqckR73-5wvQoeRYwTiV/view?usp=drive_link'
  },
  {
    id: 'dubbing-movie-urdu',
    title: 'Feature Movie Dubbing',
    category: 'Movie',
    language: 'Urdu',
    type: 'Movie Dubbing',
    description: 'Cinema-grade Urdu lead character dubbing mixed for seamless theatrical lip-sync immersion.',
    driveLink: 'https://drive.google.com/file/d/1vBWir-ZzlV7PL7f1zoRk3s-KUXSeqC_s/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'dubbing-cartoon-1-urdu',
    title: 'Cartoon Dubbing — Sample 01',
    category: 'Cartoon',
    language: 'Urdu',
    type: 'Cartoon Dubbing',
    description: 'Energetic Urdu cartoon character acting driven by crisp comedic timing and pitch shifts.',
    driveLink: 'https://drive.google.com/file/d/1u4e38JLwF76jN2YZQhAOEnzcXAZr3RdC/view?usp=drive_link'
  },
  {
    id: 'dubbing-cartoon-2-urdu',
    title: 'Cartoon Dubbing — Sample 02',
    category: 'Cartoon',
    language: 'Urdu',
    type: 'Cartoon Dubbing',
    description: 'Vibrant animated television episode dubbing featuring nimble multi-beat Urdu reactions.',
    driveLink: 'https://drive.google.com/file/d/1WifMV-toxgSBAVZQMcHEu_mo4rnBOf8k/view?usp=drive_link'
  },
  {
    id: 'dubbing-drama-2-urdu',
    title: 'Television Drama Dubbing',
    category: 'Drama',
    language: 'Urdu',
    type: 'Drama Dubbing',
    description: 'Intense dramatic Urdu dialogue sync crafted for prime-time serial television localization.',
    driveLink: 'https://drive.google.com/file/d/1pyiNi0L2YzgOxOrKKhUgVG4oBurW6xlm/view?usp=drive_link'
  },
  {
    id: 'dubbing-tangled-urdu',
    title: 'Tangled — Cartoon Movie Dubbing',
    category: 'Cartoon',
    language: 'Urdu',
    type: 'Cartoon Movie Dubbing',
    description: 'Expressive Urdu feature-animation dubbing balancing sparkling humor with precise lip-sync.',
    driveLink: 'https://drive.google.com/file/d/1H2oyZZ1Tv3scSgXHBOQznhrA59Rm8cIh/view?usp=drive_link',
    isFeatured: true
  },

  // --- ENGLISH DUBBING ---
  {
    id: 'dubbing-english-sample-1',
    title: 'English Dubbing — Sample 01',
    category: 'English Dubbing',
    language: 'English',
    type: 'English Dubbing',
    description: 'Natural English lip-sync localization for international video and commercial character scenes.',
    driveLink: 'https://drive.google.com/file/d/1vKOO5MfJsVYbBxuSX09soUYmAqqY60NA/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'dubbing-english-sample-2',
    title: 'English Dubbing — Sample 02',
    category: 'English Dubbing',
    language: 'English',
    type: 'English Dubbing',
    description: 'Conversational English scene dubbing with crisp articulation and matched emotional beats.',
    driveLink: 'https://drive.google.com/file/d/1dhJG_XRSlwXTjJwwl9pRuPnUsbMTzssJ/view?usp=drive_link'
  },
  {
    id: 'dubbing-english-cartoon',
    title: 'English Cartoon Dubbing',
    category: 'Cartoon',
    language: 'English',
    type: 'English Cartoon Dubbing',
    description: 'Bright animated character voice acting in English tailored for children’s entertainment.',
    driveLink: 'https://drive.google.com/file/d/1dhECA8nGvoFf4ErTyHpyOnnaueW5CDdj/view?usp=drive_link'
  }
];
