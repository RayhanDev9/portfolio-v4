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
| **Certificates Showcase & Lightbox (`#certificates`)** | ✅ Selesai | `c4862ba` |
| Contact Section (`#contact`) | ⬜ Belum | — |
| Footer | ⬜ Belum | — |
| `/projects/:id` Full Case Study | ⬜ Belum | — |

---

## 📋 Active Build Plan: Certificates Showcase & Lightbox Modal (`#certificates`)

### Data yang Tersedia

**`src/data/certificates.ts`** — 12 sertifikat total:

| # | ID | Judul | Platform | Penerbit |
|---|---|---|---|---|
| 1 | `penghargaan-isc` | Sertifikat Penghargaan ISC | Penghargaan | Informatics Study Club |
| 2 | `hackathon-himtif` | Hackathon: Innovating Beyond The Code | Kompetisi | HIMTIF |
| 3 | `udemy-js-jonas` | Complete JavaScript Course | Udemy | Jonas Schmedtmann |
| 4 | `udemy-html-css-jonas` | Responsive Websites HTML & CSS | Udemy | Jonas Schmedtmann |
| 5 | `udemy-js-eko` | JavaScript: Pemula sampai Mahir | Udemy | Eko Kurniawan |
| 6 | `codepolitan-vue-pinia` | State Management Vue 3 + Pinia | Codepolitan | Ahmad Hakim |
| 7 | `codepolitan-ajax` | AJAX & Asynchronous Web API | Codepolitan | Ahmad Hakim |
| 8 | `codepolitan-git` | Git & GitHub untuk Pemula | Codepolitan | Nusendra |
| 9 | `codepolitan-javascript` | JavaScript Dasar | Codepolitan | Ahmad Hakim |
| 10 | `codepolitan-bootstrap` | CSS Framework Bootstrap | Codepolitan | Ahmad Hakim |
| 11 | `codepolitan-css` | Dasar CSS | Codepolitan | Alucard |
| 12 | `codepolitan-html-dasar` | Dasar HTML | Codepolitan | Ahmad Hakim |

**Distribusi platform:**
- Penghargaan: 1
- Kompetisi: 1
- Udemy: 3
- Codepolitan: 7

**Gambar:** 12 file `.avif` di `public/images/sertifikat/`

---

### 1. File Structure

```
src/components/Certificates/
├── Certificates.tsx          # Section wrapper — heading, filter, grid
├── Certificates.styles.ts    # Semua styled-components
├── CertificateCard.tsx       # Kartu individual per sertifikat
├── CertificateLightbox.tsx   # Modal zoom fullscreen
└── index.ts                  # Barrel export
```

---

