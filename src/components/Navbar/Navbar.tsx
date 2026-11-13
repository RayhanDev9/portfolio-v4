import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AvailabilityBadge } from '../shared/AvailabilityBadge';
import { MobileMenu } from './MobileMenu';
import {
  NavHeader,
  NavContainer,
  Brand,
  NavLinksList,
  NavLink,
  NavActions,
  DesktopBadgeWrapper,
  MenuToggleButton,
} from './Navbar.styles';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavHeader $scrolled={scrolled}>
        <NavContainer>
          <Brand href="#hero">
            Rayhan<span>.</span>
          </Brand>

          <NavLinksList>
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </NavLinksList>

          <NavActions>
            <DesktopBadgeWrapper>
              <AvailabilityBadge text="Open to Work" size="sm" />
            </DesktopBadgeWrapper>

            <MenuToggleButton
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </MenuToggleButton>
          </NavActions>
        </NavContainer>
      </NavHeader>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAV_ITEMS}
      />
    </>
  );
}
