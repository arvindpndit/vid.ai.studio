import {
  BestPractices,
  HeroSection,
  SearchContainer,
  FAQ,
} from '@/components/common';

import { heroText, placeholder, bestPractices, faqList } from './page-data';

export default function ChannelNameGenerator() {
  return (
    <div className="mt-20">
      <HeroSection heroText={heroText} />
      <SearchContainer
        placeholder={placeholder}
        url="/api/channel-name-generator"
      />
      <BestPractices bestPractices={bestPractices} />
      <FAQ faqList={faqList} />
    </div>
  );
}

