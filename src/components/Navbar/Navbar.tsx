import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { AvailabilityBadge } from "../shared/AvailabilityBadge";
import { MobileMenu } from "./MobileMenu";
import {
  NavHeader,
  NavContainer,
  Brand,
  NavLinksList,
  NavLink,
  NavActions,
  DesktopBadgeWrapper,
  MenuToggleButton,
} from "./Navbar.styles";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  console.info(location.hash);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavHeader $scrolled={scrolled}>
        <NavContainer>
          {isHome ? (
            <Brand href="#hero">
              Rayhan<span>.</span>
            </Brand>
          ) : (
            <Brand as={Link} to="/">
              Rayhan<span>.</span>
            </Brand>
          )}

          <NavLinksList>
            {NAV_ITEMS.map((item) =>
              isHome ? (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ) : (
                <NavLink key={item.href} as={Link} to={`/${item.href}`}>
                  {item.label}
                </NavLink>
              ),
            )}
          </NavLinksList>

          <NavActions>
            <DesktopBadgeWrapper>
              <AvailabilityBadge text="Open to Work" size="sm" />
            </DesktopBadgeWrapper>

            <MenuToggleButton
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
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
        isHome={isHome}
      />
    </>
  );
}
