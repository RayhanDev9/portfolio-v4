# Portfolio Guidelines: Impeccable Taste, Humanizer & Anti-AI Slop

## 1. Writing & Voice (Anti-Slop & Humanizer)
- **Zero AI Cliches:** DILARANG menggunakan kata dan frasa klise AI seperti:
  - *delve, tapestry, testament, beacon, embark, revolutionize, seamless, cutting-edge, paramount, game-changer, bespoke, unleash, elevate, crucial role, navigate the complexities, in today's fast-paced world, look no further, a journey through, at the forefront.*
- **No Fluff & Generic Openers:**
  - Jangan gunakan pembuka basa-basi (*"Welcome to my portfolio"*, *"As a passionate developer who bridges design and technology..."*).
  - Mulai langsung dengan apa yang Anda buat, masalah apa yang diselesaikan, dan dampak konkretnya.
- **Natural Human Tone:**
  - Tulis seperti engineer/desainer profesional yang berbicara langsung dengan pembaca tanpa sok puitis.
  - Gunakan kalimat aktif, ringkas, dan jelas (*bottom-line up front*).
  - Fokus pada data, teknologi spesifik, arsitektur, dan keputusan teknis/desain nyata, bukan klaim abstrak.
- **High Signal-to-Noise:**
  - Jika bisa dijelaskan dalam 5 kata, jangan gunakan 15 kata.
  - Hindari mengulang ide yang sama dengan variasi kalimat berbeda.

## 2. Design & UI Craft (Impeccable Taste)
- **Typography:**
  - Gunakan hierarki tipografi yang disiplin sesuai `font.txt` (Google Sans, Poiret One).
  - Berikan perhatian tinggi pada line-height, letter-spacing, dan optical alignment.
- **Color & Palette:**
  - Konsisten dengan palet warna proyek (inspirasi dari palet Color Hunt yang ada: `#202734`, `#36415A`, `#B7D894`, `#E0F8C7`).
  - Hindari warna acak atau gradien neon jenuh yang melelahkan mata.
  - Jaga rasio kontras teks agar selalu accessible (WCAG compliant).
- **Whitespace & Composition:**
  - Berikan ruang bernapas (*intentional negative space*). Jangan menjejalkan semua komponen dalam satu layar.
  - Gunakan sistem grid dan spacing yang konsisten (skala 4px/8px).
- **Subtlety & Micro-Interactions:**
  - Hindari drop shadow pekat dan tebal. Gunakan border 1px halus (*subtle contrast border*) atau shadow yang sangat difus dan tipis.
  - Animasi transisi harus cepat (150ms - 250ms), fungsional, dan tidak mengganggu alur pengguna.
- **Anti-Boilerplate Layout:**
  - Hindari layout generic AI (*3 kartu seragam berbayang dengan icon bulat di atasnya*). Buat struktur layout yang disesuaikan dengan konten aslinya.

## 3. Engineering & Clean Code
- Gunakan React 19 + TypeScript yang idiomatik, clean, dan modular.
- Hindari over-engineering atau memasang library berlebih untuk hal-hal yang dapat ditangani oleh CSS murni atau state sederhana.

## 4. Portfolio Architecture: Hybrid Model (Locked)
- **Home Page (`/`) — Seamless Storytelling Flow:**
  - Menggabungkan seluruh section utama dalam satu halaman beranda yang mengalir dan responsif:
    1. Hero Section (Intro, headline, role, availability badge, quick social links)
    2. Featured Projects (Kurasi 4-6 proyek terbaik dengan preview visual)
    3. Skills & Career Journey (Tech stack per kategori dan linimasa perjalanan karier)
    4. Certificates Showcase (Sertifikasi resmi dengan thumbnail berkualitas tinggi)
    5. Contact Section (Formulir, email langsung, dan saluran komunikasi)
  - Dioptimalkan untuk recruiter/klien yang ingin review kilat dalam 30 detik melalui scroll mulus.
- **Deep-Dive Case Study Routes (`/projects/:id`):**
  - Menggunakan `react-router-dom` untuk membuka studi kasus teknis mendalam setiap kali kartu proyek dipilih:
    - Menjelaskan masalah nyata, arsitektur data, tantangan teknis, dan keputusan teknologi.
    - Tombol live demo interaktif, link repositori GitHub, dan tombol kembali ke beranda.
- **Full Projects Catalogue (`/projects`):**
  - Menampilkan seluruh katalog proyek lengkap dengan filter kategori (*app*, *landing*, *interactive*).
- **Interactive Lightbox Modal for Certificates:**
  - Sertifikat menggunakan modal zoom popup interaktif beresolusi tinggi di tempat, tanpa reload atau navigasi halaman penuh agar fokus pengguna tidak terputus.

## 5. Design DNA: The AW Media × Brandlos Synthesis (Locked)
- **Pengaruh Visual 1 — AW Media (`awmedia.marketing/blog`):**
  - **Dark Glassmorphism:** Kanvas dasar gelap (`#202734`) dilapisi kartu semi-transparan (`#36415A` dengan `backdrop-filter: blur(12px)`).
  - **1px Subtle Contrast Borders:** Garis tepi tipis dengan aksen lembut (`rgba(183, 216, 148, 0.16)`) yang bereaksi lembut saat disentuh kursor (*hover glow*).
  - **Content-Forward Visual Cards:** Thumbnail proyek rasio tajam dengan tag kategori berbentuk kapsul (*pill badge*).
- **Pengaruh Visual 2 — Brandlos (`brandlos.nl/vacatures`):**
  - **Confident & Direct Persona:** Tipografi berani, tajam, dan berkarakter (menolak tampilan korporat generik yang membosankan).
  - **Modular Rhythm & Structure:** Pembagian section yang tegas dengan garis pemisah minimalis, penataan data linimasa (*Journey*) yang terstruktur, dan pill status ketersediaan kerja yang mencolok.
  - **Action-Oriented CTAs:** Tombol ajakan kolaborasi yang tegas, bersih, dan berorientasi hasil tanpa basa-basi.
- **Aturan Eksekusi Desain Gabungan:**
  - Tetap disiplin pada palet warna proyek: `#202734` (Base), `#36415A` (Glass Surface), `#B7D894` (Accent Lime), `#E0F8C7` (Text Highlight).
  - Tipografi Google Sans (struktur kuat & modern) + Poiret One (aksen display berkarakter).
  - Kecepatan mikro-interaksi: 150ms - 250ms (snappy ease-out curve).
