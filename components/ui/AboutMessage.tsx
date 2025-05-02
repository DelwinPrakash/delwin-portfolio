import React from 'react';

interface AboutProps{
  messageContent: string
}
const AboutMessage: React.FC<AboutProps> = ({messageContent}) => {
  return (
    <section className="relative w-full max-w-4xl mx-auto my-10 p-6 text-white rounded-xl border border-zinc-700 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
      <div className="absolute inset-0 border-2 border-indigo-500 rounded-xl blur-sm opacity-20 animate-pulse" />
        <p className="text-lg text-zinc-300 z-10 relative leading-relaxed">
          {messageContent}
        </p>
    </section>
  );
};

export default AboutMessage;