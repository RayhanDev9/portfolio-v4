import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import {
  CardContainer,
  ThumbnailWrapper,
  ThumbnailImage,
  CardContent,
  CardTitle,
  CardMeta,
  CardDescription,
  TechStackRow,
  TechPill,
  TechPillMore,
  CardActionRow,
  LiveDemoLink,
  DetailLink,
} from './Projects.styles';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const easeOut = [0.4, 0, 0.2, 1] as const;

export function ProjectCard({ project, index }: ProjectCardProps) {
  const visibleSkills = project.skills.slice(0, 4);
  const remainingSkillsCount = project.skills.length - 4;

  const metaText = project.collab
    ? `${project.collab} • ${project.role || 'Front-End'}`
    : project.role;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: easeOut }}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <CardContainer>
        <ThumbnailWrapper>
          <ThumbnailImage
            src={project.img}
            alt={project.alt || project.title}
            loading="lazy"
          />
        </ThumbnailWrapper>

        <CardContent>
          <CardTitle>{project.title}</CardTitle>

          {metaText && <CardMeta>{metaText}</CardMeta>}

          <CardDescription>{project.description}</CardDescription>

          <TechStackRow>
            {visibleSkills.map((skill) => (
              <TechPill key={skill}>{skill}</TechPill>
            ))}
            {remainingSkillsCount > 0 && (
              <TechPillMore>+{remainingSkillsCount}</TechPillMore>
            )}
          </TechStackRow>

          <CardActionRow>
            <LiveDemoLink
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buka demo live ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink size={14} />
            </LiveDemoLink>

            <DetailLink
              href={`#/projects/${project.id}`}
              aria-label={`Lihat studi kasus ${project.title}`}
            >
              <span>Detail</span>
              <ArrowRight size={14} />
            </DetailLink>
          </CardActionRow>
        </CardContent>
      </CardContainer>
    </motion.div>
  );
}
