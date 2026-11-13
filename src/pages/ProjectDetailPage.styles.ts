import styled from 'styled-components';
import { Link } from 'react-router';

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkBase};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
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

export const ContentContainer = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`;

export const NavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accentLime};
    transform: translateX(-3px);
  }
`;

export const MetaPills = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  flex-wrap: wrap;
`;

export const CategoryBadge = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.accentMuted};
  color: ${({ theme }) => theme.colors.accentLime};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const CollabBadge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.glass};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  img {
    width: 13px;
    height: 13px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accentLime};
    border-color: ${({ theme }) => theme.colors.borderHover};
    background-color: ${({ theme }) => theme.colors.accentMuted};
    transform: translateY(-1px);
  }
`;

export const ProjectHero = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

export const ProjectTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textHighlight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  line-height: ${({ theme }) => theme.lineHeights.tight};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

export const ProjectTagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.accentLime};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.4;

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  max-width: 820px;
`;

export const HeroActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const PrimaryDemoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.accentLime};
  color: ${({ theme }) => theme.colors.textInverse};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  padding: 12px 26px;
  border-radius: ${({ theme }) => theme.radii.sm};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

export const SecondaryCodeLink = styled.a`
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

export const CollabActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.glass};
  color: ${({ theme }) => theme.colors.textHighlight};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 12px 22px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  img {
    width: 15px;
    height: 15px;
  }

  svg {
    color: ${({ theme }) => theme.colors.accentLime};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    background-color: ${({ theme }) => theme.colors.accentMuted};
    color: ${({ theme }) => theme.colors.accentLime};
    transform: translateY(-2px);
  }
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const SkillPill = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.glass};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const ShowcaseCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

export const ShowcaseImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
`;

export const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

export const TwoColGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const DeepDiveCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  box-shadow: ${({ theme }) => theme.shadows.subtle};

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const DeepDiveCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.accentLime};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
`;

export const DeepDiveCardTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textHighlight};
  margin-top: 2px;
`;

export const DeepDiveCardText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

export const ArchitectureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const ArchitectureItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-left: ${({ theme }) => theme.spacing.md};
  border-left: 2px solid ${({ theme }) => theme.colors.border};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentLime};
  }
`;

export const ArchTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textHighlight};
`;

export const ArchReason = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  list-style: none;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;

  svg {
    color: ${({ theme }) => theme.colors.accentLime};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

export const CodeSnippetCard = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBase};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const CodeHeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderSubtle};
`;

export const CodeHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const CodeCopyBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accentLime};
    border-color: ${({ theme }) => theme.colors.borderHover};
    background-color: ${({ theme }) => theme.colors.accentMuted};
  }
`;

export const CodePre = styled.pre`
  margin: 0;
  padding: 16px 20px;
  overflow-x: auto;
  font-family: 'Fira Code', Consolas, Monaco, monospace;
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textHighlight};
  background-color: rgba(15, 20, 28, 0.7);
`;

export const CodeExplanationText = styled.p`
  padding: 12px 16px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  border-top: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  background-color: ${({ theme }) => theme.colors.secondarySurface};
`;

export const ProjectNavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  padding-top: ${({ theme }) => theme.spacing['2xl']};
  border-top: 1px solid ${({ theme }) => theme.colors.borderSubtle};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectNavCard = styled(Link)<{ $alignRight?: boolean }>`
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.lg};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: ${({ $alignRight }) => ($alignRight ? 'flex-end' : 'flex-start')};
  text-align: ${({ $alignRight }) => ($alignRight ? 'right' : 'left')};
  gap: 4px;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

export const NavDirectionLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.accentLime};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
`;

export const NavProjectTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textHighlight};
`;
