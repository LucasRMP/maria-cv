import { Roboto } from '@next/font/google';
import Image from 'next/image';
import React from 'react';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});

const Title = () => (
  <h2
    className={`text-6xl -mt-16 uppercase ${roboto.className} self-end`}
    style={{
      transform: 'translateY(5px)',
      letterSpacing: '0.155em',

      background:
        '-webkit-linear-gradient(270deg, rgba(159, 205, 177, 0.89) 0%, rgba(1, 39, 1, 0.89) 100%)',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
    }}
  >
    Projetos
    <br />
    Pessoais
  </h2>
);

export default function PersonalProjects() {
  return (
    <div className="w-full bg-green-400 mt-20 px-20 pb-24 flex flex-col">
      <Title />

      <div className="flex flex-row justify-evenly gap-10 mt-9">
        <Image
          src="/profile-feed.jpg"
          width={375}
          height={812}
          alt="profile-feed"
          quality={100}
        />
        <Image
          src="/bank-account.jpg"
          width={375}
          height={812}
          alt="bank-account"
          quality={100}
        />
        <Image
          src="/explore-nature.jpg"
          width={375}
          height={812}
          alt="explore-nature"
          quality={100}
        />
      </div>
    </div>
  );
}
