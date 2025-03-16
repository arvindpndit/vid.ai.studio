'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-[1200px] mx-auto p-3 flex justify-between items-center">
        <div className="text-xl font-bold">vid.ai.studio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-600">
            Features
          </a>
          <a href="#" className="hover:text-gray-600">
            AI tools
          </a>
          <a href="#" className="hover:text-gray-600">
            Entertainment
          </a>
          <a href="#" className="hover:text-gray-600">
            Top YT channels
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          {/* Sidebar Menu */}
          <SheetContent side="left" className="w-64 p-6 bg-gray-950 border-0">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Menu</span>
            </div>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="hover:text-gray-600">
                Home
              </a>
              <a href="#" className="hover:text-gray-600">
                About
              </a>
              <a href="#" className="hover:text-gray-600">
                Services
              </a>
              <a href="#" className="hover:text-gray-600">
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Navbar;

