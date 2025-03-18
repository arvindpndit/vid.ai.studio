import React from 'react';
import { Sparkles } from 'lucide-react';

const TextSearchForm = ({
  placeholder,
  query,
  setQuery,
  handleSubmit,
  loading,
}: any) => {
  return (
    <div className="flex items-center border-dashed border border-purple-800 justify-between space-x-2 rounded-2xl bg-[#0b0d13] p-2">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-transparent text-white placeholder-gray-400 outline-none px-3"
      />
      <button
        onClick={handleSubmit}
        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-800 to-blue-600 px-3 py-1.5 font-medium text-white transition-all duration-300 hover:cursor-pointer hover:from-blue-600 hover:to-purple-800"
      >
        <Sparkles className="w-5 h-5" />{' '}
        {loading ? 'Generating...' : 'Generate'}
      </button>
    </div>
  );
};

export default TextSearchForm;

