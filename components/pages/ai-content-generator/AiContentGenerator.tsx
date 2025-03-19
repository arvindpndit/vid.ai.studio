import {
  BestPractices,
  HeroSection,
  SearchContainer,
  FAQ,
} from '@/components/common';

import { heroText, placeholder, bestPractices, faqList } from './page-data';

export default function AiContentGenerator() {
  return (
    <div className="mt-20">
      <HeroSection heroText={heroText} />
      <SearchContainer
        placeholder={placeholder}
        url="/api/ai-content-generator"
        showAll={true}
      />
      <BestPractices bestPractices={bestPractices} />
      <FAQ faqList={faqList} />
    </div>
  );
}

