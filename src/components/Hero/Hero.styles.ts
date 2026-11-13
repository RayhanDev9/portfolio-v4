import styled from 'styled-components';
import { motion } from 'motion/react';

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing.lg}`};
  padding-top: 120px;
  background-color: ${({ theme }) => theme.colors.darkBase};
  overflow: hidden;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 100px;
    padding-bottom: ${({ theme }) => theme.spacing['2xl']};
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
  }
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: center;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => theme.media.tablet} {
    align-items: center;
    text-align: center;
  }
`;

export const NameHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textHighlight};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  margin-top: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  span {
    color: ${({ theme }) => theme.colors.accentLime};
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

export const RoleSlideViewport = styled.div`
  position: relative;
  height: 40px;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.tablet} {
    justify-content: center;
  }

  ${({ theme }) => theme.media.mobile} {
    height: 34px;
  }
`;

export const RoleSubtitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.accentLime};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  margin: 0;
  line-height: 1.2;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const HeadlineParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  max-width: 520px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;

  ${({ theme }) => theme.media.tablet} {
    justify-content: center;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.accentLime};
  color: ${({ theme }) => theme.colors.textInverse};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  padding: 12px 28px;
  border-radius: ${({ theme }) => theme.radii.sm};
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.fast},
    filter ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SecondaryButton = styled.a`
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

export const CvButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.glass};
  color: ${({ theme }) => theme.colors.textHighlight};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  text-decoration: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    background-color: ${({ theme }) => theme.colors.accentMuted};
    color: ${({ theme }) => theme.colors.accentLime};
    transform: translateY(-2px);
  }
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  ${({ theme }) => theme.media.tablet} {
    justify-content: center;
  }
`;

export const SocialIconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colors.glass};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: background-color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  img {
    width: 20px;
    height: 20px;
    opacity: 0.85;
    transition: opacity ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.glassHover};
    border-color: ${({ theme }) => theme.colors.borderHover};
    color: ${({ theme }) => theme.colors.accentLime};
    transform: translateY(-2px);

    img {
      opacity: 1;
    }
  }
`;

export const PhotoColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.media.tablet} {
    order: -1;
  }
`;

export const PolaroidCard = styled.div`
  position: relative;
  max-width: 340px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.sm} ${theme.spacing.lg} ${theme.spacing.sm}`};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transform: rotate(2deg);
  transition: transform ${({ theme }) => theme.transitions.normal},
    border-color ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: rotate(0deg) scale(1.02);
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  ${({ theme }) => theme.media.mobile} {
    max-width: 280px;
    transform: rotate(1deg);
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.xs};
  display: block;
`;

export const PolaroidCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};

  img {
    width: 14px;
    height: 14px;
    opacity: 0.8;
  }
`;
