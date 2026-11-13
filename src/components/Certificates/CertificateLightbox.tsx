import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Certificate } from '../../types/portfolio';
import {
  LightboxOverlay,
  LightboxCounter,
  LightboxNavButton,
  LightboxCloseButton,
  LightboxContent,
  LightboxImage,
  LightboxInfo,
  LightboxTitle,
  LightboxMeta,
} from './Certificates.styles';

interface CertificateLightboxProps {
  certificate: Certificate | null;
  certificates?: Certificate[];
  onClose: () => void;
  onSelectCertificate?: (cert: Certificate) => void;
}

const easeOut = [0.4, 0, 0.2, 1] as const;

export function CertificateLightbox({
  certificate,
  certificates,
  onClose,
  onSelectCertificate,
}: CertificateLightboxProps) {
  const currentIndex =
    certificate && certificates
      ? certificates.findIndex((c) => c.id === certificate.id)
      : -1;
  const hasMultiple = Boolean(certificates && certificates.length > 1 && onSelectCertificate);

  const handlePrev = useCallback(() => {
    if (!certificates || !onSelectCertificate || currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    onSelectCertificate(certificates[prevIndex]);
  }, [certificates, currentIndex, onSelectCertificate]);

  const handleNext = useCallback(() => {
    if (!certificates || !onSelectCertificate || currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % certificates.length;
    onSelectCertificate(certificates[nextIndex]);
  }, [certificates, currentIndex, onSelectCertificate]);

  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasMultiple) {
        handlePrev();
      } else if (e.key === 'ArrowRight' && hasMultiple) {
        handleNext();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose, hasMultiple, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {certificate && (
        <LightboxOverlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: easeOut }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={certificate.title}
        >
          {certificates && currentIndex !== -1 && (
            <LightboxCounter>
              {currentIndex + 1} / {certificates.length}
            </LightboxCounter>
          )}

          <LightboxCloseButton
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Tutup pratinjau sertifikat"
          >
            <X size={20} />
          </LightboxCloseButton>

          {hasMultiple && (
            <>
              <LightboxNavButton
                type="button"
                $direction="prev"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Sertifikat sebelumnya (Panah Kiri)"
                title="Sebelumnya (←)"
              >
                <ChevronLeft size={24} />
              </LightboxNavButton>

              <LightboxNavButton
                type="button"
                $direction="next"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Sertifikat selanjutnya (Panah Kanan)"
                title="Selanjutnya (→)"
              >
                <ChevronRight size={24} />
              </LightboxNavButton>
            </>
          )}

          <LightboxContent
            as={motion.div}
            key={certificate.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22, ease: easeOut }}
            onClick={(e) => e.stopPropagation()}
          >
            <LightboxImage
              src={certificate.img}
              alt={certificate.alt || certificate.title}
            />

            <LightboxInfo>
              <LightboxTitle>{certificate.title}</LightboxTitle>
              <LightboxMeta>
                {certificate.issuer} &bull; {certificate.platformName}
              </LightboxMeta>
            </LightboxInfo>
          </LightboxContent>
        </LightboxOverlay>
      )}
    </AnimatePresence>
  );
}
