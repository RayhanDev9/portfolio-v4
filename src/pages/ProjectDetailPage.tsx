import { useEffect } from 'react';
import { useParams } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  AlertCircle,
  Layers,
  Sparkles,
  Cpu,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { projectsData } from '../data/projects';
import { caseStudiesData } from '../data/caseStudies';
import {
  PageContainer,
  MainContent,
  ContentContainer,
  NavRow,
  BackLink,
  MetaPills,
  CategoryBadge,
  CollabBadge,
  ProjectHero,
  ProjectTitle,
  ProjectTagline,
  ProjectDescription,
  HeroActionRow,
  PrimaryDemoLink,
  SecondaryCodeLink,
  SkillsList,
  SkillPill,
  ShowcaseCard,
  ShowcaseImage,
  SectionsWrapper,
  TwoColGrid,
  DeepDiveCard,
  DeepDiveCardHeader,
  DeepDiveCardTitle,
  DeepDiveCardText,
  ArchitectureList,
  ArchitectureItem,
  ArchTitle,
  ArchReason,
  FeaturesList,
  FeatureItem,
  ProjectNavWrapper,
  ProjectNavCard,
  NavDirectionLabel,
  NavProjectTitle,
} from './ProjectDetailPage.styles';

const easeOut = [0.4, 0, 0.2, 1] as const;

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const project = currentIndex !== -1 ? projectsData[currentIndex] : null;
  const caseStudy = id ? caseStudiesData[id] : null;

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
        <Footer />
      </PageContainer>
    );
  }

  const prevProject =
    projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject =
    projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <PageContainer>
      <Navbar />
      <MainContent>
        <ContentContainer>
          <NavRow>
            <BackLink to="/projects">
              <ArrowLeft size={16} />
              <span>Kembali ke Katalog Proyek</span>
            </BackLink>

            <MetaPills>
              <CategoryBadge>{project.category}</CategoryBadge>
              {project.collab && <CollabBadge>{project.collab}</CollabBadge>}
            </MetaPills>
          </NavRow>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <ProjectHero>
              <ProjectTitle>{project.title}</ProjectTitle>
              {caseStudy?.tagline && (
                <ProjectTagline>{caseStudy.tagline}</ProjectTagline>
              )}
              <ProjectDescription>{project.description}</ProjectDescription>

              <HeroActionRow>
                <PrimaryDemoLink
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Buka Live Demo</span>
                  <ExternalLink size={16} />
                </PrimaryDemoLink>

                {project.githubUrl && (
                  <SecondaryCodeLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 size={16} />
                    <span>Lihat Source Code</span>
                  </SecondaryCodeLink>
                )}
              </HeroActionRow>

              <SkillsList>
                {project.skills.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </SkillsList>
            </ProjectHero>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: easeOut }}
          >
            <ShowcaseCard>
              <ShowcaseImage src={project.img} alt={project.alt || project.title} />
            </ShowcaseCard>
          </motion.div>

          {caseStudy && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: easeOut }}
            >
              <SectionsWrapper>
                <TwoColGrid>
                  <DeepDiveCard>
                    <DeepDiveCardHeader>
                      <AlertCircle size={15} />
                      <span>Tantangan &amp; Masalah</span>
                    </DeepDiveCardHeader>
                    <DeepDiveCardTitle>Kebutuhan Sistem &amp; Kendala Awal</DeepDiveCardTitle>
                    <DeepDiveCardText>{caseStudy.problem}</DeepDiveCardText>
                  </DeepDiveCard>

                  <DeepDiveCard>
                    <DeepDiveCardHeader>
                      <CheckCircle2 size={15} />
                      <span>Solusi &amp; Implementasi</span>
                    </DeepDiveCardHeader>
                    <DeepDiveCardTitle>Pendekatan Teknis &amp; Rekayasa</DeepDiveCardTitle>
                    <DeepDiveCardText>{caseStudy.solution}</DeepDiveCardText>
                  </DeepDiveCard>
                </TwoColGrid>

                {caseStudy.architecture && caseStudy.architecture.length > 0 && (
                  <DeepDiveCard>
                    <DeepDiveCardHeader>
                      <Layers size={15} />
                      <span>Keputusan Arsitektur &amp; Teknologi</span>
                    </DeepDiveCardHeader>
                    <DeepDiveCardTitle>Alasan Pemilihan Stack &amp; Pola Desain</DeepDiveCardTitle>
                    <ArchitectureList>
                      {caseStudy.architecture.map((item, idx) => (
                        <ArchitectureItem key={idx}>
                          <ArchTitle>{item.title}</ArchTitle>
                          <ArchReason>{item.reason}</ArchReason>
                        </ArchitectureItem>
                      ))}
                    </ArchitectureList>
                  </DeepDiveCard>
                )}

                {caseStudy.keyFeatures && caseStudy.keyFeatures.length > 0 && (
                  <DeepDiveCard>
                    <DeepDiveCardHeader>
                      <Sparkles size={15} />
                      <span>Fitur Kunci &amp; Spesifikasi Teknis</span>
                    </DeepDiveCardHeader>
                    <DeepDiveCardTitle>Kapabilitas Utama Sistem</DeepDiveCardTitle>
                    <FeaturesList>
                      {caseStudy.keyFeatures.map((feat, idx) => (
                        <FeatureItem key={idx}>
                          <CheckCircle2 size={16} />
                          <span>{feat}</span>
                        </FeatureItem>
                      ))}
                    </FeaturesList>
                  </DeepDiveCard>
                )}

                {caseStudy.metricsOrLearnings && (
                  <DeepDiveCard>
                    <DeepDiveCardHeader>
                      <Cpu size={15} />
                      <span>Hasil Teknis &amp; Evaluasi</span>
                    </DeepDiveCardHeader>
                    <DeepDiveCardTitle>Dampak &amp; Refleksi Rekayasa</DeepDiveCardTitle>
                    <DeepDiveCardText>{caseStudy.metricsOrLearnings}</DeepDiveCardText>
                  </DeepDiveCard>
                )}
              </SectionsWrapper>
            </motion.div>
          )}

          <ProjectNavWrapper>
            <ProjectNavCard to={`/projects/${prevProject.id}`}>
              <NavDirectionLabel>
                <ArrowLeft size={14} />
                <span>Proyek Sebelumnya</span>
              </NavDirectionLabel>
              <NavProjectTitle>{prevProject.title}</NavProjectTitle>
            </ProjectNavCard>

            <ProjectNavCard to={`/projects/${nextProject.id}`} $alignRight>
              <NavDirectionLabel>
                <span>Proyek Selanjutnya</span>
                <ArrowRight size={14} />
              </NavDirectionLabel>
              <NavProjectTitle>{nextProject.title}</NavProjectTitle>
            </ProjectNavCard>
          </ProjectNavWrapper>
        </ContentContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}
