import React from 'react';
import { VoiceOverSection } from './VoiceOverSection';

interface PortfolioShowcaseProps {
  onOpenAdminModal?: () => void;
  onOpenContactModal?: () => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  onOpenAdminModal,
  onOpenContactModal
}) => {
  return (
    <VoiceOverSection
      onOpenAdminModal={onOpenAdminModal}
      onOpenContactModal={onOpenContactModal}
    />
  );
};


