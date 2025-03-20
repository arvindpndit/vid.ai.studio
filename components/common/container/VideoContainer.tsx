import { formatViewsCount, timeAgo } from '@/utils/data-manipulation';
import Image from 'next/image';
import React from 'react';
import { Dot } from 'lucide-react';

const VideoContainer = ({ video }: any) => {
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;

  return (
    <div className=" cursor-pointer">
      {/* Maintain 16:9 aspect ratio */}
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={thumbnails?.high?.url}
          alt="thumbnail"
          fill
          className="rounded-xl hover:rounded-none object-cover transition-all duration-300"
          priority={false} // Helps with lazy loading
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-white font-semibold text-sm line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-400 text-xs mt-1">{channelTitle}</p>
        <div className="text-gray-400 text-xs flex items-center gap-1 mt-1">
          {formatViewsCount(statistics.viewCount)}
          <Dot className="w-4 h-4" />
          {timeAgo(publishedAt)}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;

