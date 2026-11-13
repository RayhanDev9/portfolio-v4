import { useState } from 'react';
import { motion } from 'motion/react';
import { certificatesData } from '../../data/certificates';
import type { Certificate } from '../../types/portfolio';
import { CertificateCard } from './CertificateCard';
import { CertificateLightbox } from './CertificateLightbox';
import {
  CertificatesSection,
  CertificatesContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  FilterTabsWrapper,
  FilterTabButton,
  CertificatesGrid,
} from './Certificates.styles';

type FilterCategory = 'all' | 'udemy' | 'codepolitan' | 'awards';

const easeOut = [0.4, 0, 0.2, 1] as const;

export function Certificates() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

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
    <CertificatesSection id="certificates">
      <CertificatesContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <SectionHeader>
            <SectionTitle>Certifications</SectionTitle>
            <SectionSubtitle>
              Sertifikasi resmi dan penghargaan yang diperoleh sepanjang pembelajaran dan kontribusi komunitas.
            </SectionSubtitle>
          </SectionHeader>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
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

        <CertificatesGrid>
          {displayedCertificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
              onViewCertificate={(cert) => setSelectedCert(cert)}
            />
          ))}
        </CertificatesGrid>

        <CertificateLightbox
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      </CertificatesContainer>
    </CertificatesSection>
  );
}
