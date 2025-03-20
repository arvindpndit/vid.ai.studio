import TrendingVideos from '@/components/pages/trending-videos/TrendingVideos';

const page = async ({ params }: any) => {
  const { countryCode } = await params;
  return <TrendingVideos countryCode={countryCode} />;
};

export default page;

