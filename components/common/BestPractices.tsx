import React from 'react';

interface Props {
  bestPractices: { title: string; description: string }[];
}

const BestPractices = ({ bestPractices }: Props) => {
  return (
    <div className="mx-auto max-w-6xl p-2 mt-16 text-white">
      {/* Header */}
      <h2 className="mb-6 text-center text-3xl font-bold">
        YouTube Title best practices:
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bestPractices.map((practice, index) => (
          <div
            key={index}
            className="rounded-xl border border-transparent bg-[#0b0f19] p-6 text-center shadow-md transition-all hover:border-blue-950"
          >
            <h3 className="mb-2 text-lg font-semibold">{practice.title}</h3>
            <p className="text-gray-400">{practice.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPractices;

