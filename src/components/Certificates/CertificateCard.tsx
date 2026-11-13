import { motion } from 'motion/react';
import { ZoomIn } from 'lucide-react';
import type { Certificate } from '../../types/portfolio';
import {
  CardContainer,
  ThumbnailWrapper,
  ThumbnailImage,
  CardBody,
  PlatformBadge,
  CardTitle,
  CardIssuer,
  SkillsRow,
  SkillTag,
  SkillTagMore,
  ZoomButton,
} from './Certificates.styles';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
  onViewCertificate: (certificate: Certificate) => void;
}

const easeOut = [0.4, 0, 0.2, 1] as const;

export function CertificateCard({
  certificate,
  index,
  onViewCertificate,
}: CertificateCardProps) {
  const visibleSkills = certificate.skills.slice(0, 3);
  const remainingSkills = certificate.skills.length - 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: easeOut }}
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <CardContainer>
        <ThumbnailWrapper
          onClick={() => onViewCertificate(certificate)}
          title={`Lihat sertifikat ${certificate.title}`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onViewCertificate(certificate);
            }
          }}
        >
          <ThumbnailImage
            src={certificate.img}
            alt={certificate.alt || certificate.title}
            loading="lazy"
          />
        </ThumbnailWrapper>

        <CardBody>
          <PlatformBadge>{certificate.platformName}</PlatformBadge>

          <CardTitle title={certificate.title}>{certificate.title}</CardTitle>

          <CardIssuer>{certificate.issuer}</CardIssuer>

          <SkillsRow>
            {visibleSkills.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
            {remainingSkills > 0 && (
              <SkillTagMore>+{remainingSkills}</SkillTagMore>
            )}
          </SkillsRow>

          <ZoomButton
            type="button"
            onClick={() => onViewCertificate(certificate)}
            aria-label={`Perbesar tampilan sertifikat ${certificate.title}`}
          >
            <ZoomIn size={15} />
            <span>Lihat Sertifikat</span>
          </ZoomButton>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
