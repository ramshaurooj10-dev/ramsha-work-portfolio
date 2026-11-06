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
    description: 'Expressive Urdu voice sync and character dubbing for baby and children roles.',
    driveLink: 'https://drive.google.com/file/d/1WYs8YPv4Iim77Eu_tEi31aIbt1mWIGRf/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'dubbing-mermaid-urdu',
    title: 'Mermaid Dubbing',
    category: 'Character Dubbing',
    language: 'Urdu',
    type: 'Character / Fantasy Dubbing',
    description: 'Fantasy character dubbing in Urdu with synchronized dialogue timing and emotional nuance.',
    driveLink: 'https://drive.google.com/file/d/1vJK-JgBf10O3wq3Trxapx5EentOa_81A/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'dubbing-chinese-drama-urdu',
    title: 'Chinese Drama Dubbing',
    category: 'Drama',
    language: 'Urdu',
    type: 'Drama Dubbing',
    description: 'Lip-synced Urdu dubbing performance for international drama series localization.',
    driveLink: 'https://drive.google.com/file/d/1EX9HT6JOjQxX_kZIEf6iU0TOknJCmBxv/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'dubbing-halima-urdu',
    title: 'Halima Dubbing',
    category: 'Drama',
    language: 'Urdu',
    type: 'Drama / Character Dubbing',
    description: 'Dramatic Urdu voice performance for historical and period drama character acting.',
    driveLink: 'https://drive.google.com/file/d/1ukfkMew7h5AfWqckR73-5wvQoeRYwTiV/view?usp=drive_link'
  },
  {
    id: 'dubbing-ertugrul-urdu',
    title: 'Halima / Ertugul Dubbing',
    category: 'Drama',
    language: 'Urdu',
    type: 'Historical Drama Dubbing',
    description: 'Synchronized Urdu dialogue dubbing for epic historical drama productions.',
    driveLink: 'https://drive.google.com/file/d/1ukfkMew7h5AfWqckR73-5wvQoeRYwTiV/view?usp=drive_link'
  },
  {
    id: 'dubbing-movie-urdu',
    title: 'Movie Dubbing',
    category: 'Movie',
    language: 'Urdu',
    type: 'Movie Dubbing',
    description: 'Full feature film character voice dubbing with broadcast-standard audio mix and syncing.',
    driveLink: 'https://drive.google.com/file/d/1vBWir-ZzlV7PL7f1zoRk3s-KUXSeqC_s/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'dubbing-cartoon-1-urdu',
    title: 'Cartoon Dubbing',
    category: 'Cartoon',
    language: 'Urdu',
    type: 'Cartoon Dubbing',
    description: 'Animated cartoon character voice performance with playful pitch and rhythm.',
    driveLink: 'https://drive.google.com/file/d/1u4e38JLwF76jN2YZQhAOEnzcXAZr3RdC/view?usp=drive_link'
  },
  {
    id: 'dubbing-cartoon-2-urdu',
    title: 'Cartoon Dubbing — Sample 02',
    category: 'Cartoon',
    language: 'Urdu',
    type: 'Cartoon Dubbing',
    description: 'Character voice dubbing for animated television series in Urdu.',
    driveLink: 'https://drive.google.com/file/d/1WifMV-toxgSBAVZQMcHEu_mo4rnBOf8k/view?usp=drive_link'
  },
  {
    id: 'dubbing-drama-2-urdu',
    title: 'Drama Dubbing',
    category: 'Drama',
    language: 'Urdu',
    type: 'Drama Dubbing',
    description: 'Professional emotional dubbing performance for television drama broadcast.',
    driveLink: 'https://drive.google.com/file/d/1pyiNi0L2YzgOxOrKKhUgVG4oBurW6xlm/view?usp=drive_link'
  },
  {
    id: 'dubbing-tangled-urdu',
    title: 'Tangled — Cartoon Movie Dubbing',
    category: 'Cartoon',
    language: 'Urdu',
    type: 'Cartoon Movie Dubbing',
    description: 'Urdu animated feature film dubbing demonstration with lip-sync precision.',
    driveLink: 'https://drive.google.com/file/d/1H2oyZZ1Tv3scSgXHBOQznhrA59Rm8cIh/view?usp=drive_link',
    isFeatured: true
  },

  // --- ENGLISH DUBBING ---
  {
    id: 'dubbing-english-sample-1',
    title: 'English Dubbing Sample 01',
    category: 'English Dubbing',
    language: 'English',
    type: 'English Dubbing',
    description: 'Professional English sync dubbing for video, character, and commercial media.',
    driveLink: 'https://drive.google.com/file/d/1vKOO5MfJsVYbBxuSX09soUYmAqqY60NA/view?usp=drive_link',
    isFeatured: true
  },
  {
    id: 'dubbing-english-sample-2',
    title: 'English Dubbing Sample 02',
    category: 'English Dubbing',
    language: 'English',
    type: 'English Dubbing',
    description: 'Natural English dialogue dubbing sample with clean diction and pacing.',
    driveLink: 'https://drive.google.com/file/d/1dhJG_XRSlwXTjJwwl9pRuPnUsbMTzssJ/view?usp=drive_link'
  },
  {
    id: 'dubbing-english-cartoon',
    title: 'English Cartoon Dubbing',
    category: 'Cartoon',
    language: 'English',
    type: 'English Cartoon Dubbing',
    description: 'Character animated cartoon dubbing sample in English.',
    driveLink: 'https://drive.google.com/file/d/1dhECA8nGvoFf4ErTyHpyOnnaueW5CDdj/view?usp=drive_link'
  }
];
