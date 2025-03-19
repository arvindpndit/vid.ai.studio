'use client';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const MultipleResponseListsContainer = ({
  error,
  answerResult,
  copyToClipboard,
  copiedIndex,
}: any) => {
  const [titleIndex, setTitleIndex] = useState(0);

  return (
    <>
      {/* Error display */}
      {error && (
        <div className="mt-4 text-red-500 text-center text-sm">{error}</div>
      )}
      {/* Iterate over answerResult keys */}
      {answerResult && (
        <div className="mt-6 space-y-6">
          {/* Title with navigation */}
          {answerResult.title && Array.isArray(answerResult.title) && (
            <div>
              <h3 className="text-purple-400 font-medium text-lg capitalize">
                Title
              </h3>
              <div className="group flex items-center justify-between p-3 rounded-2xl bg-[#131726] border border-purple-900/50 hover:border-purple-700 transition-all duration-300">
                <p className="text-gray-200">
                  {answerResult.title[titleIndex]}
                </p>
                <button
                  onClick={() =>
                    setTitleIndex(
                      (prev) => (prev + 1) % answerResult.title.length,
                    )
                  }
                  className="ml-2 p-1.5 rounded-xl text-gray-400 hover:text-white hover:bg-purple-900/50 transition-colors"
                  title="Next Title"
                >
                  Change
                </button>
              </div>
            </div>
          )}
          {/* Keywords displayed as a comma-separated string */}
          {answerResult.keyword && Array.isArray(answerResult.keyword) && (
            <div>
              <h3 className="text-purple-400 font-medium text-lg capitalize">
                Keywords
              </h3>
              <div className="group p-3 rounded-2xl bg-[#131726] border border-purple-900/50 hover:border-purple-700 transition-all duration-300">
                <p className="text-gray-200">
                  {answerResult.keyword.join(', ')}
                </p>
              </div>
            </div>
          )}
          {Object.entries(answerResult).map(
            ([key, values]: [string, any]) =>
              key !== 'title' &&
              key !== 'keyword' && (
                <div key={key}>
                  <h3 className="text-purple-400 font-medium text-lg capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </h3>
                  <div className="space-y-2">
                    {Array.isArray(values) ? (
                      values.map((value, index) => (
                        <div
                          key={index}
                          className="group flex items-center justify-between p-3 rounded-2xl bg-[#131726] border border-purple-900/50 hover:border-purple-700 transition-all duration-300"
                        >
                          <p className="text-gray-200">{value}</p>
                          <button
                            onClick={() =>
                              copyToClipboard(value, `${key}-${index}`)
                            }
                            className="ml-2 p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-purple-900/50 transition-colors"
                            title="Copy to clipboard"
                          >
                            {copiedIndex === `${key}-${index}` ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="group flex items-start justify-between p-3 rounded-2xl bg-[#131726] border border-purple-900/50 hover:border-purple-700 transition-all duration-300">
                        <p className="text-gray-200">{values}</p>
                        <button
                          onClick={() => copyToClipboard(values, key)}
                          className="ml-2 p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-purple-900/50 transition-colors"
                          title="Copy to clipboard"
                        >
                          {copiedIndex === key ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ),
          )}
        </div>
      )}
    </>
  );
};

export default MultipleResponseListsContainer;

