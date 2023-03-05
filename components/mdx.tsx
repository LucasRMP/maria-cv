import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

const CustomLink = (props) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function CustomImage(props) {
  return <Image alt={props.alt} width={1600} height={840} {...props} />;
}

function Headline({ title, children }) {
  return (
    <div className="text-center flex flex-col items-center mb-16">
      <h2 className="text-2xl font-bold mb-6 text-green-900 uppercase">
        {title}
      </h2>
      <div className="md:max-w-2xl">{children}</div>

      <div className="mt-6 w-full max-w-sm mx-auto bg-green-400 h-[1px]" />
    </div>
  );
}

Headline.Section = function HeadlineSection({ children }) {
  return <div className="mb-4">{children}</div>;
};

function Grid({
  children,
  cols = '1fr',
  gapX = 'gap-x-12',
  gapY = 'gap-y-8',
  className = '',
}) {
  return (
    <div className={`grid sm:grid-cols-[${cols}] ${gapX} ${gapY} ${className}`}>
      {children}
    </div>
  );
}

Grid.Item = function GridItem(props) {
  return <div {...props} />;
};

const components = {
  Image: CustomImage,
  a: CustomLink,
  Headline,
  Grid,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article>
      <Component components={{ ...components }} />
    </article>
  );
}
