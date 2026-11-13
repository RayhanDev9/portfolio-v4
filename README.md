# Portfolio v4 — Muhamad Rayhan

> React 19 + TypeScript + Vite + styled-components
> Design DNA: AW Media dark glassmorphism × Brandlos confident typography

---

## Build Plan: Navbar & Hero Section

### Pre-requisites (sebelum mulai coding)

1. **Install `lucide-react`** — package `lucide` yang terinstall sekarang hanya menyediakan icon mentah, bukan React components. Ganti dengan:
   ```bash
   pnpm remove lucide
   pnpm add lucide-react
   ```
2. **Commit perubahan yang belum di-commit** — theme setup, GlobalStyles, styled.d.ts, App.tsx, main.tsx, index.html, GEMINI.md sudah dimodifikasi tapi belum masuk git.

---

### 1. Navbar (`src/components/Navbar/`)

#### File Structure
```
src/components/Navbar/
├── Navbar.tsx          # Komponen utama
├── Navbar.styles.ts    # Semua styled-components
├── MobileMenu.tsx      # Overlay menu untuk layar kecil
└── index.ts            # Barrel export
```

#### Behavior
| Aspek | Detail |
|---|---|
| **Posisi** | `position: fixed`, `top: 0`, `z-index: 100`, full-width |
| **Visual** | Glass surface: `background: theme.colors.glass` + `backdrop-filter: theme.effects.blur` + `border-bottom: 1px solid theme.colors.borderGlass` |
| **Scroll Effect** | Saat scroll > 20px, navbar mengecilkan padding vertikal (64px → 48px) dan menambah `box-shadow: theme.shadows.subtle`. Deteksi via `useState` + `useEffect` + `window scroll listener` |
| **Layout** | Flexbox: Logo/Brand kiri — Nav Links tengah — Availability Badge kanan |
| **Mobile** | Di bawah `theme.breakpoints.tablet` (768px): nav links disembunyikan, muncul hamburger icon (`Menu` / `X` dari lucide-react). Klik buka `MobileMenu` overlay fullscreen |

#### Nav Items
```ts
const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];
```

Navigasi menggunakan smooth scroll ke anchor section di beranda. Nanti saat rute `/projects/:id` aktif, link akan jadi `<Link to="/#projects">` (react-router).

#### Brand / Logo
- Teks **"Rayhan"** menggunakan `font-family: theme.fonts.display` (Poiret One), `fontSize: theme.fontSizes.xl`, `color: theme.colors.textHighlight`
- Titik hijau kecil (dot) setelah nama: `color: theme.colors.accentLime`

#### Availability Pill Badge (Desktop)
- Hanya tampil di desktop (`theme.media.desktop`)
- Layout: Green pulsing dot (CSS animation) + teks "Open to Work"
- Styling:
  - `background: theme.colors.accentMuted`
  - `border: 1px solid theme.colors.border`
  - `border-radius: theme.radii.full`
  - `color: theme.colors.accentLime`
  - `font-size: theme.fontSizes.xs`
  - `letter-spacing: theme.letterSpacings.wide`
  - `text-transform: uppercase`
- Pulsing dot: `@keyframes pulse` — scale 1→1.5→1 + opacity 1→0.5→1, duration `2s infinite`

#### MobileMenu Overlay
- `position: fixed`, `inset: 0`, `z-index: 99`
- `background: theme.colors.glassElevated` + `backdrop-filter: theme.effects.blurHeavy`
- Nav links ditampilkan vertikal, tengah layar, `font-size: theme.fontSizes.xl`
- Setiap link punya hover effect: `color` dari `textMuted` → `accentLime`, transisi `theme.transitions.fast`
- Entry animation: fade-in dari atas (gunakan `motion` library) duration 250ms
- Availability badge tampil di bawah nav links dalam versi mobile

#### Theme Tokens yang Dipakai
```
colors: glass, glassElevated, borderGlass, accentLime, accentMuted, textHighlight, textMuted, border
fonts: display (Poiret One), body
fontSizes: xs, sm, xl
spacing: sm, md, lg, xl
radii: full
transitions: fast (150ms), normal (250ms)
effects: blur, blurHeavy
shadows: subtle
breakpoints: tablet (768px), desktop (1024px)
```

---

### 2. Hero Section (`src/components/Hero/`)

