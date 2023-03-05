import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const useSiteMetadata = () =>
  React.useMemo(
    () => ({
      title: 'Maria Chesp',
      description: 'UX Designer localizada em Goiânia - GO - Brasil',
      image: 'https://maria-cv.vercel.app/mari-chesp.jpg',
      siteUrl: 'https://maria-cv.vercel.app',
    }),
    [],
  );

export const SEO = ({ title, description, image, url, type }: SEOProps) => {
  const router = useRouter();
  const site = useSiteMetadata();

  const metaDescription = description ?? site.description;
  const metaTitle = title ?? site.title;
  const metaImage = image ?? site.image;
  const metaUrl = url ?? `${site.siteUrl}${router.asPath}`;
  const metaType = type ?? 'website';

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={metaType} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Head>
  );
};
