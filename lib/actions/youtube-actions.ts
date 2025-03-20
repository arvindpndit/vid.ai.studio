export const getYoutubeTrendingVideos = async (countryCode: any) => {
  try {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=${countryCode}&key=${process.env.YOUTUBE_APP_API_KEY}`,
    );
    const json = await data.json();
    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

