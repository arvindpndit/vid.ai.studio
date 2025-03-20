'use client';
import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { AI_TOOLS_MENU_LIST as AIToolsList } from '@/utils/constants';
import Link from 'next/link';

const DesktopMenu = () => {
  const [hovering, setHovering] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHovering(false), 500);
  };

  return (
    <div className="hidden md:flex items-center space-x-6 text-sm">
      <a href="#" className="hover:text-gray-600">
        Features
      </a>

      {/* AI Tools Dropdown */}
      <div
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center space-x-1 hover:text-gray-600">
          <span>AI Tools</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        <div
          className={`absolute left-0 mt-2 w-64 bg-gray-950 border border-gray-800 rounded-md p-4 shadow-lg transition-opacity duration-200 ${
            hovering ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {AIToolsList.map((category) => (
            <div key={category.title} className="mb-3">
              <h3 className="text-sm font-medium text-gray-300">
                {category.title}
              </h3>
              <ul className="mt-2 space-y-2">
                {category.tools.map((tool) => (
                  <li key={tool.name}>
                    <a
                      href={tool.href}
                      className="block text-sm text-gray-400 hover:text-gray-200"
                    >
                      {tool.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Link href="/trending-videos/IN" className="hover:text-gray-600">
        Trending Videos
      </Link>
      <a href="#" className="hover:text-gray-600">
        Top YT channels
      </a>
    </div>
  );
};

export default DesktopMenu;

