'use client';
import React, { useState } from 'react';
import AIResponseListContainer from './AIResponseListContainer';
import TextSearchForm from '../form/TextSearchForm';
import useAnswer from '@/hooks/useAnswer';

interface Props {
  placeholder: string;
  url: string;
}

const SearchContainer = ({ placeholder, url }: Props) => {
  const {
    answerResult,
    query,
    setQuery,
    loading,
    error,
    copiedIndex,
    handleSubmit,
    copyToClipboard,
  } = useAnswer(url);

  return (
    <div className="mx-2">
      <div className="relative mt-16 mx-auto w-full max-w-2xl rounded-2xl bg-[#0b0f19] p-4 shadow-xl shadow-purple-950/50 overflow-hidden border border-purple-950">
        {/* Content container */}
        <div className="relative z-10">
          {/* Input and Button */}
          <TextSearchForm
            placeholder={placeholder}
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
            loading={loading}
          />
          <div className="mt-4 flex items-center justify-center space-x-2 text-gray-300">
            <span className="text-sm font-medium">
              AI-powered by Google Gemini
            </span>
          </div>
          {/* Render response */}
          <AIResponseListContainer
            error={error}
            answerResult={answerResult}
            copyToClipboard={copyToClipboard}
            copiedIndex={copiedIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;

