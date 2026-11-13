import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { projectsData } from '../../data/projects';
import type { ProjectCategory } from '../../types/portfolio';
import { ProjectCard } from './ProjectCard';
import {
  ProjectsSection,
  ProjectsContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  FilterTabsWrapper,
  FilterTabButton,
  ProjectsGrid,
  FooterCTAWrapper,
  AllProjectsButton,
} from './Projects.styles';

const CATEGORIES: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'app', label: 'Web App' },
  { value: 'landing', label: 'Landing Page' },
  { value: 'interactive', label: 'Interactive' },
];

const easeOut = [0.4, 0, 0.2, 1] as const;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const featuredProjects = projectsData.filter((p) => p.featured);
  const displayedProjects =
    activeCategory === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <SectionHeader>
            <SectionTitle>Selected Works</SectionTitle>
            <SectionSubtitle>
              Proyek terpilih yang menunjukkan kemampuan arsitektur frontend.
            </SectionSubtitle>
          </SectionHeader>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.1, ease: easeOut }}
        >
          <FilterTabsWrapper role="tablist" aria-label="Filter kategori proyek">
            {CATEGORIES.map((cat) => (
              <FilterTabButton
                key={cat.value}
                $active={activeCategory === cat.value}
                onClick={() => setActiveCategory(cat.value)}
                role="tab"
                aria-selected={activeCategory === cat.value}
              >
                {cat.label}
              </FilterTabButton>
            ))}
          </FilterTabsWrapper>
        </motion.div>

        <ProjectsGrid>
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </ProjectsGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.2, ease: easeOut }}
        >
          <FooterCTAWrapper>
            <AllProjectsButton
              as={Link}
              to="/projects"
              aria-label={`Lihat semua ${projectsData.length} proyek di katalog lengkap`}
            >
              <span>Lihat Semua Proyek ({projectsData.length})</span>
              <ArrowRight size={16} />
            </AllProjectsButton>
          </FooterCTAWrapper>
        </motion.div>
      </ProjectsContainer>
    </ProjectsSection>
  );
}
