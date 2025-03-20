'use client';

import React, { useState } from 'react';
import { Menu, ChevronDown, ChevronRight, Link } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { AI_TOOLS_MENU_LIST as AIToolsList } from '@/utils/constants';

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [mobileAIToolsOpen, setMobileAIToolsOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      {/* Sidebar Menu */}
      <SheetContent side="left" className="w-64 p-6 bg-gray-950 border-0">
        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:text-gray-600">
            Features
          </a>

          {/* Mobile AI Tools Collapsible */}
          <button
            onClick={() => setMobileAIToolsOpen(!mobileAIToolsOpen)}
            className="flex items-center justify-between w-full hover:text-gray-600"
          >
            <span>AI Tools</span>
            {mobileAIToolsOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {mobileAIToolsOpen && (
            <div className="pl-4 mt-2">
              {AIToolsList.map((category) => (
                <div key={category.title} className="mb-3">
                  <h4 className="text-sm font-medium text-gray-400">
                    {category.title}
                  </h4>
                  <ul className="mt-1 space-y-2">
                    {category.tools.map((tool) => (
                      <li key={tool.name}>
                        <a
                          href={tool.href}
                          className="text-sm block hover:text-gray-400"
                        >
                          {tool.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <a href="/trending-videos/IN" className="hover:text-gray-600">
            Trending Videos
          </a>
          <a href="#" className="hover:text-gray-600">
            Top YT channels
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

