import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { CertificateCard } from '../components/Certificates/CertificateCard';
import { CertificateLightbox } from '../components/Certificates/CertificateLightbox';
import { certificatesData } from '../data/certificates';
import type { Certificate } from '../types/portfolio';

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

type FilterCategory = 'all' | 'udemy' | 'codepolitan' | 'awards';

const easeOut = [0.4, 0, 0.2, 1] as const;

export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const udemyCount = certificatesData.filter((c) => c.platform === 'udemy').length;
  const codepolitanCount = certificatesData.filter(
    (c) => c.platform === 'codepolitan',
  ).length;
  const awardsCount = certificatesData.filter(
    (c) => c.platform === 'kompetisi' || c.platform === 'penghargaan',
  ).length;

  const categories: { value: FilterCategory; label: string }[] = [
    { value: 'all', label: `All (${certificatesData.length})` },
    { value: 'udemy', label: `Udemy (${udemyCount})` },
    { value: 'codepolitan', label: `Codepolitan (${codepolitanCount})` },
    { value: 'awards', label: `Awards (${awardsCount})` },
  ];

  const displayedCertificates = certificatesData.filter((cert) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'udemy') return cert.platform === 'udemy';
    if (activeCategory === 'codepolitan') return cert.platform === 'codepolitan';
    if (activeCategory === 'awards') {
      return cert.platform === 'kompetisi' || cert.platform === 'penghargaan';
    }
    return true;
  });

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
              <PageTitle>All Certificates</PageTitle>
              <PageSubtitle>
                Seluruh kredensial sertifikasi, pelatihan intensif, dan penghargaan resmi yang diperoleh.
              </PageSubtitle>
            </HeaderSection>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: easeOut }}
          >
            <FilterTabsWrapper role="tablist" aria-label="Filter kategori sertifikat">
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

          {displayedCertificates.length > 0 ? (
            <CatalogGrid>
              {displayedCertificates.map((certificate, index) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  index={index}
                  onViewCertificate={(cert) => setSelectedCert(cert)}
                />
              ))}
            </CatalogGrid>
          ) : (
            <EmptyState>Tidak ada sertifikat dalam kategori ini.</EmptyState>
          )}
        </ContentContainer>
      </MainContent>

      <CertificateLightbox
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </PageContainer>
  );
}
