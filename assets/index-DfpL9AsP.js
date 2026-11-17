import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{A as t,C as n,D as r,E as i,O as a,S as o,T as s,_ as c,a as l,b as u,c as d,d as f,f as p,g as m,h,i as g,j as _,k as v,l as y,m as b,n as x,o as S,p as C,r as w,s as T,t as E,u as D,v as O,w as k,x as A,y as j}from"./vendor-icons-rYOvH06j.js";import{a as M,c as N,i as P,l as F,n as I,o as L,r as R,s as z,t as B,u as V}from"./vendor-react-BJjt3Ljo.js";import{i as H,n as U,r as W,t as ee}from"./vendor-styled-BT4G9h-P.js";import{n as G,r as te,t as K}from"./vendor-motion-BKuHW1x_.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var q=e(_(),1),ne=V(),re={colors:{darkBase:`#202734`,secondarySurface:`#36415A`,accentLime:`#B7D894`,textHighlight:`#E0F8C7`,glass:`rgba(54, 65, 90, 0.55)`,glassHover:`rgba(62, 74, 103, 0.75)`,glassElevated:`rgba(42, 51, 68, 0.85)`,background:`#202734`,surface:`#36415A`,surfaceHover:`#3e4a67`,surfaceElevated:`#2a3344`,textPrimary:`#E0F8C7`,textSecondary:`#C5D8B4`,textMuted:`#9DA9C1`,textInverse:`#202734`,border:`rgba(183, 216, 148, 0.16)`,borderHover:`rgba(183, 216, 148, 0.45)`,borderSubtle:`rgba(255, 255, 255, 0.08)`,borderGlass:`rgba(183, 216, 148, 0.18)`,accentGlow:`rgba(183, 216, 148, 0.15)`,accentMuted:`rgba(183, 216, 148, 0.10)`,overlay:`rgba(32, 39, 52, 0.85)`},fonts:{body:`'Google Sans', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,heading:`'Google Sans', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif`,display:`'Poiret One', cursive, sans-serif`,code:`'Fira Code', 'Courier New', monospace`},fontSizes:{xs:`0.75rem`,sm:`0.875rem`,base:`1rem`,md:`1.125rem`,lg:`1.25rem`,xl:`1.5rem`,"2xl":`1.875rem`,"3xl":`2.25rem`,"4xl":`3rem`,"5xl":`3.75rem`},fontWeights:{light:300,regular:400,medium:500,semibold:600,bold:700},lineHeights:{tight:1.15,normal:1.5,relaxed:1.7},letterSpacings:{tight:`-0.025em`,normal:`0`,wide:`0.05em`,wider:`0.1em`},spacing:{xs:`4px`,sm:`8px`,md:`16px`,lg:`24px`,xl:`32px`,"2xl":`48px`,"3xl":`64px`,"4xl":`96px`,"5xl":`128px`},radii:{xs:`4px`,sm:`8px`,md:`12px`,lg:`16px`,xl:`24px`,full:`9999px`},breakpoints:{mobile:`480px`,tablet:`768px`,desktop:`1024px`,wide:`1280px`},media:{mobile:`@media (max-width: 480px)`,tablet:`@media (max-width: 768px)`,desktop:`@media (min-width: 1024px)`,wide:`@media (min-width: 1280px)`},transitions:{fast:`150ms cubic-bezier(0.4, 0, 0.2, 1)`,normal:`250ms cubic-bezier(0.4, 0, 0.2, 1)`},shadows:{subtle:`0 4px 20px rgba(0, 0, 0, 0.25)`,card:`0 8px 30px rgba(0, 0, 0, 0.35)`,glow:`0 0 25px rgba(183, 216, 148, 0.2)`,glass:`0 8px 32px 0 rgba(0, 0, 0, 0.37)`},effects:{blur:`blur(12px)`,blurHeavy:`blur(20px)`}},ie=U`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    color-scheme: dark;
    overflow-x: hidden;
    max-width: 100%;
    width: 100%;
  }

  body {
    background-color: ${({theme:e})=>e.colors.darkBase};
    color: ${({theme:e})=>e.colors.textPrimary};
    font-family: ${({theme:e})=>e.fonts.body};
    font-size: ${({theme:e})=>e.fontSizes.base};
    line-height: ${({theme:e})=>e.lineHeights.relaxed};
    letter-spacing: ${({theme:e})=>e.letterSpacings.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    max-width: 100%;
    width: 100%;
    min-height: 100vh;
  }

  #root {
    overflow-x: hidden;
    max-width: 100%;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Custom Selection Color */
  ::selection {
    background-color: ${({theme:e})=>e.colors.accentLime};
    color: ${({theme:e})=>e.colors.darkBase};
  }

  /* Headings with discipline */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.fonts.heading};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    line-height: ${({theme:e})=>e.lineHeights.tight};
    color: ${({theme:e})=>e.colors.textHighlight};
    letter-spacing: ${({theme:e})=>e.letterSpacings.tight};
  }

  /* Display Font Class for Poiret One accents */
  .font-display {
    font-family: ${({theme:e})=>e.fonts.display};
    letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${({theme:e})=>e.transitions.fast};
  }

  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  img, svg, picture, video {
    display: block;
    max-width: 100%;
  }

  /* Subtle Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.darkBase};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.secondarySurface};
    border-radius: 4px;
    border: 2px solid ${({theme:e})=>e.colors.darkBase};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.accentLime};
  }
`,J=F(),Y=te(),ae=W.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.3s ease;

  @media (hover: none) {
    display: none;
  }
`;function oe(){let e=(0,J.c)(3),t=(0,q.useRef)(null),n,r;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(n=()=>{let e=t.current;if(!e||window.matchMedia(`(hover: none)`).matches)return;let n,r=t=>{cancelAnimationFrame(n),n=requestAnimationFrame(()=>{if(!e)return;let n=t.clientX,r=t.clientY;e.style.background=`radial-gradient(600px circle at ${n}px ${r}px, rgba(183, 216, 148, 0.045), transparent 65%)`})};return window.addEventListener(`mousemove`,r,{passive:!0}),()=>{window.removeEventListener(`mousemove`,r),cancelAnimationFrame(n)}},r=[],e[0]=n,e[1]=r):(n=e[0],r=e[1]),(0,q.useEffect)(n,r);let i;return e[2]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,Y.jsx)(ae,{ref:t,"aria-hidden":`true`}),e[2]=i):i=e[2],i}var se=ee`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.35);
    opacity: 0.6;
  }
`,ce=W.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e,$size:t})=>t===`sm`?`${e.spacing.xs} ${e.spacing.sm}`:`${e.spacing.xs} ${e.spacing.md}`};
  background-color: ${({theme:e})=>e.colors.accentMuted};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.full};
  color: ${({theme:e})=>e.colors.accentLime};
  font-size: ${({theme:e,$size:t})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
  text-transform: uppercase;
  max-width: 100%;
  transition: border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast};
  user-select: none;

  span:not(:first-child) {
    word-break: break-word;
  }

  ${({theme:e})=>e.media.mobile} {
    font-size: 11px;
    letter-spacing: 0.02em;
    padding: 4px 10px;
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    background-color: ${({theme:e})=>e.colors.accentGlow};
  }
`,le=W.span`
  position: relative;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.accentLime};
  box-shadow: 0 0 8px ${({theme:e})=>e.colors.accentLime};
  animation: ${se} 2s infinite ease-in-out;
`;function X(e){let t=(0,J.c)(7),{text:n,size:r,className:i}=e,a=n===void 0?`Available for Remote • Freelance • Hybrid`:n,o=r===void 0?`base`:r,s;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,Y.jsx)(le,{}),t[0]=s):s=t[0];let c;t[1]===a?c=t[2]:(c=(0,Y.jsx)(`span`,{children:a}),t[1]=a,t[2]=c);let l;return t[3]!==i||t[4]!==o||t[5]!==c?(l=(0,Y.jsxs)(ce,{$size:o,className:i,children:[s,c]}),t[3]=i,t[4]=o,t[5]=c,t[6]=l):l=t[6],l}var Z={name:`Muhamad Rayhan`,role:`Frontend Web Developer`,roles:[`Frontend Web Developer`,`React & TypeScript Specialist`,`Vue.js & State Architect`,`Interactive UI Engineer`],headline:`Crafting responsive, performant web applications with React, Vue, and TypeScript.`,bio:`Frontend developer specializing in modern component architectures, global state management, and responsive interfaces. Building real-world web applications with clean TypeScript code, TanStack Query, Pinia, and Tailwind CSS.`,availability:`Available for Remote • Freelance • Hybrid`,location:`Banten, Indonesia (GMT+7)`,email:`m.rayhanoi26@gmail.com`,resumeUrl:`/CV_Muhamad_Rayhan_ATS_EN.pdf`,avatar:`/images/profile/rayhan.avif`,illust:`/icons/ui/people.svg`,socials:[{name:`github`,label:`GitHub`,url:`https://github.com/RayhanDev9`,icon:`/icons/social/github.svg`},{name:`gmail`,label:`Email`,url:`mailto:m.rayhanoi26@gmail.com`,icon:`/icons/social/gmail-old.svg`},{name:`instagram`,label:`Instagram`,url:`https://www.instagram.com/rayyhan_09`,icon:`/icons/social/instagram.svg`},{name:`whatsapp`,label:`WhatsApp`,url:`https://wa.me/62895325603726`,icon:`/icons/social/whatsapp.svg`}]},Q=[{id:`uang-kas-kampus`,title:`Uang Kas Kampus (KasKita)`,category:`app`,role:`Fullstack Developer`,description:`Aplikasi manajemen kas kelas kampus komprehensif dengan sistem multi-semester, kalkulasi saldo kas bersih real-time, audit pengeluaran belanja kelas, riwayat log mutasi, dan impor/ekspor data Excel.`,skills:[`Vue 3`,`Tailwind CSS`,`TanStack Query`,`Node.js`,`Express.js`,`Composables`],url:`https://uang-kas-kampus.vercel.app/`,githubUrl:`https://github.com/RayhanDev9/uang-kas-kampus`,githubBackendUrl:`https://github.com/RayhanDev9/backend-uang-kas-kampus`,img:`/images/projects/uang-kas-kelas.avif`,alt:`Uang Kas Kampus KasKita Dashboard`,featured:!0},{id:`siap-kerja`,title:`Siap Kerja`,category:`app`,collab:`Collab with @EternalVultr`,collaborator:{name:`EternalVultr`,role:`Team Collaborator`,url:`https://github.com/EternalVultr`,platform:`github`},role:`Front-End`,description:`Career readiness platform built in a cross-functional team. Implemented responsive UI components, integrated AI career recommendation endpoints, and built interactive learning modules.`,skills:[`React`,`Redux Toolkit`,`Gemini AI`,`Framer Motion`,`Team Collab`],url:`https://rayhandev9.github.io/siap-kerja/#/landingPage`,githubUrl:`https://github.com/RayhanDev9/siap-kerja`,img:`/images/projects/siap-kerja.avif`,alt:`Siap Kerja Career Platform`,featured:!0},{id:`danu-satya`,title:`Danu Satya Portfolio`,category:`landing`,role:`Front-End`,collab:`Client: @dnustya_`,collaborator:{name:`Danu Satya`,role:`Graphic & Motion Designer`,url:`https://instagram.com/dnustya_`,platform:`instagram`},description:`Production portfolio website built for a Graphic & Motion Designer, featuring customized typography, responsive media layout, and dark aesthetic theme.`,skills:[`React 19`,`TypeScript`,`Tailwind CSS v4`,`Lucide Icons`,`Vite`],url:`https://danusatya.my.id/`,githubUrl:`https://github.com/RayhanDev9/portfolio-danu`,img:`/images/projects/portfolio-danu.avif`,alt:`Danu Satya Portfolio Website`,featured:!0},{id:`store-radeva`,title:`Store Radeva`,category:`landing`,role:`Front-End`,collab:`Toko Shopee: Radeva`,collaborator:{name:`Store Radeva`,role:`E-Commerce Store`,url:`https://shopee.co.id/Bedak-MBK-Powder-Sachetan-13-6-gram-Dan-Box-200-gram-bedak-deodoran-legendaris-Varian-Putih-i.1736388240.56660827193`,platform:`shopee`},description:`E-commerce product catalog landing page with interactive product showcases, filterable item cards, and smooth navigation.`,skills:[`CSS Grid & Flexbox`,`DOM Manipulation`,`Interactive UI`,`JavaScript`],url:`https://rayhandev9.github.io/radeva/`,githubUrl:`https://github.com/RayhanDev9/radeva`,img:`/images/projects/store-radeva.avif`,alt:`Store Radeva E-Commerce Catalog`},{id:`tk-paud-permata`,title:`TK PAUD Permata`,category:`landing`,role:`Front-End`,collab:`Client: Yayasan Rayfi TK Permata`,collaborator:{name:`Yayasan Rayfi TK Permata`,role:`Client`,url:`https://www.tiktok.com/@yayasanrayfitkpermata?_r=1`,platform:`tiktok`},description:`Official educational institution web profile with custom production domain, structured academic programs overview, and responsive mobile-first layout.`,skills:[`HTML5/CSS3`,`JavaScript`,`Responsive UI`,`Front-End Arch`,`SEO`],url:`https://permatabelajar.my.id/`,githubUrl:`https://github.com/RayhanDev9/TK`,img:`/images/projects/tk.avif`,alt:`TK PAUD Permata School Profile`},{id:`dapur-rasa`,title:`DapurRasa Food Store`,category:`app`,collab:`Mentor: Ahmad Hakim`,role:`Front-End`,description:`Culinary e-commerce application featuring instant menu search, dynamic category filtering, cart state management with Pinia, data caching via TanStack Vue Query, and client routing with Vue Router.`,skills:[`Vue 3`,`Pinia`,`TanStack Vue Query`,`Vue Router`,`Composables`],url:`https://rayhandev9.github.io/e-commerce-vue.js/menu`,githubUrl:`https://github.com/RayhanDev9/e-commerce-vue.js`,img:`/images/projects/dapur-rasa.avif`,alt:`DapurRasa Food Store UI Showcase`,featured:!0},{id:`fast-react-pizza`,title:`Fast React Pizza`,category:`app`,role:`Front-End`,description:`Interactive pizza ordering system with live cart management, Redux Toolkit state synchronization, client-side routing, and real-time order tracking.`,skills:[`React 18`,`Redux Toolkit`,`React Router`,`Tailwind CSS`,`Vite`],url:`https://rayhandev9.github.io/fast-pizza`,githubUrl:`https://github.com/RayhanDev9/fast-pizza`,img:`/images/projects/fast-pizza.avif`,alt:`Fast React Pizza ordering application`,featured:!0},{id:`mading-kampus`,title:`Mading Kampus`,category:`app`,collab:`Collab with @akumalas`,collaborator:{name:`akumalas`,role:`Backend Collaborator`,url:`https://github.com/akumalas`,platform:`github`},role:`Front-End`,description:`Digital campus magazine and announcement portal developed with backend and design collaborators. Implemented article submission flows and categorized bulletin boards.`,skills:[`Tailwind CSS`,`Semantic HTML`,`JavaScript`,`Team Collab`,`Responsive UI`],url:`https://rayhandev9.github.io/mading-kampus/`,githubUrl:`https://github.com/RayhanDev9/mading-kampus`,img:`/images/projects/mading-kampus.avif`,alt:`Mading Kampus Magazine Portal`},{id:`company-profile-isc`,title:`Company Profile ISC`,category:`landing`,role:`Front-End`,collab:`Collab with @ItzRyz`,collaborator:{name:`ItzRyz`,role:`ISC Collaborator`,url:`https://github.com/ItzRyz`,platform:`github`},description:`Community landing page for Informatics Study Club, highlighting organization divisions, tech event schedules, and contact channels.`,skills:[`Semantic HTML`,`Responsive Layout`,`CSS Transitions`,`Clean Architecture`],url:`https://rayhandev9.github.io/company-profile-isc/`,githubUrl:`https://github.com/RayhanDev9/company-profile-isc`,img:`/images/projects/isc.avif`,alt:`Company Profile ISC Community`},{id:`pig-game`,title:`Pig Game`,category:`interactive`,role:`Front-End`,description:`Turn-based two-player browser dice game featuring active score accumulation, round holding logic, and 100-point win condition evaluation.`,skills:[`JavaScript Logic`,`State Management`,`DOM Events`,`CSS Animations`],url:`https://pig-game-virid-delta.vercel.app/`,githubUrl:`https://github.com/RayhanDev9/pig-Game`,img:`/images/projects/game.avif`,alt:`Pig Game Turn-based Application`},{id:`first-portfolio`,title:`First Portfolio Milestone`,category:`landing`,role:`Front-End`,description:`First milestone personal website, marking the foundation in vanilla web standards, layout composition, and responsive styling.`,skills:[`HTML5`,`CSS3`,`Flexbox`,`Vanilla JavaScript`],url:`https://first-portfolio-hkyum9qh0-rayhans-projects-6dbf92f1.vercel.app/`,githubUrl:`https://github.com/RayhanDev9/First-portfolio`,img:`/images/projects/portfolio-frist.avif`,alt:`First Portfolio Milestone`}],ue=W(K.div)`
  position: fixed;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.overlay};
  backdrop-filter: ${({theme:e})=>e.effects.blurHeavy};
  -webkit-backdrop-filter: ${({theme:e})=>e.effects.blurHeavy};
  z-index: 999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 100px 16px 40px;

  ${({theme:e})=>e.media.mobile} {
    padding-top: 60px;
  }
`,de=W(K.div)`
  width: 100%;
  max-width: 620px;
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadows.card};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,fe=W.div`
  display: flex;
  align-items: center;
  padding: 14px 18px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  gap: 12px;
  color: ${({theme:e})=>e.colors.textMuted};
`,pe=W.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: ${({theme:e})=>e.colors.textHighlight};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.base};

  &::placeholder {
    color: ${({theme:e})=>e.colors.textMuted};
  }
`,$=W.kbd`
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: 2px 7px;
  font-size: 11px;
  color: ${({theme:e})=>e.colors.textMuted};
  font-family: monospace;
`,me=W.div`
  max-height: 380px;
  overflow-y: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.colors.borderSubtle};
    border-radius: 3px;
  }
`,he=W.div`
  font-size: 11px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: ${({theme:e})=>e.letterSpacings.wider};
  color: ${({theme:e})=>e.colors.accentLime};
  padding: 8px 12px 4px;
`,ge=W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: ${({theme:e})=>e.radii.sm};
  cursor: pointer;
  background-color: ${({theme:e,$selected:t})=>t?e.colors.accentMuted:`transparent`};
  border: 1px solid
    ${({theme:e,$selected:t})=>t?e.colors.border:`transparent`};
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.accentMuted};
    border-color: ${({theme:e})=>e.colors.border};
  }
`,_e=W.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({theme:e})=>e.colors.textHighlight};

  svg {
    color: ${({theme:e})=>e.colors.accentLime};
    flex-shrink: 0;
  }
`,ve=W.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ye=W.span`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.textHighlight};
`,be=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
`,xe=W.span`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.textMuted};
  font-family: monospace;
`,Se=W.div`
  padding: 32px 16px;
  text-align: center;
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: ${({theme:e})=>e.fontSizes.sm};
`,Ce=W.div`
  padding: 10px 18px;
  border-top: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  background-color: rgba(15, 20, 28, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: ${({theme:e})=>e.colors.textMuted};

  ${({theme:e})=>e.media.mobile} {
    display: none;
  }
`,we=W.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;function Te(e){let t=(0,J.c)(27),{isOpen:n,onClose:r}=e,o=z(),[l,d]=(0,q.useState)(``),[f,p]=(0,q.useState)(0),[m,g]=(0,q.useState)(!1),_=(0,q.useRef)(null),v,y;t[0]===n?(v=t[1],y=t[2]):(v=()=>{n&&(d(``),p(0),setTimeout(()=>_.current?.focus(),50))},y=[n],t[0]=n,t[1]=v,t[2]=y),(0,q.useEffect)(v,y);let x;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(x=async()=>{try{await navigator.clipboard.writeText(Z.email),g(!0),setTimeout(()=>g(!1),2e3)}catch{let e=document.createElement(`textarea`);e.value=Z.email,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),g(!0),setTimeout(()=>g(!1),2e3)}},t[3]=x):x=t[3];let w=x,E;t[4]!==o||t[5]!==r?(E=()=>{o(`/`),r()},t[4]=o,t[5]=r,t[6]=E):E=t[6];let D;if(t[7]!==m||t[8]!==o||t[9]!==r||t[10]!==l||t[11]!==E){let e=[{id:`nav-home`,group:`Navigasi Cepat`,title:`Halaman Beranda`,subtitle:`Kembali ke intro, proyek unggulan, dan keahlian`,icon:C,action:E,shortcut:`G H`},{id:`nav-projects`,group:`Navigasi Cepat`,title:`Katalog Semua Proyek`,subtitle:`Lihat seluruh 10 proyek aplikasi dan landing page`,icon:b,action:()=>{o(`/projects`),r()},shortcut:`G P`},{id:`nav-certificates`,group:`Navigasi Cepat`,title:`Katalog Semua Sertifikat`,subtitle:`Lihat 12 kredensial sertifikasi resmi & penghargaan`,icon:i,action:()=>{o(`/certificates`),r()},shortcut:`G C`},{id:`nav-contact`,group:`Navigasi Cepat`,title:`Hubungi Saya (Kontak)`,subtitle:`Buka formulir pesan dan channel komunikasi langsung`,icon:T,action:()=>{o(`/#contact`),r()},shortcut:`G K`}],n=Q.map(e=>({id:`project-${e.id}`,group:`Studi Kasus Proyek`,title:e.title,subtitle:`${e.category.toUpperCase()} • ${e.skills.slice(0,3).join(`, `)}`,icon:u,action:()=>{o(`/projects/${e.id}`),r()}})),a=[...Z.resumeUrl?[{id:`action-resume`,group:`Aksi Cepat`,title:`Unduh CV / Resume ATS (PDF)`,subtitle:`Buka salinan resume terbaru dalam format PDF`,icon:h,action:()=>{window.open(Z.resumeUrl,`_blank`),r()}}]:[],{id:`action-email`,group:`Aksi Cepat`,title:m?`Email Berhasil Disalin!`:`Salin Alamat Email`,subtitle:Z.email,icon:m?s:j,action:()=>{w()}},{id:`action-whatsapp`,group:`Aksi Cepat`,title:`Hubungi via WhatsApp`,subtitle:`Kirim pesan instan langsung ke WhatsApp`,icon:c,action:()=>{window.open(`https://wa.me/62895325603726`,`_blank`),r()}},{id:`action-github`,group:`Aksi Cepat`,title:`Buka Repositori GitHub`,subtitle:`github.com/RayhanDev9`,icon:c,action:()=>{window.open(`https://github.com/RayhanDev9`,`_blank`),r()}}],d=[...e,...n,...a],f=l.trim().toLowerCase();D=d.filter(e=>!f||e.title.toLowerCase().includes(f)||e.subtitle&&e.subtitle.toLowerCase().includes(f)||e.group.toLowerCase().includes(f)),t[7]=m,t[8]=o,t[9]=r,t[10]=l,t[11]=E,t[12]=D}else D=t[12];let O=D,k;t[13]!==O||t[14]!==r||t[15]!==f?(k=e=>{e.key===`ArrowDown`?(e.preventDefault(),p(e=>(e+1)%Math.max(1,O.length))):e.key===`ArrowUp`?(e.preventDefault(),p(e=>(e-1+O.length)%Math.max(1,O.length))):e.key===`Enter`?(e.preventDefault(),O[f]&&O[f].action()):e.key===`Escape`&&(e.preventDefault(),r())},t[13]=O,t[14]=r,t[15]=f,t[16]=k):k=t[16];let A=k,M;t[17]===Symbol.for(`react.memo_cache_sentinel`)?(M=[`Navigasi Cepat`,`Studi Kasus Proyek`,`Aksi Cepat`],t[17]=M):M=t[17];let N=M,P;t[18]!==O||t[19]!==A||t[20]!==n||t[21]!==r||t[22]!==l||t[23]!==f?(P=n&&(0,Y.jsx)(ue,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15},onClick:r,children:(0,Y.jsxs)(de,{initial:{opacity:0,scale:.96,y:-10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.96,y:-10},transition:{duration:.15},onClick:Ee,onKeyDown:A,children:[(0,Y.jsxs)(fe,{children:[(0,Y.jsx)(S,{size:18}),(0,Y.jsx)(pe,{ref:_,type:`text`,placeholder:`Ketik navigasi, nama proyek, atau aksi...`,value:l,onChange:e=>{d(e.target.value),p(0)},"aria-label":`Cari di Command Palette`}),(0,Y.jsx)($,{children:`ESC`})]}),(0,Y.jsx)(me,{role:`listbox`,children:O.length>0?N.map(e=>{let t=O.filter(t=>t.group===e);return t.length===0?null:(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(he,{children:e}),t.map(e=>{let t=O.indexOf(e),n=t===f,r=e.icon;return(0,Y.jsxs)(ge,{$selected:n,onClick:()=>e.action(),onMouseEnter:()=>p(t),role:`option`,"aria-selected":n,children:[(0,Y.jsxs)(_e,{children:[(0,Y.jsx)(r,{size:16}),(0,Y.jsxs)(ve,{children:[(0,Y.jsx)(ye,{children:e.title}),e.subtitle&&(0,Y.jsx)(be,{children:e.subtitle})]})]}),e.shortcut?(0,Y.jsx)(xe,{children:e.shortcut}):(0,Y.jsx)(a,{size:13,style:{opacity:n?1:.4}})]},e.id)})]},e)}):(0,Y.jsxs)(Se,{children:[`Tidak ada hasil yang cocok dengan “`,l,`”`]})}),(0,Y.jsxs)(Ce,{children:[(0,Y.jsxs)(we,{children:[(0,Y.jsxs)(`span`,{children:[(0,Y.jsx)($,{children:`↑`}),` `,(0,Y.jsx)($,{children:`↓`}),` Navigasi`]}),(0,Y.jsxs)(`span`,{children:[(0,Y.jsx)($,{children:`↵`}),` Pilih`]}),(0,Y.jsxs)(`span`,{children:[(0,Y.jsx)($,{children:`esc`}),` Tutup`]})]}),(0,Y.jsx)(`span`,{children:`Command Palette v4`})]})]})}),t[18]=O,t[19]=A,t[20]=n,t[21]=r,t[22]=l,t[23]=f,t[24]=P):P=t[24];let F;return t[25]===P?F=t[26]:(F=(0,Y.jsx)(G,{children:P}),t[25]=P,t[26]=F),F}function Ee(e){return e.stopPropagation()}var De=W(K.div)`
  position: fixed;
  inset: 0;
  top: 60px;
  background-color: ${({theme:e})=>e.colors.overlay};
  backdrop-filter: ${({theme:e})=>e.effects.blurHeavy};
  -webkit-backdrop-filter: ${({theme:e})=>e.effects.blurHeavy};
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: ${({theme:e})=>`${e.spacing[`2xl`]} ${e.spacing.lg}`};
  border-top: 1px solid ${({theme:e})=>e.colors.border};

  ${({theme:e})=>e.media.desktop} {
    display: none;
  }
`,Oe=W.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing[`2xl`]};
`,ke=W.a`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e,$active:t})=>t?e.colors.accentLime:e.colors.textMuted};
  text-decoration: none;
  transition: color ${({theme:e})=>e.transitions.fast},
    transform ${({theme:e})=>e.transitions.fast};
  display: inline-block;

  &:hover {
    color: ${({theme:e})=>e.colors.accentLime};
    transform: translateX(4px);
  }
`,Ae=W.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({theme:e})=>e.colors.glass};
  color: ${({theme:e})=>e.colors.textHighlight};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: 12px 20px;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  cursor: pointer;
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    color: ${({theme:e})=>e.colors.accentLime};
  }
`,je=W.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({theme:e})=>e.colors.accentMuted};
  color: ${({theme:e})=>e.colors.accentLime};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: 12px 20px;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  text-decoration: none;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.accentLime};
    color: ${({theme:e})=>e.colors.textInverse};
  }
`,Me=W.div`
  margin-top: auto;
  padding-top: ${({theme:e})=>e.spacing.xl};
  border-top: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`;function Ne(e){let t=(0,J.c)(13),{isOpen:n,onClose:r,items:i,isHome:a,activeSection:o,onOpenPalette:s}=e,c=a===void 0||a,l=o===void 0?`hero`:o,u=L(),d;t[0]!==l||t[1]!==c||t[2]!==u?(d=e=>{let t=e.replace(`#`,``);return c?l===t:!!(u.pathname.startsWith(`/projects`)&&t===`projects`||u.pathname.startsWith(`/certificates`)&&t===`certificates`)},t[0]=l,t[1]=c,t[2]=u,t[3]=d):d=t[3];let f=d,p;t[4]!==f||t[5]!==c||t[6]!==n||t[7]!==i||t[8]!==r||t[9]!==s?(p=n&&(0,Y.jsxs)(De,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2,ease:[.4,0,.2,1]},children:[(0,Y.jsx)(Oe,{children:i.map((e,t)=>(0,Y.jsx)(K.li,{initial:{opacity:0,x:-12},animate:{opacity:1,x:0},transition:{delay:t*.05,duration:.2},children:c?(0,Y.jsx)(ke,{href:e.href,onClick:r,$active:f(e.href),children:e.label}):(0,Y.jsx)(ke,{as:B,to:`/${e.href}`,onClick:r,$active:f(e.href),children:e.label})},e.href))}),(0,Y.jsxs)(Me,{children:[s&&(0,Y.jsxs)(Ae,{type:`button`,onClick:()=>{r(),s()},children:[(0,Y.jsx)(S,{size:16}),(0,Y.jsx)(`span`,{children:`Menu Cepat (Command Palette ⌘K)`})]}),Z.resumeUrl&&(0,Y.jsxs)(je,{href:Z.resumeUrl,target:`_blank`,rel:`noopener noreferrer`,download:`CV_Muhamad_Rayhan_ATS_EN.pdf`,onClick:r,children:[(0,Y.jsx)(h,{size:16}),(0,Y.jsx)(`span`,{children:`Unduh CV / Resume`})]}),(0,Y.jsx)(X,{})]})]}),t[4]=f,t[5]=c,t[6]=n,t[7]=i,t[8]=r,t[9]=s,t[10]=p):p=t[10];let m;return t[11]===p?m=t[12]:(m=(0,Y.jsx)(G,{children:p}),t[11]=p,t[12]=m),m}var Pe=W.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  z-index: 100;
  background-color: ${({theme:e,$scrolled:t})=>t?e.colors.glassElevated:e.colors.glass};
  backdrop-filter: ${({theme:e})=>e.effects.blur};
  -webkit-backdrop-filter: ${({theme:e})=>e.effects.blur};
  border-bottom: 1px solid
    ${({theme:e,$scrolled:t})=>t?e.colors.border:e.colors.borderGlass};
  box-shadow: ${({theme:e,$scrolled:t})=>t?e.shadows.subtle:`none`};
  transition: padding ${({theme:e})=>e.transitions.normal},
    background-color ${({theme:e})=>e.transitions.normal},
    border-color ${({theme:e})=>e.transitions.normal},
    box-shadow ${({theme:e})=>e.transitions.normal};
  padding: ${({theme:e,$scrolled:t})=>t?`${e.spacing.sm} ${e.spacing.lg}`:`${e.spacing.md} ${e.spacing.lg}`};

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e,$scrolled:t})=>t?`${e.spacing.xs} ${e.spacing.md}`:`${e.spacing.sm} ${e.spacing.md}`};
  }
`,Fe=W.div`
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ie=W.a`
  display: inline-flex;
  align-items: baseline;
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.textHighlight};
  text-decoration: none;
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
  transition: opacity ${({theme:e})=>e.transitions.fast};

  &:hover {
    opacity: 0.9;
  }

  span {
    color: ${({theme:e})=>e.colors.accentLime};
    margin-left: 2px;
  }
`,Le=W.nav`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};

  ${({theme:e})=>e.media.desktop} {
    display: flex;
  }
`,Re=W.a`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e,$active:t})=>t?e.colors.accentLime:e.colors.textMuted};
  text-decoration: none;
  position: relative;
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.xs}`};
  transition: color ${({theme:e})=>e.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${({$active:e})=>e?`100%`:`0`};
    height: 1.5px;
    background-color: ${({theme:e})=>e.colors.accentLime};
    box-shadow: ${({$active:e,theme:t})=>e?t.shadows.glow:`none`};
    transition: width ${({theme:e})=>e.transitions.fast};
  }

  &:hover {
    color: ${({theme:e})=>e.colors.textHighlight};

    &::after {
      width: 100%;
    }
  }
`,ze=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,Be=W.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  border-radius: ${({theme:e})=>e.radii.full};
  padding: 5px 10px;
  color: ${({theme:e})=>e.colors.textMuted};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.accentLime};
    border-color: ${({theme:e})=>e.colors.borderHover};
    background-color: ${({theme:e})=>e.colors.accentMuted};
  }
`,Ve=W.span`
  font-family: monospace;
  font-size: 10px;
  padding: 1px 5px;
  border-radius: ${({theme:e})=>e.radii.sm};
  background-color: ${({theme:e})=>e.colors.darkBase};
  border: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  color: ${({theme:e})=>e.colors.textMuted};

  ${({theme:e})=>e.media.mobile} {
    display: none;
  }
`,He=W.a`
  display: none;
  align-items: center;
  gap: 6px;
  background-color: transparent;
  color: ${({theme:e})=>e.colors.accentLime};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.full};
  padding: 5px 14px;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.accentMuted};
    border-color: ${({theme:e})=>e.colors.accentLime};
    color: ${({theme:e})=>e.colors.textHighlight};
  }

  ${({theme:e})=>e.media.desktop} {
    display: inline-flex;
  }
`,Ue=W.div`
  display: none;

  ${({theme:e})=>e.media.desktop} {
    display: block;
  }
`,We=W.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.sm};
  color: ${({theme:e})=>e.colors.textHighlight};
  padding: ${({theme:e})=>e.spacing.xs};
  cursor: pointer;
  transition: background-color ${({theme:e})=>e.transitions.fast},
    border-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.glassHover};
    border-color: ${({theme:e})=>e.colors.borderHover};
  }

  ${({theme:e})=>e.media.desktop} {
    display: none;
  }
`,Ge=[{label:`Home`,href:`#hero`},{label:`Projects`,href:`#projects`},{label:`Skills`,href:`#skills`},{label:`Certificates`,href:`#certificates`},{label:`Contact`,href:`#contact`}];function Ke(){let e=(0,J.c)(49),[t,n]=(0,q.useState)(!1),[r,i]=(0,q.useState)(!1),[a,o]=(0,q.useState)(!1),[s,c]=(0,q.useState)(`hero`),l=L(),u=l.pathname===`/`,f,p;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(f=()=>{let e=()=>{n(window.scrollY>20)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},p=[],e[0]=f,e[1]=p):(f=e[0],p=e[1]),(0,q.useEffect)(f,p);let m,g;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(m=()=>{let e=e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`k`&&(e.preventDefault(),o(Je))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},g=[],e[2]=m,e[3]=g):(m=e[2],g=e[3]),(0,q.useEffect)(m,g);let _,v;e[4]===u?(_=e[5],v=e[6]):(_=()=>{if(!u)return;let e=[`hero`,`projects`,`skills`,`certificates`,`contact`],t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&c(e.target.id)})},{root:null,rootMargin:`-20% 0px -60% 0px`,threshold:0});return e.forEach(e=>{let n=document.getElementById(e);n&&t.observe(n)}),()=>t.disconnect()},v=[u],e[4]=u,e[5]=_,e[6]=v),(0,q.useEffect)(_,v);let y;e[7]!==s||e[8]!==u||e[9]!==l.pathname?(y=e=>{let t=e.replace(`#`,``);return u?s===t:!!(l.pathname.startsWith(`/projects`)&&t===`projects`||l.pathname.startsWith(`/certificates`)&&t===`certificates`)},e[7]=s,e[8]=u,e[9]=l.pathname,e[10]=y):y=e[10];let b=y,C;e[11]===u?C=e[12]:(C=u?(0,Y.jsxs)(Ie,{href:`#hero`,children:[`Rayhan`,(0,Y.jsx)(`span`,{children:`.`})]}):(0,Y.jsxs)(Ie,{as:B,to:`/`,children:[`Rayhan`,(0,Y.jsx)(`span`,{children:`.`})]}),e[11]=u,e[12]=C);let w;e[13]!==b||e[14]!==u?(w=Ge.map(e=>u?(0,Y.jsx)(Re,{href:e.href,$active:b(e.href),children:e.label},e.href):(0,Y.jsx)(Re,{as:B,to:`/${e.href}`,$active:b(e.href),children:e.label},e.href)),e[13]=b,e[14]=u,e[15]=w):w=e[15];let T;e[16]===w?T=e[17]:(T=(0,Y.jsx)(Le,{children:w}),e[16]=w,e[17]=T);let E;e[18]===Symbol.for(`react.memo_cache_sentinel`)?(E=()=>o(!0),e[18]=E):E=e[18];let D,O;e[19]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,Y.jsxs)(Be,{type:`button`,onClick:E,"aria-label":`Buka Command Palette (Ctrl + K)`,title:`Command Palette (Ctrl + K)`,children:[(0,Y.jsx)(S,{size:14}),(0,Y.jsx)(Ve,{children:`⌘K`})]}),O=Z.resumeUrl&&(0,Y.jsxs)(He,{href:Z.resumeUrl,target:`_blank`,rel:`noopener noreferrer`,download:`CV_Muhamad_Rayhan_ATS_EN.pdf`,title:`Unduh CV Muhamad Rayhan`,children:[(0,Y.jsx)(h,{size:14}),(0,Y.jsx)(`span`,{children:`Resume`})]}),e[19]=D,e[20]=O):(D=e[19],O=e[20]);let k;e[21]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,Y.jsx)(Ue,{children:(0,Y.jsx)(X,{text:`Open to Work`,size:`sm`})}),e[21]=k):k=e[21];let A;e[22]===Symbol.for(`react.memo_cache_sentinel`)?(A=()=>i(qe),e[22]=A):A=e[22];let j=r?`Close navigation menu`:`Open navigation menu`,M;e[23]===r?M=e[24]:(M=r?(0,Y.jsx)(x,{size:20}):(0,Y.jsx)(d,{size:20}),e[23]=r,e[24]=M);let N;e[25]!==r||e[26]!==j||e[27]!==M?(N=(0,Y.jsxs)(ze,{children:[D,O,k,(0,Y.jsx)(We,{onClick:A,"aria-label":j,"aria-expanded":r,children:M})]}),e[25]=r,e[26]=j,e[27]=M,e[28]=N):N=e[28];let P;e[29]!==N||e[30]!==C||e[31]!==T?(P=(0,Y.jsxs)(Fe,{children:[C,T,N]}),e[29]=N,e[30]=C,e[31]=T,e[32]=P):P=e[32];let F;e[33]!==t||e[34]!==P?(F=(0,Y.jsx)(Pe,{$scrolled:t,children:P}),e[33]=t,e[34]=P,e[35]=F):F=e[35];let I;e[36]===Symbol.for(`react.memo_cache_sentinel`)?(I=()=>i(!1),e[36]=I):I=e[36];let R;e[37]===Symbol.for(`react.memo_cache_sentinel`)?(R=()=>o(!0),e[37]=R):R=e[37];let z;e[38]!==s||e[39]!==u||e[40]!==r?(z=(0,Y.jsx)(Ne,{isOpen:r,onClose:I,items:Ge,isHome:u,activeSection:s,onOpenPalette:R}),e[38]=s,e[39]=u,e[40]=r,e[41]=z):z=e[41];let V;e[42]===Symbol.for(`react.memo_cache_sentinel`)?(V=()=>o(!1),e[42]=V):V=e[42];let H;e[43]===a?H=e[44]:(H=(0,Y.jsx)(Te,{isOpen:a,onClose:V}),e[43]=a,e[44]=H);let U;return e[45]!==F||e[46]!==z||e[47]!==H?(U=(0,Y.jsxs)(Y.Fragment,{children:[F,z,H]}),e[45]=F,e[46]=z,e[47]=H,e[48]=U):U=e[48],U}function qe(e){return!e}function Je(e){return!e}var Ye=W.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>`${e.spacing[`4xl`]} ${e.spacing.lg}`};
  padding-top: 120px;
  background-color: ${({theme:e})=>e.colors.darkBase};
  overflow: hidden;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  ${({theme:e})=>e.media.mobile} {
    padding-top: 100px;
    padding-bottom: ${({theme:e})=>e.spacing[`2xl`]};
    padding-left: ${({theme:e})=>e.spacing.md};
    padding-right: ${({theme:e})=>e.spacing.md};
  }
`,Xe=W.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: ${({theme:e})=>e.spacing[`3xl`]};
  align-items: center;

  ${({theme:e})=>e.media.tablet} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({theme:e})=>e.spacing[`2xl`]};
    max-width: 100%;
  }
`,Ze=W.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({theme:e})=>e.media.tablet} {
    align-items: center;
    text-align: center;
  }
`,Qe=W.h1`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes[`5xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.textHighlight};
  line-height: ${({theme:e})=>e.lineHeights.tight};
  letter-spacing: ${({theme:e})=>e.letterSpacings.tight};
  margin-top: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xs};

  span {
    color: ${({theme:e})=>e.colors.accentLime};
  }

  ${({theme:e})=>e.media.tablet} {
    font-size: ${({theme:e})=>e.fontSizes[`4xl`]};
  }

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes[`3xl`]};
  }
`,$e=W.div`
  position: relative;
  height: 40px;
  overflow: hidden;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 100%;

  ${({theme:e})=>e.media.tablet} {
    justify-content: center;
  }

  ${({theme:e})=>e.media.mobile} {
    height: 34px;
    max-width: 100%;
  }
`,et=W(K.h2)`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.accentLime};
  letter-spacing: ${({theme:e})=>e.letterSpacings.wider};
  margin: 0;
  line-height: 1.2;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  ${({theme:e})=>e.media.mobile} {
    font-size: clamp(1rem, 4.5vw, 1.25rem);
    letter-spacing: 0.02em;
    max-width: 100%;
  }
`,tt=W.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: ${({theme:e})=>e.lineHeights.relaxed};
  max-width: 520px;
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes.base};
  }
`,nt=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  flex-wrap: wrap;

  ${({theme:e})=>e.media.tablet} {
    justify-content: center;
  }
`,rt=W.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  background-color: ${({theme:e})=>e.colors.accentLime};
  color: ${({theme:e})=>e.colors.textInverse};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  padding: 12px 28px;
  border-radius: ${({theme:e})=>e.radii.sm};
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform ${({theme:e})=>e.transitions.fast},
    filter ${({theme:e})=>e.transitions.fast},
    box-shadow ${({theme:e})=>e.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }

  &:active {
    transform: translateY(0);
  }
`,it=W.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  padding: 12px 28px;
  border-radius: ${({theme:e})=>e.radii.sm};
  border: 1px solid ${({theme:e})=>e.colors.border};
  text-decoration: none;
  cursor: pointer;
  transition: border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    background-color: ${({theme:e})=>e.colors.accentMuted};
    color: ${({theme:e})=>e.colors.textHighlight};
  }
`,at=W.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  background-color: ${({theme:e})=>e.colors.glass};
  color: ${({theme:e})=>e.colors.textHighlight};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  padding: 12px 24px;
  border-radius: ${({theme:e})=>e.radii.sm};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  text-decoration: none;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    background-color: ${({theme:e})=>e.colors.accentMuted};
    color: ${({theme:e})=>e.colors.accentLime};
    transform: translateY(-2px);
  }
`,ot=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};

  ${({theme:e})=>e.media.tablet} {
    justify-content: center;
  }
`,st=W.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.radii.sm};
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  color: ${({theme:e})=>e.colors.textMuted};
  transition: background-color ${({theme:e})=>e.transitions.fast},
    border-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast},
    transform ${({theme:e})=>e.transitions.fast};

  img {
    width: 20px;
    height: 20px;
    opacity: 0.85;
    transition: opacity ${({theme:e})=>e.transitions.fast};
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.glassHover};
    border-color: ${({theme:e})=>e.colors.borderHover};
    color: ${({theme:e})=>e.colors.accentLime};
    transform: translateY(-2px);

    img {
      opacity: 1;
    }
  }
`,ct=W.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${({theme:e})=>e.media.tablet} {
    order: -1;
  }
`,lt=W.div`
  position: relative;
  max-width: 340px;
  width: 100%;
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.sm} ${e.spacing.lg} ${e.spacing.sm}`};
  box-shadow: ${({theme:e})=>e.shadows.card};
  transform: rotate(2deg);
  transition: transform ${({theme:e})=>e.transitions.normal},
    border-color ${({theme:e})=>e.transitions.normal},
    box-shadow ${({theme:e})=>e.transitions.normal};

  &:hover {
    transform: rotate(0deg) scale(1.02);
    border-color: ${({theme:e})=>e.colors.borderHover};
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }

  ${({theme:e})=>e.media.mobile} {
    max-width: min(280px, 85vw);
    transform: rotate(0deg);
  }
`,ut=W.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: ${({theme:e})=>e.radii.xs};
  display: block;
`,dt=W.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.xs};
  margin-top: ${({theme:e})=>e.spacing.md};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textMuted};

  img {
    width: 14px;
    height: 14px;
    opacity: 0.8;
  }
`,ft=[.4,0,.2,1],pt=Z.roles||[Z.role];function mt(e){let t=(0,J.c)(14),{roles:n}=e,[r,i]=(0,q.useState)(0),a;t[0]===n.length?a=t[1]:(a=()=>{if(n.length<=1)return;let e=setInterval(()=>{i(e=>(e+1)%n.length)},2800);return()=>clearInterval(e)},t[0]=n.length,t[1]=a);let o;t[2]===n?o=t[3]:(o=[n],t[2]=n,t[3]=o),(0,q.useEffect)(a,o);let s=`Peran: ${n[r]}`,c,l,u;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(c={y:20,opacity:0,filter:`blur(3px)`},l={y:0,opacity:1,filter:`blur(0px)`},u={y:-20,opacity:0,filter:`blur(3px)`},t[4]=c,t[5]=l,t[6]=u):(c=t[4],l=t[5],u=t[6]);let d;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(d={duration:.35,ease:[.16,1,.3,1]},t[7]=d):d=t[7];let f=n[r],p;t[8]!==r||t[9]!==f?(p=(0,Y.jsx)(G,{mode:`wait`,children:(0,Y.jsx)(et,{initial:c,animate:l,exit:u,transition:d,children:f},r)}),t[8]=r,t[9]=f,t[10]=p):p=t[10];let m;return t[11]!==s||t[12]!==p?(m=(0,Y.jsx)($e,{"aria-label":s,children:p}),t[11]=s,t[12]=p,t[13]=m):m=t[13],m}function ht(){let e=(0,J.c)(22),n;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,Y.jsx)(K.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4,ease:ft},children:(0,Y.jsx)(X,{text:Z.availability})}),e[0]=n):n=e[0];let r,i,a;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(r={opacity:0,y:15},i={opacity:1,y:0},a={duration:.4,delay:.1,ease:ft},e[1]=r,e[2]=i,e[3]=a):(r=e[1],i=e[2],a=e[3]);let o;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,Y.jsx)(K.div,{initial:r,animate:i,transition:a,children:(0,Y.jsxs)(Qe,{children:[Z.name,(0,Y.jsx)(`span`,{children:`.`})]})}),e[4]=o):o=e[4];let s;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,Y.jsx)(K.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4,delay:.2,ease:ft},children:(0,Y.jsx)(mt,{roles:pt})}),e[5]=s):s=e[5];let c;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,Y.jsx)(K.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4,delay:.3,ease:ft},children:(0,Y.jsx)(tt,{children:Z.headline})}),e[6]=c):c=e[6];let l,u,d;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(l={opacity:0,y:15},u={opacity:1,y:0},d={duration:.4,delay:.4,ease:ft},e[7]=l,e[8]=u,e[9]=d):(l=e[7],u=e[8],d=e[9]);let f;e[10]===Symbol.for(`react.memo_cache_sentinel`)?(f=(0,Y.jsxs)(rt,{href:`#projects`,children:[(0,Y.jsx)(`span`,{children:`Lihat Proyek`}),(0,Y.jsx)(t,{size:16})]}),e[10]=f):f=e[10];let p;e[11]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,Y.jsx)(K.div,{initial:l,animate:u,transition:d,children:(0,Y.jsxs)(nt,{children:[f,(0,Y.jsxs)(it,{href:`#contact`,children:[(0,Y.jsx)(`span`,{children:`Hubungi`}),(0,Y.jsx)(D,{size:16})]}),Z.resumeUrl&&(0,Y.jsxs)(at,{href:Z.resumeUrl,target:`_blank`,rel:`noopener noreferrer`,download:`CV_Muhamad_Rayhan_ATS_EN.pdf`,title:`Unduh CV Muhamad Rayhan`,children:[(0,Y.jsx)(h,{size:16}),(0,Y.jsx)(`span`,{children:`Unduh CV`})]})]})}),e[11]=p):p=e[11];let m,g,_;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(m={opacity:0,y:15},g={opacity:1,y:0},_={duration:.4,delay:.5,ease:ft},e[12]=m,e[13]=g,e[14]=_):(m=e[12],g=e[13],_=e[14]);let v;e[15]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,Y.jsxs)(Ze,{children:[n,o,s,c,p,(0,Y.jsx)(K.div,{initial:m,animate:g,transition:_,children:(0,Y.jsx)(ot,{children:Z.socials.map(gt)})})]}),e[15]=v):v=e[15];let y,b,x,S;e[16]===Symbol.for(`react.memo_cache_sentinel`)?(y={opacity:0,scale:.94},b={opacity:1,scale:1},x={duration:.5,delay:.2,ease:ft},S={width:`100%`,display:`flex`,justifyContent:`center`},e[16]=y,e[17]=b,e[18]=x,e[19]=S):(y=e[16],b=e[17],x=e[18],S=e[19]);let C;e[20]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,Y.jsx)(ut,{src:Z.avatar,alt:Z.name,loading:`eager`}),e[20]=C):C=e[20];let w;return e[21]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,Y.jsx)(Ye,{id:`hero`,children:(0,Y.jsxs)(Xe,{children:[v,(0,Y.jsx)(ct,{children:(0,Y.jsx)(K.div,{initial:y,animate:b,transition:x,style:S,children:(0,Y.jsxs)(lt,{children:[C,(0,Y.jsxs)(dt,{children:[(0,Y.jsx)(`img`,{src:`/icons/ui/location.svg`,alt:`Lokasi`}),(0,Y.jsx)(`span`,{children:Z.location})]})]})})})]})}),e[21]=w):w=e[21],w}function gt(e){return(0,Y.jsx)(st,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,"aria-label":e.label,title:e.label,children:(0,Y.jsx)(`img`,{src:e.icon,alt:e.label})},e.name)}var _t=W.section`
  position: relative;
  padding: ${({theme:e})=>`${e.spacing[`4xl`]} ${e.spacing.lg}`};
  background-color: ${({theme:e})=>e.colors.darkBase};

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>`${e.spacing[`2xl`]} ${e.spacing.md}`};
  }
`,vt=W.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`,yt=W.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,bt=W.h2`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes[`4xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.textHighlight};
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
  margin-bottom: ${({theme:e})=>e.spacing.xs};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes[`3xl`]};
  }
`,xt=W.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.textMuted};
  max-width: 520px;
  line-height: ${({theme:e})=>e.lineHeights.relaxed};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes.base};
  }
`,St=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({theme:e})=>e.spacing[`2xl`]};
`,Ct=W.button`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  padding: 6px 18px;
  border-radius: ${({theme:e})=>e.radii.full};
  cursor: pointer;
  background-color: ${({theme:e,$active:t})=>t?e.colors.accentMuted:`transparent`};
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.border:e.colors.borderSubtle};
  color: ${({theme:e,$active:t})=>t?e.colors.accentLime:e.colors.textMuted};
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    color: ${({theme:e,$active:t})=>t?e.colors.accentLime:e.colors.textSecondary};
  }
`,wt=W.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};

  ${({theme:e})=>e.media.tablet} {
    grid-template-columns: minmax(0, 1fr);
  }
`,Tt=W.article`
  min-width: 0;
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color ${({theme:e})=>e.transitions.fast},
    transform ${({theme:e})=>e.transitions.fast},
    box-shadow ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    transform: translateY(-4px);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`,Et=W.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  position: relative;
  background-color: ${({theme:e})=>e.colors.darkBase};
`,Dt=W.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({theme:e})=>e.transitions.normal};

  ${Tt}:hover & {
    transform: scale(1.04);
  }
`,Ot=W.div`
  padding: ${({theme:e})=>e.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>e.spacing.md};
  }
`,kt=W.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.textHighlight};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,At=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
`,jt=W.a`
  color: ${({theme:e})=>e.colors.textHighlight};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  transition: color ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.accentLime};
    text-decoration: underline;
  }
`,Mt=W.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: ${({theme:e})=>e.lineHeights.relaxed};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Nt=W.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 6px;
  margin-top: auto;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Pt=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  padding: 3px 10px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.accentMuted};
  color: ${({theme:e})=>e.colors.accentLime};
  border: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  line-height: 1.3;
  height: fit-content;
  align-self: flex-start;
`,Ft=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  padding: 3px 8px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.glass};
  color: ${({theme:e})=>e.colors.textMuted};
  border: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  display: inline-flex;
  align-items: center;
  line-height: 1.3;
  height: fit-content;
  align-self: flex-start;
`,It=W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.xs};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  flex-wrap: wrap;
`,Lt=W.div`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`,Rt=W.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.textMuted};
  text-decoration: none;
  transition: color ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.textHighlight};
  }
`,zt=W.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.accentLime};
  text-decoration: none;
  transition: opacity ${({theme:e})=>e.transitions.fast};

  &:hover {
    opacity: 0.85;
  }
`,Bt=W.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.textMuted};
  text-decoration: none;
  transition: color ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.textHighlight};
  }
`,Vt=W.div`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing[`2xl`]};
`,Ht=W.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  padding: 12px 28px;
  border-radius: ${({theme:e})=>e.radii.sm};
  border: 1px solid ${({theme:e})=>e.colors.border};
  text-decoration: none;
  cursor: pointer;
  transition: border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    background-color: ${({theme:e})=>e.colors.accentMuted};
    color: ${({theme:e})=>e.colors.textHighlight};
  }
`,Ut=[.4,0,.2,1];function Wt(e){let t=(0,J.c)(90),{project:n,index:r}=e,i,o,s,l,d,f,p,m,h,g,_,v,y,b,x;if(t[0]!==r||t[1]!==n.alt||t[2]!==n.collab||t[3]!==n.collaborator||t[4]!==n.description||t[5]!==n.img||t[6]!==n.role||t[7]!==n.skills||t[8]!==n.title){let e=n.skills.slice(0,4);d=n.skills.length-4;let a=n.collab?`${n.collab} • ${n.role||`Front-End`}`:n.role;l=K.div,t[24]===Symbol.for(`react.memo_cache_sentinel`)?(v={opacity:0,y:20},y={opacity:1,y:0},b={once:!0,margin:`-50px`},t[24]=v,t[25]=y,t[26]=b):(v=t[24],y=t[25],b=t[26]);let u=r*.1;t[27]===u?x=t[28]:(x={duration:.4,delay:u,ease:Ut},t[27]=u,t[28]=x),t[29]===Symbol.for(`react.memo_cache_sentinel`)?(p={display:`flex`,flexDirection:`column`},t[29]=p):p=t[29],s=Tt;let S=n.alt||n.title;t[30]!==n.img||t[31]!==S?(_=(0,Y.jsx)(Et,{children:(0,Y.jsx)(Dt,{src:n.img,alt:S,loading:`lazy`})}),t[30]=n.img,t[31]=S,t[32]=_):_=t[32],o=Ot,t[33]===n.title?m=t[34]:(m=(0,Y.jsx)(kt,{children:n.title}),t[33]=n.title,t[34]=m),t[35]!==a||t[36]!==n.collaborator||t[37]!==n.role?(h=n.collaborator?(0,Y.jsxs)(At,{children:[(0,Y.jsxs)(`span`,{children:[n.role||`Front-End`,` • `]}),(0,Y.jsxs)(jt,{href:n.collaborator.url,target:`_blank`,rel:`noopener noreferrer`,title:`${n.collaborator.role?n.collaborator.role+` - `:``}${n.collaborator.name}`,onClick:Kt,children:[(0,Y.jsx)(`span`,{children:n.collaborator.name}),(0,Y.jsx)(c,{size:10,style:{opacity:.7}})]})]}):a?(0,Y.jsx)(At,{children:a}):null,t[35]=a,t[36]=n.collaborator,t[37]=n.role,t[38]=h):h=t[38],t[39]===n.description?g=t[40]:(g=(0,Y.jsx)(Mt,{children:n.description}),t[39]=n.description,t[40]=g),i=Nt,f=e.map(Gt),t[0]=r,t[1]=n.alt,t[2]=n.collab,t[3]=n.collaborator,t[4]=n.description,t[5]=n.img,t[6]=n.role,t[7]=n.skills,t[8]=n.title,t[9]=i,t[10]=o,t[11]=s,t[12]=l,t[13]=d,t[14]=f,t[15]=p,t[16]=m,t[17]=h,t[18]=g,t[19]=_,t[20]=v,t[21]=y,t[22]=b,t[23]=x}else i=t[9],o=t[10],s=t[11],l=t[12],d=t[13],f=t[14],p=t[15],m=t[16],h=t[17],g=t[18],_=t[19],v=t[20],y=t[21],b=t[22],x=t[23];let S;t[41]===d?S=t[42]:(S=d>0&&(0,Y.jsxs)(Ft,{children:[`+`,d]}),t[41]=d,t[42]=S);let C;t[43]!==i||t[44]!==f||t[45]!==S?(C=(0,Y.jsxs)(i,{children:[f,S]}),t[43]=i,t[44]=f,t[45]=S,t[46]=C):C=t[46];let w=`Buka demo live ${n.title}`,T,E;t[47]===Symbol.for(`react.memo_cache_sentinel`)?(T=(0,Y.jsx)(`span`,{children:`Live Demo`}),E=(0,Y.jsx)(c,{size:14}),t[47]=T,t[48]=E):(T=t[47],E=t[48]);let D;t[49]!==n.url||t[50]!==w?(D=(0,Y.jsxs)(zt,{href:n.url,target:`_blank`,rel:`noopener noreferrer`,"aria-label":w,children:[T,E]}),t[49]=n.url,t[50]=w,t[51]=D):D=t[51];let O;t[52]!==n.githubBackendUrl||t[53]!==n.githubUrl||t[54]!==n.title?(O=n.githubUrl&&(0,Y.jsxs)(Rt,{href:n.githubUrl,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Buka repositori GitHub frontend ${n.title}`,title:n.githubBackendUrl?`Frontend Repository`:`Source Code`,children:[(0,Y.jsx)(u,{size:14}),(0,Y.jsx)(`span`,{children:n.githubBackendUrl?`FE Repo`:`Repo`})]}),t[52]=n.githubBackendUrl,t[53]=n.githubUrl,t[54]=n.title,t[55]=O):O=t[55];let k;t[56]!==n.githubBackendUrl||t[57]!==n.title?(k=n.githubBackendUrl&&(0,Y.jsxs)(Rt,{href:n.githubBackendUrl,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Buka repositori GitHub backend ${n.title}`,title:`Backend Repository`,children:[(0,Y.jsx)(u,{size:14}),(0,Y.jsx)(`span`,{children:`BE Repo`})]}),t[56]=n.githubBackendUrl,t[57]=n.title,t[58]=k):k=t[58];let A;t[59]!==D||t[60]!==O||t[61]!==k?(A=(0,Y.jsxs)(Lt,{children:[D,O,k]}),t[59]=D,t[60]=O,t[61]=k,t[62]=A):A=t[62];let j=`/projects/${n.id}`,M=`Lihat studi kasus ${n.title}`,N,P;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(N=(0,Y.jsx)(`span`,{children:`Detail`}),P=(0,Y.jsx)(a,{size:14}),t[63]=N,t[64]=P):(N=t[63],P=t[64]);let F;t[65]!==j||t[66]!==M?(F=(0,Y.jsxs)(Bt,{as:B,to:j,"aria-label":M,children:[N,P]}),t[65]=j,t[66]=M,t[67]=F):F=t[67];let I;t[68]!==A||t[69]!==F?(I=(0,Y.jsxs)(It,{children:[A,F]}),t[68]=A,t[69]=F,t[70]=I):I=t[70];let L;t[71]!==o||t[72]!==C||t[73]!==m||t[74]!==I||t[75]!==h||t[76]!==g?(L=(0,Y.jsxs)(o,{children:[m,h,g,C,I]}),t[71]=o,t[72]=C,t[73]=m,t[74]=I,t[75]=h,t[76]=g,t[77]=L):L=t[77];let R;t[78]!==s||t[79]!==L||t[80]!==_?(R=(0,Y.jsxs)(s,{children:[_,L]}),t[78]=s,t[79]=L,t[80]=_,t[81]=R):R=t[81];let z;return t[82]!==l||t[83]!==p||t[84]!==R||t[85]!==v||t[86]!==y||t[87]!==b||t[88]!==x?(z=(0,Y.jsx)(l,{initial:v,whileInView:y,viewport:b,transition:x,style:p,children:R}),t[82]=l,t[83]=p,t[84]=R,t[85]=v,t[86]=y,t[87]=b,t[88]=x,t[89]=z):z=t[89],z}function Gt(e){return(0,Y.jsx)(Pt,{children:e},e)}function Kt(e){return e.stopPropagation()}var qt=[{value:`all`,label:`All`},{value:`app`,label:`Web App`},{value:`landing`,label:`Landing Page`},{value:`interactive`,label:`Interactive`}],Jt=[.4,0,.2,1];function Yt(){let e=(0,J.c)(36),[t,n]=(0,q.useState)(`all`),r,i,o,s,c,l,u;if(e[0]!==t){let a=Q.filter(Zt),d=t===`all`?a:a.filter(e=>e.category===t);o=_t,u=`projects`,i=vt;let f,p,m,h;e[8]===Symbol.for(`react.memo_cache_sentinel`)?(f={opacity:0,y:20},p={opacity:1,y:0},m={once:!0,margin:`-50px`},h={duration:.4,ease:Jt},e[8]=f,e[9]=p,e[10]=m,e[11]=h):(f=e[8],p=e[9],m=e[10],h=e[11]),e[12]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,Y.jsx)(K.div,{initial:f,whileInView:p,viewport:m,transition:h,children:(0,Y.jsxs)(yt,{children:[(0,Y.jsx)(bt,{children:`Selected Works`}),(0,Y.jsx)(xt,{children:`Proyek terpilih yang menunjukkan kemampuan arsitektur frontend.`})]})}),e[12]=c):c=e[12];let g,_,v,y;e[13]===Symbol.for(`react.memo_cache_sentinel`)?(v={opacity:0,y:15},y={opacity:1,y:0},g={once:!0,margin:`-50px`},_={duration:.4,delay:.1,ease:Jt},e[13]=g,e[14]=_,e[15]=v,e[16]=y):(g=e[13],_=e[14],v=e[15],y=e[16]);let b=qt.map(e=>(0,Y.jsx)(Ct,{$active:t===e.value,onClick:()=>n(e.value),role:`tab`,"aria-selected":t===e.value,children:e.label},e.value));e[17]===b?l=e[18]:(l=(0,Y.jsx)(K.div,{initial:v,whileInView:y,viewport:g,transition:_,children:(0,Y.jsx)(St,{role:`tablist`,"aria-label":`Filter kategori proyek`,children:b})}),e[17]=b,e[18]=l),r=wt,s=d.map(Xt),e[0]=t,e[1]=r,e[2]=i,e[3]=o,e[4]=s,e[5]=c,e[6]=l,e[7]=u}else r=e[1],i=e[2],o=e[3],s=e[4],c=e[5],l=e[6],u=e[7];let d;e[19]!==r||e[20]!==s?(d=(0,Y.jsx)(r,{children:s}),e[19]=r,e[20]=s,e[21]=d):d=e[21];let f,p,m,h;e[22]===Symbol.for(`react.memo_cache_sentinel`)?(f={opacity:0,y:20},p={opacity:1,y:0},m={once:!0,margin:`-50px`},h={duration:.4,delay:.2,ease:Jt},e[22]=f,e[23]=p,e[24]=m,e[25]=h):(f=e[22],p=e[23],m=e[24],h=e[25]);let g;e[26]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,Y.jsx)(K.div,{initial:f,whileInView:p,viewport:m,transition:h,children:(0,Y.jsx)(Vt,{children:(0,Y.jsxs)(Ht,{as:B,to:`/projects`,"aria-label":`Lihat semua ${Q.length} proyek di katalog lengkap`,children:[(0,Y.jsxs)(`span`,{children:[`Lihat Semua Proyek (`,Q.length,`)`]}),(0,Y.jsx)(a,{size:16})]})})}),e[26]=g):g=e[26];let _;e[27]!==i||e[28]!==c||e[29]!==l||e[30]!==d?(_=(0,Y.jsxs)(i,{children:[c,l,d,g]}),e[27]=i,e[28]=c,e[29]=l,e[30]=d,e[31]=_):_=e[31];let v;return e[32]!==o||e[33]!==_||e[34]!==u?(v=(0,Y.jsx)(o,{id:u,children:_}),e[32]=o,e[33]=_,e[34]=u,e[35]=v):v=e[35],v}function Xt(e,t){return(0,Y.jsx)(Wt,{project:e,index:t},e.id)}function Zt(e){return e.featured}var Qt=[{title:`Languages & Core Tools`,description:`Fundamental languages, modern build tools, and version control`,skills:[{name:`TypeScript`,icon:`/icons/tech/typescript.svg`},{name:`JavaScript`,icon:`/icons/tech/javascript.svg`},{name:`HTML5`,icon:`/icons/tech/html-5.svg`},{name:`CSS3`,icon:`/icons/tech/css-3.svg`},{name:`AJAX`,icon:`/icons/tech/ajax.svg`},{name:`Vite`,icon:`/icons/tech/vite.svg`},{name:`Git`,icon:`/icons/tech/git.svg`},{name:`GitHub`,icon:`/icons/tech/github.svg`},{name:`C++`,icon:`/icons/tech/cplusplus.svg`}]},{title:`Frameworks & Libraries`,description:`Reactive component engines, state containers, and data caching`,skills:[{name:`React`,icon:`/icons/tech/react.svg`},{name:`React Native`,icon:`/icons/tech/react-native.svg`},{name:`Vue.js`,icon:`/icons/tech/vue.svg`},{name:`Redux Toolkit`,icon:`/icons/tech/redux.svg`},{name:`Pinia`,icon:`/icons/tech/pinia.svg`},{name:`TanStack Query`,icon:`/icons/tech/react-query.svg`},{name:`React Router`,icon:`/icons/tech/react-router.svg`},{name:`Vue Router`,icon:`/icons/tech/vue-router.svg`},{name:`Axios`,icon:`/icons/tech/axios.svg`}]},{title:`Styling & UI Systems`,description:`Design systems, responsive layouts, motion, and icon packages`,skills:[{name:`Tailwind CSS`,icon:`/icons/tech/tailwind.svg`},{name:`styled-components`,icon:`/icons/tech/styled-components.svg`},{name:`Framer Motion`,icon:`/icons/tech/framer-motion.svg`},{name:`Sass`,icon:`/icons/tech/sass.svg`},{name:`Bootstrap`,icon:`/icons/tech/bootstrap-4.svg`},{name:`Lucide Icons`,icon:`/icons/tech/lucide.svg`},{name:`Responsive UI`,icon:`/icons/tech/responsive.svg`}]}],$t=W.section`
  position: relative;
  padding: ${({theme:e})=>`${e.spacing[`4xl`]} ${e.spacing.lg}`};
  background-color: ${({theme:e})=>e.colors.darkBase};

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>`${e.spacing[`2xl`]} ${e.spacing.md}`};
  }
`,en=W.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`,tn=W.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,nn=W.h2`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes[`4xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.textHighlight};
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
  margin-bottom: ${({theme:e})=>e.spacing.xs};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes[`3xl`]};
  }
`,rn=W.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.textMuted};
  max-width: 520px;
  line-height: ${({theme:e})=>e.lineHeights.relaxed};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes.base};
  }
`,an=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,on=W.button`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  padding: 6px 18px;
  border-radius: ${({theme:e})=>e.radii.full};
  cursor: pointer;
  background-color: ${({theme:e,$active:t})=>t?e.colors.accentMuted:`transparent`};
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.border:e.colors.borderSubtle};
  color: ${({theme:e,$active:t})=>t?e.colors.accentLime:e.colors.textMuted};
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    color: ${({theme:e,$active:t})=>t?e.colors.accentLime:e.colors.textSecondary};
  }
`,sn=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};

  ${({theme:e})=>e.media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
    gap: ${({theme:e})=>e.spacing.sm};
  }
`,cn=W.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>`${e.spacing.lg} ${e.spacing.sm}`};
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  height: 100%;
  box-sizing: border-box;
  transition: border-color ${({theme:e})=>e.transitions.fast},
    transform ${({theme:e})=>e.transitions.fast},
    box-shadow ${({theme:e})=>e.transitions.fast};
  user-select: none;

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    transform: translateY(-3px);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`,ln=W.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: filter ${({theme:e})=>e.transitions.fast};

  ${cn}:hover & {
    filter: drop-shadow(0 0 8px rgba(183, 216, 148, 0.45));
  }

  ${({theme:e})=>e.media.mobile} {
    width: 32px;
    height: 32px;
  }
`,un=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.textSecondary};
  text-align: center;
  margin-top: ${({theme:e})=>e.spacing.xs};
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  padding: 0 4px;
`,dn=W.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    ${({theme:e})=>e.colors.border},
    transparent
  );
  margin: ${({theme:e})=>`${e.spacing[`4xl`]} 0`};

  ${({theme:e})=>e.media.mobile} {
    margin: ${({theme:e})=>`${e.spacing[`2xl`]} 0`};
  }
`,fn=W.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({theme:e})=>e.spacing[`2xl`]};
`,pn=W.h3`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes[`3xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.textHighlight};
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
  margin-bottom: ${({theme:e})=>e.spacing.xs};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes[`2xl`]};
  }
`,mn=W.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.textMuted};
  line-height: ${({theme:e})=>e.lineHeights.relaxed};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes.base};
  }
`,hn=W.div`
  position: relative;
`,gn=W.div`
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 20px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    ${({theme:e})=>e.colors.borderHover},
    ${({theme:e})=>e.colors.border},
    transparent
  );

  ${({theme:e})=>e.media.mobile} {
    left: 16px;
  }
`,_n=W.div`
  position: relative;
  display: flex;
  gap: ${({theme:e})=>e.spacing.xl};
  padding-bottom: ${({theme:e})=>e.spacing[`3xl`]};
  min-width: 0;

  &:last-child {
    padding-bottom: 0;
  }

  ${({theme:e})=>e.media.mobile} {
    gap: ${({theme:e})=>e.spacing.md};
    padding-bottom: ${({theme:e})=>e.spacing[`2xl`]};
  }
`,vn=W.div`
  flex-shrink: 0;
  width: 42px;
  display: flex;
  justify-content: center;

  ${({theme:e})=>e.media.mobile} {
    width: 34px;
  }
`,yn=W.div`
  width: 42px;
  height: 42px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 2px solid ${({theme:e})=>e.colors.accentLime};
  box-shadow: 0 0 12px ${({theme:e})=>e.colors.accentGlow};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.accentLime};
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
  z-index: 2;

  ${({theme:e})=>e.media.mobile} {
    width: 34px;
    height: 34px;
    font-size: 11px;
  }
`,bn=W.div`
  flex: 1;
  min-width: 0;
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.spacing.xl};
  transition: border-color ${({theme:e})=>e.transitions.fast},
    transform ${({theme:e})=>e.transitions.fast},
    box-shadow ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>e.spacing.md};
  }
`,xn=W.h4`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.textHighlight};
  margin-bottom: ${({theme:e})=>e.spacing.xs};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes.base};
  }
`,Sn=W.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.accentLime};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,Cn=W.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: ${({theme:e})=>e.lineHeights.relaxed};
  max-width: 650px;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,wn=W.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Tn=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  padding: 3px 10px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.accentMuted};
  color: ${({theme:e})=>e.colors.accentLime};
  border: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  letter-spacing: 0.02em;
`,En=[.4,0,.2,1];function Dn(e){let t=(0,J.c)(18),{skill:n,index:r}=e,i,a,o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(i={opacity:0,y:15},a={opacity:1,y:0},o={once:!0,margin:`-40px`},t[0]=i,t[1]=a,t[2]=o):(i=t[0],a=t[1],o=t[2]);let s=r*.04,c;t[3]===s?c=t[4]:(c={duration:.35,delay:s,ease:En},t[3]=s,t[4]=c);let l;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(l={height:`100%`},t[5]=l):l=t[5];let u;t[6]!==n.icon||t[7]!==n.name?(u=(0,Y.jsx)(ln,{src:n.icon,alt:n.name,loading:`lazy`}),t[6]=n.icon,t[7]=n.name,t[8]=u):u=t[8];let d;t[9]===n.name?d=t[10]:(d=(0,Y.jsx)(un,{children:n.name}),t[9]=n.name,t[10]=d);let f;t[11]!==n.name||t[12]!==u||t[13]!==d?(f=(0,Y.jsxs)(cn,{title:n.name,children:[u,d]}),t[11]=n.name,t[12]=u,t[13]=d,t[14]=f):f=t[14];let p;return t[15]!==c||t[16]!==f?(p=(0,Y.jsx)(K.div,{initial:i,whileInView:a,viewport:o,transition:c,style:l,children:f}),t[15]=c,t[16]=f,t[17]=p):p=t[17],p}var On=[{year:`2024`,title:`Foundations of Web Development`,headline:`Core Web Standards & Vanilla Programming`,description:`Mastered web fundamentals including semantic HTML5, CSS3 layout engines, Bootstrap framework, and fundamental JavaScript algorithms and DOM interactions.`,technologies:[`HTML5`,`CSS3`,`Bootstrap 4/5`,`JavaScript`,`DOM Manipulation`]},{year:`2025`,title:`Tooling & Modern CSS Workflows`,headline:`Expanding Frontend Toolchains`,description:`Deepened JavaScript proficiency and adopted modern development tooling: Git version control, GitHub collaboration, Tailwind CSS utility architecture, Sass preprocessor, and responsive optimization.`,technologies:[`Advanced JavaScript`,`Git & GitHub`,`Tailwind CSS`,`Sass`,`Responsive Design`]},{year:`2026`,title:`Production Component Frameworks & State Management`,headline:`Enterprise SPA Ecosystems`,description:`Engineering production-ready Single Page Applications using React and Vue ecosystems with TypeScript. Implementing scalable state management (Redux Toolkit, Pinia), server caching (TanStack Query), and fluid interactions (Framer Motion).`,technologies:[`React 18/19`,`Vue 3`,`TypeScript`,`Pinia`,`Redux Toolkit`,`TanStack Query`,`Framer Motion`]}],kn=[.4,0,.2,1];function An(){let e=(0,J.c)(6),t,n,r,i;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t={opacity:0,y:15},n={opacity:1,y:0},r={once:!0,margin:`-50px`},i={duration:.4,ease:kn},e[0]=t,e[1]=n,e[2]=r,e[3]=i):(t=e[0],n=e[1],r=e[2],i=e[3]);let a;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,Y.jsx)(K.div,{initial:t,whileInView:n,viewport:r,transition:i,children:(0,Y.jsxs)(fn,{children:[(0,Y.jsx)(pn,{children:`Career Journey`}),(0,Y.jsx)(mn,{children:`Perjalanan rekam jejak teknis dari fundamental web standards hingga arsitektur SPA skala produksi.`})]})}),e[4]=a):a=e[4];let o;return e[5]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,Y.jsxs)(`div`,{children:[a,(0,Y.jsxs)(hn,{children:[(0,Y.jsx)(gn,{}),On.map(jn)]})]}),e[5]=o):o=e[5],o}function jn(e,t){return(0,Y.jsx)(K.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:`-50px`},transition:{duration:.45,delay:t*.15,ease:kn},children:(0,Y.jsxs)(_n,{children:[(0,Y.jsx)(vn,{children:(0,Y.jsx)(yn,{children:e.year})}),(0,Y.jsxs)(bn,{children:[(0,Y.jsx)(xn,{children:e.title}),(0,Y.jsx)(Sn,{children:e.headline}),(0,Y.jsx)(Cn,{children:e.description}),(0,Y.jsx)(wn,{children:e.technologies.map(Mn)})]})]})},e.year)}function Mn(e){return(0,Y.jsx)(Tn,{children:e},e)}var Nn=[{value:`all`,label:`All`},{value:0,label:`Languages & Core`},{value:1,label:`Frameworks & Libraries`},{value:2,label:`Styling & UI`}],Pn=[.4,0,.2,1];function Fn(){let e=(0,J.c)(33),[t,n]=(0,q.useState)(`all`),r,i,a,o,s,c,l;if(e[0]!==t){let u=t===`all`?Qt.flatMap(Ln):Qt[t]?.skills||[];a=$t,l=`skills`,i=en;let d,f,p,m;e[8]===Symbol.for(`react.memo_cache_sentinel`)?(d={opacity:0,y:20},f={opacity:1,y:0},p={once:!0,margin:`-50px`},m={duration:.4,ease:Pn},e[8]=d,e[9]=f,e[10]=p,e[11]=m):(d=e[8],f=e[9],p=e[10],m=e[11]),e[12]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,Y.jsx)(K.div,{initial:d,whileInView:f,viewport:p,transition:m,children:(0,Y.jsxs)(tn,{children:[(0,Y.jsx)(nn,{children:`Skills & Journey`}),(0,Y.jsx)(rn,{children:`Teknologi yang digunakan sehari-hari dan rekam jejak eksplorasi arsitektur frontend.`})]})}),e[12]=s):s=e[12];let h,g,_,v;e[13]===Symbol.for(`react.memo_cache_sentinel`)?(_={opacity:0,y:15},v={opacity:1,y:0},h={once:!0,margin:`-50px`},g={duration:.4,delay:.1,ease:Pn},e[13]=h,e[14]=g,e[15]=_,e[16]=v):(h=e[13],g=e[14],_=e[15],v=e[16]);let y=Nn.map(e=>(0,Y.jsx)(on,{$active:t===e.value,onClick:()=>n(e.value),role:`tab`,"aria-selected":t===e.value,children:e.label},String(e.value)));e[17]===y?c=e[18]:(c=(0,Y.jsx)(K.div,{initial:_,whileInView:v,viewport:h,transition:g,children:(0,Y.jsx)(an,{role:`tablist`,"aria-label":`Filter kategori skills`,children:y})}),e[17]=y,e[18]=c),r=sn,o=u.map(In),e[0]=t,e[1]=r,e[2]=i,e[3]=a,e[4]=o,e[5]=s,e[6]=c,e[7]=l}else r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7];let u;e[19]!==r||e[20]!==o?(u=(0,Y.jsx)(r,{children:o}),e[19]=r,e[20]=o,e[21]=u):u=e[21];let d,f;e[22]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,Y.jsx)(dn,{}),f=(0,Y.jsx)(An,{}),e[22]=d,e[23]=f):(d=e[22],f=e[23]);let p;e[24]!==i||e[25]!==s||e[26]!==c||e[27]!==u?(p=(0,Y.jsxs)(i,{children:[s,c,u,d,f]}),e[24]=i,e[25]=s,e[26]=c,e[27]=u,e[28]=p):p=e[28];let m;return e[29]!==a||e[30]!==l||e[31]!==p?(m=(0,Y.jsx)(a,{id:l,children:p}),e[29]=a,e[30]=l,e[31]=p,e[32]=m):m=e[32],m}function In(e,t){return(0,Y.jsx)(Dn,{skill:e,index:t},e.name)}function Ln(e){return e.skills}var Rn=[{id:`udemy-react-jonas`,title:`The Ultimate React Course 2025: React, Next.js, Redux & More`,platform:`udemy`,platformName:`Udemy`,issuer:`Jonas Schmedtmann`,img:`/images/sertifikat/react.avif`,alt:`Certificate The Ultimate React Course 2025 Jonas Schmedtmann`,skills:[`React`,`Next.js`,`Redux Toolkit`,`Custom Hooks`,`Tailwind CSS`,`Performance`],desc:`Pelatihan intensif 84 jam mendalami ekosistem React modern: arsitektur komponen, state management lanjutan, Redux Toolkit, Context API, custom hooks, dan implementasi Next.js.`,featured:!0},{id:`udemy-js-jonas`,title:`The Complete JavaScript Course: From Zero to Expert`,platform:`udemy`,platformName:`Udemy`,issuer:`Jonas Schmedtmann`,img:`/images/sertifikat/javascript-bang-jonas-udamy.avif`,alt:`Certificate The Complete JavaScript Course Jonas Schmedtmann`,skills:[`JavaScript ES6+`,`OOP`,`Asynchronous JS`,`DOM & Events`,`Clean Architecture`],desc:`Pendidikan komprehensif JavaScript modern: async/await, closures, prototypical inheritance, event loop, dan arsitektur kode berbasis modul.`,featured:!0},{id:`udemy-html-css-jonas`,title:`Build Responsive Real-World Websites with HTML and CSS`,platform:`udemy`,platformName:`Udemy`,issuer:`Jonas Schmedtmann`,img:`/images/sertifikat/html-css-bang-jonas-udamy.avif`,alt:`Certificate Build Responsive Real-World Websites with HTML and CSS`,skills:[`HTML5 Semantic`,`CSS3 Modern`,`Flexbox & Grid`,`Responsive Design`,`Web Performance`],desc:`Implementasi standar web modern, tipografi responsif, sistem grid 12-kolom, optimasi aset gambar, dan aksesibilitas ramah pengguna.`,featured:!0},{id:`udemy-js-eko`,title:`Pemrograman JavaScript: Pemula sampai Mahir`,platform:`udemy`,platformName:`Udemy`,issuer:`Eko Kurniawan Khannedy (Programmer Zaman Now)`,img:`/images/sertifikat/javascript-mas-eko-udamy.avif`,alt:`Certificate Pemrograman JavaScript Pemula sampai Mahir Eko Kurniawan Khannedy`,skills:[`JavaScript Core`,`Standard Library`,`Web API`,`Object & Class`,`ES Modules`],desc:`Pemahaman mendalam struktur data JavaScript, manipulasi browser DOM, penanganan error terstruktur, dan standar best practice industri.`,featured:!0},{id:`codepolitan-vue-pinia`,title:`State Management Vue 3 dengan Pinia`,platform:`codepolitan`,platformName:`Codepolitan`,issuer:`Ahmad Hakim`,img:`/images/sertifikat/vue-pinia.avif`,alt:`Certificate Belajar State Management Vue 3 dengan Pinia Codepolitan`,skills:[`Vue 3`,`Pinia`,`State Management`,`Vue Router`,`Composables`],desc:`Arsitektur modular store dengan Pinia pada Vue 3, reaktivitas data state, sinkronisasi actions, getters, dan pemisahan logika bisnis melalui Composables.`,featured:!0},{id:`codepolitan-ajax`,title:`Belajar AJAX & Asynchronous Web API`,platform:`codepolitan`,platformName:`Codepolitan`,issuer:`Ahmad Hakim`,img:`/images/sertifikat/ajax.avif`,alt:`Certificate Belajar AJAX Codepolitan`,skills:[`AJAX`,`Fetch API`,`JSON`,`REST API`,`Async JS`],desc:`Pengambilan data asynchronous client-side, integrasi RESTful endpoint, penanganan status HTTP, dan parsing data respons JSON.`},{id:`codepolitan-git`,title:`Belajar Git & GitHub untuk Pemula`,platform:`codepolitan`,platformName:`Codepolitan`,issuer:`Nusendra Hanggarawan`,img:`/images/sertifikat/git.avif`,alt:`Certificate Belajar Git dan GitHub Codepolitan`,skills:[`Git`,`GitHub`,`Branching`,`Merge & Conflict`,`Collaboration`],desc:`Manajemen versi kode, branching feature, penyelesaian merge conflict, dan alur kerja kolaborasi berbasis remote repository GitHub.`},{id:`codepolitan-javascript`,title:`Belajar JavaScript Dasar`,platform:`codepolitan`,platformName:`Codepolitan`,issuer:`Ahmad Hakim`,img:`/images/sertifikat/javascript.avif`,alt:`Certificate Belajar JavaScript Dasar Codepolitan`,skills:[`JavaScript`,`Data Types`,`Loops & Conditions`,`Functions`,`DOM Basics`],desc:`Logika dasar pemrograman, struktur kontrol kondisional, perulangan data, deklarasi fungsi, dan interaktivitas halaman web dasar.`},{id:`codepolitan-bootstrap`,title:`Belajar CSS Framework Bootstrap`,platform:`codepolitan`,platformName:`Codepolitan`,issuer:`Ahmad Hakim`,img:`/images/sertifikat/boostrap.avif`,alt:`Certificate Belajar CSS Framework Bootstrap Codepolitan`,skills:[`Bootstrap 4/5`,`12-Column Grid`,`Responsive Breakpoints`,`Components`],desc:`Pembuatan antarmuka responsif berbasis komponen siap pakai, penyesuaian breakpoint mobile-to-desktop, dan sistem utility classes.`},{id:`codepolitan-css`,title:`Belajar Dasar CSS`,platform:`codepolitan`,platformName:`Codepolitan`,issuer:`Alucard`,img:`/images/sertifikat/css.avif`,alt:`Certificate Belajar Dasar CSS Codepolitan`,skills:[`CSS3`,`Box Model`,`Flexbox`,`Positioning`,`Color & Styling`],desc:`Dasar styling web, pemahaman box model (margin, padding, border), perataan layout dengan Flexbox, dan hirarki selektor CSS.`},{id:`codepolitan-html-dasar`,title:`Belajar Dasar HTML`,platform:`codepolitan`,platformName:`Codepolitan`,issuer:`Ahmad Hakim`,img:`/images/sertifikat/html-dasar.avif`,alt:`Certificate Belajar Dasar HTML Codepolitan`,skills:[`HTML5`,`Semantic Tags`,`Forms & Inputs`,`Document Structure`],desc:`Fondasi dokumen web semantik, struktur markup terstandar, pembuatan formulir interaktif, dan hierarki heading yang terstruktur.`},{id:`penghargaan-isc`,title:`Sertifikat Penghargaan: Informatics Study Club (ISC)`,platform:`penghargaan`,platformName:`Penghargaan`,issuer:`Informatics Study Club (Universitas Pamulang)`,img:`/images/sertifikat/penghargaan-isc.avif`,alt:`Sertifikat Penghargaan Informatics Study Club Bidang Web Development`,skills:[`Web Development`,`Informatics Study Club`,`Dedikasi & Kontribusi`,`Teknologi Informasi`],desc:`Penghargaan atas dedikasi dan kontribusi aktif sebagai anggota Informatics Study Club (ISC) bidang Web Development pada Program Studi Teknik Informatika Universitas Pamulang.`,featured:!0},{id:`hackathon-himtif`,title:`Hackathon: Innovating Beyond The Code`,platform:`kompetisi`,platformName:`Kompetisi`,issuer:`HIMTIF (Himpunan Mahasiswa Teknik Informatika)`,img:`/images/sertifikat/hackathon.avif`,alt:`Sertifikat Partisipasi Hackathon Innovating Beyond The Code HIMTIF`,skills:[`Hackathon`,`Problem Solving`,`Team Collaboration`,`Web Development`],desc:`Partisipasi kompetisi Hackathon HIMTIF dalam merancang dan mengembangkan solusi aplikasi web di bawah batas waktu intensif.`,featured:!0}],zn=W.section`
  position: relative;
  padding: ${({theme:e})=>`${e.spacing[`4xl`]} ${e.spacing.lg}`};
  background-color: ${({theme:e})=>e.colors.darkBase};

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>`${e.spacing[`2xl`]} ${e.spacing.md}`};
  }
`,Bn=W.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`,Vn=W.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,Hn=W.h2`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes[`4xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.textHighlight};
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
  margin-bottom: ${({theme:e})=>e.spacing.xs};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes[`3xl`]};
  }
`,Un=W.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.textMuted};
  max-width: 520px;
  line-height: ${({theme:e})=>e.lineHeights.relaxed};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes.base};
  }
`,Wn=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({theme:e})=>e.spacing[`2xl`]};
`,Gn=W.button`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  padding: 6px 18px;
  border-radius: ${({theme:e})=>e.radii.full};
  cursor: pointer;
  background-color: ${({theme:e,$active:t})=>t?e.colors.accentMuted:`transparent`};
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.border:e.colors.borderSubtle};
  color: ${({theme:e,$active:t})=>t?e.colors.accentLime:e.colors.textMuted};
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    color: ${({theme:e,$active:t})=>t?e.colors.accentLime:e.colors.textSecondary};
  }
`,Kn=W.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};

  @media (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({theme:e})=>e.media.tablet} {
    grid-template-columns: minmax(0, 1fr);
  }
`,qn=W.article`
  min-width: 0;
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: border-color ${({theme:e})=>e.transitions.fast},
    transform ${({theme:e})=>e.transitions.fast},
    box-shadow ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    transform: translateY(-4px);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`,Jn=W.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  position: relative;
  background-color: ${({theme:e})=>e.colors.darkBase};
  cursor: pointer;
`,Yn=W.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({theme:e})=>e.transitions.normal};

  ${qn}:hover & {
    transform: scale(1.04);
  }
`,Xn=W.div`
  padding: ${({theme:e})=>e.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>e.spacing.md};
  }
`,Zn=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  padding: 3px 10px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.accentMuted};
  color: ${({theme:e})=>e.colors.accentLime};
  border: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  text-transform: uppercase;
  letter-spacing: ${({theme:e})=>e.letterSpacings.wider};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  align-self: flex-start;
`,Qn=W.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.textHighlight};
  line-height: 1.45;
  min-height: 2.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,$n=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
  min-height: 1.25rem;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: block;
`,er=W.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 6px;
  margin-top: auto;
  min-height: 52px;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,tr=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  padding: 3px 9px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.glass};
  color: ${({theme:e})=>e.colors.textSecondary};
  border: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  display: inline-flex;
  align-items: center;
  line-height: 1.3;
  height: fit-content;
  align-self: flex-start;
`,nr=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  padding: 3px 9px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.glass};
  color: ${({theme:e})=>e.colors.textMuted};
  border: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  display: inline-flex;
  align-items: center;
  line-height: 1.3;
  height: fit-content;
  align-self: flex-start;
`,rr=W.button`
  width: 100%;
  padding: 10px;
  border-radius: ${({theme:e})=>e.radii.sm};
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    background-color: ${({theme:e})=>e.colors.glassHover};
    color: ${({theme:e})=>e.colors.textHighlight};
  }
`,ir=W.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background-color: rgba(32, 39, 52, 0.94);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.xl};

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>e.spacing.md};
  }
`,ar=W.span`
  position: absolute;
  top: 24px;
  left: 24px;
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.textMuted};
  padding: 5px 14px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  z-index: 201;

  ${({theme:e})=>e.media.mobile} {
    top: 14px;
    left: 14px;
    font-size: 11px;
    padding: 3px 10px;
  }
`,or=W.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({$direction:e})=>e===`prev`?`left: 24px;`:`right: 24px;`}
  width: 46px;
  height: 46px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  color: ${({theme:e})=>e.colors.textHighlight};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 202;
  transition: all ${({theme:e})=>e.transitions.fast};
  box-shadow: ${({theme:e})=>e.shadows.card};

  &:hover {
    background-color: ${({theme:e})=>e.colors.glassHover};
    border-color: ${({theme:e})=>e.colors.borderHover};
    color: ${({theme:e})=>e.colors.accentLime};
    transform: translateY(-50%) scale(1.08);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accentLime};
    outline-offset: 2px;
  }

  ${({theme:e})=>e.media.mobile} {
    ${({$direction:e})=>e===`prev`?`left: 8px;`:`right: 8px;`}
    width: 38px;
    height: 38px;
  }
`,sr=W.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  color: ${({theme:e})=>e.colors.textHighlight};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 201;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.glassHover};
    border-color: ${({theme:e})=>e.colors.borderHover};
    transform: scale(1.05);
  }

  ${({theme:e})=>e.media.mobile} {
    top: 12px;
    right: 12px;
    width: 38px;
    height: 38px;
  }
`,cr=W.div`
  max-width: 900px;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,lr=W.img`
  max-width: 100%;
  max-height: 72vh;
  object-fit: contain;
  border-radius: ${({theme:e})=>e.radii.md};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  box-shadow: ${({theme:e})=>e.shadows.card};
  display: block;
`,ur=W.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,dr=W.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.textHighlight};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes.base};
  }
`,fr=W.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textMuted};
`,pr=W.div`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing[`2xl`]};
`,mr=W.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  padding: 12px 28px;
  border-radius: ${({theme:e})=>e.radii.sm};
  border: 1px solid ${({theme:e})=>e.colors.border};
  text-decoration: none;
  cursor: pointer;
  transition: border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    background-color: ${({theme:e})=>e.colors.accentMuted};
    color: ${({theme:e})=>e.colors.textHighlight};
  }
`,hr=[.4,0,.2,1];function gr(e){let t=(0,J.c)(77),{certificate:n,index:r,onViewCertificate:i}=e,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;if(t[0]!==n||t[1]!==r||t[2]!==i){let e=n.skills.slice(0,3);l=n.skills.length-3,c=K.div,t[18]===Symbol.for(`react.memo_cache_sentinel`)?(g={opacity:0,y:20},_={opacity:1,y:0},v={once:!0,margin:`-50px`},t[18]=g,t[19]=_,t[20]=v):(g=t[18],_=t[19],v=t[20]);let b=r*.08;t[21]===b?y=t[22]:(y={duration:.4,delay:b,ease:hr},t[21]=b,t[22]=y),t[23]===Symbol.for(`react.memo_cache_sentinel`)?(d={display:`flex`,flexDirection:`column`,height:`100%`},t[23]=d):d=t[23],s=qn;let x;t[24]!==n||t[25]!==i?(x=()=>i(n),t[24]=n,t[25]=i,t[26]=x):x=t[26];let S=`Lihat sertifikat ${n.title}`,C;t[27]!==n||t[28]!==i?(C=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i(n))},t[27]=n,t[28]=i,t[29]=C):C=t[29];let w=n.alt||n.title,T;t[30]!==n.img||t[31]!==w?(T=(0,Y.jsx)(Yn,{src:n.img,alt:w,loading:`lazy`}),t[30]=n.img,t[31]=w,t[32]=T):T=t[32],t[33]!==x||t[34]!==S||t[35]!==C||t[36]!==T?(h=(0,Y.jsx)(Jn,{onClick:x,title:S,role:`button`,tabIndex:0,onKeyDown:C,children:T}),t[33]=x,t[34]=S,t[35]=C,t[36]=T,t[37]=h):h=t[37],o=Xn,t[38]===n.platformName?f=t[39]:(f=(0,Y.jsx)(Zn,{children:n.platformName}),t[38]=n.platformName,t[39]=f),t[40]===n.title?p=t[41]:(p=(0,Y.jsx)(Qn,{title:n.title,children:n.title}),t[40]=n.title,t[41]=p),t[42]===n.issuer?m=t[43]:(m=(0,Y.jsx)($n,{children:n.issuer}),t[42]=n.issuer,t[43]=m),a=er,u=e.map(_r),t[0]=n,t[1]=r,t[2]=i,t[3]=a,t[4]=o,t[5]=s,t[6]=c,t[7]=l,t[8]=u,t[9]=d,t[10]=f,t[11]=p,t[12]=m,t[13]=h,t[14]=g,t[15]=_,t[16]=v,t[17]=y}else a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=t[16],y=t[17];let b;t[44]===l?b=t[45]:(b=l>0&&(0,Y.jsxs)(nr,{children:[`+`,l]}),t[44]=l,t[45]=b);let x;t[46]!==a||t[47]!==u||t[48]!==b?(x=(0,Y.jsxs)(a,{children:[u,b]}),t[46]=a,t[47]=u,t[48]=b,t[49]=x):x=t[49];let S;t[50]!==n||t[51]!==i?(S=()=>i(n),t[50]=n,t[51]=i,t[52]=S):S=t[52];let C=`Perbesar tampilan sertifikat ${n.title}`,w,T;t[53]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,Y.jsx)(E,{size:15}),T=(0,Y.jsx)(`span`,{children:`Lihat Sertifikat`}),t[53]=w,t[54]=T):(w=t[53],T=t[54]);let D;t[55]!==S||t[56]!==C?(D=(0,Y.jsxs)(rr,{type:`button`,onClick:S,"aria-label":C,children:[w,T]}),t[55]=S,t[56]=C,t[57]=D):D=t[57];let O;t[58]!==o||t[59]!==x||t[60]!==D||t[61]!==f||t[62]!==p||t[63]!==m?(O=(0,Y.jsxs)(o,{children:[f,p,m,x,D]}),t[58]=o,t[59]=x,t[60]=D,t[61]=f,t[62]=p,t[63]=m,t[64]=O):O=t[64];let k;t[65]!==s||t[66]!==O||t[67]!==h?(k=(0,Y.jsxs)(s,{children:[h,O]}),t[65]=s,t[66]=O,t[67]=h,t[68]=k):k=t[68];let A;return t[69]!==c||t[70]!==d||t[71]!==k||t[72]!==g||t[73]!==_||t[74]!==v||t[75]!==y?(A=(0,Y.jsx)(c,{initial:g,whileInView:_,viewport:v,transition:y,style:d,children:k}),t[69]=c,t[70]=d,t[71]=k,t[72]=g,t[73]=_,t[74]=v,t[75]=y,t[76]=A):A=t[76],A}function _r(e){return(0,Y.jsx)(tr,{children:e},e)}var vr=[.4,0,.2,1];function yr(e){let t=(0,J.c)(28),{certificate:r,certificates:i,onClose:a,onSelectCertificate:o}=e,s;t[0]!==r||t[1]!==i?(s=r&&i?i.findIndex(e=>e.id===r.id):-1,t[0]=r,t[1]=i,t[2]=s):s=t[2];let c=s,l=!!(i&&i.length>1&&o),u;t[3]!==i||t[4]!==c||t[5]!==o?(u=()=>{if(!i||!o||c===-1)return;let e=(c-1+i.length)%i.length;o(i[e])},t[3]=i,t[4]=c,t[5]=o,t[6]=u):u=t[6];let d=u,f;t[7]!==i||t[8]!==c||t[9]!==o?(f=()=>{if(!i||!o||c===-1)return;let e=(c+1)%i.length;o(i[e])},t[7]=i,t[8]=c,t[9]=o,t[10]=f):f=t[10];let p=f,m,h;t[11]!==r||t[12]!==p||t[13]!==d||t[14]!==l||t[15]!==a?(m=()=>{if(!r)return;let e=e=>{e.key===`Escape`?a():e.key===`ArrowLeft`&&l?d():e.key===`ArrowRight`&&l&&p()},t=document.body.style.overflow;return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=t,window.removeEventListener(`keydown`,e)}},h=[r,a,l,d,p],t[11]=r,t[12]=p,t[13]=d,t[14]=l,t[15]=a,t[16]=m,t[17]=h):(m=t[16],h=t[17]),(0,q.useEffect)(m,h);let g;t[18]!==r||t[19]!==i||t[20]!==c||t[21]!==p||t[22]!==d||t[23]!==l||t[24]!==a?(g=r&&(0,Y.jsxs)(ir,{as:K.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:vr},onClick:a,role:`dialog`,"aria-modal":`true`,"aria-label":r.title,children:[i&&c!==-1&&(0,Y.jsxs)(ar,{children:[c+1,` / `,i.length]}),(0,Y.jsx)(sr,{type:`button`,onClick:e=>{e.stopPropagation(),a()},"aria-label":`Tutup pratinjau sertifikat`,children:(0,Y.jsx)(x,{size:20})}),l&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(or,{type:`button`,$direction:`prev`,onClick:e=>{e.stopPropagation(),d()},"aria-label":`Sertifikat sebelumnya (Panah Kiri)`,title:`Sebelumnya (←)`,children:(0,Y.jsx)(k,{size:24})}),(0,Y.jsx)(or,{type:`button`,$direction:`next`,onClick:e=>{e.stopPropagation(),p()},"aria-label":`Sertifikat selanjutnya (Panah Kanan)`,title:`Selanjutnya (→)`,children:(0,Y.jsx)(n,{size:24})})]}),(0,Y.jsxs)(cr,{as:K.div,initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.96},transition:{duration:.22,ease:vr},onClick:br,children:[(0,Y.jsx)(lr,{src:r.img,alt:r.alt||r.title}),(0,Y.jsxs)(ur,{children:[(0,Y.jsx)(dr,{children:r.title}),(0,Y.jsxs)(fr,{children:[r.issuer,` • `,r.platformName]})]})]},r.id)]}),t[18]=r,t[19]=i,t[20]=c,t[21]=p,t[22]=d,t[23]=l,t[24]=a,t[25]=g):g=t[25];let _;return t[26]===g?_=t[27]:(_=(0,Y.jsx)(G,{children:g}),t[26]=g,t[27]=_),_}function br(e){return e.stopPropagation()}var xr=[.4,0,.2,1];function Sr(){let e=(0,J.c)(58),[t,n]=(0,q.useState)(`all`),[r,i]=(0,q.useState)(null),o,s,c,l,u,d,f,p;if(e[0]!==t){let r=Rn.filter(Er),a=r.filter(Tr).length,m=r.filter(wr).length,h=r.filter(Cr).length,g=`All (${r.length})`,_;e[9]===g?_=e[10]:(_={value:`all`,label:g},e[9]=g,e[10]=_);let v=`Udemy (${a})`,y;e[11]===v?y=e[12]:(y={value:`udemy`,label:v},e[11]=v,e[12]=y);let b=`Codepolitan (${m})`,x;e[13]===b?x=e[14]:(x={value:`codepolitan`,label:b},e[13]=b,e[14]=x);let S=`Awards (${h})`,C;e[15]===S?C=e[16]:(C={value:`awards`,label:S},e[15]=S,e[16]=C);let w;e[17]!==C||e[18]!==_||e[19]!==y||e[20]!==x?(w=[_,y,x,C],e[17]=C,e[18]=_,e[19]=y,e[20]=x,e[21]=w):w=e[21];let T=w;l=r.filter(e=>t===`all`?!0:t===`udemy`?e.platform===`udemy`:t===`codepolitan`?e.platform===`codepolitan`:t!==`awards`||e.platform===`kompetisi`||e.platform===`penghargaan`),c=zn,p=`certificates`,s=Bn;let E,D,O,k;e[22]===Symbol.for(`react.memo_cache_sentinel`)?(E={opacity:0,y:20},D={opacity:1,y:0},O={once:!0,margin:`-50px`},k={duration:.4,ease:xr},e[22]=E,e[23]=D,e[24]=O,e[25]=k):(E=e[22],D=e[23],O=e[24],k=e[25]),e[26]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,Y.jsx)(K.div,{initial:E,whileInView:D,viewport:O,transition:k,children:(0,Y.jsxs)(Vn,{children:[(0,Y.jsx)(Hn,{children:`Certifications`}),(0,Y.jsx)(Un,{children:`Sertifikasi resmi dan penghargaan unggulan yang diperoleh sepanjang pembelajaran dan kontribusi komunitas.`})]})}),e[26]=d):d=e[26];let A,j,M,N;e[27]===Symbol.for(`react.memo_cache_sentinel`)?(A={opacity:0,y:15},j={opacity:1,y:0},M={once:!0,margin:`-50px`},N={duration:.4,delay:.1,ease:xr},e[27]=A,e[28]=j,e[29]=M,e[30]=N):(A=e[27],j=e[28],M=e[29],N=e[30]),e[31]!==t||e[32]!==T?(f=(0,Y.jsx)(K.div,{initial:A,whileInView:j,viewport:M,transition:N,children:(0,Y.jsx)(Wn,{role:`tablist`,"aria-label":`Filter kategori sertifikat`,children:T.map(e=>(0,Y.jsx)(Gn,{$active:t===e.value,onClick:()=>n(e.value),role:`tab`,"aria-selected":t===e.value,children:e.label},e.value))})}),e[31]=t,e[32]=T,e[33]=f):f=e[33],o=Kn;let P;e[34]===Symbol.for(`react.memo_cache_sentinel`)?(P=(e,t)=>(0,Y.jsx)(gr,{certificate:e,index:t,onViewCertificate:e=>i(e)},e.id),e[34]=P):P=e[34],u=l.map(P),e[0]=t,e[1]=o,e[2]=s,e[3]=c,e[4]=l,e[5]=u,e[6]=d,e[7]=f,e[8]=p}else o=e[1],s=e[2],c=e[3],l=e[4],u=e[5],d=e[6],f=e[7],p=e[8];let m;e[35]!==o||e[36]!==u?(m=(0,Y.jsx)(o,{children:u}),e[35]=o,e[36]=u,e[37]=m):m=e[37];let h,g,_,v;e[38]===Symbol.for(`react.memo_cache_sentinel`)?(h={opacity:0,y:20},g={opacity:1,y:0},_={once:!0,margin:`-50px`},v={duration:.4,delay:.2,ease:xr},e[38]=h,e[39]=g,e[40]=_,e[41]=v):(h=e[38],g=e[39],_=e[40],v=e[41]);let y;e[42]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,Y.jsx)(K.div,{initial:h,whileInView:g,viewport:_,transition:v,children:(0,Y.jsx)(pr,{children:(0,Y.jsxs)(mr,{as:B,to:`/certificates`,"aria-label":`Lihat semua ${Rn.length} sertifikat di katalog lengkap`,children:[(0,Y.jsxs)(`span`,{children:[`Lihat Semua Sertifikat (`,Rn.length,`)`]}),(0,Y.jsx)(a,{size:16})]})})}),e[42]=y):y=e[42];let b,x;e[43]===Symbol.for(`react.memo_cache_sentinel`)?(b=()=>i(null),x=e=>i(e),e[43]=b,e[44]=x):(b=e[43],x=e[44]);let S;e[45]!==l||e[46]!==r?(S=(0,Y.jsx)(yr,{certificate:r,certificates:l,onClose:b,onSelectCertificate:x}),e[45]=l,e[46]=r,e[47]=S):S=e[47];let C;e[48]!==s||e[49]!==d||e[50]!==S||e[51]!==f||e[52]!==m?(C=(0,Y.jsxs)(s,{children:[d,f,m,y,S]}),e[48]=s,e[49]=d,e[50]=S,e[51]=f,e[52]=m,e[53]=C):C=e[53];let w;return e[54]!==c||e[55]!==C||e[56]!==p?(w=(0,Y.jsx)(c,{id:p,children:C}),e[54]=c,e[55]=C,e[56]=p,e[57]=w):w=e[57],w}function Cr(e){return e.platform===`kompetisi`||e.platform===`penghargaan`}function wr(e){return e.platform===`codepolitan`}function Tr(e){return e.platform===`udemy`}function Er(e){return e.featured}var Dr=W.section`
  position: relative;
  padding: ${({theme:e})=>`${e.spacing[`4xl`]} ${e.spacing.lg}`};
  background-color: ${({theme:e})=>e.colors.darkBase};

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>`${e.spacing[`2xl`]} ${e.spacing.md}`};
  }
`,Or=W.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`,kr=W.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({theme:e})=>e.spacing[`2xl`]};
`,Ar=W.h2`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes[`4xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.textHighlight};
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
  margin-bottom: ${({theme:e})=>e.spacing.xs};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes[`3xl`]};
  }
`,jr=W.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.textMuted};
  max-width: 560px;
  line-height: ${({theme:e})=>e.lineHeights.relaxed};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes.base};
  }
`,Mr=W.div`
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: ${({theme:e})=>e.spacing[`3xl`]};
  align-items: start;

  ${({theme:e})=>e.media.tablet} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({theme:e})=>e.spacing[`2xl`]};
  }
`,Nr=W.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,Pr=W.div`
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
  box-shadow: ${({theme:e})=>e.shadows.card};

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>e.spacing.lg};
  }
`,Fr=W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.md};
  flex-wrap: wrap;
  padding-bottom: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderSubtle};

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`,Ir=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,Lr=W.div`
  width: 44px;
  height: 44px;
  border-radius: ${({theme:e})=>e.radii.sm};
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.accentLime};
  flex-shrink: 0;
`,Rr=W.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,zr=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: ${({theme:e})=>e.letterSpacings.wider};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,Br=W.span`
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.textHighlight};
  word-break: break-all;

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }
`,Vr=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
`,Hr=W.button`
  position: relative;
  padding: 8px 14px;
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.radii.sm};
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  color: ${({theme:e})=>e.colors.textSecondary};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.glassHover};
    border-color: ${({theme:e})=>e.colors.borderHover};
    color: ${({theme:e})=>e.colors.textHighlight};
  }
`,Ur=W.a`
  padding: 8px 14px;
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.radii.sm};
  background-color: ${({theme:e})=>e.colors.accentMuted};
  border: 1px solid ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.accentLime};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.accentGlow};
    border-color: ${({theme:e})=>e.colors.borderHover};
  }
`,Wr=W.span`
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({theme:e})=>e.colors.accentLime};
  color: ${({theme:e})=>e.colors.textInverse};
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  pointer-events: none;
  white-space: nowrap;
  box-shadow: ${({theme:e})=>e.shadows.glow};
`,Gr=W.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  padding-top: ${({theme:e})=>e.spacing.sm};
`,Kr=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: ${({theme:e})=>e.letterSpacings.wider};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,qr=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Jr=W.a`
  width: 42px;
  height: 42px;
  border-radius: ${({theme:e})=>e.radii.sm};
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all ${({theme:e})=>e.transitions.fast};

  img {
    width: 20px;
    height: 20px;
    opacity: 0.85;
    transition: opacity ${({theme:e})=>e.transitions.fast};
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.glassHover};
    border-color: ${({theme:e})=>e.colors.borderHover};
    transform: translateY(-2px);

    img {
      opacity: 1;
    }
  }
`,Yr=W.form`
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.spacing[`2xl`]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
  box-shadow: ${({theme:e})=>e.shadows.card};

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>e.spacing.lg};
  }
`,Xr=W.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Zr=W.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.textHighlight};
`,Qr=W.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textMuted};
  line-height: ${({theme:e})=>e.lineHeights.normal};
`,$r=W.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ei=W.label`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.textSecondary};
  letter-spacing: 0.02em;
`,ti=W.input`
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: 12px 16px;
  color: ${({theme:e})=>e.colors.textHighlight};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-family: ${({theme:e})=>e.fonts.body};
  transition: all ${({theme:e})=>e.transitions.fast};
  outline: none;

  &::placeholder {
    color: ${({theme:e})=>e.colors.textMuted};
    opacity: 0.6;
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.accentLime};
    box-shadow: 0 0 10px ${({theme:e})=>e.colors.accentGlow};
    background-color: ${({theme:e})=>e.colors.glassElevated};
  }
`,ni=W.select`
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: 12px 16px;
  color: ${({theme:e})=>e.colors.textHighlight};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-family: ${({theme:e})=>e.fonts.body};
  transition: all ${({theme:e})=>e.transitions.fast};
  outline: none;
  cursor: pointer;

  option {
    background-color: ${({theme:e})=>e.colors.darkBase};
    color: ${({theme:e})=>e.colors.textHighlight};
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.accentLime};
    box-shadow: 0 0 10px ${({theme:e})=>e.colors.accentGlow};
    background-color: ${({theme:e})=>e.colors.glassElevated};
  }
`,ri=W.textarea`
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: 12px 16px;
  color: ${({theme:e})=>e.colors.textHighlight};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-family: ${({theme:e})=>e.fonts.body};
  transition: all ${({theme:e})=>e.transitions.fast};
  outline: none;
  resize: vertical;
  min-height: 110px;

  &::placeholder {
    color: ${({theme:e})=>e.colors.textMuted};
    opacity: 0.6;
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.accentLime};
    box-shadow: 0 0 10px ${({theme:e})=>e.colors.accentGlow};
    background-color: ${({theme:e})=>e.colors.glassElevated};
  }
`,ii=W.button`
  background-color: ${({theme:e})=>e.colors.accentLime};
  color: ${({theme:e})=>e.colors.textInverse};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  padding: 14px 28px;
  border-radius: ${({theme:e})=>e.radii.sm};
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.xs};
  transition: all ${({theme:e})=>e.transitions.fast};
  margin-top: ${({theme:e})=>e.spacing.xs};

  &:hover:not(:disabled) {
    filter: brightness(1.08);
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,ai=W.span`
  display: inline-flex;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,oi=W.div`
  background-color: ${({theme:e})=>e.colors.accentMuted};
  border: 1px solid ${({theme:e})=>e.colors.accentLime};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.accentLime};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  line-height: 1.4;
`;function si(){let e=(0,J.c)(26),[t,n]=(0,q.useState)(!1),r;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=async()=>{try{await navigator.clipboard.writeText(Z.email),n(!0),setTimeout(()=>n(!1),2e3)}catch{let e=document.createElement(`textarea`);e.value=Z.email,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),n(!0),setTimeout(()=>n(!1),2e3)}},e[0]=r):r=e[0];let i=r,a;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,Y.jsx)(`div`,{children:(0,Y.jsx)(X,{text:Z.availability})}),e[1]=a):a=e[1];let o;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,Y.jsx)(Lr,{children:(0,Y.jsx)(D,{size:20})}),e[2]=o):o=e[2];let l;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,Y.jsxs)(Ir,{children:[o,(0,Y.jsxs)(Rr,{children:[(0,Y.jsx)(zr,{children:`Email Utama`}),(0,Y.jsx)(Br,{children:Z.email})]})]}),e[3]=l):l=e[3];let u;e[4]===t?u=e[5]:(u=t?(0,Y.jsx)(s,{size:14}):(0,Y.jsx)(j,{size:14}),e[4]=t,e[5]=u);let d=t?`Tersalin`:`Salin`,f;e[6]===d?f=e[7]:(f=(0,Y.jsx)(`span`,{children:d}),e[6]=d,e[7]=f);let p;e[8]===t?p=e[9]:(p=t&&(0,Y.jsx)(Wr,{children:`Tersalin ke Clipboard!`}),e[8]=t,e[9]=p);let m;e[10]!==u||e[11]!==f||e[12]!==p?(m=(0,Y.jsxs)(Hr,{type:`button`,onClick:i,"aria-label":`Salin alamat email`,children:[u,f,p]}),e[10]=u,e[11]=f,e[12]=p,e[13]=m):m=e[13];let h;e[14]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,Y.jsxs)(Ur,{href:`mailto:${Z.email}`,"aria-label":`Kirim email via mail client`,children:[(0,Y.jsx)(c,{size:14}),(0,Y.jsx)(`span`,{children:`Buka`})]}),e[14]=h):h=e[14];let g;e[15]===m?g=e[16]:(g=(0,Y.jsxs)(Fr,{children:[l,(0,Y.jsxs)(Vr,{children:[m,h]})]}),e[15]=m,e[16]=g);let _;e[17]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,Y.jsx)(Lr,{children:(0,Y.jsx)(T,{size:20})}),e[17]=_):_=e[17];let v;e[18]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,Y.jsxs)(Ir,{children:[_,(0,Y.jsxs)(Rr,{children:[(0,Y.jsx)(zr,{children:`WhatsApp Langsung`}),(0,Y.jsx)(Br,{children:`+62 895 3256 03726`})]})]}),e[18]=v):v=e[18];let b;e[19]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,Y.jsxs)(Fr,{children:[v,(0,Y.jsx)(Vr,{children:(0,Y.jsxs)(Ur,{href:`https://wa.me/62895325603726`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Kirim pesan WhatsApp`,children:[(0,Y.jsx)(c,{size:14}),(0,Y.jsx)(`span`,{children:`Chat`})]})})]}),e[19]=b):b=e[19];let x;e[20]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,Y.jsx)(Lr,{children:(0,Y.jsx)(y,{size:20})}),e[20]=x):x=e[20];let S;e[21]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,Y.jsx)(Fr,{children:(0,Y.jsxs)(Ir,{children:[x,(0,Y.jsxs)(Rr,{children:[(0,Y.jsx)(zr,{children:`Domisili & Zona Waktu`}),(0,Y.jsx)(Br,{children:Z.location})]})]})}),e[21]=S):S=e[21];let C;e[22]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,Y.jsx)(Kr,{children:`Terhubung di Saluran Lain`}),e[22]=C):C=e[22];let w;e[23]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,Y.jsxs)(Gr,{children:[C,(0,Y.jsx)(qr,{children:Z.socials.map(ci)})]}),e[23]=w):w=e[23];let E;return e[24]===g?E=e[25]:(E=(0,Y.jsxs)(Nr,{children:[a,(0,Y.jsxs)(Pr,{children:[g,b,S,w]})]}),e[24]=g,e[25]=E),E}function ci(e){return(0,Y.jsx)(Jr,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,title:e.label,"aria-label":e.label,children:(0,Y.jsx)(`img`,{src:e.icon,alt:e.label})},e.name)}function li(){let[e,t]=(0,q.useState)(``),[n,r]=(0,q.useState)(``),[i,a]=(0,q.useState)(`Frontend Web Application (React / Vue / TypeScript)`),[s,c]=(0,q.useState)(``),[u,d]=(0,q.useState)(!1),[p,m]=(0,q.useState)(`idle`),h=()=>{let a=`[Portfolio Inquiry] ${i} - ${e}`,o=`Nama: ${e}\nEmail: ${n}\nKebutuhan Layanan: ${i}\n\nPesan:\n${s}`,l=`mailto:${Z.email}?subject=${encodeURIComponent(a)}&body=${encodeURIComponent(o)}`;window.location.href=l,m(`fallback`),t(``),r(``),c(``),setTimeout(()=>m(`idle`),7e3)};return(0,Y.jsxs)(Yr,{onSubmit:async a=>{a.preventDefault(),d(!0),m(`idle`);try{(await(await fetch(`https://api.web3forms.com/submit`,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({access_key:`9211c42f-d89f-43fc-b02f-b258671752b0`,name:e,email:n,subject:`[Portfolio Inquiry] ${i} - ${e}`,message:s,from_name:`Muhamad Rayhan Portfolio`})})).json()).success?(m(`direct`),t(``),r(``),c(``),setTimeout(()=>m(`idle`),7e3)):h()}catch{h()}finally{d(!1)}},children:[(0,Y.jsxs)(Xr,{children:[(0,Y.jsx)(Zr,{children:`Kirim Pesan Langsung`}),(0,Y.jsx)(Qr,{children:`Isi formulir di bawah ini untuk memulai obrolan proyek atau pertanyaan teknis.`})]}),p===`direct`&&(0,Y.jsxs)(oi,{role:`status`,children:[(0,Y.jsx)(o,{size:18}),(0,Y.jsxs)(`span`,{children:[`Pesan Anda telah berhasil terkirim langsung! Saya akan membalas segera ke email Anda (`,n||`kontak`,`).`]})]}),p===`fallback`&&(0,Y.jsxs)(oi,{role:`status`,children:[(0,Y.jsx)(o,{size:18}),(0,Y.jsx)(`span`,{children:`Pesan Anda telah disiapkan melalui aplikasi email. Terima kasih telah menghubungi!`})]}),(0,Y.jsxs)($r,{children:[(0,Y.jsx)(ei,{htmlFor:`contact-name`,children:`Nama Lengkap`}),(0,Y.jsx)(ti,{id:`contact-name`,type:`text`,placeholder:`Nama Anda atau Perusahaan`,value:e,onChange:e=>t(e.target.value),required:!0,disabled:u})]}),(0,Y.jsxs)($r,{children:[(0,Y.jsx)(ei,{htmlFor:`contact-email`,children:`Alamat Email`}),(0,Y.jsx)(ti,{id:`contact-email`,type:`email`,placeholder:`nama@perusahaan.com`,value:n,onChange:e=>r(e.target.value),required:!0,disabled:u})]}),(0,Y.jsxs)($r,{children:[(0,Y.jsx)(ei,{htmlFor:`contact-subject`,children:`Kebutuhan / Layanan`}),(0,Y.jsxs)(ni,{id:`contact-subject`,value:i,onChange:e=>a(e.target.value),disabled:u,children:[(0,Y.jsx)(`option`,{value:`Frontend Web Application (React / Vue / TypeScript)`,children:`Frontend Web Application (React / Vue / TypeScript)`}),(0,Y.jsx)(`option`,{value:`Landing Page & Design Implementation`,children:`Landing Page & Design Implementation`}),(0,Y.jsx)(`option`,{value:`Full-time / Contract / Freelance Opportunity`,children:`Peluang Kerja (Full-time / Contract / Freelance)`}),(0,Y.jsx)(`option`,{value:`General Technical Inquiry`,children:`Pertanyaan Teknis & Konsultasi Lainnya`})]})]}),(0,Y.jsxs)($r,{children:[(0,Y.jsx)(ei,{htmlFor:`contact-message`,children:`Pesan / Detail Kebutuhan`}),(0,Y.jsx)(ri,{id:`contact-message`,rows:5,placeholder:`Ceritakan gambaran singkat proyek, ruang lingkup teknis, atau penawaran kerja sama...`,value:s,onChange:e=>c(e.target.value),required:!0,disabled:u})]}),(0,Y.jsx)(ii,{type:`submit`,disabled:u,children:u?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(ai,{children:(0,Y.jsx)(f,{size:16})}),(0,Y.jsx)(`span`,{children:`Mengirim Pesan...`})]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`span`,{children:`Kirim Pesan`}),(0,Y.jsx)(l,{size:15})]})})]})}var ui=[.4,0,.2,1];function di(){let e=(0,J.c)(7),t,n,r,i;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t={opacity:0,y:20},n={opacity:1,y:0},r={once:!0,margin:`-50px`},i={duration:.4,ease:ui},e[0]=t,e[1]=n,e[2]=r,e[3]=i):(t=e[0],n=e[1],r=e[2],i=e[3]);let a;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,Y.jsx)(K.div,{initial:t,whileInView:n,viewport:r,transition:i,children:(0,Y.jsxs)(kr,{children:[(0,Y.jsx)(Ar,{children:`Let's Connect`}),(0,Y.jsx)(jr,{children:`Terbuka untuk kolaborasi proyek frontend, peluang remote/freelance, atau diskusi teknis seputar arsitektur web modern.`})]})}),e[4]=a):a=e[4];let o;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,Y.jsx)(K.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:`-50px`},transition:{duration:.45,delay:.1,ease:ui},children:(0,Y.jsx)(si,{})}),e[5]=o):o=e[5];let s;return e[6]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,Y.jsx)(Dr,{id:`contact`,children:(0,Y.jsxs)(Or,{children:[a,(0,Y.jsxs)(Mr,{children:[o,(0,Y.jsx)(K.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:`-50px`},transition:{duration:.45,delay:.15,ease:ui},children:(0,Y.jsx)(li,{})})]})]})}),e[6]=s):s=e[6],s}var fi=W.footer`
  width: 100%;
  border-top: 1px solid ${({theme:e})=>e.colors.borderGlass};
  background-color: ${({theme:e})=>e.colors.darkBase};
  padding: ${({theme:e})=>`${e.spacing[`2xl`]} ${e.spacing.lg}`};
  margin-top: auto;

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>`${e.spacing.xl} ${e.spacing.md}`};
  }
`,pi=W.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xl};
`,mi=W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.lg};

  ${({theme:e})=>e.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`,hi=W.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,gi=W.a`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.textHighlight};
  text-decoration: none;
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};

  span {
    color: ${({theme:e})=>e.colors.accentLime};
  }
`,_i=W.p`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
`,vi=W.nav`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
  flex-wrap: wrap;

  ${({theme:e})=>e.media.mobile} {
    gap: ${({theme:e})=>e.spacing.md};
  }
`,yi=W.a`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textMuted};
  text-decoration: none;
  transition: color ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.accentLime};
  }
`,bi=W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.md};
  padding-top: ${({theme:e})=>e.spacing.lg};
  border-top: 1px solid ${({theme:e})=>e.colors.borderSubtle};
`,xi=W.p`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
`,Si=W.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e})=>e.colors.textSecondary};
  background-color: ${({theme:e})=>e.colors.glass};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.full};
  padding: 6px 14px;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.glassHover};
    border-color: ${({theme:e})=>e.colors.borderHover};
    color: ${({theme:e})=>e.colors.textHighlight};
    transform: translateY(-2px);
  }
`,Ci=[{label:`Home`,href:`#hero`},{label:`Projects`,href:`#projects`},{label:`Skills`,href:`#skills`},{label:`Certificates`,href:`#certificates`},{label:`Contact`,href:`#contact`}];function wi(){let e=(0,J.c)(16),t=L().pathname===`/`,n=Ti,i;e[0]===t?i=e[1]:(i=t?(0,Y.jsxs)(gi,{href:`#hero`,children:[`Rayhan`,(0,Y.jsx)(`span`,{children:`.`})]}):(0,Y.jsxs)(gi,{as:B,to:`/`,children:[`Rayhan`,(0,Y.jsx)(`span`,{children:`.`})]}),e[0]=t,e[1]=i);let a;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,Y.jsxs)(_i,{children:[`© `,new Date().getFullYear(),` Muhamad Rayhan. All rights reserved.`]}),e[2]=a):a=e[2];let o;e[3]===i?o=e[4]:(o=(0,Y.jsxs)(hi,{children:[i,a]}),e[3]=i,e[4]=o);let s;e[5]===t?s=e[6]:(s=Ci.map(e=>t?(0,Y.jsx)(yi,{href:e.href,children:e.label},e.href):(0,Y.jsx)(yi,{as:B,to:`/${e.href}`,children:e.label},e.href)),e[5]=t,e[6]=s);let c;e[7]===s?c=e[8]:(c=(0,Y.jsx)(vi,{"aria-label":`Footer Navigasi`,children:s}),e[7]=s,e[8]=c);let l;e[9]!==o||e[10]!==c?(l=(0,Y.jsxs)(mi,{children:[o,c]}),e[9]=o,e[10]=c,e[11]=l):l=e[11];let u;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,Y.jsx)(xi,{children:`Crafted with React 19, TypeScript & styled-components`}),e[12]=u):u=e[12];let d;e[13]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,Y.jsxs)(bi,{children:[u,(0,Y.jsxs)(Si,{type:`button`,onClick:n,"aria-label":`Kembali ke bagian atas halaman`,children:[(0,Y.jsx)(`span`,{children:`Back to Top`}),(0,Y.jsx)(r,{size:14})]})]}),e[13]=d):d=e[13];let f;return e[14]===l?f=e[15]:(f=(0,Y.jsx)(fi,{children:(0,Y.jsxs)(pi,{children:[l,d]})}),e[14]=l,e[15]=f),f}function Ti(){window.scrollTo({top:0,behavior:`smooth`})}var Ei=W.div`
  min-height: 100vh;
  background-color: ${({theme:e})=>e.colors.darkBase};
  color: ${({theme:e})=>e.colors.textPrimary};
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  overflow-x: hidden;
`,Di=W.main`
  flex: 1;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;function Oi(){let e=(0,J.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,Y.jsx)(Ke,{}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,Y.jsxs)(Ei,{children:[t,(0,Y.jsxs)(Di,{children:[(0,Y.jsx)(ht,{}),(0,Y.jsx)(Yt,{}),(0,Y.jsx)(Fn,{}),(0,Y.jsx)(Sr,{}),(0,Y.jsx)(di,{})]}),(0,Y.jsx)(wi,{})]}),e[1]=n):n=e[1],n}var ki=W.div`
  min-height: 100vh;
  background-color: ${({theme:e})=>e.colors.darkBase};
  color: ${({theme:e})=>e.colors.textPrimary};
  display: flex;
  flex-direction: column;
`,Ai=W.main`
  flex: 1;
  width: 100%;
  padding: ${({theme:e})=>`${e.spacing[`4xl`]} ${e.spacing.lg}`};
  padding-top: 120px;

  ${({theme:e})=>e.media.mobile} {
    padding-top: 100px;
    padding-left: ${({theme:e})=>e.spacing.md};
    padding-right: ${({theme:e})=>e.spacing.md};
  }
`,ji=W.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`,Mi=W(B)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textMuted};
  text-decoration: none;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  transition: color ${({theme:e})=>e.transitions.fast},
    transform ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.accentLime};
    transform: translateX(-3px);
  }
`,Ni=W.div`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,Pi=W.h1`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes[`4xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.textHighlight};
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
  margin-bottom: ${({theme:e})=>e.spacing.xs};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes[`3xl`]};
  }
`,Fi=W.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.textMuted};
  max-width: 540px;
  line-height: ${({theme:e})=>e.lineHeights.relaxed};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes.base};
  }
`,Ii=W.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Li=W.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.textMuted};
  display: flex;
  align-items: center;
  pointer-events: none;
`,Ri=W.input`
  width: 100%;
  padding: 12px 42px 12px 42px;
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.full};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  outline: none;
  transition: all ${({theme:e})=>e.transitions.fast};

  &::placeholder {
    color: ${({theme:e})=>e.colors.textMuted};
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.accentLime};
    box-shadow: ${({theme:e})=>e.shadows.glow};
    background-color: ${({theme:e})=>e.colors.glass};
  }
`,zi=W.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.textMuted};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: ${({theme:e})=>e.radii.full};
  transition: color ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.accentLime};
  }
`,Bi=W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing[`2xl`]};
`,Vi=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  flex-wrap: wrap;
`,Hi=W.button`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  padding: 6px 16px;
  border-radius: ${({theme:e})=>e.radii.full};
  cursor: pointer;
  background-color: ${({theme:e,$active:t})=>t?e.colors.accentMuted:`transparent`};
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.border:e.colors.borderSubtle};
  color: ${({theme:e,$active:t})=>t?e.colors.accentLime:e.colors.textMuted};
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    color: ${({theme:e,$active:t})=>t?e.colors.accentLime:e.colors.textSecondary};
  }
`,Ui=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
`,Wi=W.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.spacing.lg};

  @media (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({theme:e})=>e.media.tablet} {
    grid-template-columns: 1fr;
  }
`,Gi=W.div`
  padding: ${({theme:e})=>e.spacing[`3xl`]} 0;
  text-align: center;
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px dashed ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  margin-top: ${({theme:e})=>e.spacing.lg};
`,Ki=W.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.textHighlight};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,qi=W.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textMuted};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  max-width: 440px;
  margin-left: auto;
  margin-right: auto;
`,Ji=W.button`
  background-color: transparent;
  color: ${({theme:e})=>e.colors.accentLime};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: 8px 18px;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.accentMuted};
    border-color: ${({theme:e})=>e.colors.accentLime};
    color: ${({theme:e})=>e.colors.textHighlight};
  }
`,Yi=[.4,0,.2,1];function Xi(){let e=(0,J.c)(51),[t,n]=(0,q.useState)(`all`),[r,i]=(0,q.useState)(``),a;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=[],e[0]=a):a=e[0],(0,q.useEffect)(Qi,a);let o;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(o=[{value:`all`,label:`All`},{value:`app`,label:`Web App`},{value:`landing`,label:`Landing Page`},{value:`interactive`,label:`Interactive`}],e[1]=o):o=e[1];let s=o,c,l,u,d,f,p,m,h;if(e[2]!==t||e[3]!==r){let a=r.trim().toLowerCase(),o=Q.filter(e=>{if(t!==`all`&&e.category!==t)return!1;if(!a)return!0;let n=e.title.toLowerCase().includes(a),r=e.description.toLowerCase().includes(a),i=e.collab?.toLowerCase().includes(a)??!1,o=e.skills.some(e=>e.toLowerCase().includes(a));return n||r||i||o});u=ki,e[12]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,Y.jsx)(Ke,{}),e[12]=h):h=e[12],l=Ai,c=ji;let g,_,y;e[13]===Symbol.for(`react.memo_cache_sentinel`)?(g={opacity:0,x:-10},_={opacity:1,x:0},y={duration:.3,ease:Yi},e[13]=g,e[14]=_,e[15]=y):(g=e[13],_=e[14],y=e[15]),e[16]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,Y.jsx)(K.div,{initial:g,animate:_,transition:y,children:(0,Y.jsxs)(Mi,{to:`/`,children:[(0,Y.jsx)(v,{size:16}),(0,Y.jsx)(`span`,{children:`Kembali ke Beranda`})]})}),e[16]=d):d=e[16];let b,C,w;e[17]===Symbol.for(`react.memo_cache_sentinel`)?(b={opacity:0,y:15},C={opacity:1,y:0},w={duration:.4,ease:Yi},e[17]=b,e[18]=C,e[19]=w):(b=e[17],C=e[18],w=e[19]),e[20]===Symbol.for(`react.memo_cache_sentinel`)?(f=(0,Y.jsx)(K.div,{initial:b,animate:C,transition:w,children:(0,Y.jsxs)(Ni,{children:[(0,Y.jsx)(Pi,{children:`All Projects`}),(0,Y.jsx)(Fi,{children:`Seluruh katalog proyek aplikasi web, landing page, dan eksperimen interaktif yang pernah dibangun.`})]})}),e[20]=f):f=e[20];let T,E,D;e[21]===Symbol.for(`react.memo_cache_sentinel`)?(T={opacity:0,y:10},E={opacity:1,y:0},D={duration:.4,delay:.1,ease:Yi},e[21]=T,e[22]=E,e[23]=D):(T=e[21],E=e[22],D=e[23]);let O;e[24]===Symbol.for(`react.memo_cache_sentinel`)?(O=(0,Y.jsx)(Li,{children:(0,Y.jsx)(S,{size:16})}),e[24]=O):O=e[24];let k;e[25]===Symbol.for(`react.memo_cache_sentinel`)?(k=e=>i(e.target.value),e[25]=k):k=e[25];let A,j;e[26]===r?(A=e[27],j=e[28]):(A=(0,Y.jsx)(Ri,{type:`text`,placeholder:`Cari proyek atau teknologi (React, Vue, TS...)...`,value:r,onChange:k,"aria-label":`Cari proyek`}),j=r&&(0,Y.jsx)(zi,{type:`button`,onClick:()=>i(``),"aria-label":`Hapus pencarian`,children:(0,Y.jsx)(x,{size:15})}),e[26]=r,e[27]=A,e[28]=j);let M;e[29]!==A||e[30]!==j?(M=(0,Y.jsxs)(Ii,{children:[O,A,j]}),e[29]=A,e[30]=j,e[31]=M):M=e[31];let N;e[32]===t?N=e[33]:(N=(0,Y.jsx)(Vi,{role:`tablist`,"aria-label":`Filter kategori proyek`,children:s.map(e=>(0,Y.jsx)(Hi,{$active:t===e.value,onClick:()=>n(e.value),role:`tab`,"aria-selected":t===e.value,children:e.label},e.value))}),e[32]=t,e[33]=N);let P=(0,Y.jsxs)(Bi,{children:[N,(0,Y.jsxs)(Ui,{children:[`Menampilkan `,o.length,` dari `,Q.length,` proyek`]})]});e[34]!==M||e[35]!==P?(p=(0,Y.jsxs)(K.div,{initial:T,animate:E,transition:D,children:[M,P]}),e[34]=M,e[35]=P,e[36]=p):p=e[36],m=o.length>0?(0,Y.jsx)(Wi,{children:o.map(Zi)}):(0,Y.jsxs)(Gi,{children:[(0,Y.jsx)(Ki,{children:`Tidak ada proyek yang cocok`}),(0,Y.jsxs)(qi,{children:[`Tidak ditemukan proyek yang cocok dengan kata kunci “`,r,`”`,t===`all`?``:` pada kategori ${t}`,`.`]}),(0,Y.jsx)(Ji,{type:`button`,onClick:()=>{i(``),n(`all`)},children:`Reset Filter & Pencarian`})]}),e[2]=t,e[3]=r,e[4]=c,e[5]=l,e[6]=u,e[7]=d,e[8]=f,e[9]=p,e[10]=m,e[11]=h}else c=e[4],l=e[5],u=e[6],d=e[7],f=e[8],p=e[9],m=e[10],h=e[11];let g;e[37]!==c||e[38]!==d||e[39]!==f||e[40]!==p||e[41]!==m?(g=(0,Y.jsxs)(c,{children:[d,f,p,m]}),e[37]=c,e[38]=d,e[39]=f,e[40]=p,e[41]=m,e[42]=g):g=e[42];let _;e[43]!==l||e[44]!==g?(_=(0,Y.jsx)(l,{children:g}),e[43]=l,e[44]=g,e[45]=_):_=e[45];let y;e[46]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,Y.jsx)(wi,{}),e[46]=y):y=e[46];let b;return e[47]!==u||e[48]!==h||e[49]!==_?(b=(0,Y.jsxs)(u,{children:[h,_,y]}),e[47]=u,e[48]=h,e[49]=_,e[50]=b):b=e[50],b}function Zi(e,t){return(0,Y.jsx)(Wt,{project:e,index:t},e.id)}function Qi(){window.scrollTo(0,0)}var $i={"uang-kas-kampus":{projectId:`uang-kas-kampus`,tagline:`Sistem manajemen kas kelas kampus fullstack dengan pelacakan multi-semester & audit mutasi real-time.`,problem:`Pencatatan kas mahasiswa secara manual sering kali menimbulkan selisih saldo, kesulitan mengelola pergantian semester akademik, ketiadaan transparansi pengeluaran belanja kelas, serta lambatnya proses rekapitulasi data mahasiswa.`,solution:`Membangun aplikasi web fullstack (Vue 3 + Node.js/Express) dengan TanStack Query untuk caching data reaktif. Mengimplementasikan kalkulasi saldo kas bersih real-time, otentikasi PIN bendahara, drawer riwayat audit mutasi uang keluar-masuk, serta modul impor/ekspor spreadsheet Excel.`,architecture:[{title:`Multi-Semester Context & Selective Query Invalidation`,reason:`Memisahkan data per semester akademik dan mengotomatiskan refetching query kas, pengeluaran, dan history seketika setelah mutasi berhasil.`},{title:`Modular Vue 3 Composables (useKas, usePengeluaran, useSemester)`,reason:`Mengisolasi logika bisnis dan kontrak API ke dalam modul mandiri, menjaga komponen UI tetap deklaratif dan mudah dipelihara.`},{title:`Secured Express REST API with Header PIN Authentication`,reason:`Mengamankan mutasi kritis (pencatatan belanja kas dan pergantian status semester) menggunakan verifikasi PIN bendahara via header x-admin-pin.`},{title:`Automated Spreadsheet Parsing & Export Engine`,reason:`Memproses upload file .xlsx/.csv langsung di browser dan server untuk migrasi data massal mahasiswa dengan validasi baris instan.`}],keyFeatures:[`Kalkulasi saldo kas bersih real-time: (Kas Mahasiswa + Pemasukan Lain) - Total Belanja`,`Manajemen arsip dan switcher multi-semester aktif tanpa reload halaman`,`Audit trail mutasi uang keluar dan masuk via drawer riwayat interaktif`,`Impor dan ekspor rekapitulasi kas kelas ke format spreadsheet Microsoft Excel (.xlsx)`,`Dual view responsif: Data table bernomor di desktop dan kartu interaktif di mobile`],metricsOrLearnings:`Penerapan query caching dan invalidasi selektif memangkas waktu tunggu pembaruan data hingga di bawah 200ms saat bendahara mencatat transaksi baru.`,codeSnippet:{title:`Arsitektur Composable: Manajemen Belanja Kas (Cash Out)`,filename:`src/composables/usePengeluaran.js`,language:`javascript`,code:`import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';
import axios from 'axios';

export function usePengeluaran(semesterId) {
  const queryClient = useQueryClient();

  const pengeluaranQuery = useQuery({
    queryKey: ['pengeluaran', semesterId],
    queryFn: async () => {
      const res = await axios.get('/api/pengeluaran', {
        params: { semesterId: semesterId.value },
      });
      return res.data;
    },
  });

  const createPengeluaran = useMutation({
    mutationFn: (newExpense) =>
      axios.post('/api/pengeluaran', newExpense.payload, {
        headers: { 'x-admin-pin': newExpense.pin },
      }),
    onSuccess: () => {
      // Invalidate query terkait agar saldo bersih langsung sinkron
      queryClient.invalidateQueries(['pengeluaran']);
      queryClient.invalidateQueries(['kas']);
      queryClient.invalidateQueries(['history']);
    },
  });

  return { pengeluaranQuery, createPengeluaran };
}`,explanation:`Composable usePengeluaran mengelola fetching dan mutasi uang keluar kelas secara reaktif, sekaligus mengotomatiskan invalidasi cache saldo kas bersih seketika transaksi baru tersimpan.`}},"dapur-rasa":{projectId:`dapur-rasa`,tagline:`Aplikasi e-commerce kuliner modern dengan instant search & state caching.`,problem:`Aplikasi katalog makanan membutuhkan pencarian item instan tanpa memicu re-render berat, sinkronisasi state keranjang belanja yang persisten di seluruh rute, dan penghapusan network request berulang untuk data menu yang relatif statis.`,solution:`Membangun antarmuka reaktif menggunakan Vue 3 Composition API. State keranjang dikelola secara modular via Pinia store, sementara fetching dan caching data menu ditangani oleh TanStack Vue Query dengan konfigurasi stale-while-revalidate.`,architecture:[{title:`Vue 3 Composition API & Composables`,reason:`Memisahkan logika pencarian, filter kategori, dan pagination ke dalam fungsi composable terisolasi, menjaga komponen presentasional tetap ramping.`},{title:`Pinia Modular Store`,reason:`Menyediakan type safety TypeScript penuh tanpa boilerplate mutations/actions yang rumit seperti Vuex, dengan sinkronisasi local storage otomatis.`},{title:`TanStack Vue Query`,reason:`Mengurangi network call hingga 60% melalui caching memori cerdas, background refetching saat window focus, dan penanganan loading/error state terstandarisasi.`},{title:`Vue Router Navigation Guards`,reason:`Menjamin validasi parameter rute sebelum rendering halaman menu dan checkout dilakukan.`}],keyFeatures:[`Pencarian instan dengan filtering multi-kategori real-time`,`Manajemen keranjang belanja dengan kalkulasi kuantitas dan total harga instan`,`Caching query data menu dengan mekanisme background revalidation`,`Layout responsif mobile-to-desktop dengan adaptasi grid fleksibel`],metricsOrLearnings:`Pemisahan logika filter ke dalam composables mandiri mempermudah testing fungsional dan menurunkan duplikasi kode logika antarmuka hingga 40%.`,codeSnippet:{title:`Arsitektur State: Pinia Store Keranjang Belanja`,filename:`src/stores/cart.ts`,language:`typescript`,code:`import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { CartItem, MenuItem } from '@/types';

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([]);

  const totalCount = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  function addItem(item: MenuItem) {
    const existing = items.value.find((i) => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.value.push({ ...item, quantity: 1 });
    }
  }

  function updateQuantity(id: string, delta: number) {
    const target = items.value.find((i) => i.id === id);
    if (!target) return;
    target.quantity += delta;
    if (target.quantity <= 0) {
      items.value = items.value.filter((i) => i.id !== id);
    }
  }

  return { items, totalCount, totalPrice, addItem, updateQuantity };
});`,explanation:`Menggunakan Vue 3 Composition API di dalam Pinia untuk reaktivitas murni, type safety penuh tanpa mutasi Vuex lama, dan pemisahan state cart dari presentasi UI.`}},"fast-react-pizza":{projectId:`fast-react-pizza`,tagline:`Sistem pemesanan pizza interaktif dengan pelacakan order dan sinkronisasi global state.`,problem:`Alur pemesanan makanan cepat saji membutuhkan pembaruan kuantitas produk secara instan, validasi keranjang belanja sebelum checkout, navigasi multi-step tanpa reload, dan pelacakan status pesanan berbasis ID unik.`,solution:`Mengembangkan Single Page Application (SPA) berbasis React 18 dengan Redux Toolkit untuk mengelola state keranjang belanja multi-level. Integrasi React Router v6 Data Loaders digunakan untuk menangani pengambilan data menu dan submit pesanan secara deklaratif.`,architecture:[{title:`Redux Toolkit (RTK) Slice Pattern`,reason:`Mengorganisir state keranjang belanja (tambah, kurangi kuantitas, hapus item, reset) ke dalam slice independen dengan reducers yang bersih dan terprediksi.`},{title:`React Router Data Loaders & Actions`,reason:`Memisahkan proses fetching data dari lifecycle komponen (useEffect) dan memindahkan logika submit form order langsung ke route actions.`},{title:`Tailwind CSS Utility Architecture`,reason:`Memastikan konsistensi sistem spacing dan breakpoint responsif untuk alur pemesanan cepat pada perangkat mobile.`}],keyFeatures:[`Sinkronisasi kuantitas pesanan pizza secara live di header dan daftar menu`,`Formulir pemesanan dengan validasi nomor telepon dan geolokasi otomatis`,`Halaman pelacakan status pesanan real-time berbasis order ID`,`Prioritas pesanan (priority order toggle) dengan kalkulasi biaya tambahan otomatis`],metricsOrLearnings:`Pemanfaatan React Router Data Loaders menghilangkan "waterfall request" dan menyederhanakan penanganan asynchronous error boundaries.`},"danu-satya":{projectId:`danu-satya`,tagline:`Situs web portofolio profesional untuk Graphic & Motion Designer.`,problem:`Klien desainer membutuhkan platform showcase karya yang berkarakter gelap, memuat aset media grafis resolusi tinggi tanpa penundaan rendering awal (LCP), dan memiliki tipografi yang presisi.`,solution:`Membangun portofolio menggunakan React 19 dan TypeScript yang dipadukan dengan Tailwind CSS v4. Mengoptimalkan gambar ke format AVIF/WebP modern dan mengonfigurasi domain produksi khusus.`,architecture:[{title:`React 19 & TypeScript Strict Mode`,reason:`Menjamin stabilitas tipe data untuk metadata proyek dan media showcase, mencegah runtime errors.`},{title:`Tailwind CSS v4 Layout Engine`,reason:`Pemanfaatan CSS variables modern untuk membangun palet tema gelap dengan kontras visual WCAG-compliant.`},{title:`Custom Domain & Production DNS`,reason:`Konfigurasi DNS record A/CNAME dan sertifikat SSL/TLS otomatis untuk domain danusatya.my.id.`}],keyFeatures:[`Showcase galeri desain responsif dengan grid adaptif`,`Media preview berkualitas tinggi dengan pemuatan gambar teroptimasi`,`Tipografi modern dan penataan hierarki visual yang tajam`,`Tautan kontak langsung dan saluran media sosial terintegrasi`],metricsOrLearnings:`Optimasi format aset grafis ke AVIF berhasil memangkas ukuran transfer media hingga 65% tanpa penurunan ketajaman visual.`},"siap-kerja":{projectId:`siap-kerja`,tagline:`Platform kesiapan karir kolaboratif dengan integrasi kecerdasan buatan.`,problem:`Pencari kerja pemula kesulitan memetakan jalur karir yang sesuai dengan keterampilan mereka, membutuhkan rekomendasi jalur belajar terarah, serta modul persiapan wawancara terpadu.`,solution:`Berkolaborasi dalam tim lintas disiplin (FE, BE, UI/UX) untuk membangun platform web interaktif. Mengintegrasikan endpoint Google Gemini AI untuk analisis profil pengguna dan rekomendasi karir cerdas.`,architecture:[{title:`Team Git Collaboration Workflow`,reason:`Menerapkan feature branch, pull request reviews, dan integrasi kode terstruktur bersama tim FE/BE.`},{title:`Redux Toolkit Asynchronous Thunks`,reason:`Mengelola state asynchronous kompleks saat memproses permintaan analisis rekomendasi karir dari model AI.`},{title:`Framer Motion Interaction`,reason:`Memberikan umpan balik visual yang responsif pada transisi kuis asesmen dan kartu rekomendasi.`}],keyFeatures:[`Asesmen minat dan kompetensi dengan visualisasi skor interaktif`,`Rekomendasi karir berbasis model AI dengan penjabaran roadmap belajar`,`Modul persiapan karir dan tips wawancara terstruktur`,`Dashboard pengguna responsif untuk melacak progres kesiapan kerja`],metricsOrLearnings:`Kolaborasi tim lintas divisi melatih sinkronisasi kontrak API (API schema contract) dan kedisiplinan alur merge conflict resolution.`},"tk-paud-permata":{projectId:`tk-paud-permata`,tagline:`Profil web resmi institusi pendidikan anak usia dini dengan domain kustom.`,problem:`Institusi pendidikan membutuhkan media informasi resmi yang mudah diakses orang tua murid melalui perangkat seluler, memuat program belajar, dan terindeks di mesin pencari lokal.`,solution:`Membangun situs web profil institusi berbasis web standards (HTML5/CSS3/JavaScript) dengan struktur semantik ramah SEO, tata letak mobile-first, dan domain produksi resmi permatabelajar.my.id.`,architecture:[{title:`Semantic HTML5 & OpenGraph Metadata`,reason:`Memastikan dokumen terstruktur rapi untuk mesin perayap (web crawlers) dan menghasilkan pratinjau media sosial yang akurat.`},{title:`Mobile-First Responsive CSS`,reason:`Menyesuaikan antarmuka secara optimal untuk orang tua murid yang mayoritas mengakses via smartphone.`}],keyFeatures:[`Ringkasan program kurikulum dan kegiatan belajar anak`,`Galeri fasilitas sekolah dan profil pendidik`,`Integrasi Google Maps lokasi sekolah dan tombol kontak langsung`,`Informasi penerimaan peserta didik baru (PPDB)`],metricsOrLearnings:`Penyusunan markup semantik dan optimasi metadata berhasil menempatkan nama institusi pada halaman pertama hasil pencarian lokal.`},"mading-kampus":{projectId:`mading-kampus`,tagline:`Portal majalah dinding digital kampus untuk publikasi artikel dan kegiatan.`,problem:`Penyebaran informasi kegiatan mahasiswa dan publikasi tulisan kampus di media fisik terbatas jangkauannya serta sulit diarsipkan secara kronologis.`,solution:`Mengembangkan portal mading digital bersama tim pengembang. Mengimplementasikan antarmuka pembacaan artikel yang nyaman, sistem kategorisasi postingan, dan formulir pengajuan artikel.`,architecture:[{title:`Tailwind CSS Component Structure`,reason:`Mempercepat pembangunan layout artikel, kartu informasi, dan papan pengumuman dengan konsistensi styling antartim.`},{title:`REST API Data Consumption`,reason:`Menghubungkan antarmuka frontend dengan backend service untuk menampilkan data artikel terkini secara dinamis.`}],keyFeatures:[`Papan pengumuman kegiatan kampus dengan label kategori terorganisir`,`Halaman baca artikel dengan tipografi yang nyaman di mata`,`Formulir kontribusi artikel untuk mahasiswa`,`Desain responsif yang mudah dinavigasi di berbagai ukuran layar`],metricsOrLearnings:`Penyelarasan tipe data API antara frontend dan backend sejak awal sprint menghindarkan bug tipe data saat rendering daftar artikel.`},"store-radeva":{projectId:`store-radeva`,tagline:`Katalog produk e-commerce interaktif dengan manipulasi DOM murni.`,problem:`Kebutuhan demonstrasi katalog produk interaktif dengan fitur filter kategori dan keranjang belanja tanpa ketergantungan pada pustaka pihak ketiga.`,solution:`Membangun sistem katalog belanja berbasis JavaScript murni (vanilla), memanfaatkan CSS Grid untuk tata letak barang dan Event Delegation untuk interaktivitas komponen yang efisien.`,architecture:[{title:`Event Delegation Pattern`,reason:`Menempatkan listener pada container induk untuk menangani aksi klik kartu produk secara efisien tanpa membuat ratusan listener individual.`},{title:`CSS Grid & Flexbox Hybrid`,reason:`Menyusun kartu produk agar tetap sejajar dan memiliki tinggi seragam pada berbagai resolusi layar.`}],keyFeatures:[`Katalog kartu produk interaktif dengan informasi harga dan rating`,`Filter kategori produk secara instan di sisi klien`,`Pratinjau keranjang belanja dengan kalkulasi total belanja dinamis`],metricsOrLearnings:`Mendalami mekanisme dasar peramban (DOM lifecycle & event bubbling) memberikan fondasi yang kuat sebelum beralih ke framework reaktif seperti React dan Vue.`},"company-profile-isc":{projectId:`company-profile-isc`,tagline:`Landing page profil komunitas mahasiswa Informatics Study Club (ISC).`,problem:`Organisasi mahasiswa memerlukan media representasi online untuk memperkenalkan divisi teknologi, dokumentasi kegiatan, dan jadwal workshop kepada calon anggota.`,solution:`Merancang antarmuka profil organisasi dengan estetika modern, mikro-transisi CSS yang halus, dan navigasi anchor point yang jelas.`,architecture:[{title:`Modular CSS & Transitions`,reason:`Menerapkan transisi hover yang snappy pada kartu divisi dan pembicara workshop.`},{title:`Clean Architecture Pattern`,reason:`Memisahkan struktur HTML konten, styling eksternal, dan interaktivitas JavaScript secara teratur.`}],keyFeatures:[`Showcase struktur divisi teknologi (Web Dev, Networking, Mobile Dev)`,`Jadwal lokakarya dan linimasa kegiatan komunitas`,`Formulir pendaftaran anggota baru dan saluran kontak sosial`],metricsOrLearnings:`Konsistensi penataan hierarki heading dan white space terbukti meningkatkan kejelasan alur baca pengunjung.`},"pig-game":{projectId:`pig-game`,tagline:`Permainan dadu interaktif berbasis giliran dua pemain dengan manajemen logika skor.`,problem:`Pengembangan logika permainan browser berbasis giliran yang membutuhkan evaluasi kondisi menang (100 poin), akumulasi skor sementara, dan reset ronde saat angka 1 muncul.`,solution:`Mengimplementasikan seluruh alur permainan menggunakan logika JavaScript modular, manipulasi class CSS untuk penanda pemain aktif, dan penanganan event klik dadu.`,architecture:[{title:`State Machine Logic`,reason:`Mengelola giliran pemain aktif (player 0 vs player 1), skor ronde, dan skor total dalam objek state yang terisolasi.`},{title:`DOM UI Synchronization`,reason:`Sinkronisasi visual dadu animasi dan update skor secara instan setiap tombol diaktifkan.`}],keyFeatures:[`Mekanisme lempar dadu acak dengan aset visual dadu dinamis`,`Fitur simpan skor (hold score) dan pengalihan giliran otomatis`,`Deteksi otomatis kondisi kemenangan 100 poin dengan penonaktifan tombol`,`Tombol mulai ulang (new game) yang mereset seluruh state ke nilai awal`],metricsOrLearnings:`Studi kasus ini memperdalam pemahaman tentang immutability state dan alur eksekusi logika kondisional dalam lingkungan JavaScript.`},"first-portfolio":{projectId:`first-portfolio`,tagline:`Tonggak portofolio personal pertama dalam eksplorasi standar web murni.`,problem:`Langkah awal dalam merangkum hasil pembelajaran dasar pengembangan web, memahami alur deployment, dan menyusun tata letak antarmuka yang rapi.`,solution:`Membangun situs web statis berbasis HTML5 dan CSS3 murni dengan implementasi Flexbox layout, navigasi link, dan deployment pertama ke platform Vercel.`,architecture:[{title:`Vanilla Web Standards`,reason:`Fondasi dasar tanpa framework untuk menguasai box model, positioning, dan alur dokumen HTML murni.`},{title:`Cloud Deployment Workflow`,reason:`Pengenalan pertama alur kerja integrasi Git dan deployment otomatis pada cloud platform hosting.`}],keyFeatures:[`Profil perkenalan diri dan daftar keahlian dasar`,`Galeri mini proyek awal latihan coding`,`Tautan media sosial dan kontak sederhana`],metricsOrLearnings:`Menjadi bukti milestone awal perjalanan dari kode statis pertama hingga berkembang menjadi pengembang frontend yang menguasai ekosistem React 19 dan TypeScript.`}};function ea(e,t){if(t)return t;let n=e.toLowerCase();return n.includes(`github.com`)?`github`:n.includes(`instagram.com`)?`instagram`:n.includes(`tiktok.com`)?`tiktok`:n.includes(`shopee.co.id`)||n.includes(`shopee.`)?`shopee`:`website`}function ta(e){let t=ea(e.url,e.platform),n=`Partner: ${e.name}`,r=`@${e.name}`;return t===`github`?(n=`Collab: @${e.name}`,r=`@${e.name}`):t===`instagram`?(n=`Client: ${e.name}`,r=`@${e.name}`):t===`tiktok`?(n=`TikTok: ${e.name}`,r=`TikTok: ${e.name}`):t===`shopee`?(n=`Toko Shopee: ${e.name}`,r=`Shopee: ${e.name}`):(n=`Klien: ${e.name}`,r=`${e.name}`),{platform:t,label:n,badgeLabel:r,url:e.url}}var na=W.div`
  min-height: 100vh;
  background-color: ${({theme:e})=>e.colors.darkBase};
  color: ${({theme:e})=>e.colors.textPrimary};
  display: flex;
  flex-direction: column;
`,ra=W.main`
  flex: 1;
  width: 100%;
  padding: ${({theme:e})=>`${e.spacing[`4xl`]} ${e.spacing.lg}`};
  padding-top: 120px;

  ${({theme:e})=>e.media.mobile} {
    padding-top: 100px;
    padding-left: ${({theme:e})=>e.spacing.md};
    padding-right: ${({theme:e})=>e.spacing.md};
  }
`,ia=W.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`,aa=W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,oa=W(B)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textMuted};
  text-decoration: none;
  transition: color ${({theme:e})=>e.transitions.fast},
    transform ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.accentLime};
    transform: translateX(-3px);
  }
`,sa=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  flex-wrap: wrap;
`,ca=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.accentMuted};
  color: ${({theme:e})=>e.colors.accentLime};
  border: 1px solid ${({theme:e})=>e.colors.border};
  text-transform: uppercase;
  letter-spacing: ${({theme:e})=>e.letterSpacings.wider};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,la=W.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({theme:e})=>e.fontSizes.xs};
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.glass};
  color: ${({theme:e})=>e.colors.textSecondary};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.fast};

  img {
    width: 13px;
    height: 13px;
  }

  &:hover {
    color: ${({theme:e})=>e.colors.accentLime};
    border-color: ${({theme:e})=>e.colors.borderHover};
    background-color: ${({theme:e})=>e.colors.accentMuted};
    transform: translateY(-1px);
  }
`,ua=W.header`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing[`2xl`]};
`,da=W.h1`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes[`4xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.textHighlight};
  letter-spacing: ${({theme:e})=>e.letterSpacings.tight};
  line-height: ${({theme:e})=>e.lineHeights.tight};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes[`3xl`]};
  }
`,fa=W.p`
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.accentLime};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 1.4;

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes.base};
  }
`,pa=W.p`
  font-size: ${({theme:e})=>e.fontSizes.base};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: ${({theme:e})=>e.lineHeights.relaxed};
  max-width: 820px;
`,ma=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  flex-wrap: wrap;
  margin-top: ${({theme:e})=>e.spacing.sm};
`,ha=W.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  background-color: ${({theme:e})=>e.colors.accentLime};
  color: ${({theme:e})=>e.colors.textInverse};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  padding: 12px 26px;
  border-radius: ${({theme:e})=>e.radii.sm};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`,ga=W.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  padding: 12px 24px;
  border-radius: ${({theme:e})=>e.radii.sm};
  border: 1px solid ${({theme:e})=>e.colors.border};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    background-color: ${({theme:e})=>e.colors.accentMuted};
    color: ${({theme:e})=>e.colors.textHighlight};
  }
`,_a=W.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  background-color: ${({theme:e})=>e.colors.glass};
  color: ${({theme:e})=>e.colors.textHighlight};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  padding: 12px 22px;
  border-radius: ${({theme:e})=>e.radii.sm};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.fast};

  img {
    width: 15px;
    height: 15px;
  }

  svg {
    color: ${({theme:e})=>e.colors.accentLime};
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    background-color: ${({theme:e})=>e.colors.accentMuted};
    color: ${({theme:e})=>e.colors.accentLime};
    transform: translateY(-2px);
  }
`,va=W.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: ${({theme:e})=>e.spacing.xs};
`,ya=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.glass};
  color: ${({theme:e})=>e.colors.textSecondary};
  border: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,ba=W.div`
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.card};
  margin-bottom: ${({theme:e})=>e.spacing[`3xl`]};
`,xa=W.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
`,Sa=W.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[`2xl`]};
  margin-bottom: ${({theme:e})=>e.spacing[`3xl`]};
`,Ca=W.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing.lg};
  }
`,wa=W.div`
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  box-shadow: ${({theme:e})=>e.shadows.subtle};

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>e.spacing.lg};
  }
`,Ta=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  color: ${({theme:e})=>e.colors.accentLime};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: ${({theme:e})=>e.letterSpacings.wider};
`,Ea=W.h2`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.textHighlight};
  margin-top: 2px;
`,Da=W.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: ${({theme:e})=>e.lineHeights.relaxed};
`,Oa=W.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.sm};
`,ka=W.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-left: ${({theme:e})=>e.spacing.md};
  border-left: 2px solid ${({theme:e})=>e.colors.border};
  transition: border-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.accentLime};
  }
`,Aa=W.span`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.textHighlight};
`,ja=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
  line-height: 1.5;
`,Ma=W.ul`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  list-style: none;
  margin-top: ${({theme:e})=>e.spacing.xs};
`,Na=W.li`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.sm};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.5;

  svg {
    color: ${({theme:e})=>e.colors.accentLime};
    flex-shrink: 0;
    margin-top: 2px;
  }
`,Pa=W.div`
  background-color: ${({theme:e})=>e.colors.darkBase};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  overflow: hidden;
  margin-top: ${({theme:e})=>e.spacing.sm};
`,Fa=W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderSubtle};
`,Ia=W.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: monospace;
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
`,La=W.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: 4px 10px;
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.accentLime};
    border-color: ${({theme:e})=>e.colors.borderHover};
    background-color: ${({theme:e})=>e.colors.accentMuted};
  }
`,Ra=W.pre`
  margin: 0;
  padding: 16px 20px;
  overflow-x: auto;
  font-family: 'Fira Code', Consolas, Monaco, monospace;
  font-size: 13px;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.textHighlight};
  background-color: rgba(15, 20, 28, 0.7);
`,za=W.p`
  padding: 12px 16px;
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
  line-height: 1.5;
  border-top: 1px solid ${({theme:e})=>e.colors.borderSubtle};
  background-color: ${({theme:e})=>e.colors.secondarySurface};
`,Ba=W.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing.lg};
  margin-top: ${({theme:e})=>e.spacing[`2xl`]};
  padding-top: ${({theme:e})=>e.spacing[`2xl`]};
  border-top: 1px solid ${({theme:e})=>e.colors.borderSubtle};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Va=W(B)`
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: ${({theme:e})=>e.spacing.lg};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: ${({$alignRight:e})=>e?`flex-end`:`flex-start`};
  text-align: ${({$alignRight:e})=>e?`right`:`left`};
  gap: 4px;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`,Ha=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.accentLime};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: ${({theme:e})=>e.letterSpacings.wider};
`,Ua=W.span`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.textHighlight};
`,Wa=[.4,0,.2,1];function Ga(){let e=(0,J.c)(129),{id:t}=N(),[n,r]=(0,q.useState)(!1),i=Q.findIndex(e=>e.id===t),l=i===-1?null:Q[i],d=t?$i[t]:null,f;e[0]===t?f=e[1]:(f=[t],e[0]=t,e[1]=f),(0,q.useEffect)(Xa,f);let h;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(h=async e=>{try{await navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)}catch{let t=document.createElement(`textarea`);t.value=e,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t),r(!0),setTimeout(()=>r(!1),2e3)}},e[2]=h):h=e[2];let g=h;if(!l){let n;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,Y.jsx)(Ke,{}),e[3]=n):n=e[3];let r,i,a;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(r={textAlign:`center`,paddingTop:`60px`},i=(0,Y.jsx)(da,{children:`Proyek Tidak Ditemukan`}),a={color:`#9DA9C1`,margin:`16px 0 24px`},e[4]=r,e[5]=i,e[6]=a):(r=e[4],i=e[5],a=e[6]);let o;e[7]===t?o=e[8]:(o=(0,Y.jsxs)(`p`,{style:a,children:[`Proyek dengan ID “`,t,`” tidak ada dalam data.`]}),e[7]=t,e[8]=o);let s;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,Y.jsxs)(oa,{to:`/projects`,children:[(0,Y.jsx)(v,{size:16}),(0,Y.jsx)(`span`,{children:`Kembali ke Katalog Proyek`})]}),e[9]=s):s=e[9];let c;e[10]===o?c=e[11]:(c=(0,Y.jsx)(ra,{children:(0,Y.jsxs)(ia,{style:r,children:[i,o,s]})}),e[10]=o,e[11]=c);let l;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,Y.jsx)(wi,{}),e[12]=l):l=e[12];let u;return e[13]===c?u=e[14]:(u=(0,Y.jsxs)(na,{children:[n,c,l]}),e[13]=c,e[14]=u),u}let _=Q[(i-1+Q.length)%Q.length],y=Q[(i+1)%Q.length],b,x,S,C,T,E,D,k,M,P,F,I,L,R,z,B,V,H;if(e[15]!==d||e[16]!==l.category||e[17]!==l.collab||e[18]!==l.collaborator||e[19]!==l.description||e[20]!==l.githubBackendUrl||e[21]!==l.githubUrl||e[22]!==l.title||e[23]!==l.url){let t=l.collaborator?ta(l.collaborator):null,n=Ya;E=na,e[42]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,Y.jsx)(Ke,{}),e[42]=P):P=e[42],T=ra,C=ia;let r;e[43]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,Y.jsxs)(oa,{to:`/projects`,children:[(0,Y.jsx)(v,{size:16}),(0,Y.jsx)(`span`,{children:`Kembali ke Katalog Proyek`})]}),e[43]=r):r=e[43];let i;e[44]===l.category?i=e[45]:(i=(0,Y.jsx)(ca,{children:l.category}),e[44]=l.category,e[45]=i);let a=t?(0,Y.jsxs)(la,{href:t.url,target:`_blank`,rel:`noopener noreferrer`,title:`Buka tautan ${t.label}`,children:[n(t.platform,13),(0,Y.jsx)(`span`,{children:l.collab||t.label}),(0,Y.jsx)(c,{size:11,style:{opacity:.7}})]}):l.collab&&(0,Y.jsx)(la,{as:`span`,children:l.collab});e[46]!==i||e[47]!==a?(M=(0,Y.jsxs)(aa,{children:[r,(0,Y.jsxs)(sa,{children:[i,a]})]}),e[46]=i,e[47]=a,e[48]=M):M=e[48],S=K.div,e[49]===Symbol.for(`react.memo_cache_sentinel`)?(H={opacity:0,y:15},D={opacity:1,y:0},k={duration:.35,ease:Wa},e[49]=D,e[50]=k,e[51]=H):(D=e[49],k=e[50],H=e[51]),x=ua,e[52]===l.title?z=e[53]:(z=(0,Y.jsx)(da,{children:l.title}),e[52]=l.title,e[53]=z),e[54]===d?B=e[55]:(B=d?.tagline&&(0,Y.jsx)(fa,{children:d.tagline}),e[54]=d,e[55]=B),e[56]===l.description?V=e[57]:(V=(0,Y.jsx)(pa,{children:l.description}),e[56]=l.description,e[57]=V),b=ma;let o,s;e[58]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,Y.jsx)(`span`,{children:`Buka Live Demo`}),s=(0,Y.jsx)(c,{size:16}),e[58]=o,e[59]=s):(o=e[58],s=e[59]),e[60]===l.url?F=e[61]:(F=(0,Y.jsxs)(ha,{href:l.url,target:`_blank`,rel:`noopener noreferrer`,children:[o,s]}),e[60]=l.url,e[61]=F),e[62]!==l.githubBackendUrl||e[63]!==l.githubUrl?(I=l.githubUrl&&(0,Y.jsxs)(ga,{href:l.githubUrl,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Y.jsx)(u,{size:16}),(0,Y.jsx)(`span`,{children:l.githubBackendUrl?`Frontend Repo`:`Lihat Source Code`})]}),e[62]=l.githubBackendUrl,e[63]=l.githubUrl,e[64]=I):I=e[64],e[65]===l.githubBackendUrl?L=e[66]:(L=l.githubBackendUrl&&(0,Y.jsxs)(ga,{href:l.githubBackendUrl,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Y.jsx)(u,{size:16}),(0,Y.jsx)(`span`,{children:`Backend Repo`})]}),e[65]=l.githubBackendUrl,e[66]=L),R=t&&(0,Y.jsxs)(_a,{href:t.url,target:`_blank`,rel:`noopener noreferrer`,title:`Kunjungi profil / link ${t.label}`,children:[n(t.platform,15),(0,Y.jsx)(`span`,{children:t.label}),(0,Y.jsx)(c,{size:14})]}),e[15]=d,e[16]=l.category,e[17]=l.collab,e[18]=l.collaborator,e[19]=l.description,e[20]=l.githubBackendUrl,e[21]=l.githubUrl,e[22]=l.title,e[23]=l.url,e[24]=b,e[25]=x,e[26]=S,e[27]=C,e[28]=T,e[29]=E,e[30]=D,e[31]=k,e[32]=M,e[33]=P,e[34]=F,e[35]=I,e[36]=L,e[37]=R,e[38]=z,e[39]=B,e[40]=V,e[41]=H}else b=e[24],x=e[25],S=e[26],C=e[27],T=e[28],E=e[29],D=e[30],k=e[31],M=e[32],P=e[33],F=e[34],I=e[35],L=e[36],R=e[37],z=e[38],B=e[39],V=e[40],H=e[41];let U;e[67]!==b||e[68]!==F||e[69]!==I||e[70]!==L||e[71]!==R?(U=(0,Y.jsxs)(b,{children:[F,I,L,R]}),e[67]=b,e[68]=F,e[69]=I,e[70]=L,e[71]=R,e[72]=U):U=e[72];let W;e[73]===l.skills?W=e[74]:(W=l.skills.map(Ja),e[73]=l.skills,e[74]=W);let ee;e[75]===W?ee=e[76]:(ee=(0,Y.jsx)(va,{children:W}),e[75]=W,e[76]=ee);let G;e[77]!==x||e[78]!==U||e[79]!==ee||e[80]!==z||e[81]!==B||e[82]!==V?(G=(0,Y.jsxs)(x,{children:[z,B,V,U,ee]}),e[77]=x,e[78]=U,e[79]=ee,e[80]=z,e[81]=B,e[82]=V,e[83]=G):G=e[83];let te;e[84]!==S||e[85]!==D||e[86]!==k||e[87]!==G||e[88]!==H?(te=(0,Y.jsx)(S,{initial:H,animate:D,transition:k,children:G}),e[84]=S,e[85]=D,e[86]=k,e[87]=G,e[88]=H,e[89]=te):te=e[89];let ne,re,ie;e[90]===Symbol.for(`react.memo_cache_sentinel`)?(ne={opacity:0,y:20},re={opacity:1,y:0},ie={duration:.4,delay:.1,ease:Wa},e[90]=ne,e[91]=re,e[92]=ie):(ne=e[90],re=e[91],ie=e[92]);let ae=l.alt||l.title,oe;e[93]!==l.img||e[94]!==ae?(oe=(0,Y.jsx)(K.div,{initial:ne,animate:re,transition:ie,children:(0,Y.jsx)(ba,{children:(0,Y.jsx)(xa,{src:l.img,alt:ae})})}),e[93]=l.img,e[94]=ae,e[95]=oe):oe=e[95];let se;e[96]!==d||e[97]!==n?(se=d&&(0,Y.jsx)(K.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.15,ease:Wa},children:(0,Y.jsxs)(Sa,{children:[(0,Y.jsxs)(Ca,{children:[(0,Y.jsxs)(wa,{children:[(0,Y.jsxs)(Ta,{children:[(0,Y.jsx)(A,{size:15}),(0,Y.jsx)(`span`,{children:`Tantangan & Masalah`})]}),(0,Y.jsx)(Ea,{children:`Kebutuhan Sistem & Kendala Awal`}),(0,Y.jsx)(Da,{children:d.problem})]}),(0,Y.jsxs)(wa,{children:[(0,Y.jsxs)(Ta,{children:[(0,Y.jsx)(o,{size:15}),(0,Y.jsx)(`span`,{children:`Solusi & Implementasi`})]}),(0,Y.jsx)(Ea,{children:`Pendekatan Teknis & Rekayasa`}),(0,Y.jsx)(Da,{children:d.solution})]})]}),d.architecture&&d.architecture.length>0&&(0,Y.jsxs)(wa,{children:[(0,Y.jsxs)(Ta,{children:[(0,Y.jsx)(p,{size:15}),(0,Y.jsx)(`span`,{children:`Keputusan Arsitektur & Teknologi`})]}),(0,Y.jsx)(Ea,{children:`Alasan Pemilihan Stack & Pola Desain`}),(0,Y.jsx)(Oa,{children:d.architecture.map(qa)})]}),d.codeSnippet&&(0,Y.jsxs)(wa,{children:[(0,Y.jsxs)(Ta,{children:[(0,Y.jsx)(u,{size:15}),(0,Y.jsx)(`span`,{children:`Cuplikan Arsitektur Kode`})]}),(0,Y.jsx)(Ea,{children:d.codeSnippet.title}),(0,Y.jsxs)(Pa,{children:[(0,Y.jsxs)(Fa,{children:[(0,Y.jsxs)(Ia,{children:[(0,Y.jsx)(m,{size:14}),(0,Y.jsx)(`span`,{children:d.codeSnippet.filename})]}),(0,Y.jsx)(La,{type:`button`,onClick:()=>g(d.codeSnippet.code),"aria-label":`Salin potongan kode`,children:n?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(s,{size:13}),(0,Y.jsx)(`span`,{children:`Tersalin!`})]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(j,{size:13}),(0,Y.jsx)(`span`,{children:`Salin Kode`})]})})]}),(0,Y.jsx)(Ra,{children:(0,Y.jsx)(`code`,{children:d.codeSnippet.code})}),(0,Y.jsxs)(za,{children:[(0,Y.jsx)(`strong`,{children:`Catatan Rekayasa:`}),` `,d.codeSnippet.explanation]})]})]}),d.keyFeatures&&d.keyFeatures.length>0&&(0,Y.jsxs)(wa,{children:[(0,Y.jsxs)(Ta,{children:[(0,Y.jsx)(w,{size:15}),(0,Y.jsx)(`span`,{children:`Fitur Kunci & Spesifikasi Teknis`})]}),(0,Y.jsx)(Ea,{children:`Kapabilitas Utama Sistem`}),(0,Y.jsx)(Ma,{children:d.keyFeatures.map(Ka)})]}),d.metricsOrLearnings&&(0,Y.jsxs)(wa,{children:[(0,Y.jsxs)(Ta,{children:[(0,Y.jsx)(O,{size:15}),(0,Y.jsx)(`span`,{children:`Hasil Teknis & Evaluasi`})]}),(0,Y.jsx)(Ea,{children:`Dampak & Refleksi Rekayasa`}),(0,Y.jsx)(Da,{children:d.metricsOrLearnings})]})]})}),e[96]=d,e[97]=n,e[98]=se):se=e[98];let ce=`/projects/${_.id}`,le;e[99]===Symbol.for(`react.memo_cache_sentinel`)?(le=(0,Y.jsxs)(Ha,{children:[(0,Y.jsx)(v,{size:14}),(0,Y.jsx)(`span`,{children:`Proyek Sebelumnya`})]}),e[99]=le):le=e[99];let X;e[100]===_.title?X=e[101]:(X=(0,Y.jsx)(Ua,{children:_.title}),e[100]=_.title,e[101]=X);let Z;e[102]!==ce||e[103]!==X?(Z=(0,Y.jsxs)(Va,{to:ce,children:[le,X]}),e[102]=ce,e[103]=X,e[104]=Z):Z=e[104];let ue=`/projects/${y.id}`,de;e[105]===Symbol.for(`react.memo_cache_sentinel`)?(de=(0,Y.jsxs)(Ha,{children:[(0,Y.jsx)(`span`,{children:`Proyek Selanjutnya`}),(0,Y.jsx)(a,{size:14})]}),e[105]=de):de=e[105];let fe;e[106]===y.title?fe=e[107]:(fe=(0,Y.jsx)(Ua,{children:y.title}),e[106]=y.title,e[107]=fe);let pe;e[108]!==ue||e[109]!==fe?(pe=(0,Y.jsxs)(Va,{to:ue,$alignRight:!0,children:[de,fe]}),e[108]=ue,e[109]=fe,e[110]=pe):pe=e[110];let $;e[111]!==Z||e[112]!==pe?($=(0,Y.jsxs)(Ba,{children:[Z,pe]}),e[111]=Z,e[112]=pe,e[113]=$):$=e[113];let me;e[114]!==C||e[115]!==M||e[116]!==te||e[117]!==oe||e[118]!==se||e[119]!==$?(me=(0,Y.jsxs)(C,{children:[M,te,oe,se,$]}),e[114]=C,e[115]=M,e[116]=te,e[117]=oe,e[118]=se,e[119]=$,e[120]=me):me=e[120];let he;e[121]!==T||e[122]!==me?(he=(0,Y.jsx)(T,{children:me}),e[121]=T,e[122]=me,e[123]=he):he=e[123];let ge;e[124]===Symbol.for(`react.memo_cache_sentinel`)?(ge=(0,Y.jsx)(wi,{}),e[124]=ge):ge=e[124];let _e;return e[125]!==E||e[126]!==P||e[127]!==he?(_e=(0,Y.jsxs)(E,{children:[P,he,ge]}),e[125]=E,e[126]=P,e[127]=he,e[128]=_e):_e=e[128],_e}function Ka(e,t){return(0,Y.jsxs)(Na,{children:[(0,Y.jsx)(o,{size:16}),(0,Y.jsx)(`span`,{children:e})]},t)}function qa(e,t){return(0,Y.jsxs)(ka,{children:[(0,Y.jsx)(Aa,{children:e.title}),(0,Y.jsx)(ja,{children:e.reason})]},t)}function Ja(e){return(0,Y.jsx)(ya,{children:e},e)}function Ya(e,t){let n=t===void 0?15:t;return e===`github`?(0,Y.jsx)(u,{size:n}):e===`instagram`?(0,Y.jsx)(`img`,{src:`/icons/social/instagram.svg`,alt:`Instagram`,style:{width:n,height:n,display:`inline-block`}}):e===`tiktok`?(0,Y.jsx)(`img`,{src:`/icons/social/tiktok.svg`,alt:`TikTok`,style:{width:n,height:n,display:`inline-block`}}):e===`shopee`?(0,Y.jsx)(g,{size:n}):(0,Y.jsx)(c,{size:n})}function Xa(){window.scrollTo(0,0)}var Za=W.div`
  min-height: 100vh;
  background-color: ${({theme:e})=>e.colors.darkBase};
  color: ${({theme:e})=>e.colors.textPrimary};
  display: flex;
  flex-direction: column;
`,Qa=W.main`
  flex: 1;
  width: 100%;
  padding: ${({theme:e})=>`${e.spacing[`4xl`]} ${e.spacing.lg}`};
  padding-top: 120px;

  ${({theme:e})=>e.media.mobile} {
    padding-top: 100px;
    padding-left: ${({theme:e})=>e.spacing.md};
    padding-right: ${({theme:e})=>e.spacing.md};
  }
`,$a=W.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`,eo=W(B)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textMuted};
  text-decoration: none;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  transition: color ${({theme:e})=>e.transitions.fast},
    transform ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.accentLime};
    transform: translateX(-3px);
  }
`,to=W.div`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,no=W.h1`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes[`4xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.textHighlight};
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
  margin-bottom: ${({theme:e})=>e.spacing.xs};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes[`3xl`]};
  }
`,ro=W.p`
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.textMuted};
  max-width: 540px;
  line-height: ${({theme:e})=>e.lineHeights.relaxed};

  ${({theme:e})=>e.media.mobile} {
    font-size: ${({theme:e})=>e.fontSizes.base};
  }
`,io=W.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,ao=W.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.textMuted};
  display: flex;
  align-items: center;
  pointer-events: none;
`,oo=W.input`
  width: 100%;
  padding: 12px 42px 12px 42px;
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.full};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  outline: none;
  transition: all ${({theme:e})=>e.transitions.fast};

  &::placeholder {
    color: ${({theme:e})=>e.colors.textMuted};
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.accentLime};
    box-shadow: ${({theme:e})=>e.shadows.glow};
    background-color: ${({theme:e})=>e.colors.glass};
  }
`,so=W.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.textMuted};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: ${({theme:e})=>e.radii.full};
  transition: color ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.accentLime};
  }
`,co=W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing[`2xl`]};
`,lo=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  flex-wrap: wrap;
`,uo=W.button`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  padding: 6px 16px;
  border-radius: ${({theme:e})=>e.radii.full};
  cursor: pointer;
  background-color: ${({theme:e,$active:t})=>t?e.colors.accentMuted:`transparent`};
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.border:e.colors.borderSubtle};
  color: ${({theme:e,$active:t})=>t?e.colors.accentLime:e.colors.textMuted};
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    color: ${({theme:e,$active:t})=>t?e.colors.accentLime:e.colors.textSecondary};
  }
`,fo=W.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textMuted};
  letter-spacing: ${({theme:e})=>e.letterSpacings.wide};
`,po=W.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.spacing.lg};

  @media (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({theme:e})=>e.media.tablet} {
    grid-template-columns: 1fr;
  }
`,mo=W.div`
  padding: ${({theme:e})=>e.spacing[`3xl`]} 0;
  text-align: center;
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px dashed ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.md};
  margin-top: ${({theme:e})=>e.spacing.lg};
`,ho=W.h3`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.textHighlight};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,go=W.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textMuted};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  max-width: 440px;
  margin-left: auto;
  margin-right: auto;
`,_o=W.button`
  background-color: transparent;
  color: ${({theme:e})=>e.colors.accentLime};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: 8px 18px;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.accentMuted};
    border-color: ${({theme:e})=>e.colors.accentLime};
    color: ${({theme:e})=>e.colors.textHighlight};
  }
`,vo=[.4,0,.2,1];function yo(){let e=(0,J.c)(58),[t,n]=(0,q.useState)(`all`),[r,i]=(0,q.useState)(``),[a,o]=(0,q.useState)(null),s;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=[],e[0]=s):s=e[0],(0,q.useEffect)(bo,s);let c;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(c=[{value:`all`,label:`All`},{value:`udemy`,label:`Udemy`},{value:`codepolitan`,label:`Codepolitan`},{value:`awards`,label:`Awards`}],e[1]=c):c=e[1];let l=c,u,d,f,p,m,h,g,_,y;if(e[2]!==t||e[3]!==r){let a=r.trim().toLowerCase();p=Rn.filter(e=>{let n=!0;if(t===`udemy`?n=e.platform===`udemy`:t===`codepolitan`?n=e.platform===`codepolitan`:t===`awards`&&(n=e.platform===`kompetisi`||e.platform===`penghargaan`),!n)return!1;if(!a)return!0;let r=e.title.toLowerCase().includes(a),i=e.issuer.toLowerCase().includes(a),o=e.platformName.toLowerCase().includes(a),s=e.desc.toLowerCase().includes(a),c=e.skills.some(e=>e.toLowerCase().includes(a));return r||i||o||s||c}),f=Za,e[13]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,Y.jsx)(Ke,{}),e[13]=y):y=e[13],d=Qa,u=$a;let s,c,b;e[14]===Symbol.for(`react.memo_cache_sentinel`)?(s={opacity:0,x:-10},c={opacity:1,x:0},b={duration:.3,ease:vo},e[14]=s,e[15]=c,e[16]=b):(s=e[14],c=e[15],b=e[16]),e[17]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,Y.jsx)(K.div,{initial:s,animate:c,transition:b,children:(0,Y.jsxs)(eo,{to:`/`,children:[(0,Y.jsx)(v,{size:16}),(0,Y.jsx)(`span`,{children:`Kembali ke Beranda`})]})}),e[17]=m):m=e[17];let C,w,T;e[18]===Symbol.for(`react.memo_cache_sentinel`)?(C={opacity:0,y:15},w={opacity:1,y:0},T={duration:.4,ease:vo},e[18]=C,e[19]=w,e[20]=T):(C=e[18],w=e[19],T=e[20]),e[21]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,Y.jsx)(K.div,{initial:C,animate:w,transition:T,children:(0,Y.jsxs)(to,{children:[(0,Y.jsx)(no,{children:`All Certificates`}),(0,Y.jsx)(ro,{children:`Seluruh kredensial sertifikasi, pelatihan intensif, dan penghargaan resmi yang diperoleh.`})]})}),e[21]=h):h=e[21];let E,D,O;e[22]===Symbol.for(`react.memo_cache_sentinel`)?(E={opacity:0,y:10},D={opacity:1,y:0},O={duration:.4,delay:.1,ease:vo},e[22]=E,e[23]=D,e[24]=O):(E=e[22],D=e[23],O=e[24]);let k;e[25]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,Y.jsx)(ao,{children:(0,Y.jsx)(S,{size:16})}),e[25]=k):k=e[25];let A;e[26]===Symbol.for(`react.memo_cache_sentinel`)?(A=e=>i(e.target.value),e[26]=A):A=e[26];let j,M;e[27]===r?(j=e[28],M=e[29]):(j=(0,Y.jsx)(oo,{type:`text`,placeholder:`Cari sertifikat atau skill (JavaScript, Git, AJAX...)...`,value:r,onChange:A,"aria-label":`Cari sertifikat`}),M=r&&(0,Y.jsx)(so,{type:`button`,onClick:()=>i(``),"aria-label":`Hapus pencarian`,children:(0,Y.jsx)(x,{size:15})}),e[27]=r,e[28]=j,e[29]=M);let N;e[30]!==j||e[31]!==M?(N=(0,Y.jsxs)(io,{children:[k,j,M]}),e[30]=j,e[31]=M,e[32]=N):N=e[32];let P;e[33]===t?P=e[34]:(P=(0,Y.jsx)(lo,{role:`tablist`,"aria-label":`Filter kategori sertifikat`,children:l.map(e=>(0,Y.jsx)(uo,{$active:t===e.value,onClick:()=>n(e.value),role:`tab`,"aria-selected":t===e.value,children:e.label},e.value))}),e[33]=t,e[34]=P);let F=(0,Y.jsxs)(co,{children:[P,(0,Y.jsxs)(fo,{children:[`Menampilkan `,p.length,` dari `,Rn.length,` sertifikat`]})]});e[35]!==N||e[36]!==F?(g=(0,Y.jsxs)(K.div,{initial:E,animate:D,transition:O,children:[N,F]}),e[35]=N,e[36]=F,e[37]=g):g=e[37],_=p.length>0?(0,Y.jsx)(po,{children:p.map((e,t)=>(0,Y.jsx)(gr,{certificate:e,index:t,onViewCertificate:e=>o(e)},e.id))}):(0,Y.jsxs)(mo,{children:[(0,Y.jsx)(ho,{children:`Tidak ada sertifikat yang cocok`}),(0,Y.jsxs)(go,{children:[`Tidak ditemukan sertifikat yang cocok dengan kata kunci “`,r,`”`,t===`all`?``:` pada kategori ${t}`,`.`]}),(0,Y.jsx)(_o,{type:`button`,onClick:()=>{i(``),n(`all`)},children:`Reset Filter & Pencarian`})]}),e[2]=t,e[3]=r,e[4]=u,e[5]=d,e[6]=f,e[7]=p,e[8]=m,e[9]=h,e[10]=g,e[11]=_,e[12]=y}else u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],h=e[9],g=e[10],_=e[11],y=e[12];let b;e[38]!==u||e[39]!==m||e[40]!==h||e[41]!==g||e[42]!==_?(b=(0,Y.jsxs)(u,{children:[m,h,g,_]}),e[38]=u,e[39]=m,e[40]=h,e[41]=g,e[42]=_,e[43]=b):b=e[43];let C;e[44]!==d||e[45]!==b?(C=(0,Y.jsx)(d,{children:b}),e[44]=d,e[45]=b,e[46]=C):C=e[46];let w,T;e[47]===Symbol.for(`react.memo_cache_sentinel`)?(T=()=>o(null),w=e=>o(e),e[47]=w,e[48]=T):(w=e[47],T=e[48]);let E;e[49]!==p||e[50]!==a?(E=(0,Y.jsx)(yr,{certificate:a,certificates:p,onClose:T,onSelectCertificate:w}),e[49]=p,e[50]=a,e[51]=E):E=e[51];let D;e[52]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,Y.jsx)(wi,{}),e[52]=D):D=e[52];let O;return e[53]!==f||e[54]!==E||e[55]!==y||e[56]!==C?(O=(0,Y.jsxs)(f,{children:[y,C,E,D]}),e[53]=f,e[54]=E,e[55]=y,e[56]=C,e[57]=O):O=e[57],O}function bo(){window.scrollTo(0,0)}var xo=W.div`
  min-height: 100vh;
  background-color: ${({theme:e})=>e.colors.darkBase};
  color: ${({theme:e})=>e.colors.textPrimary};
  display: flex;
  flex-direction: column;
`,So=W.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>`${e.spacing[`4xl`]} ${e.spacing.lg}`};
  padding-top: 140px;
  padding-bottom: 80px;
`,Co=W.div`
  max-width: 580px;
  width: 100%;
  background-color: ${({theme:e})=>e.colors.secondarySurface};
  border: 1px solid ${({theme:e})=>e.colors.borderGlass};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: ${({theme:e})=>`${e.spacing[`3xl`]} ${e.spacing[`2xl`]}`};
  text-align: center;
  box-shadow: ${({theme:e})=>e.shadows.card};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>`${e.spacing[`2xl`]} ${e.spacing.lg}`};
  }
`,wo=W.span`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: 5.5rem;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.accentLime};
  line-height: 1;
  letter-spacing: ${({theme:e})=>e.letterSpacings.wider};
  text-shadow: 0 0 32px rgba(183, 216, 148, 0.25);
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,To=W.h1`
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.textHighlight};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,Eo=W.p`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textMuted};
  line-height: ${({theme:e})=>e.lineHeights.relaxed};
  max-width: 440px;
  margin-bottom: ${({theme:e})=>e.spacing[`2xl`]};
`,Do=W.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.md};
  flex-wrap: wrap;
  width: 100%;
`,Oo=W(B)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  background-color: ${({theme:e})=>e.colors.accentLime};
  color: ${({theme:e})=>e.colors.textInverse};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  padding: 12px 24px;
  border-radius: ${({theme:e})=>e.radii.sm};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`,ko=W(B)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  padding: 12px 24px;
  border-radius: ${({theme:e})=>e.radii.sm};
  border: 1px solid ${({theme:e})=>e.colors.border};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderHover};
    background-color: ${({theme:e})=>e.colors.accentMuted};
    color: ${({theme:e})=>e.colors.textHighlight};
  }
`,Ao=[.4,0,.2,1];function jo(){let e=(0,J.c)(10),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,Y.jsx)(Ke,{}),e[0]=t):t=e[0];let n,r,i,o;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n={opacity:0,scale:.96},r={opacity:1,scale:1},i={duration:.4,ease:Ao},o={width:`100%`,display:`flex`,justifyContent:`center`},e[1]=n,e[2]=r,e[3]=i,e[4]=o):(n=e[1],r=e[2],i=e[3],o=e[4]);let s,c,l;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,Y.jsx)(wo,{children:`404`}),c=(0,Y.jsx)(To,{children:`Halaman Tidak Ditemukan`}),l=(0,Y.jsx)(Eo,{children:`Tautan yang Anda tuju mungkin telah dipindahkan, dihapus, atau alamat URL salah ketik.`}),e[5]=s,e[6]=c,e[7]=l):(s=e[5],c=e[6],l=e[7]);let u;e[8]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,Y.jsxs)(Oo,{to:`/`,children:[(0,Y.jsx)(v,{size:16}),(0,Y.jsx)(`span`,{children:`Kembali ke Beranda`})]}),e[8]=u):u=e[8];let d;return e[9]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,Y.jsxs)(xo,{children:[t,(0,Y.jsx)(So,{children:(0,Y.jsx)(K.div,{initial:n,animate:r,transition:i,style:o,children:(0,Y.jsxs)(Co,{children:[s,c,l,(0,Y.jsxs)(Do,{children:[u,(0,Y.jsxs)(ko,{to:`/projects`,children:[(0,Y.jsx)(`span`,{children:`Lihat Katalog Proyek`}),(0,Y.jsx)(a,{size:16})]})]})]})})}),(0,Y.jsx)(wi,{})]}),e[9]=d):d=e[9],d}function Mo(){let e=(0,J.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(oe,{}),(0,Y.jsx)(P,{}),(0,Y.jsx)(I,{})]}),e[0]=t):t=e[0],t}var No=M([{element:(0,Y.jsx)(Mo,{}),children:[{path:`/`,element:(0,Y.jsx)(Oi,{})},{path:`/projects`,element:(0,Y.jsx)(Xi,{})},{path:`/projects/:id`,element:(0,Y.jsx)(Ga,{})},{path:`/certificates`,element:(0,Y.jsx)(yo,{})},{path:`*`,element:(0,Y.jsx)(jo,{})}]}]);function Po(){let e=(0,J.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,Y.jsx)(R,{router:No}),e[0]=t):t=e[0],t}(0,ne.createRoot)(document.getElementById(`root`)).render((0,Y.jsx)(q.StrictMode,{children:(0,Y.jsxs)(H,{theme:re,children:[(0,Y.jsx)(ie,{}),(0,Y.jsx)(Po,{})]})}));