import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import type { Certificate } from '../../types/portfolio';
import {
  LightboxOverlay,
  LightboxCloseButton,
  LightboxContent,
  LightboxImage,
  LightboxInfo,
  LightboxTitle,
  LightboxMeta,
} from './Certificates.styles';

interface CertificateLightboxProps {
  certificate: Certificate | null;
  onClose: () => void;
}

const easeOut = [0.4, 0, 0.2, 1] as const;

export function CertificateLightbox({
  certificate,
  onClose,
}: CertificateLightboxProps) {
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

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

          <LightboxContent
            as={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: easeOut }}
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