#### File Structure
```
src/components/Hero/
├── Hero.tsx             # Komponen utama
├── Hero.styles.ts       # Semua styled-components
├── AvailabilityBadge.tsx # Badge reusable (juga dipakai Navbar)
└── index.ts             # Barrel export
```

> **Catatan:** `AvailabilityBadge` akan di-extract ke `src/components/shared/` nanti kalau dipakai di lebih dari 2 tempat. Untuk sekarang, simpan di Hero/ dulu.

#### Layout (Desktop ≥ 1024px)
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  [Availability Badge]                                  │
│                                                        │
│  Muhamad Rayhan.              ┌──────────────────┐     │
│  Frontend Web                 │                  │     │
│  Developer                    │   Profile Photo  │     │
│                               │   (Polaroid)     │     │
│  Headline text...             │                  │     │
│                               └──────────────────┘     │
│  [Lihat Proyek]  [Hubungi]                             │
│                                                        │
│  [GitHub] [Email] [Instagram] [WhatsApp]               │
│                                                        │
└────────────────────────────────────────────────────────┘
```

- **Grid 2 kolom**: kiri 55% (teks) — kanan 45% (foto), `gap: theme.spacing['3xl']`
- Di bawah `theme.breakpoints.tablet`: single column, foto di atas teks (order swap via flexbox)
- `min-height: 100vh`, `padding-top: 120px` (ruang untuk fixed navbar)
- `id="hero"` sebagai scroll anchor

#### Konten Kiri — Text Block

1. **Availability Badge** (komponen terpisah):
   - Posisi: di atas nama, `margin-bottom: theme.spacing.lg`
   - Green pulsing dot + `profileData.availability` ("Available for Remote • Freelance • Hybrid")
   - Sama styling dengan yang di Navbar, tapi teks lengkap

2. **Nama** (`<h1>`):
   - `profileData.name` → "Muhamad Rayhan"
   - `font-family: theme.fonts.heading`
   - `font-size: theme.fontSizes['5xl']` (60px) desktop, `theme.fontSizes['4xl']` (48px) tablet, `theme.fontSizes['3xl']` (36px) mobile
   - `color: theme.colors.textHighlight`
   - `font-weight: theme.fontWeights.bold`
   - `line-height: theme.lineHeights.tight`
   - `letter-spacing: theme.letterSpacings.tight`
   - Titik hijau "." di akhir nama: `<span>` dengan `color: theme.colors.accentLime`

3. **Role** (`<h2>`):
   - `profileData.role` → "Frontend Web Developer"
   - `font-family: theme.fonts.display` (Poiret One)
   - `font-size: theme.fontSizes['2xl']` (30px) desktop, `theme.fontSizes.xl` (24px) mobile
   - `color: theme.colors.accentLime`
   - `font-weight: theme.fontWeights.regular`
   - `letter-spacing: theme.letterSpacings.wide`

4. **Headline** (`<p>`):
   - `profileData.headline`
   - `font-size: theme.fontSizes.md` (18px)
   - `color: theme.colors.textSecondary`
   - `line-height: theme.lineHeights.relaxed`
   - `max-width: 520px` — jangan terlalu lebar, jaga readability

5. **CTA Buttons** (row, `gap: theme.spacing.md`):
   - **Primary** — "Lihat Proyek":
     - `background: theme.colors.accentLime`
     - `color: theme.colors.textInverse` (#202734)
     - `border: none`
     - `border-radius: theme.radii.sm`
     - `padding: 12px 28px`
     - `font-weight: theme.fontWeights.semibold`
     - Hover: `filter: brightness(1.1)`, `transform: translateY(-1px)`
     - `href="#projects"` (smooth scroll)
   - **Secondary** — "Hubungi":
     - `background: transparent`
     - `border: 1px solid theme.colors.border`
     - `color: theme.colors.textPrimary`
     - `border-radius: theme.radii.sm`
     - `padding: 12px 28px`
     - Hover: `border-color: theme.colors.borderHover`, `background: theme.colors.accentMuted`
     - `href="#contact"` (smooth scroll)

6. **Social Links** (row, `gap: theme.spacing.md`, `margin-top: theme.spacing.xl`):
   - Map `profileData.socials` → icon buttons
   - Setiap icon: `<img src={social.icon} />`, `width: 20px`, `height: 20px`
   - Wrapper: `padding: theme.spacing.sm`, `border-radius: theme.radii.sm`
   - Hover: `background: theme.colors.accentMuted`, transisi `theme.transitions.fast`
   - `<a>` dengan `target="_blank"`, `rel="noopener noreferrer"`

#### Konten Kanan — Profile Photo (Polaroid Style)

- **Container** (polaroid card):
  - `background: theme.colors.secondarySurface`
  - `border: 1px solid theme.colors.borderGlass`
  - `border-radius: theme.radii.md` (12px)
  - `padding: theme.spacing.sm` (8px) di tiga sisi atas + kiri + kanan, `theme.spacing.lg` (24px) di bawah
  - `box-shadow: theme.shadows.card`
  - `transform: rotate(2deg)` — sedikit miring untuk kesan organik
  - `max-width: 360px`

- **Image**:
  - `<img src={profileData.avatar} alt="Muhamad Rayhan" />`
  - `width: 100%`, `aspect-ratio: 3 / 4`
  - `object-fit: cover`
  - `border-radius: theme.radii.xs` (4px)

- **Caption** (di bawah foto, dalam area padding bawah polaroid):
  - `profileData.location` → "Banten, Indonesia (GMT+7)"
  - Icon lokasi: `<img src="/icons/ui/location.svg" />`
  - `font-size: theme.fontSizes.sm`
  - `color: theme.colors.textMuted`
  - `text-align: center`

#### Entrance Animations (motion library)

Semua animasi menggunakan `motion` (Framer Motion v14):

| Elemen | Animasi | Delay |
|---|---|---|
| Availability Badge | `fadeInUp` (y: 20 → 0, opacity: 0 → 1) | 0ms |
| Nama (h1) | `fadeInUp` | 100ms |
| Role (h2) | `fadeInUp` | 200ms |
| Headline (p) | `fadeInUp` | 300ms |
| CTA Buttons | `fadeInUp` | 400ms |
| Social Links | `fadeInUp` | 500ms |
| Polaroid Photo | `fadeIn` + `scale(0.95 → 1)` + `rotate(0 → 2deg)` | 300ms |

Duration semua: `500ms`, easing: `[0.4, 0, 0.2, 1]` (ease-out)
Gunakan `motion.div` wrapper dengan `initial`, `animate`, dan `transition` props.

---

### 3. Shared Components

```
src/components/shared/
└── AvailabilityBadge.tsx   # (nanti dipindah ke sini jika reusable)
```

---

### 4. Urutan Eksekusi

```
Step 1 → pnpm remove lucide; pnpm add lucide-react
Step 2 → Commit semua perubahan yang belum di-commit (theme, GEMINI.md, etc.)
Step 3 → Buat src/components/Navbar/ (4 files)
Step 4 → Buat src/components/Hero/ (4 files)
Step 5 → Update src/App.tsx — import Navbar + Hero, hapus placeholder
Step 6 → Verifikasi: tsc --noEmit, build, dev server check
Step 7 → Commit & push: "feat: navbar & hero section with glassmorphism design"
```

---

### 5. Referensi Visual

| Inspirasi | Apa yang Diambil |
|---|---|
| **AW Media** (`awmedia.marketing/blog`) | Dark canvas, glass card surfaces, 1px border glow on hover, semi-transparent overlays |
| **Brandlos** (`brandlos.nl/vacatures`) | Bold/confident headline typography, modular section rhythm, pill status badges, action-oriented CTA |

### 6. Palette & Token Quick Reference

| Token | Value | Usage |
|---|---|---|
| `colors.darkBase` | `#202734` | Page background |
| `colors.glass` | `rgba(54, 65, 90, 0.55)` | Navbar background |
| `colors.borderGlass` | `rgba(183, 216, 148, 0.18)` | Navbar & card borders |
| `colors.accentLime` | `#B7D894` | Dot indicator, role text, primary CTA |
| `colors.textHighlight` | `#E0F8C7` | h1 name text |
| `colors.textSecondary` | `#C5D8B4` | Headline paragraph |
| `colors.textMuted` | `#9DA9C1` | Nav links, caption text |
| `fonts.display` | Poiret One | Logo, role subtitle |
| `fonts.heading` | Google Sans / Plus Jakarta Sans | h1 name |
| `transitions.fast` | `150ms ease-out` | Hover states |
| `transitions.normal` | `250ms ease-out` | Scroll effects, mobile menu |
