import { Roboto } from '@next/font/google';
import { allProjects } from 'contentlayer/generated';
import Image from 'next/image';
import React from 'react';
import { Suggestion } from './suggestion';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});

const Title = () => (
  <h2
    className={`text-6xl -mt-8 uppercase ${roboto.className} self-end`}
    style={{
      transform: 'translateY(5px)',
      letterSpacing: '0.1em',

      background:
        '-webkit-linear-gradient(270deg, rgba(159, 205, 177, 0.89) 0%, rgba(1, 39, 1, 0.89) 100%)',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
    }}
  >
    Projetos
  </h2>
);

export default function PersonalProjects() {
  return (
    <div className="w-full bg-green-400 mt-20 px-20 pb-24 flex flex-col">
      <Title />

      <div className="flex flex-row flex-wrap justify-around gap-10 mt-9">
        {allProjects.map((project) => (
          <Suggestion key={project._id} project={project} size="lg" />
        ))}
      </div>
    </div>
  );
}
