import { useLocation, Link } from 'react-router';
import { ArrowUp } from 'lucide-react';
import {
  FooterContainer,
  FooterInner,
  FooterTop,
  FooterBrandBlock,
  BrandLogo,
  CopyrightText,
  FooterNav,
  FooterNavLink,
  FooterBottom,
  TechCreditText,
  BackToTopButton,
} from './Footer.styles';

const FOOTER_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <FooterInner>
        <FooterTop>
          <FooterBrandBlock>
            {isHome ? (
              <BrandLogo href="#hero">
                Rayhan<span>.</span>
              </BrandLogo>
            ) : (
              <BrandLogo as={Link} to="/">
                Rayhan<span>.</span>
              </BrandLogo>
            )}
            <CopyrightText>
              &copy; {new Date().getFullYear()} Muhamad Rayhan. All rights reserved.
            </CopyrightText>
          </FooterBrandBlock>

          <FooterNav aria-label="Footer Navigasi">
            {FOOTER_LINKS.map((item) =>
              isHome ? (
                <FooterNavLink key={item.href} href={item.href}>
                  {item.label}
                </FooterNavLink>
              ) : (
                <FooterNavLink key={item.href} as={Link} to={`/${item.href}`}>
                  {item.label}
                </FooterNavLink>
              ),
            )}
          </FooterNav>
        </FooterTop>

        <FooterBottom>
          <TechCreditText>
            Crafted with React 19, TypeScript &amp; styled-components
          </TechCreditText>

          <BackToTopButton
            type="button"
            onClick={scrollToTop}
            aria-label="Kembali ke bagian atas halaman"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </BackToTopButton>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
}
