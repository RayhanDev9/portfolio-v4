import styled from 'styled-components';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { FileDown, Search } from 'lucide-react';
import { AvailabilityBadge } from '../shared/AvailabilityBadge';
import { profileData } from '../../data/profile';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{ label: string; href: string }>;
  isHome?: boolean;
  activeSection?: string;
  onOpenPalette?: () => void;
}

const MenuOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  top: 60px;
  background-color: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: ${({ theme }) => theme.effects.blurHeavy};
  -webkit-backdrop-filter: ${({ theme }) => theme.effects.blurHeavy};
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.lg}`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const NavItemLink = styled.a<{ $active?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.accentLime : theme.colors.textMuted};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.colors.accentLime};
    transform: translateX(4px);
  }
`;

const MobilePaletteButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.glass};
  color: ${({ theme }) => theme.colors.textHighlight};
  border: 1px solid ${({ theme }) => theme.colors.borderGlass};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 12px 20px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    color: ${({ theme }) => theme.colors.accentLime};
  }
`;

const MobileCvButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.accentMuted};
  color: ${({ theme }) => theme.colors.accentLime};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 12px 20px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentLime};
    color: ${({ theme }) => theme.colors.textInverse};
  }
`;

const BadgeWrapper = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export function MobileMenu({
  isOpen,
  onClose,
  items,
  isHome = true,
  activeSection = 'hero',
  onOpenPalette,
}: MobileMenuProps) {
  const location = useLocation();

  const getIsActive = (href: string) => {
    const sectionId = href.replace('#', '');
    if (isHome) {
      return activeSection === sectionId;
    }
    if (location.pathname.startsWith('/projects') && sectionId === 'projects') {
      return true;
    }
    if (location.pathname.startsWith('/certificates') && sectionId === 'certificates') {
      return true;
    }
    return false;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <MenuOverlay
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <NavList>
            {items.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                {isHome ? (
                  <NavItemLink
                    href={item.href}
                    onClick={onClose}
                    $active={getIsActive(item.href)}
                  >
                    {item.label}
                  </NavItemLink>
                ) : (
                  <NavItemLink
                    as={Link}
                    to={`/${item.href}`}
                    onClick={onClose}
                    $active={getIsActive(item.href)}
                  >
                    {item.label}
                  </NavItemLink>
                )}
              </motion.li>
            ))}
          </NavList>

          <BadgeWrapper>
            {onOpenPalette && (
              <MobilePaletteButton
                type="button"
                onClick={() => {
                  onClose();
                  onOpenPalette();
                }}
              >
                <Search size={16} />
                <span>Menu Cepat (Command Palette ⌘K)</span>
              </MobilePaletteButton>
            )}

            {profileData.resumeUrl && (
              <MobileCvButton
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="CV_Muhamad_Rayhan_ATS_EN.pdf"
                onClick={onClose}
              >
                <FileDown size={16} />
                <span>Unduh CV / Resume</span>
              </MobileCvButton>
            )}
            <AvailabilityBadge />
          </BadgeWrapper>
        </MenuOverlay>
      )}
    </AnimatePresence>
  );
}
