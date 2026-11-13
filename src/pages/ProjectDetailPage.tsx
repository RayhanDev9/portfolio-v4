import { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { projectsData } from '../data/projects';

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
  max-width: 900px;
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

const DetailCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const Thumbnail = styled.img`
  width: 100%;
  max-height: 480px;
  object-fit: cover;
  display: block;
`;

const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing['2xl']};

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CategoryBadge = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.accentMuted};
  color: ${({ theme }) => theme.colors.accentLime};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ComingSoonBadge = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.glass};
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
`;

const ProjectTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textHighlight};
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const CollabText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textHighlight};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const TechItem = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 6px 14px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.glass};
  color: ${({ theme }) => theme.colors.textHighlight};
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
`;

const ActionButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.borderSubtle};
`;

const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.accentLime};
  color: ${({ theme }) => theme.colors.textInverse};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.sm};
  text-decoration: none;
  transition: filter ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-2px);
  }
`;

const SecondaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  transition: border-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    color: ${({ theme }) => theme.colors.textHighlight};
  }
`;

const easeOut = [0.4, 0, 0.2, 1] as const;

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <PageContainer>
        <Navbar />
        <MainContent>
          <ContentContainer style={{ textAlign: 'center', paddingTop: '60px' }}>
            <ProjectTitle>Proyek Tidak Ditemukan</ProjectTitle>
            <p style={{ color: '#9DA9C1', margin: '16px 0 24px' }}>
              Proyek dengan ID &ldquo;{id}&rdquo; tidak ada dalam data.
            </p>
            <BackLink to="/projects">
              <ArrowLeft size={16} />
              <span>Kembali ke Katalog Proyek</span>
            </BackLink>
          </ContentContainer>
        </MainContent>
      </PageContainer>
    );
  }

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
            <BackLink to="/projects">
              <ArrowLeft size={16} />
              <span>Kembali ke Katalog Proyek</span>
            </BackLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            <DetailCard>
              <Thumbnail src={project.img} alt={project.alt || project.title} />
              <CardBody>
                <BadgeRow>
                  <CategoryBadge>{project.category}</CategoryBadge>
                  <ComingSoonBadge>Studi Kasus Detail Sedang Disiapkan</ComingSoonBadge>
                </BadgeRow>

                <ProjectTitle>{project.title}</ProjectTitle>

                {project.collab && <CollabText>{project.collab}</CollabText>}

                <ProjectDescription>{project.description}</ProjectDescription>

                <SectionHeader>Teknologi &amp; Arsitektur</SectionHeader>
                <TechList>
                  {project.skills.map((skill) => (
                    <TechItem key={skill}>{skill}</TechItem>
                  ))}
                </TechList>

                <ActionButtonGroup>
                  <PrimaryLink
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Buka Live Demo</span>
                    <ExternalLink size={16} />
                  </PrimaryLink>

                  {project.githubUrl && (
                    <SecondaryLink
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 size={16} />
                      <span>Lihat Source Code</span>
                    </SecondaryLink>
                  )}
                </ActionButtonGroup>
              </CardBody>
            </DetailCard>
          </motion.div>
        </ContentContainer>
      </MainContent>
    </PageContainer>
  );
}
