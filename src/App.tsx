import styled from 'styled-components';
import { profileData } from './data/profile';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.darkBase};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
`;

const Card = styled.div`
  max-width: 600px;
  width: 100%;
  padding: ${({ theme }) => theme.spacing['2xl']};
  background: ${({ theme }) => theme.colors.secondarySurface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
  }

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const Badge = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.accentLime};
  background: ${({ theme }) => theme.colors.accentMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.radii.full};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.textHighlight};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.accentLime};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

export default function App() {
  return (
    <Container>
      <Card>
        <Badge>Theme &amp; Design Tokens Locked</Badge>
        <Title>{profileData.name}</Title>
        <Subtitle className="font-display">{profileData.role}</Subtitle>
        <Description>{profileData.headline}</Description>
      </Card>
    </Container>
  );
}
