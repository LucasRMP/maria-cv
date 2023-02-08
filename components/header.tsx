import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link href="#">
      <span className="text-6xl font-bold text-green-900">Maria</span>
      <span
        className="w-5 h-5 inline-block rounded-full"
        style={{
          background:
            'linear-gradient(180deg, #9FCCB0 0%, rgba(45, 66, 45, 0.84) 100%)',
        }}
      ></span>
    </Link>
  );
}

const NavLink: React.FC<React.PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => (
  <Link href={href} className="p-2 hover:bg-green-200 transition-all rounded">
    {children}
  </Link>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-green-100 w-full pt-10 pb-5 px-36">
      <div className="flex">
        <Logo />

        <nav className="flex flex-grow justify-end items-center gap-8 text-xl text-green-900 transition-all">
          <NavLink href="#">Formação</NavLink>
          <NavLink href="#portifolio">Portifólio</NavLink>
          <NavLink href="#footer">Contato</NavLink>
        </nav>
      </div>
    </header>
  );
}
