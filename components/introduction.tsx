import Image from 'next/image';
import React from 'react';
import ClapIcon from './clap-icon';
import SunIcon from './sun-icon';

export default function Introduction() {
  return (
    <div className="flex flex-row gap-10 items-center">
      <Image
        src="/mari-chesp.jpg"
        alt="Maria"
        width={400}
        height={400}
        className="rounded-full"
        quality={100}
      />

      <div>
        <h1 className="text-5xl font-bold text-green-900">
          Olá!{' '}
          <span className="inline-block">
            <ClapIcon />
          </span>
          <br />
          Sou UX/UI designer
        </h1>
        <p className="text-2xl text-green-900 mt-1">
          Localizada em Goiânia{' '}
          <span className="inline-block align-middle">
            <SunIcon />
          </span>
        </p>
      </div>
    </div>
  );
}
