import { Project } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

interface SuggestionProps {
  project: Project;
  size?: 'md' | 'lg';
}

const SizeToClassNames = {
  md: 'h-96 w-64',
  lg: 'h-[812px] w-96',
};

export const Suggestion: React.FC<SuggestionProps> = ({
  project,
  size = 'md',
}) => (
  <Link
    href={`/projects/${project.slug}`}
    className={`relative block group rounded-md overflow-hidden ${SizeToClassNames[size]}`}
  >
    <div className="absolute top-1/3 right-1/2 translate-x-1/2 translate-y-1/2 z-50 text-green-50 pointer-events-none hidden group-hover:block text-center">
      <h3 className="font-bold text-xl mb-2">{project.title}</h3>
      <p className="text-sm">{new Date(project.date).getFullYear()}</p>
    </div>
    <div
      key={project.slug}
      className={`relative hover:brightness-40 transition-all ${SizeToClassNames[size]}`}
    >
      <Image
        className="object-cover object-top"
        src={project.image}
        alt={project.title}
        quality={100}
        fill
      />
    </div>
  </Link>
);
