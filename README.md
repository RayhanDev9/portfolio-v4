# Portfolio v4 — Muhamad Rayhan

> React 19 + TypeScript + Vite + styled-components
> Design DNA: AW Media dark glassmorphism × Brandlos confident typography

---

## 🚀 Status Implementasi

| Section | Status | Commit |
|---|---|---|
| Theme System & Design Tokens | ✅ Selesai | `d01871d` |
| Navbar & Glassmorphism Mobile Menu | ✅ Selesai | `f578672` |
| Hero Section (Polaroid, CTA, Socials) | ✅ Selesai | `f578672` |
| Featured Projects + Filter Tabs | ✅ Selesai | `9fcd808` |
| React Router v7 + `/projects` Catalogue | ✅ Selesai | `5748b9e` |
| `/projects/:id` Detail Page (placeholder) | ✅ Selesai | `5748b9e` |
| **Skills & Career Journey (`#skills`)** | ✅ Selesai | `a390b71` |
| Certificates Showcase & Lightbox (`#certificates`) | ⬜ Belum | — |
| Contact Section (`#contact`) | ⬜ Belum | — |
| Footer | ⬜ Belum | — |
| `/projects/:id` Full Case Study | ⬜ Belum | — |

---

## 📋 Active Build Plan: Skills & Career Journey (`#skills`)

### Data yang Tersedia

**`src/data/skills.ts`** — 3 kategori, 22 skill total:

| Kategori | Skills (8 / 8 / 6) |
|---|---|
| Languages & Core Tools | TypeScript, JavaScript, HTML5, CSS3, Vite, Git, GitHub, C++ |
| Frameworks & Libraries | React, Vue.js, Redux Toolkit, Pinia, TanStack Query, React Router, Vue Router, Axios |
| Styling & UI Systems | Tailwind CSS, Framer Motion, Sass, Bootstrap, Lucide Icons, Responsive UI |

**`src/data/journey.ts`** — 3 milestone perjalanan karier:

| Tahun | Judul | Teknologi Utama |
|---|---|---|
| 2024 | Foundations of Web Development | HTML5, CSS3, Bootstrap, JavaScript |
| 2025 | Tooling & Modern CSS Workflows | Git, Tailwind CSS, Sass, Responsive Design |
| 2026 | Production Component Frameworks | React, Vue 3, TypeScript, Pinia, Redux, TanStack |

---

### 1. File Structure

```
src/components/Skills/
├── Skills.tsx             # Section wrapper — tab kategori, skill grid, dan journey
├── Skills.styles.ts       # Semua styled-components
├── SkillCard.tsx          # Kartu individual satu skill (icon + nama)
├── JourneyTimeline.tsx    # Komponen linimasa vertikal
└── index.ts               # Barrel export
```

---

### 2. Section Layout (Full)

