import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header';
import { Noto_Sans_Display } from '@next/font/google';
import { HeaderAnchor } from '../components/header-anchor';
import Footer from '../components/footer';

const notoSans = Noto_Sans_Display({
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`flex min-h-screen flex-col bg-green-100 ${notoSans.className}`}
    >
      <Header />
      <main>
        <Component {...pageProps} />
      </main>

      <HeaderAnchor id="contact" />
      <Footer />
    </div>
  );
}

export default MyApp
