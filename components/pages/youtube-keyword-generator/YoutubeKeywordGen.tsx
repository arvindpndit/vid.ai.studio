import {
  BestPractices,
  HeroSection,
  SearchContainer,
  FAQ,
} from '@/components/common';

import { heroText, placeholder, bestPractices, faqList } from './page-data';

export default function YoutubeKeywordGen() {
  return (
    <div className="mt-20">
      <HeroSection heroText={heroText} />
      <SearchContainer
        placeholder={placeholder}
        url="/api/youtube-keyword-generator"
      />
      <BestPractices bestPractices={bestPractices} />
      <FAQ faqList={faqList} />
    </div>
  );
}

