import React from 'react';

interface Props {
  placeholder: string;
}

const SearchContainer = ({ placeholder }: Props) => {
  return (
    <div className="mx-2">
      <div className="relative mt-16 mx-auto w-full max-w-2xl rounded-xl bg-[#0b0f19] p-4 shadow-lg overflow-hidden">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-xl p-[1px] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:animate-spin before:duration-3000">
          {/* Inner container with background to create border effect */}
          <div className="absolute inset-0 rounded-xl bg-[#0b0f19]"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10">
          {/* Input and Button */}
          <div className="flex items-center justify-between space-x-2 rounded-full bg-[#0b0d13] p-2">
            <input
              type="text"
              placeholder={placeholder}
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
            />
            <button className="flex items-center gap-2 rounded-full bg-sky-500 px-3 py-1.5 font-medium text-black hover:bg-sky-400">
              Generate
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

