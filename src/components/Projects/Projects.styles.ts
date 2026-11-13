import styled from 'styled-components';

export const ProjectsSection = styled.section`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.darkBase};

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.md}`};
  }
`;

export const ProjectsContainer = styled.div`
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

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
  aspect-ratio: 16 / 10;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkBase};
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

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textHighlight};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const CardMeta = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
`;

export const CollabMetaLink = styled.a`
  color: ${({ theme }) => theme.colors.textHighlight};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accentLime};
    text-decoration: underline;
  }
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TechStackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 6px;
  margin-top: auto;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TechPill = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.accentMuted};
  color: ${({ theme }) => theme.colors.accentLime};
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  line-height: 1.3;
  height: fit-content;
  align-self: flex-start;
`;

export const TechPillMore = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 3px 8px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.glass};
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  display: inline-flex;
  align-items: center;
  line-height: 1.3;
  height: fit-content;
  align-self: flex-start;
`;

export const CardActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.borderSubtle};
`;

export const CardActionGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const RepoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.textHighlight};
  }
`;

export const LiveDemoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.accentLime};
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.85;
  }
`;

export const DetailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.textHighlight};
  }
`;

export const FooterCTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

export const AllProjectsButton = styled.a`
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
