# Portfolio v4 — Muhamad Rayhan

> React 19 + TypeScript + Vite + styled-components
> Design DNA: AW Media dark glassmorphism × Brandlos confident typography

---

## 🚀 Status Implementasi

| Section / Fitur | Status | Commit |
|---|---|---|
| Theme System & Design Tokens | ✅ Selesai | `d01871d` |
| Navbar & Glassmorphism Mobile Menu | ✅ Selesai | `f578672` |
| Hero Section (Polaroid, CTA, Socials) | ✅ Selesai | `f578672` |
| Featured Projects + Filter Tabs | ✅ Selesai | `9fcd808` |
| React Router v7 + `/projects` Catalogue | ✅ Selesai | `5748b9e` |
| `/projects/:id` Detail Page (placeholder) | ✅ Selesai | `5748b9e` |
| Skills & Career Journey (`#skills`) | ✅ Selesai | `f155aaf` |
| Certificates Showcase & Lightbox Modal | ✅ Selesai | `bcc484e` |
| **Fix: Uniform Card Height & `/certificates` Route** | ✅ Selesai | `d2891f7` |
| Contact Section (`#contact`) | ⬜ Belum | — |
| Footer | ⬜ Belum | — |
| `/projects/:id` Full Case Study | ⬜ Belum | — |

---

## 📋 Active Build Plan: Fix Certificate Card Alignment & `/certificates` Route

### 1. Masalah yang Ditemukan (Problem Analysis)

#### Masalah A: Tinggi Kartu & Perataan Elemen Tidak Rata (Card Height Mismatch)
- **Gejala visual**: Pada screenshot, kartu di tengah ("Hackathon: Innovating Beyond The Code" - 1 baris judul) memiliki tinggi kartu yang lebih pendek daripada kartu kiri dan kanan (judul 2 baris). Tombol *"Lihat Sertifikat"* di kartu tengah posisinya lebih tinggi dan tidak sejajar.
- **Penyebab teknis**:
  1. `<motion.div>` pembungkus di `CertificateCard.tsx` tidak memiliki `height: 100%`, dan `<CardContainer>` juga tidak di-set `height: 100%`. Akibatnya kartu hanya mengambil tinggi konten alaminya sendiri, bukan meregang mengikuti tinggi baris CSS Grid.
  2. `CardTitle` tidak memiliki `min-height` tetap untuk 2 baris teks. Judul 1 baris (~24px) menghasilkan selisih ~24px dibanding judul 2 baris (~48px), mendorong elemen di bawahnya secara tidak rata.
  3. `SkillsRow` memiliki jumlah baris tag yang bervariasi (1 baris vs 2 baris) tanpa `min-height` cadangan.

#### Masalah B: Sertifikat Belum Memiliki Route Tersendiri & Belum Ada Kurasi Featured
- **Gejala**: Beranda saat ini langsung menampilkan seluruh 12 sertifikat sekaligus tanpa sistem kurasi, berbeda dengan section **Featured Projects** yang menampilkan proyek terpilih di beranda dan menyediakan halaman katalog lengkap `/projects`.
- **Kebutuhan**:
  1. Beranda (`#certificates`) hanya menampilkan **sertifikat terbaik/unggulan** (6 sertifikat terkurasi dalam 2 baris × 3 kolom yang presisi).
  2. Tombol CTA di bawah beranda: *"Lihat Semua Sertifikat (12) →"* yang mengarahkan pengguna ke halaman rute baru `/certificates`.
  3. Halaman rute baru `src/pages/CertificatesPage.tsx` (`/certificates`) menampilkan seluruh 12 sertifikat dengan tombol kembali, filter tabs + counter, dan Lightbox modal interaktif.

---

### 2. Rencana Solusi Detail (Technical Blueprint)

#### A. Fix Optical Alignment & Equal Height Kartu (`Certificates.styles.ts` & `CertificateCard.tsx`)

1. **Equal Card Height & Flex Stretcher**:
   - Di `CertificateCard.tsx`:
     ```tsx
     <motion.div
       ...
       style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
     >
       <CardContainer style={{ height: '100%' }}>
     ```
   - Di `CardContainer`: tambahkan `height: 100%; display: flex; flex-direction: column;`

2. **Reserved Title Height (2 Baris Konsisten)**:
   - Di `CardTitle`:
     ```css
     min-height: 2.9rem; /* persis 2 baris line-height normal */
     line-height: 1.45;
     display: -webkit-box;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
     overflow: hidden;
     text-overflow: ellipsis;
     ```
     *Hasil*: Judul 1 baris maupun 2 baris akan selalu menempati tinggi vertikal yang sama persis (±46px), sehingga elemen `CardIssuer` di bawahnya selalu dimulai pada garis horizontal yang sejajar.

3. **Reserved Issuer & SkillsRow Height**:
   - Di `CardIssuer`: `min-height: 1.25rem;`
   - Di `SkillsRow`:
     ```css
     margin-top: auto; /* mendorong tombol ke bawah */
     min-height: 48px;  /* ruang seragam untuk tag skill */
     ```
     *Hasil*: Tombol *"Lihat Sertifikat"* akan selalu terkunci di posisi dasar (*bottom-aligned*) pada semua kartu dalam satu baris.

---

#### B. Skema Data: Tambah Properti `featured` di Certificate

