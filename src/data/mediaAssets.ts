import brandUgcSkincare from '../assets/images/brand_ugc_skincare_1795177087973.jpg';
import brandTechAppliance from '../assets/images/brand_tech_appliance_1795177093717.jpg';
import brandCorporateStory from '../assets/images/brand_corporate_story_1795177083607.jpg';
import studioVoiceBooth from '../assets/images/studio_voice_booth_1795177082729.jpg';
import kidsPreschoolIllustration from '../assets/images/kids_preschool_illustration_1795177086409.jpg';

import thumbCartoonsRhymes from '../assets/images/thumb_cartoons_rhymes_1795177112114.jpg';
import thumbAsmrInfluencer from '../assets/images/thumb_asmr_influencer_1795177083235.jpg';
import thumbVoiceStudio from '../assets/images/thumb_voice_studio_1795177087082.jpg';

export const MEDIA_ASSETS = {
  heroMic: '/assets/aistudio/gold-neon-mic-hero_885b842c.png',
  brandUgcSkincare,
  brandTechAppliance,
  brandCorporateStory,
  studioVoiceBooth,
  kidsPreschoolIllustration,
  thumbCartoonsRhymes,
  thumbAsmrInfluencer,
  thumbVoiceStudio,
};

export function getVoiceThumbnail(category: string, title: string): string {
  const text = `${category} ${title}`.toLowerCase();
  if (text.includes('corporate') || text.includes('bank') || text.includes('united nations')) {
    return brandCorporateStory;
  }
  if (text.includes('advertisement') || text.includes('commercial') || text.includes('tvc')) {
    return brandTechAppliance;
  }
  if (text.includes('ivr') || text.includes('explainer')) {
    return studioVoiceBooth;
  }
  if (text.includes('poetry') || text.includes('emotional')) {
    return thumbAsmrInfluencer;
  }
  return thumbVoiceStudio;
}

export function getDubbingThumbnail(category: string, title: string): string {
  const text = `${category} ${title}`.toLowerCase();
  if (text.includes('cartoon') || text.includes('tangled') || text.includes('baby') || text.includes('mermaid')) {
    return thumbCartoonsRhymes;
  }
  if (text.includes('drama') || text.includes('movie') || text.includes('halima') || text.includes('ertugrul')) {
    return brandCorporateStory;
  }
  return thumbVoiceStudio;
}
