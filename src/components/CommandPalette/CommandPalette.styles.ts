import styled from 'styled-components';
import { motion } from 'motion/react';

export const PaletteBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: ${({ theme }) => theme.effects.blurHeavy};
  -webkit-backdrop-filter: ${({ theme }) => theme.effects.blurHeavy};
  z-index: 999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 100px 16px 40px;

  ${({ theme }) => theme.media.mobile} {
    padding-top: 60px;
  }
`;

export const PaletteDialog = styled(motion.div)`
  width: 100%;
  max-width: 620px;
  background-color: ${({ theme }) => theme.colors.secondarySurface};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  gap: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const SearchInputField = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.textHighlight};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.base};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const EscKeyBadge = styled.kbd`
  background-color: ${({ theme }) => theme.colors.glass};
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 2px 7px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: monospace;
`;

export const ResultsList = styled.div`
  max-height: 380px;
  overflow-y: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.borderSubtle};
    border-radius: 3px;
  }
`;

export const GroupHeader = styled.div`
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  color: ${({ theme }) => theme.colors.accentLime};
  padding: 8px 12px 4px;
`;

export const PaletteItem = styled.div<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.accentMuted : 'transparent'};
  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? theme.colors.border : 'transparent'};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentMuted};
    border-color: ${({ theme }) => theme.colors.border};
  }
`;

export const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.textHighlight};

  svg {
    color: ${({ theme }) => theme.colors.accentLime};
    flex-shrink: 0;
  }
`;

export const ItemTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ItemTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textHighlight};
`;

export const ItemSubtitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ItemShortcut = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: monospace;
`;

export const EmptyNotice = styled.div`
  padding: 32px 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const PaletteFooter = styled.div`
  padding: 10px 18px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  background-color: rgba(15, 20, 28, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textMuted};

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export const FooterKeyHints = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