1. **`src/types/portfolio.ts`**:
   ```ts
   export interface Certificate {
     id: string;
     title: string;
     platform: CertificatePlatform;
     platformName: string;
     issuer: string;
     img: string;
     alt: string;
     skills: string[];
     desc: string;
     featured?: boolean; // BARU
   }
   ```

2. **`src/data/certificates.ts`**:
   Tandai **6 sertifikat terbaik** sebagai `featured: true` mencakup prestasi penghargaan, kompetisi, dan sertifikasi kursus kredibel:
   - `penghargaan-isc` (Penghargaan Kontribusi Web Dev ISC)
   - `hackathon-himtif` (Hackathon HIMTIF)
   - `udemy-js-jonas` (The Complete JavaScript Course - Jonas Schmedtmann)
   - `udemy-html-css-jonas` (Build Responsive Websites - Jonas Schmedtmann)
   - `udemy-js-eko` (Pemrograman JavaScript - Eko Kurniawan)
   - `codepolitan-vue-pinia` (State Management Vue 3 dengan Pinia)

---

#### C. Update Section Beranda (`src/components/Certificates/Certificates.tsx`)

1. Hanya render sertifikat dengan `featured: true` (6 sertifikat).
2. Di bawah grid, tambahkan:
   ```tsx
   <FooterCTAWrapper>
     <AllCertificatesButton
       as={Link}
       to="/certificates"
       aria-label={`Lihat semua ${certificatesData.length} sertifikat di katalog lengkap`}
     >
       <span>Lihat Semua Sertifikat ({certificatesData.length})</span>
       <ArrowRight size={16} />
     </AllCertificatesButton>
   </FooterCTAWrapper>
   ```
3. Styling `FooterCTAWrapper` dan `AllCertificatesButton` ditambahkan di `Certificates.styles.ts` (mengikuti pola Brandlos secondary button seperti di Projects).

---

#### D. Buat Halaman Katalog Lengkap (`src/pages/CertificatesPage.tsx`)

1. **Layout**:
   - `<Navbar />` di bagian atas.
   - Tombol `← Kembali ke Beranda` (Link ke `/`).
   - Page Header:
     - Judul: `"All Certificates"` (Poiret One).
     - Subtitle: `"Seluruh kredensial sertifikasi, pelatihan intensif, dan penghargaan resmi yang diperoleh."`
   - Filter tabs lengkap dengan counter badge:
     - `All (12)`
     - `Udemy (3)`
     - `Codepolitan (7)`
     - `Awards (2)` (gabungan kompetisi + penghargaan)
   - Grid 3 kolom menampilkan seluruh 12 kartu sertifikat.
   - Integrasi `<CertificateLightbox />` aktif untuk pratinjau zoom gambar.
   - Scroll ke paling atas otomatis saat halaman dibuka (`window.scrollTo(0, 0)`).

---

#### E. Daftarkan Rute di Router (`src/router/index.tsx`)

Tambahkan path `/certificates`:
```tsx
import CertificatesPage from '../pages/CertificatesPage';

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/projects/:id', element: <ProjectDetailPage /> },
  { path: '/certificates', element: <CertificatesPage /> }, // BARU
  { path: '*', element: <NotFoundPage /> },
]);
```

---

### 3. Urutan Eksekusi (Step-by-Step Implementation)

1. **Step 1**: Update `src/types/portfolio.ts` — tambahkan `featured?: boolean` pada interface `Certificate`.
2. **Step 2**: Update `src/data/certificates.ts` — tandai 6 sertifikat pilihan dengan `featured: true`.
3. **Step 3**: Update `src/components/Certificates/Certificates.styles.ts` — fix equal height kartu (`CardTitle` min-height, `CardIssuer`, `SkillsRow`, `CardContainer` 100% height) + styling tombol `AllCertificatesButton`.
4. **Step 4**: Update `src/components/Certificates/CertificateCard.tsx` — pasang `height: 100%` pada motion wrapper & container.
5. **Step 5**: Update `src/components/Certificates/Certificates.tsx` — kurasi beranda (hanya featured) + tombol CTA ke `/certificates`.
6. **Step 6**: Buat file baru `src/pages/CertificatesPage.tsx` — katalog lengkap seluruh 12 sertifikat + filter + lightbox.
7. **Step 7**: Update `src/router/index.tsx` — daftarkan rute `/certificates`.
8. **Step 8**: Verifikasi build & type check: `npx tsc --noEmit` dan `npm run build`.
9. **Step 9**: Git commit & push ke remote repository.

---

### 4. Kriteria Keberhasilan (Success Criteria)

- ✅ **Presisi Visual**: Semua kartu sertifikat pada baris yang sama memiliki tinggi 100% identik.
- ✅ **Perataan Horizontal**: Tombol *"Lihat Sertifikat"* di setiap kartu sejajar sempurna pada garis bawah horizontal yang sama, tidak terpengaruh oleh panjang judul (1 baris vs 2 baris).
- ✅ **Home Page Ringkas**: Beranda hanya menampilkan 6 sertifikat terbaik sehingga halaman tetap proporsional dan tidak overloaded.
- ✅ **Navigasi Mulus**: Tombol *"Lihat Semua Sertifikat (12)"* membuka rute `/certificates` tanpa reload halaman.
- ✅ **Full Catalogue**: Halaman `/certificates` menampilkan seluruh 12 sertifikat lengkap dengan filter kategori dan lightbox modal zoom yang tetap berfungsi prima.
- ✅ **Zero Errors**: Build production Vite dan TypeScript check lulus 100%.