```
┌────────────────────────────────────────────────────────────────────┐
│  SECTION HEADER                                                    │
│                                                                    │
│  Skills & Journey                      (Poiret One display font)   │
│  Teknologi yang digunakan dan         (subheading, textSecondary)  │
│  rekam jejak belajar.                                              │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│  SKILLS SUBSECTION                                                 │
│                                                                    │
│  CATEGORY TABS                                                     │
│  [All]  [Languages & Core]  [Frameworks]  [Styling & UI]          │
│                                                                    │
│  SKILL GRID (Responsive auto-fill)                                 │
│                                                                    │
│  ┌────┐  ┌────┐  ┌────┐  ┌────┐  ┌────┐  ┌────┐                  │
│  │ TS │  │ JS │  │HTML│  │CSS │  │Vite│  │ Git│                  │
│  │icon│  │icon│  │icon│  │icon│  │icon│  │icon│                  │
│  └────┘  └────┘  └────┘  └────┘  └────┘  └────┘                  │
│                                                                    │
│  ... (all skills in active category)                               │
│                                                                    │
├─── DIVIDER ────────────────────────────────────────────────────────┤
│  JOURNEY SUBSECTION                                                │
│                                                                    │
│  Timeline Header:                                                  │
│  "Career Journey"               (Poiret One)                       │
│  "Dari nol ke production SPA."  (subheading)                       │
│                                                                    │
│  Vertical Timeline (Brandlos-style):                               │
│                                                                    │
│       │                                                            │
│  2024 ●─── Foundations of Web Development                         │
│       │    Core Web Standards & Vanilla Programming                │
│       │    Mastered HTML5, CSS3, Bootstrap, JS...                 │
│       │    [HTML5] [CSS3] [Bootstrap] [JavaScript]                 │
│       │                                                            │
│  2025 ●─── Tooling & Modern CSS Workflows                         │
│       │    Expanding Frontend Toolchains                           │
│       │    Git, GitHub, Tailwind CSS, Sass...                      │
│       │    [Git] [Tailwind CSS] [Sass] [Responsive]                │
│       │                                                            │
│  2026 ●─── Production Frameworks & State Management               │
│            Enterprise SPA Ecosystems                               │
│            React, Vue, TypeScript, Pinia, Redux...                 │
│            [React] [Vue 3] [TypeScript] [Pinia]  ...+3             │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

### 3. Section Header

- **Heading** (`<h2>`):
  - Teks: `"Skills & Journey"`
  - `font-family: theme.fonts.display` (Poiret One)
  - `font-size: theme.fontSizes['4xl']` desktop → `['3xl']` mobile
  - `color: theme.colors.textHighlight`
  - `font-weight: theme.fontWeights.regular`
  - `letter-spacing: theme.letterSpacings.wide`
- **Subheading** (`<p>`):
  - Teks: `"Teknologi yang digunakan dan rekam jejak belajar."`
  - `font-size: theme.fontSizes.md`
  - `color: theme.colors.textMuted`
  - `margin-top: theme.spacing.sm`

---

### 4. Skills Subsection: Category Tabs

#### Tab Data
```ts
const SKILL_TABS = [
  { value: 'all',    label: 'All' },
  { value: 0,        label: 'Languages & Core' },
  { value: 1,        label: 'Frameworks' },
  { value: 2,        label: 'Styling & UI' },
];
```

Tab menggunakan index kategori dari `skillCategories[]` sebagai filter value.

#### Tab Styling
- Sama persis dengan filter tabs di Featured Projects (konsistensi visual):
  - `border-radius: theme.radii.full`
  - Aktif: `background: accentMuted`, `border: border`, `color: accentLime`
  - Non-aktif: `border: borderSubtle`, `color: textMuted`
  - Hover: `border: borderHover`, `color: textSecondary`

#### Filter Logic
```ts
const [activeTab, setActiveTab] = useState<'all' | 0 | 1 | 2>('all');

const displayedSkills =
  activeTab === 'all'
    ? skillCategories.flatMap((cat) => cat.skills)
    : skillCategories[activeTab].skills;
```

---

### 5. Skill Card (`SkillCard.tsx`)

#### Struktur Visual
```
┌──────────────────┐
│                  │
│    [Icon SVG]    │  ← 40px × 40px, centered
│                  │
│  TypeScript      │  ← Nama skill, bawah icon
│                  │
└──────────────────┘
```

#### Props
```ts
interface SkillCardProps {
  skill: SkillItem;  // { name: string; icon: string }
  index: number;     // untuk stagger animasi
}
```

#### Styling Kartu
- `display: flex`, `flex-direction: column`, `align-items: center`, `justify-content: center`
- `gap: theme.spacing.sm`
- `padding: theme.spacing.lg theme.spacing.md`
- `background: theme.colors.glass`
- `border: 1px solid theme.colors.borderGlass`
- `border-radius: theme.radii.md`
- `transition: border-color fast, transform fast, box-shadow fast`
- Hover:
  - `border-color: theme.colors.borderHover`
  - `transform: translateY(-3px)`
  - `box-shadow: theme.shadows.glow` (glow tipis hijau lime)

#### Icon
- `<img src={skill.icon} alt={skill.name} />`, `width: 40px`, `height: 40px`
- Icon SVG sudah ada di `public/icons/tech/`
- Hover → `filter: drop-shadow(0 0 6px rgba(183, 216, 148, 0.4))` (glow tipis)

#### Label Nama
- `font-size: theme.fontSizes.xs` (12px)
- `font-weight: theme.fontWeights.medium`
- `color: theme.colors.textSecondary`
- `text-align: center`
- `margin-top: theme.spacing.xs`

---

### 6. Skill Grid Layout

```css
grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
gap: theme.spacing.md;
```

- `auto-fill` + `minmax(100px, 1fr)` → Grid menyesuaikan jumlah kolom otomatis berdasarkan lebar container tanpa media query manual.
- Desktop 1200px → ±10 kolom, Tablet 768px → ±6 kolom, Mobile 375px → ±3 kolom.
- `margin-top: theme.spacing.xl`

---

### 7. Journey Timeline (`JourneyTimeline.tsx`)

#### Struktur HTML
```html
<section> <!-- Subsection wrapper -->
  <h3>Career Journey</h3>
  <p>Dari nol ke production SPA.</p>

  <div class="timeline"> <!-- garis vertikal kiri -->
    <div class="milestone"> <!-- repeat per milestone -->
      <div class="node">   <!-- titik bulat di garis -->
        <span class="year">2024</span>
      </div>
      <div class="content">
        <h4>Foundations of Web Development</h4>
        <p class="headline">Core Web Standards & Vanilla Programming</p>
        <p class="description">Mastered web fundamentals...</p>
        <div class="tech-tags">
          <span>HTML5</span>
          <span>CSS3</span>
          ...
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Garis Vertikal (Timeline Line)
- `position: absolute`, `left: 20px`, `top: 0`, `bottom: 0`
- `width: 1px`
- `background: linear-gradient(to bottom, theme.colors.border, theme.colors.borderSubtle, transparent)`