### 2. Section Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  SECTION HEADER                                                      │
│                                                                      │
│  Certifications                          (Poiret One display font)   │
│  Sertifikasi resmi dan                  (subheading, textMuted)      │
│  penghargaan yang diperoleh.                                         │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│  FILTER TABS                                                         │
│                                                                      │
│  [All (12)] [Udemy (3)] [Codepolitan (7)] [Kompetisi & Awards (2)]  │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│  CERTIFICATE GRID (3 kolom desktop, 2 tablet, 1 mobile)              │
│                                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│  │  ┌──────────┐│  │  ┌──────────┐│  │  ┌──────────┐│               │
│  │  │Thumbnail ││  │  │Thumbnail ││  │  │Thumbnail ││               │
│  │  │(click →  ││  │  │(click →  ││  │  │(click →  ││               │
│  │  │lightbox) ││  │  │lightbox) ││  │  │lightbox) ││               │
│  │  └──────────┘│  │  └──────────┘│  │  └──────────┘│               │
│  │  [Udemy]     │  │  [Codepolitan│  │  [Kompetisi] │               │
│  │  Title...    │  │  Title...    │  │  Title...    │               │
│  │  Issuer      │  │  Issuer      │  │  Issuer      │               │
│  │  [🔍 Zoom]   │  │  [🔍 Zoom]   │  │  [🔍 Zoom]   │               │
│  └──────────────┘  └──────────────┘  └──────────────┘               │
│                                                                      │
│  ... (12 sertifikat total)                                           │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

 LIGHTBOX MODAL (saat diklik Zoom atau thumbnail):

┌──────────────────────────────────────────────────────────────────────┐
│  ████████████████████████████████████████████████████████████████████ │
│  ██ Overlay gelap (backdrop-filter: blur(20px)) ████████████████████ │
│  ██                                                              ██ │
│  ██    ┌────────────────────────────────────────────────┐     [X] ██ │
│  ██    │                                                │        ██ │
│  ██    │                                                │        ██ │
│  ██    │          Gambar Sertifikat                      │        ██ │
│  ██    │          (max-width: 900px)                     │        ██ │
│  ██    │          (resolusi tinggi)                      │        ██ │
│  ██    │                                                │        ██ │
│  ██    │                                                │        ██ │
│  ██    └────────────────────────────────────────────────┘        ██ │
│  ██                                                              ██ │
│  ██    Judul Sertifikat                                          ██ │
│  ██    Penerbit • Platform                                       ██ │
│  ██                                                              ██ │
│  ████████████████████████████████████████████████████████████████████ │
└──────────────────────────────────────────────────────────────────────┘
```

---

### 3. Section Header

- **Heading** (`<h2>`):
  - Teks: `"Certifications"`
  - `font-family: theme.fonts.display` (Poiret One)
  - `font-size: theme.fontSizes['4xl']` desktop → `['3xl']` mobile
  - `color: theme.colors.textHighlight`
  - `font-weight: theme.fontWeights.regular`
  - `letter-spacing: theme.letterSpacings.wide`
- **Subheading** (`<p>`):
  - Teks: `"Sertifikasi resmi dan penghargaan yang diperoleh."`
  - `font-size: theme.fontSizes.md`
  - `color: theme.colors.textMuted`
  - `margin-top: theme.spacing.sm`

---

### 4. Filter Tabs

#### Tab Data
```ts
const CERT_TABS: { value: CertificatePlatform | 'all'; label: string }[] = [
  { value: 'all',        label: `All (${certificatesData.length})` },       // 12
  { value: 'udemy',      label: `Udemy (3)` },
  { value: 'codepolitan', label: `Codepolitan (7)` },
  { value: 'kompetisi',  label: `Awards (2)` },     // Gabung kompetisi + penghargaan
];
```

> **Catatan:** Karena platform `kompetisi` (1) dan `penghargaan` (1) hanya masing-masing 1 sertifikat, kita gabung keduanya ke tab "Awards (2)". Filter logic: `platform === 'kompetisi' || platform === 'penghargaan'`.

#### Filter Logic
```ts
const [activePlatform, setActivePlatform] = useState<CertificatePlatform | 'all'>('all');

const displayedCerts =
  activePlatform === 'all'
    ? certificatesData
    : activePlatform === 'kompetisi'
      ? certificatesData.filter(c => c.platform === 'kompetisi' || c.platform === 'penghargaan')
      : certificatesData.filter(c => c.platform === activePlatform);
```

#### Tab Styling
- Identik dengan filter tabs pada Featured Projects dan Skills (konsistensi visual).

---

### 5. Certificate Card (`CertificateCard.tsx`)

#### Props Interface
```ts
interface CertificateCardProps {
  certificate: Certificate;
  index: number;
  onViewCertificate: (certificate: Certificate) => void;
}
```

#### Struktur Visual
```
┌────────────────────────────────┐
│ ┌────────────────────────────┐ │  ← Thumbnail wrapper
│ │                            │ │     aspect-ratio: 4/3
│ │    Thumbnail Sertifikat    │ │     overflow: hidden
│ │    (click → lightbox)      │ │     cursor: pointer
│ │                            │ │
│ └────────────────────────────┘ │
│                                │
│  [Udemy]                       │  ← Platform badge pill
│  Complete JavaScript Course    │  ← Title (h3), max 2 baris
│  Jonas Schmedtmann             │  ← Issuer name
│                                │
│  [JS ES6+] [OOP] [Async]      │  ← Skill pills (max 3 + overflow)
│                                │
│  [🔍 Lihat Sertifikat]         │  ← Action button
│                                │
└────────────────────────────────┘
```

#### Styling Detail

**Card Container**:
- `background: theme.colors.secondarySurface`
- `border: 1px solid theme.colors.borderGlass`
- `border-radius: theme.radii.md`
- `overflow: hidden`
- `display: flex`, `flex-direction: column`
- Hover: `border-color: borderHover`, `transform: translateY(-4px)`, `box-shadow: glow`

**Thumbnail**:
- `<img>` wrapper, `aspect-ratio: 4 / 3`, `overflow: hidden`
- `object-fit: cover`, `cursor: pointer`
- `transition: transform normal`
- Card hover → `transform: scale(1.04)` pada image
- Klik thumbnail → panggil `onViewCertificate(certificate)` → buka lightbox

**Content area** (padding: `theme.spacing.lg`):

- **Platform Badge**:
  - Pill kecil di atas judul
  - `font-size: xs`, `padding: 3px 10px`
  - `border-radius: full`
  - `background: accentMuted`, `color: accentLime`
  - `border: 1px solid borderSubtle`
  - `text-transform: uppercase`, `letter-spacing: wider`
  - `margin-bottom: theme.spacing.sm`

- **Title** (`<h3>`):
  - `font-size: theme.fontSizes.base` (16px)
  - `font-weight: semibold`
  - `color: textHighlight`
  - `-webkit-line-clamp: 2` + `overflow: hidden`
  - `margin-bottom: theme.spacing.xs`

- **Issuer**:
  - `font-size: theme.fontSizes.xs`
  - `color: textMuted`
  - `margin-bottom: theme.spacing.md`

- **Skill Pills** (flex row, max 3 + overflow):
  - Sama styling dengan ProjectCard tech pills
  - `margin-bottom: theme.spacing.md`

- **Zoom Button** (action row):
  - `width: 100%`
  - `padding: 10px`
  - `border-radius: theme.radii.sm`
  - `background: theme.colors.glass`
  - `border: 1px solid theme.colors.borderGlass`
  - `color: theme.colors.textSecondary`
  - `font-size: theme.fontSizes.sm`
  - `cursor: pointer`
  - `display: flex`, `align-items: center`, `justify-content: center`, `gap: 6px`
  - Icon `ZoomIn` dari lucide-react (size 14)
  - Hover: `border-color: borderHover`, `background: glassHover`, `color: textHighlight`
  - Klik → panggil `onViewCertificate(certificate)` → buka lightbox

---

### 6. Certificate Grid Layout

```css
grid-template-columns: repeat(3, 1fr);   /* ≥ 1024px desktop */
grid-template-columns: repeat(2, 1fr);   /* 768px–1023px tablet */
grid-template-columns: 1fr;              /* < 768px mobile */
gap: theme.spacing.lg;
```

---

### 7. Lightbox Modal (`CertificateLightbox.tsx`)

#### Props Interface
```ts
interface CertificateLightboxProps {
  certificate: Certificate | null;   // null = tertutup
  onClose: () => void;
}
```

#### Behavior
- Muncul saat `certificate !== null`
- Tutup dengan: klik tombol `X`, klik di luar gambar (overlay), tekan `Esc`
- `document.body.style.overflow = 'hidden'` saat terbuka (cegah scroll di belakang)
- `useEffect` listener `keydown` untuk `Escape`

#### Struktur Visual

**Overlay**:
- `position: fixed`, `inset: 0`, `z-index: 200`
- `background: rgba(32, 39, 52, 0.92)` (overlay gelap)
- `backdrop-filter: theme.effects.blurHeavy` (`blur(20px)`)
- `display: flex`, `align-items: center`, `justify-content: center`
- `padding: theme.spacing.xl`
- Klik overlay (bukan konten) → `onClose()`

**Close Button**:
- `position: absolute`, `top: 16px`, `right: 16px`
- `width: 40px`, `height: 40px`, `border-radius: full`
- `background: theme.colors.glass`, `border: 1px solid borderGlass`
- `color: textHighlight`
- Icon `X` dari lucide-react (size 20)
- Hover: `background: glassHover`, `border-color: borderHover`
- `z-index: 201`

**Content Container** (klik TIDAK menutup):
- `max-width: 900px`, `max-height: 90vh`
- `display: flex`, `flex-direction: column`, `align-items: center`
- `gap: theme.spacing.md`

**Certificate Image**:
- `max-width: 100%`, `max-height: 75vh`
- `object-fit: contain`
- `border-radius: theme.radii.md`
- `border: 1px solid borderGlass`
- `box-shadow: theme.shadows.card`

**Info Bar** (di bawah gambar):
- **Title**: `font-size: lg`, `color: textHighlight`, `font-weight: semibold`, `text-align: center`
- **Issuer + Platform**: `font-size: sm`, `color: textMuted`, format `"Jonas Schmedtmann • Udemy"`, `text-align: center`

#### Entry/Exit Animations (AnimatePresence)
- Overlay: `opacity 0 → 1`, duration 200ms
- Content: `opacity 0 → 1` + `scale 0.95 → 1`, duration 250ms
- Exit: reverse

---

### 8. State Management di Section Level

```tsx
// Di Certificates.tsx
const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

// Buka lightbox
const handleViewCertificate = (cert: Certificate) => setSelectedCert(cert);

// Tutup lightbox
const handleCloseLightbox = () => setSelectedCert(null);
```

Setiap `CertificateCard` menerima `onViewCertificate={handleViewCertificate}`.
`CertificateLightbox` menerima `certificate={selectedCert}` dan `onClose={handleCloseLightbox}`.

---

### 9. Entrance Animations

| Elemen | Animasi | Trigger |
|---|---|---|
| Section Header | `fadeInUp` (y: 20→0) | `whileInView`, `once: true` |
| Filter Tabs | `fadeInUp`, delay 100ms | `whileInView`, `once: true` |
| Certificate Card | `fadeInUp`, staggered `index * 80ms` | `whileInView`, `once: true` |

- Duration: `400ms`, easing: `[0.4, 0, 0.2, 1] as const`
- `viewport: { once: true, margin: '-50px' }`

---

### 10. Urutan Eksekusi

```
Step 1  → Buat src/components/Certificates/Certificates.styles.ts
Step 2  → Buat src/components/Certificates/CertificateCard.tsx
Step 3  → Buat src/components/Certificates/CertificateLightbox.tsx
Step 4  → Buat src/components/Certificates/Certificates.tsx
Step 5  → Buat src/components/Certificates/index.ts
Step 6  → Update src/pages/HomePage.tsx — import Certificates, tambah di bawah Skills
Step 7  → tsc --noEmit + npm run build
Step 8  → Commit & push: "feat: certificates showcase with interactive lightbox modal"
```

---

### 11. Theme Tokens yang Dipakai

```
colors: darkBase, secondarySurface, glass, glassHover, overlay
        accentLime, accentMuted
        textHighlight, textSecondary, textMuted, textInverse
        border, borderHover, borderSubtle, borderGlass
fonts:  display (Poiret One), heading (Google Sans)
fontSizes: xs, sm, base, md, lg, '3xl', '4xl'
fontWeights: medium, semibold, regular
lineHeights: relaxed
letterSpacings: wide, wider
spacing: xs, sm, md, lg, xl, '2xl', '4xl'
radii: sm, md, full
transitions: fast (150ms), normal (250ms)
shadows: glow, card
effects: blurHeavy (blur(20px))
```
