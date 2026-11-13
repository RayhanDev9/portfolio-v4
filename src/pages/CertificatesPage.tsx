import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { ArrowLeft, Search, X } from 'lucide-react';
import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
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
  max-width: 540px;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SearchIconBox = styled.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
  pointer-events: none;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 42px 12px 42px;
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  outline: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accentLime};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    background-color: ${({ theme }) => theme.colors.glass};
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: ${({ theme }) => theme.radii.full};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accentLime};
  }
`;

const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const FilterTabsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
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

const ResultCount = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
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
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border: 1px dashed ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const EmptyTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textHighlight};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const EmptySubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 440px;
  margin-left: auto;
  margin-right: auto;
`;

const ResetFilterBtn = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.accentLime};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 8px 18px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentMuted};
    border-color: ${({ theme }) => theme.colors.accentLime};
    color: ${({ theme }) => theme.colors.textHighlight};
  }
`;

type FilterCategory = 'all' | 'udemy' | 'codepolitan' | 'awards';

const easeOut = [0.4, 0, 0.2, 1] as const;

export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories: { value: FilterCategory; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'udemy', label: 'Udemy' },
    { value: 'codepolitan', label: 'Codepolitan' },
    { value: 'awards', label: 'Awards' },
  ];

  const query = searchQuery.trim().toLowerCase();
  const displayedCertificates = certificatesData.filter((cert) => {
    let matchesCategory = true;
    if (activeCategory === 'udemy') matchesCategory = cert.platform === 'udemy';
    else if (activeCategory === 'codepolitan') matchesCategory = cert.platform === 'codepolitan';
    else if (activeCategory === 'awards') {
      matchesCategory = cert.platform === 'kompetisi' || cert.platform === 'penghargaan';
    }

    if (!matchesCategory) return false;
    if (!query) return true;

    const titleMatch = cert.title.toLowerCase().includes(query);
    const issuerMatch = cert.issuer.toLowerCase().includes(query);
    const platformMatch = cert.platformName.toLowerCase().includes(query);
    const descMatch = cert.desc.toLowerCase().includes(query);
    const skillsMatch = cert.skills.some((s) => s.toLowerCase().includes(query));

    return titleMatch || issuerMatch || platformMatch || descMatch || skillsMatch;
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
            <SearchWrapper>
              <SearchIconBox>
                <Search size={16} />
              </SearchIconBox>
              <SearchInput
                type="text"
                placeholder="Cari sertifikat atau skill (JavaScript, Git, AJAX...)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Cari sertifikat"
              />
              {searchQuery && (
                <ClearButton
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Hapus pencarian"
                >
                  <X size={15} />
                </ClearButton>
              )}
            </SearchWrapper>

            <ControlsRow>
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

              <ResultCount>
                Menampilkan {displayedCertificates.length} dari {certificatesData.length} sertifikat
              </ResultCount>
            </ControlsRow>
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
            <EmptyState>
              <EmptyTitle>Tidak ada sertifikat yang cocok</EmptyTitle>
              <EmptySubtitle>
                Tidak ditemukan sertifikat yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo;
                {activeCategory !== 'all' ? ` pada kategori ${activeCategory}` : ''}.
              </EmptySubtitle>
              <ResetFilterBtn
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                Reset Filter &amp; Pencarian
              </ResetFilterBtn>
            </EmptyState>
          )}
        </ContentContainer>
      </MainContent>

      <CertificateLightbox
        certificate={selectedCert}
        certificates={displayedCertificates}
        onClose={() => setSelectedCert(null)}
        onSelectCertificate={(cert) => setSelectedCert(cert)}
      />

      <Footer />
    </PageContainer>
  );
}
