import { Sparkles } from 'lucide-react';
import React from 'react';

interface Props {
  placeholder: string;
}

const SearchContainer = ({ placeholder }: Props) => {
  return (
    <div className="mx-2">
      <div className="relative mt-16 mx-auto w-full max-w-2xl rounded-2xl bg-[#0b0f19] p-4 shadow-xl shadow-purple-950/50 overflow-hidden border border-purple-950 ">
        {/* Content container */}
        <div className="relative z-10">
          {/* Input and Button */}
          <div className="flex items-center border-dashed border border-purple-800 justify-between space-x-2 rounded-full bg-[#0b0d13] p-2">
            <input
              type="text"
              placeholder={placeholder}
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
            />
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-800 to-blue-600 px-3 py-1.5 font-medium text-white transition-all duration-300  hover:from-blue-600 hover:to-purple-800">
              <Sparkles className="w-5 h-5" /> Generate
            </button>
          </div>

          {/* Google Sign-Up */}
          <div className="mt-4 flex items-center justify-center space-x-2 text-gray-300">
            <span className="text-sm font-medium">
              AI-powered by Google Gemini
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;

