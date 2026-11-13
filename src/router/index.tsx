import { createBrowserRouter, Outlet, ScrollRestoration } from 'react-router';
import { CursorGlow } from '../components/shared/CursorGlow';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import CertificatesPage from '../pages/CertificatesPage';
import NotFoundPage from '../pages/NotFoundPage';

function RootLayout() {
  return (
    <>
      <CursorGlow />
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/projects/:id',
        element: <ProjectDetailPage />,
      },
      {
        path: '/certificates',
        element: <CertificatesPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
