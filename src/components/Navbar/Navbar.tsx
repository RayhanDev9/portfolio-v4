import { useState, useEffect } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { Link, useLocation } from "react-router";
import { AvailabilityBadge } from "../shared/AvailabilityBadge";
import { profileData } from "../../data/profile";
import { MobileMenu } from "./MobileMenu";
import {
  NavHeader,
  NavContainer,
  Brand,
  NavLinksList,
  NavLink,
  NavActions,
  NavResumeButton,
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
  const [activeSection, setActiveSection] = useState<string>("hero");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["hero", "projects", "skills", "certificates", "contact"];
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const getIsActive = (href: string) => {
    const sectionId = href.replace("#", "");
    if (isHome) {
      return activeSection === sectionId;
    }
    if (location.pathname.startsWith("/projects") && sectionId === "projects") {
      return true;
    }
    if (location.pathname.startsWith("/certificates") && sectionId === "certificates") {
      return true;
    }
    return false;
  };

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
                <NavLink
                  key={item.href}
                  href={item.href}
                  $active={getIsActive(item.href)}
                >
                  {item.label}
                </NavLink>
              ) : (
                <NavLink
                  key={item.href}
                  as={Link}
                  to={`/${item.href}`}
                  $active={getIsActive(item.href)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </NavLinksList>

          <NavActions>
            {profileData.resumeUrl && (
              <NavResumeButton
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="CV_Muhamad_Rayhan_ATS_EN.pdf"
                title="Unduh CV Muhamad Rayhan"
              >
                <FileDown size={14} />
                <span>Resume</span>
              </NavResumeButton>
            )}

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
        activeSection={activeSection}
      />
    </>
  );
}
