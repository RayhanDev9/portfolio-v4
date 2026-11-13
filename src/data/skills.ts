import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Core Tools',
    description: 'Fundamental languages, modern build tools, and version control',
    skills: [
      { name: 'TypeScript', icon: '/icons/tech/typescript.svg' },
      { name: 'JavaScript', icon: '/icons/tech/javascript.svg' },
      { name: 'HTML5', icon: '/icons/tech/html-5.svg' },
      { name: 'CSS3', icon: '/icons/tech/css-3.svg' },
      { name: 'Vite', icon: '/icons/tech/vite.svg' },
      { name: 'Git', icon: '/icons/tech/git.svg' },
      { name: 'GitHub', icon: '/icons/tech/github.svg' },
      { name: 'C++', icon: '/icons/tech/cplusplus.svg' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    description: 'Reactive component engines, state containers, and data caching',
    skills: [
      { name: 'React', icon: '/icons/tech/react.svg' },
      { name: 'Vue.js', icon: '/icons/tech/vue.svg' },
      { name: 'Redux Toolkit', icon: '/icons/tech/redux.svg' },
      { name: 'Pinia', icon: '/icons/tech/pinia.svg' },
      { name: 'TanStack Query', icon: '/icons/tech/react-query.svg' },
      { name: 'React Router', icon: '/icons/tech/react-router.svg' },
      { name: 'Vue Router', icon: '/icons/tech/vue-router.svg' },
      { name: 'Axios', icon: '/icons/tech/axios.svg' },
    ],
  },
  {
    title: 'Styling & UI Systems',
    description: 'Design systems, responsive layouts, motion, and icon packages',
    skills: [
      { name: 'Tailwind CSS', icon: '/icons/tech/tailwind.svg' },
      { name: 'Framer Motion', icon: '/icons/tech/framer-motion.svg' },
      { name: 'Sass', icon: '/icons/tech/sass.svg' },
      { name: 'Bootstrap', icon: '/icons/tech/bootstrap-4.svg' },
      { name: 'Lucide Icons', icon: '/icons/tech/lucide.svg' },
      { name: 'Responsive UI', icon: '/icons/tech/responsive.svg' },
    ],
  },
];
