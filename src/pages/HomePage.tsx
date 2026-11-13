import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkBase};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

export default function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <MainContent>
        <Hero />
        <Projects />
      </MainContent>
    </PageContainer>
  );
}
