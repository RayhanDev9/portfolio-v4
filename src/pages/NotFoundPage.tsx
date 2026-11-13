import styled from 'styled-components';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkBase};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing.lg}`};
  padding-top: 140px;
  padding-bottom: 80px;
`;

const ErrorCard = styled.div`
  max-width: 580px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing['2xl']}`};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.card};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.lg}`};
  }
`;

const ErrorCode = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 5.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.accentLime};
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  text-shadow: 0 0 32px rgba(183, 216, 148, 0.25);
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ErrorTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textHighlight};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ErrorDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  max-width: 440px;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  width: 100%;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.accentLime};
  color: ${({ theme }) => theme.colors.textInverse};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.sm};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    background-color: ${({ theme }) => theme.colors.accentMuted};
    color: ${({ theme }) => theme.colors.textHighlight};
  }
`;

const easeOut = [0.4, 0, 0.2, 1] as const;

export default function NotFoundPage() {
  return (
    <PageContainer>
      <Navbar />
      <Content>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: easeOut }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <ErrorCard>
            <ErrorCode>404</ErrorCode>
            <ErrorTitle>Halaman Tidak Ditemukan</ErrorTitle>
            <ErrorDescription>
              Tautan yang Anda tuju mungkin telah dipindahkan, dihapus, atau alamat URL salah ketik.
            </ErrorDescription>
            <ButtonRow>
              <PrimaryButton to="/">
                <ArrowLeft size={16} />
                <span>Kembali ke Beranda</span>
              </PrimaryButton>
              <SecondaryButton to="/projects">
                <span>Lihat Katalog Proyek</span>
                <ArrowRight size={16} />
              </SecondaryButton>
            </ButtonRow>
          </ErrorCard>
        </motion.div>
      </Content>
      <Footer />
    </PageContainer>
  );
}
