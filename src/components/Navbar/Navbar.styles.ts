import styled from 'styled-components';

export const NavHeader = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  background-color: ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.glassElevated : theme.colors.glass};
  backdrop-filter: ${({ theme }) => theme.effects.blur};
  -webkit-backdrop-filter: ${({ theme }) => theme.effects.blur};
  border-bottom: 1px solid
    ${({ theme, $scrolled }) =>
      $scrolled ? theme.colors.border : theme.colors.borderGlass};
  box-shadow: ${({ theme, $scrolled }) =>
    $scrolled ? theme.shadows.subtle : 'none'};
  transition: padding ${({ theme }) => theme.transitions.normal},
    background-color ${({ theme }) => theme.transitions.normal},
    border-color ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};
  padding: ${({ theme, $scrolled }) =>
    $scrolled
      ? `${theme.spacing.sm} ${theme.spacing.lg}`
      : `${theme.spacing.md} ${theme.spacing.lg}`};

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme, $scrolled }) =>
      $scrolled
        ? `${theme.spacing.xs} ${theme.spacing.md}`
        : `${theme.spacing.sm} ${theme.spacing.md}`};
  }
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: baseline;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textHighlight};
  text-decoration: none;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.9;
  }

  span {
    color: ${({ theme }) => theme.colors.accentLime};
    margin-left: 2px;
  }
`;

export const NavLinksList = styled.nav`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.desktop} {
    display: flex;
  }
`;

export const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.xs}`};
  transition: color ${({ theme }) => theme.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1.5px;
    background-color: ${({ theme }) => theme.colors.accentLime};
    transition: width ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textHighlight};

    &::after {
      width: 100%;
    }
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const DesktopBadgeWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.desktop} {
    display: block;
  }
`;

export const MenuToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.textHighlight};
  padding: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.glassHover};
    border-color: ${({ theme }) => theme.colors.borderHover};
  }

  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;