#### Node (Titik Tahun)
- Bulat: `width: 40px`, `height: 40px`, `border-radius: 50%`
- `background: theme.colors.secondarySurface`
- `border: 2px solid theme.colors.accentLime`
- `display: flex`, `align-items: center`, `justify-content: center`
- Tahun di dalam node:
  - `font-size: theme.fontSizes.xs` (12px)
  - `font-weight: theme.fontWeights.bold`
  - `color: theme.colors.accentLime`
  - `letter-spacing: theme.letterSpacings.wide`

#### Content Area
- `padding-left: theme.spacing.xl` (space setelah node)
- `padding-bottom: theme.spacing['3xl']` (jarak antar milestone)

**Title** (`<h4>`):
- `font-family: theme.fonts.heading`
- `font-size: theme.fontSizes.lg` (20px)
- `font-weight: theme.fontWeights.semibold`
- `color: theme.colors.textHighlight`
- `margin-bottom: theme.spacing.xs`

**Headline** (`<p class="headline">`):
- `font-size: theme.fontSizes.sm`
- `font-weight: theme.fontWeights.medium`
- `color: theme.colors.accentLime`
- `margin-bottom: theme.spacing.sm`

**Description** (`<p>`):
- `font-size: theme.fontSizes.sm`
- `color: theme.colors.textSecondary`
- `line-height: theme.lineHeights.relaxed`
- `max-width: 600px`
- `margin-bottom: theme.spacing.md`

**Tech Tags** (`<div class="tech-tags">`):
- Flex row, `gap: 6px`, `flex-wrap: wrap`
- Tiap tag: `font-size: xs`, `padding: 3px 10px`, `border-radius: full`
- `background: accentMuted`, `color: accentLime`, `border: 1px solid borderSubtle`
- Jika lebih dari 5 tag → tampilkan `+N` pill (sama persis dengan ProjectCard)

---

### 8. Entrance Animations

Semua animasi `whileInView` → trigger sekali saat scroll masuk viewport:

| Elemen | Animasi | Delay |
|---|---|---|
| Section Header (h2 + p) | `fadeInUp` (y: 20→0) | 0ms |
| Tabs row | `fadeInUp` | 100ms |
| Skill Card (tiap item) | `fadeInUp`, staggered | `index * 50ms` (lebih cepat karena banyak item) |
| Journey Subsection Header | `fadeInUp` | 0ms (trigger sendiri) |
| Milestone (tiap item) | `fadeInLeft` (x: -20→0) | `index * 150ms` |

- Duration: `400ms`, easing: `[0.4, 0, 0.2, 1] as const`
- `viewport: { once: true, margin: '-50px' }`

---

### 9. Divider antara Skills dan Journey

- `<hr>` atau `<div>` sebagai pemisah visual antara grid skill dan linimasa.
- `width: 100%`, `height: 1px`
- `background: linear-gradient(to right, transparent, theme.colors.border, transparent)`
- `margin: theme.spacing['3xl'] 0`

---

### 10. Urutan Eksekusi

```
Step 1 → Buat src/components/Skills/Skills.styles.ts
Step 2 → Buat src/components/Skills/SkillCard.tsx
Step 3 → Buat src/components/Skills/JourneyTimeline.tsx
Step 4 → Buat src/components/Skills/Skills.tsx
Step 5 → Buat src/components/Skills/index.ts
Step 6 → Update src/pages/HomePage.tsx — import Skills, tambah di bawah Projects
Step 7 → tsc --noEmit + npm run build
Step 8 → Commit & push: "feat: skills and career journey section"
```

---

### 11. Theme Tokens yang Dipakai

```
colors: darkBase, secondarySurface, glass, glassHover
        accentLime, accentMuted
        textHighlight, textSecondary, textMuted
        border, borderHover, borderSubtle, borderGlass
fonts:  display (Poiret One), heading (Google Sans)
fontSizes: xs, sm, md, lg, '3xl', '4xl'
fontWeights: medium, semibold, bold, regular
lineHeights: relaxed
letterSpacings: wide, wider
spacing: xs, sm, md, lg, xl, '2xl', '3xl', '4xl'
radii: md, full
transitions: fast (150ms)
shadows: glow
```
