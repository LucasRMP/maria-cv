import type { NextPage } from 'next';
import Introduction from '../components/introduction';
import PersonalProjects from '../components/personal-projects';
import { Section } from '../components/section';
import { HeaderAnchor } from '../components/header-anchor';
import { SEO } from '../components/seo';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Section>
        <Introduction />
      </Section>
      <Section breakLayout>
        <HeaderAnchor id="portifolio" />
        <PersonalProjects />
      </Section>
    </>
  );
};

export default Home;
