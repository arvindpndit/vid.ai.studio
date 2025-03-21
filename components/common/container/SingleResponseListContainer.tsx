'use client';
import { Copy, Check } from 'lucide-react';

const SingleResponseListContainer = ({
  error,
  answerResult,
  copyToClipboard,
  copiedIndex,
}: any) => {
  return (
    <>
      {/* Error display */}
      {error && (
        <div className="mt-4 text-red-500 text-center text-sm">{error}</div>
      )}
      {/* Answers list with styling */}
      {answerResult.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="text-purple-400 font-medium text-lg">
            Awesome Idea{answerResult.length == 1 ? '' : 's'}:
          </h3>
          <div className="space-y-2">
            {answerResult.map((answer: string, index: number) => (
              <div
                key={index}
                className="group flex items-center justify-between p-3 rounded-2xl bg-[#131726] border border-purple-900/50 hover:border-purple-700 transition-all duration-300 relative"
              >
                <p className="text-gray-200 ">{answer}</p>
                <button
                  onClick={() => copyToClipboard(answer, index)}
                  className="absolute right-2.5  top-2.5 ml-2 p-1.5 rounded-md text-gray-400  hover:text-white hover:bg-purple-900/50 transition-colors bg-gray-800"
                  title="Copy to clipboard"
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleResponseListContainer;

