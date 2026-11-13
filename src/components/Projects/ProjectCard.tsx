import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Code2 } from 'lucide-react';
import { Link } from 'react-router';
import type { Project } from '../../types/portfolio';
import {
  CardContainer,
  ThumbnailWrapper,
  ThumbnailImage,
  CardContent,
  CardTitle,
  CardMeta,
  CollabMetaLink,
  CardDescription,
  TechStackRow,
  TechPill,
  TechPillMore,
  CardActionRow,
  CardActionGroup,
  LiveDemoLink,
  RepoLink,
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

          {project.collaborator ? (
            <CardMeta>
              <span>{project.role || 'Front-End'} • </span>
              <CollabMetaLink
                href={project.collaborator.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${project.collaborator.role ? project.collaborator.role + ' - ' : ''}${project.collaborator.name}`}
                onClick={(e) => e.stopPropagation()}
              >
                <span>{project.collaborator.name}</span>
                <ExternalLink size={10} style={{ opacity: 0.7 }} />
              </CollabMetaLink>
            </CardMeta>
          ) : metaText ? (
            <CardMeta>{metaText}</CardMeta>
          ) : null}

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
            <CardActionGroup>
              <LiveDemoLink
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buka demo live ${project.title}`}
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </LiveDemoLink>

              {project.githubUrl && (
                <RepoLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka repositori GitHub ${project.title}`}
                >
                  <Code2 size={14} />
                  <span>Repo</span>
                </RepoLink>
              )}
            </CardActionGroup>

            <DetailLink
              as={Link}
              to={`/projects/${project.id}`}
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
