import { allProjects, Project } from 'contentlayer/generated';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mdx } from '../../components/mdx';
import { Section } from '../../components/section';
import { SEO, useSiteMetadata } from '../../components/seo';
import { Suggestion } from '../../components/suggestion';

interface ProjectPageProps {
  project: Project;
  suggestions: Project[];
}

const SuggestionList: React.FC<{
  projects: Project[];
  slideWidth?: number;
}> = ({ projects, slideWidth = 64 }) => {
  const [numberSlides, setNumberSlides] = React.useState(5);

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      const numSlides = Math.floor(window.innerWidth / (slideWidth * 4)) - 1.5;
      setNumberSlides(Math.max(1, Math.min(numSlides, 5)));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [slideWidth, projects]);

  return (
    <>
      {projects?.length ? (
        <div className="mt-20 w-full">
          <h2 className="text-2xl font-bold mb-8 text-green-900 uppercase">
            Mais projetos
          </h2>

          <Swiper spaceBetween={16} slidesPerView={numberSlides}>
            {projects.map((project) => (
              <SwiperSlide key={project._id}>
                <Suggestion project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
    </>
  );
};

const ProjectPage: NextPage<ProjectPageProps> = ({ project, suggestions }) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <SEO
        title={`${project.title} | ${title}`}
        description={project.description}
        image={project.image}
      />

      <Section>
        <Mdx code={project.body.code} />

        <SuggestionList projects={suggestions} />
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params;

  const project = allProjects.find((project) => project.slug === slug);
  return {
    props: {
      project,
      suggestions: allProjects.filter((project) => project.slug !== slug),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allProjects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: 'blocking',
  };
};

export default ProjectPage;
