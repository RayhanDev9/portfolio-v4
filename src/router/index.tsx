import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
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
    path: '*',
    element: <NotFoundPage />,
  },
]);
