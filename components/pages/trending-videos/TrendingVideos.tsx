import { HeroSection } from '@/components/common';
import VideoContainer from '@/components/common/container/VideoContainer';
import { CountrySelector } from '@/components/form/CountrySelector';
import { getYoutubeTrendingVideos } from '@/lib/actions/youtube-actions';
import { TRENDING_VIDEO_HERO_SECTION as heroText } from '@/utils/constants';

const TrendingVideos = async ({ countryCode }: any) => {
  const res = await getYoutubeTrendingVideos(countryCode);
  const videos = res.items;

  return (
    <div className="w-full mx-auto mt-20 px-1">
      <HeroSection heroText={heroText} />
      <CountrySelector />
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {videos?.map((video: any) => (
          <VideoContainer video={video} key={video?.etag} />
        ))}
      </div>
    </div>
  );
};

export default TrendingVideos;

