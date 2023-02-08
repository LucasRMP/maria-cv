import type { NextPage } from 'next';
import Head from 'next/head';
import { Noto_Sans_Display } from '@next/font/google';
import Header from '../components/header';
import Introduction from '../components/introduction';
import PersonalProjects from '../components/personal-projects';
import Footer from '../components/footer';

const notoSans = Noto_Sans_Display({
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

const HeaderAnchor = ({ id = '' }) => {
  return (
    <a
      style={{
        display: 'block',
        position: 'relative',
        top: '-120px',
        visibility: 'hidden',
      }}
      id={id}
    ></a>
  );
};

const Section: React.FC<
  React.PropsWithChildren<{ breakLayout?: boolean; [key: string]: any }>
> = ({ children, breakLayout = false, ...props }) => {
  const paddingClasses = breakLayout ? '' : 'px-36 py-10';

  return (
    <section
      className={`flex flex-col items-center justify-center ${paddingClasses}`}
      {...props}
    >
      {children}
    </section>
  );
};

const Home: NextPage = () => {
  return (
    <div
      className={`flex min-h-screen flex-col bg-green-100 ${notoSans.className}`}
    >
      <Head>
        <title>Maria Chesp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Section>
          <Introduction />
        </Section>
        <Section breakLayout>
          <HeaderAnchor id="portifolio" />
          <PersonalProjects />
        </Section>
      </main>
      <HeaderAnchor id="contact" />
      <Footer />
    </div>
  );
};

export default Home;
