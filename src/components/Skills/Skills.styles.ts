import styled from 'styled-components';

export const SkillsSection = styled.section`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.darkBase};

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.md}`};
  }
`;

export const SkillsContainer = styled.div`
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

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const TabButton = styled.button<{ $active: boolean }>`
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

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.sm}`};
  background-color: ${({ theme }) => theme.colors.glass};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: border-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};
  user-select: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

export const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: filter ${({ theme }) => theme.transitions.fast};

  ${SkillCardContainer}:hover & {
    filter: drop-shadow(0 0 8px rgba(183, 216, 148, 0.45));
  }

  ${({ theme }) => theme.media.mobile} {
    width: 32px;
    height: 32px;
  }
`;

export const SkillName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.colors.border},
    transparent
  );
  margin: ${({ theme }) => `${theme.spacing['4xl']} 0`};

  ${({ theme }) => theme.media.mobile} {
    margin: ${({ theme }) => `${theme.spacing['2xl']} 0`};
  }
`;

export const JourneyHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

export const JourneyTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textHighlight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

export const JourneySubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const TimelineWrapper = styled.div`
  position: relative;
`;

export const TimelineLine = styled.div`
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 20px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.borderHover},
    ${({ theme }) => theme.colors.border},
    transparent
  );

  ${({ theme }) => theme.media.mobile} {
    left: 16px;
  }
`;

export const MilestoneItem = styled.div`
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing['3xl']};

  &:last-child {
    padding-bottom: 0;
  }

  ${({ theme }) => theme.media.mobile} {
    gap: ${({ theme }) => theme.spacing.md};
    padding-bottom: ${({ theme }) => theme.spacing['2xl']};
  }
`;

export const MilestoneNodeWrapper = styled.div`
  flex-shrink: 0;
  width: 42px;
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.media.mobile} {
    width: 34px;
  }
`;

export const MilestoneNode = styled.div`
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border: 2px solid ${({ theme }) => theme.colors.accentLime};
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.accentGlow};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.accentLime};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  z-index: 2;

  ${({ theme }) => theme.media.mobile} {
    width: 34px;
    height: 34px;
    font-size: 11px;
  }
`;

export const MilestoneCard = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: border-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const MilestoneTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textHighlight};
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const MilestoneHeadline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.accentLime};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const MilestoneDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  max-width: 650px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TechTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const TechTag = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.accentMuted};
  color: ${({ theme }) => theme.colors.accentLime};
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.02em;
`;
