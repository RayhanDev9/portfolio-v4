import styled from 'styled-components';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { AvailabilityBadge } from '../shared/AvailabilityBadge';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{ label: string; href: string }>;
  isHome?: boolean;
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

const NavItemLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.colors.accentLime};
    transform: translateX(4px);
  }
`;

const BadgeWrapper = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.borderSubtle};
`;

export function MobileMenu({ isOpen, onClose, items, isHome = true }: MobileMenuProps) {
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
                  <NavItemLink href={item.href} onClick={onClose}>
                    {item.label}
                  </NavItemLink>
                ) : (
                  <NavItemLink as={Link} to={`/${item.href}`} onClick={onClose}>
                    {item.label}
                  </NavItemLink>
                )}
              </motion.li>
            ))}
          </NavList>

          <BadgeWrapper>
            <AvailabilityBadge />
          </BadgeWrapper>
        </MenuOverlay>
      )}
    </AnimatePresence>
  );
}
