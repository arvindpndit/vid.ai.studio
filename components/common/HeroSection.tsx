import React from 'react';

interface Props {
  heroText: { btn_text: string; title: string; sub_title: string };
}

const HeroSection = ({ heroText }: Props) => {
  const { btn_text, title, sub_title } = heroText;
  return (
    <section className="relative flex justify-center mt-12 px-3">
      <div className="text-center max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white/80 backdrop-blur-md">
          {btn_text}
        </div>

        {/* Heading */}
        <h1 className="mt-10 mb-6 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {/* Subheading */}
        <p className="text-lg text-white/80">{sub_title}</p>
      </div>
    </section>
  );
};

export default HeroSection;

