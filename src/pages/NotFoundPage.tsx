import styled from 'styled-components';
import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  color: ${({ theme }) => theme.colors.accentLime};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const HomeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accentLime};
  color: ${({ theme }) => theme.colors.textInverse};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  padding: 12px 28px;
  border-radius: ${({ theme }) => theme.radii.sm};
  text-decoration: none;
  transition: filter ${({ theme }) => theme.transitions.fast};

  &:hover {
    filter: brightness(1.08);
  }
`;

export default function NotFoundPage() {
  return (
    <PageContainer>
      <Navbar />
      <Content>
        <Title>404</Title>
        <Subtitle>Halaman yang Anda tuju tidak ditemukan.</Subtitle>
        <HomeButton to="/">Kembali ke Beranda</HomeButton>
      </Content>
    </PageContainer>
  );
}
