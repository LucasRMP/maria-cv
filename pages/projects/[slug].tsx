import { allProjects, Project } from 'contentlayer/generated';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Mdx } from '../../components/mdx';
import { Section } from '../../components/section';

interface ProjectPageProps {
  project: Project;
  suggestions: Project[];
}

const Suggestion: React.FC<{ project: Project }> = ({ project }) => (
  <Link href={`/projects/${project.slug}`} className="relative group">
    <div className="absolute top-1/3 right-1/2 translate-x-1/2 translate-y-1/2 z-50 text-green-50 pointer-events-none hidden group-hover:block text-center">
      <h3 className="font-bold text-xl mb-2">{project.title}</h3>
      <p className="text-sm">{new Date(project.date).getFullYear()}</p>
    </div>
    <div
      key={project.slug}
      className="h-96 w-64 relative hover:brightness-40 transition-all"
    >
      <Image
        className="object-cover object-top"
        src={project.image}
        alt={project.image}
        fill
      />
    </div>
  </Link>
);

const ProjectPage: NextPage<ProjectPageProps> = ({ project, suggestions }) => {
  return (
    <Section>
      <Mdx code={project.body.code} />

      {suggestions?.length > 0 && (
        <div className="mt-20 w-full">
          <h2 className="text-2xl font-bold mb-8 text-green-900 uppercase">
            Mais projetos
          </h2>
          <div className="flex flex-wrap gap-4">
            {suggestions.map((project) => (
              <Suggestion key={project._id} project={project} />
            ))}
          </div>
        </div>
      )}
    </Section>
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
