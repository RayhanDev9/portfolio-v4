import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/Projects/ProjectCard';
import { projectsData } from '../data/projects';
import type { ProjectCategory } from '../types/portfolio';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkBase};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing.lg}`};
  padding-top: 120px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 100px;
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  transition: color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accentLime};
    transform: translateX(-3px);
  }
`;

const HeaderSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textHighlight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const PageSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 520px;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const FilterTabsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const FilterTabButton = styled.button<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 6px 16px;
  border-radius: ${({ theme }) => theme.radii.full};
  cursor: pointer;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.accentMuted : 'transparent'};
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.border : theme.colors.borderSubtle};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.accentLime : theme.colors.textMuted};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    color: ${({ theme, $active }) =>
      $active ? theme.colors.accentLime : theme.colors.textSecondary};
  }
`;

const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

const EmptyState = styled.div`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const easeOut = [0.4, 0, 0.2, 1] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categoryCounts = {
    all: projectsData.length,
    app: projectsData.filter((p) => p.category === 'app').length,
    landing: projectsData.filter((p) => p.category === 'landing').length,
    interactive: projectsData.filter((p) => p.category === 'interactive').length,
  };

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: `All (${categoryCounts.all})` },
    { value: 'app', label: `Web App (${categoryCounts.app})` },
    { value: 'landing', label: `Landing Page (${categoryCounts.landing})` },
    { value: 'interactive', label: `Interactive (${categoryCounts.interactive})` },
  ];

  const displayedProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <PageContainer>
      <Navbar />
      <MainContent>
        <ContentContainer>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <BackLink to="/">
              <ArrowLeft size={16} />
              <span>Kembali ke Beranda</span>
            </BackLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            <HeaderSection>
              <PageTitle>All Projects</PageTitle>
              <PageSubtitle>
                Seluruh katalog proyek aplikasi web, landing page, dan eksperimen interaktif yang pernah dibangun.
              </PageSubtitle>
            </HeaderSection>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: easeOut }}
          >
            <FilterTabsWrapper role="tablist" aria-label="Filter kategori proyek">
              {categories.map((cat) => (
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

          {displayedProjects.length > 0 ? (
            <CatalogGrid>
              {displayedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </CatalogGrid>
          ) : (
            <EmptyState>Tidak ada proyek dalam kategori ini.</EmptyState>
          )}
        </ContentContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}
