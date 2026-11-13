import styled from 'styled-components';

export const CertificatesSection = styled.section`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.darkBase};

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.md}`};
  }
`;

export const CertificatesContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SectionTitle = styled.h2`
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

export const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 520px;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const FilterTabsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

export const FilterTabButton = styled.button<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 6px 18px;
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

export const CertificatesGrid = styled.div`
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

export const CardContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: border-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkBase};
  cursor: pointer;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.normal};

  ${CardContainer}:hover & {
    transform: scale(1.04);
  }
`;

export const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const PlatformBadge = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.accentMuted};
  color: ${({ theme }) => theme.colors.accentLime};
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  align-self: flex-start;
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textHighlight};
  line-height: 1.45;
  min-height: 2.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const CardIssuer = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  min-height: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: block;
`;

export const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 6px;
  margin-top: auto;
  min-height: 52px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SkillTag = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 3px 9px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.glass};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  display: inline-flex;
  align-items: center;
  line-height: 1.3;
  height: fit-content;
  align-self: flex-start;
`;

export const SkillTagMore = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 3px 9px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.glass};
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  display: inline-flex;
  align-items: center;
  line-height: 1.3;
  height: fit-content;
  align-self: flex-start;
`;

export const ZoomButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colors.glass};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    background-color: ${({ theme }) => theme.colors.glassHover};
    color: ${({ theme }) => theme.colors.textHighlight};
  }
`;

// Lightbox Modal Styled Components
export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background-color: rgba(32, 39, 52, 0.94);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const LightboxCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.glass};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  color: ${({ theme }) => theme.colors.textHighlight};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 201;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.glassHover};
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: scale(1.05);
  }

  ${({ theme }) => theme.media.mobile} {
    top: 12px;
    right: 12px;
    width: 38px;
    height: 38px;
  }
`;

export const LightboxContent = styled.div`
  max-width: 900px;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 72vh;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  box-shadow: ${({ theme }) => theme.shadows.card};
  display: block;
`;

export const LightboxInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const LightboxTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textHighlight};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const LightboxMeta = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const FooterCTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

export const AllCertificatesButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 12px 28px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  cursor: pointer;
  transition: border-color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    background-color: ${({ theme }) => theme.colors.accentMuted};
    color: ${({ theme }) => theme.colors.textHighlight};
  }
`;
