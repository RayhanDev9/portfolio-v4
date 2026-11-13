export interface CaseStudyArchitecture {
  title: string;
  reason: string;
}

export interface CodeSnippetData {
  title: string;
  filename: string;
  language: string;
  code: string;
  explanation: string;
}

export interface CaseStudyDetail {
  projectId: string;
  tagline: string;
  problem: string;
  solution: string;
  architecture: CaseStudyArchitecture[];
  keyFeatures: string[];
  metricsOrLearnings: string;
  codeSnippet?: CodeSnippetData;
}

export const caseStudiesData: Record<string, CaseStudyDetail> = {
  'uang-kas-kampus': {
    projectId: 'uang-kas-kampus',
    tagline: 'Sistem manajemen kas kelas kampus fullstack dengan pelacakan multi-semester & audit mutasi real-time.',
    problem:
      'Pencatatan kas mahasiswa secara manual sering kali menimbulkan selisih saldo, kesulitan mengelola pergantian semester akademik, ketiadaan transparansi pengeluaran belanja kelas, serta lambatnya proses rekapitulasi data mahasiswa.',
    solution:
      'Membangun aplikasi web fullstack (Vue 3 + Node.js/Express) dengan TanStack Query untuk caching data reaktif. Mengimplementasikan kalkulasi saldo kas bersih real-time, otentikasi PIN bendahara, drawer riwayat audit mutasi uang keluar-masuk, serta modul impor/ekspor spreadsheet Excel.',
    architecture: [
      {
        title: 'Multi-Semester Context & Selective Query Invalidation',
        reason:
          'Memisahkan data per semester akademik dan mengotomatiskan refetching query kas, pengeluaran, dan history seketika setelah mutasi berhasil.',
      },
      {
        title: 'Modular Vue 3 Composables (useKas, usePengeluaran, useSemester)',
        reason:
          'Mengisolasi logika bisnis dan kontrak API ke dalam modul mandiri, menjaga komponen UI tetap deklaratif dan mudah dipelihara.',
      },
      {
        title: 'Secured Express REST API with Header PIN Authentication',
        reason:
          'Mengamankan mutasi kritis (pencatatan belanja kas dan pergantian status semester) menggunakan verifikasi PIN bendahara via header x-admin-pin.',
      },
      {
        title: 'Automated Spreadsheet Parsing & Export Engine',
        reason:
          'Memproses upload file .xlsx/.csv langsung di browser dan server untuk migrasi data massal mahasiswa dengan validasi baris instan.',
      },
    ],
    keyFeatures: [
      'Kalkulasi saldo kas bersih real-time: (Kas Mahasiswa + Pemasukan Lain) - Total Belanja',
      'Manajemen arsip dan switcher multi-semester aktif tanpa reload halaman',
      'Audit trail mutasi uang keluar dan masuk via drawer riwayat interaktif',
      'Impor dan ekspor rekapitulasi kas kelas ke format spreadsheet Microsoft Excel (.xlsx)',
      'Dual view responsif: Data table bernomor di desktop dan kartu interaktif di mobile',
    ],
    metricsOrLearnings:
      'Penerapan query caching dan invalidasi selektif memangkas waktu tunggu pembaruan data hingga di bawah 200ms saat bendahara mencatat transaksi baru.',
    codeSnippet: {
      title: 'Arsitektur Composable: Manajemen Belanja Kas (Cash Out)',
      filename: 'src/composables/usePengeluaran.js',
      language: 'javascript',
      code: `import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';
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
}`,
      explanation:
        'Composable usePengeluaran mengelola fetching dan mutasi uang keluar kelas secara reaktif, sekaligus mengotomatiskan invalidasi cache saldo kas bersih seketika transaksi baru tersimpan.',
    },
  },
  'dapur-rasa': {
    projectId: 'dapur-rasa',
    tagline: 'Aplikasi e-commerce kuliner modern dengan instant search & state caching.',
    problem:
      'Aplikasi katalog makanan membutuhkan pencarian item instan tanpa memicu re-render berat, sinkronisasi state keranjang belanja yang persisten di seluruh rute, dan penghapusan network request berulang untuk data menu yang relatif statis.',
    solution:
      'Membangun antarmuka reaktif menggunakan Vue 3 Composition API. State keranjang dikelola secara modular via Pinia store, sementara fetching dan caching data menu ditangani oleh TanStack Vue Query dengan konfigurasi stale-while-revalidate.',
    architecture: [
      {
        title: 'Vue 3 Composition API & Composables',
        reason:
          'Memisahkan logika pencarian, filter kategori, dan pagination ke dalam fungsi composable terisolasi, menjaga komponen presentasional tetap ramping.',
      },
      {
        title: 'Pinia Modular Store',
        reason:
          'Menyediakan type safety TypeScript penuh tanpa boilerplate mutations/actions yang rumit seperti Vuex, dengan sinkronisasi local storage otomatis.',
      },
      {
        title: 'TanStack Vue Query',
        reason:
          'Mengurangi network call hingga 60% melalui caching memori cerdas, background refetching saat window focus, dan penanganan loading/error state terstandarisasi.',
      },
      {
        title: 'Vue Router Navigation Guards',
        reason:
          'Menjamin validasi parameter rute sebelum rendering halaman menu dan checkout dilakukan.',
      },
    ],
    keyFeatures: [
      'Pencarian instan dengan filtering multi-kategori real-time',
      'Manajemen keranjang belanja dengan kalkulasi kuantitas dan total harga instan',
      'Caching query data menu dengan mekanisme background revalidation',
      'Layout responsif mobile-to-desktop dengan adaptasi grid fleksibel',
    ],
    metricsOrLearnings:
      'Pemisahan logika filter ke dalam composables mandiri mempermudah testing fungsional dan menurunkan duplikasi kode logika antarmuka hingga 40%.',
    codeSnippet: {
      title: 'Arsitektur State: Pinia Store Keranjang Belanja',
      filename: 'src/stores/cart.ts',
      language: 'typescript',
      code: `import { defineStore } from 'pinia';
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
});`,
      explanation:
        'Menggunakan Vue 3 Composition API di dalam Pinia untuk reaktivitas murni, type safety penuh tanpa mutasi Vuex lama, dan pemisahan state cart dari presentasi UI.',
    },
  },

  'fast-react-pizza': {
    projectId: 'fast-react-pizza',
    tagline: 'Sistem pemesanan pizza interaktif dengan pelacakan order dan sinkronisasi global state.',
    problem:
      'Alur pemesanan makanan cepat saji membutuhkan pembaruan kuantitas produk secara instan, validasi keranjang belanja sebelum checkout, navigasi multi-step tanpa reload, dan pelacakan status pesanan berbasis ID unik.',
    solution:
      'Mengembangkan Single Page Application (SPA) berbasis React 18 dengan Redux Toolkit untuk mengelola state keranjang belanja multi-level. Integrasi React Router v6 Data Loaders digunakan untuk menangani pengambilan data menu dan submit pesanan secara deklaratif.',
    architecture: [
      {
        title: 'Redux Toolkit (RTK) Slice Pattern',
        reason:
          'Mengorganisir state keranjang belanja (tambah, kurangi kuantitas, hapus item, reset) ke dalam slice independen dengan reducers yang bersih dan terprediksi.',
      },
      {
        title: 'React Router Data Loaders & Actions',
        reason:
          'Memisahkan proses fetching data dari lifecycle komponen (useEffect) dan memindahkan logika submit form order langsung ke route actions.',
      },
      {
        title: 'Tailwind CSS Utility Architecture',
        reason:
          'Memastikan konsistensi sistem spacing dan breakpoint responsif untuk alur pemesanan cepat pada perangkat mobile.',
      },
    ],
    keyFeatures: [
      'Sinkronisasi kuantitas pesanan pizza secara live di header dan daftar menu',
      'Formulir pemesanan dengan validasi nomor telepon dan geolokasi otomatis',
      'Halaman pelacakan status pesanan real-time berbasis order ID',
      'Prioritas pesanan (priority order toggle) dengan kalkulasi biaya tambahan otomatis',
    ],
    metricsOrLearnings:
      'Pemanfaatan React Router Data Loaders menghilangkan "waterfall request" dan menyederhanakan penanganan asynchronous error boundaries.',
  },

  'danu-satya': {
    projectId: 'danu-satya',
    tagline: 'Situs web portofolio profesional untuk Graphic & Motion Designer.',
    problem:
      'Klien desainer membutuhkan platform showcase karya yang berkarakter gelap, memuat aset media grafis resolusi tinggi tanpa penundaan rendering awal (LCP), dan memiliki tipografi yang presisi.',
    solution:
      'Membangun portofolio menggunakan React 19 dan TypeScript yang dipadukan dengan Tailwind CSS v4. Mengoptimalkan gambar ke format AVIF/WebP modern dan mengonfigurasi domain produksi khusus.',
    architecture: [
      {
        title: 'React 19 & TypeScript Strict Mode',
        reason:
          'Menjamin stabilitas tipe data untuk metadata proyek dan media showcase, mencegah runtime errors.',
      },
      {
        title: 'Tailwind CSS v4 Layout Engine',
        reason:
          'Pemanfaatan CSS variables modern untuk membangun palet tema gelap dengan kontras visual WCAG-compliant.',
      },
      {
        title: 'Custom Domain & Production DNS',
        reason:
          'Konfigurasi DNS record A/CNAME dan sertifikat SSL/TLS otomatis untuk domain danusatya.my.id.',
      },
    ],
    keyFeatures: [
      'Showcase galeri desain responsif dengan grid adaptif',
      'Media preview berkualitas tinggi dengan pemuatan gambar teroptimasi',
      'Tipografi modern dan penataan hierarki visual yang tajam',
      'Tautan kontak langsung dan saluran media sosial terintegrasi',
    ],
    metricsOrLearnings:
      'Optimasi format aset grafis ke AVIF berhasil memangkas ukuran transfer media hingga 65% tanpa penurunan ketajaman visual.',
  },

  'siap-kerja': {
    projectId: 'siap-kerja',
    tagline: 'Platform kesiapan karir kolaboratif dengan integrasi kecerdasan buatan.',
    problem:
      'Pencari kerja pemula kesulitan memetakan jalur karir yang sesuai dengan keterampilan mereka, membutuhkan rekomendasi jalur belajar terarah, serta modul persiapan wawancara terpadu.',
    solution:
      'Berkolaborasi dalam tim lintas disiplin (FE, BE, UI/UX) untuk membangun platform web interaktif. Mengintegrasikan endpoint Google Gemini AI untuk analisis profil pengguna dan rekomendasi karir cerdas.',
    architecture: [
      {
        title: 'Team Git Collaboration Workflow',
        reason:
          'Menerapkan feature branch, pull request reviews, dan integrasi kode terstruktur bersama tim FE/BE.',
      },
      {
        title: 'Redux Toolkit Asynchronous Thunks',
        reason:
          'Mengelola state asynchronous kompleks saat memproses permintaan analisis rekomendasi karir dari model AI.',
      },
      {
        title: 'Framer Motion Interaction',
        reason:
          'Memberikan umpan balik visual yang responsif pada transisi kuis asesmen dan kartu rekomendasi.',
      },
    ],
    keyFeatures: [
      'Asesmen minat dan kompetensi dengan visualisasi skor interaktif',
      'Rekomendasi karir berbasis model AI dengan penjabaran roadmap belajar',
      'Modul persiapan karir dan tips wawancara terstruktur',
      'Dashboard pengguna responsif untuk melacak progres kesiapan kerja',
    ],
    metricsOrLearnings:
      'Kolaborasi tim lintas divisi melatih sinkronisasi kontrak API (API schema contract) dan kedisiplinan alur merge conflict resolution.',
  },

  'tk-paud-permata': {
    projectId: 'tk-paud-permata',
    tagline: 'Profil web resmi institusi pendidikan anak usia dini dengan domain kustom.',
    problem:
      'Institusi pendidikan membutuhkan media informasi resmi yang mudah diakses orang tua murid melalui perangkat seluler, memuat program belajar, dan terindeks di mesin pencari lokal.',
    solution:
      'Membangun situs web profil institusi berbasis web standards (HTML5/CSS3/JavaScript) dengan struktur semantik ramah SEO, tata letak mobile-first, dan domain produksi resmi permatabelajar.my.id.',
    architecture: [
      {
        title: 'Semantic HTML5 & OpenGraph Metadata',
        reason:
          'Memastikan dokumen terstruktur rapi untuk mesin perayap (web crawlers) dan menghasilkan pratinjau media sosial yang akurat.',
      },
      {
        title: 'Mobile-First Responsive CSS',
        reason:
          'Menyesuaikan antarmuka secara optimal untuk orang tua murid yang mayoritas mengakses via smartphone.',
      },
    ],
    keyFeatures: [
      'Ringkasan program kurikulum dan kegiatan belajar anak',
      'Galeri fasilitas sekolah dan profil pendidik',
      'Integrasi Google Maps lokasi sekolah dan tombol kontak langsung',
      'Informasi penerimaan peserta didik baru (PPDB)',
    ],
    metricsOrLearnings:
      'Penyusunan markup semantik dan optimasi metadata berhasil menempatkan nama institusi pada halaman pertama hasil pencarian lokal.',
  },

  'mading-kampus': {
    projectId: 'mading-kampus',
    tagline: 'Portal majalah dinding digital kampus untuk publikasi artikel dan kegiatan.',
    problem:
      'Penyebaran informasi kegiatan mahasiswa dan publikasi tulisan kampus di media fisik terbatas jangkauannya serta sulit diarsipkan secara kronologis.',
    solution:
      'Mengembangkan portal mading digital bersama tim pengembang. Mengimplementasikan antarmuka pembacaan artikel yang nyaman, sistem kategorisasi postingan, dan formulir pengajuan artikel.',
    architecture: [
      {
        title: 'Tailwind CSS Component Structure',
        reason:
          'Mempercepat pembangunan layout artikel, kartu informasi, dan papan pengumuman dengan konsistensi styling antartim.',
      },
      {
        title: 'REST API Data Consumption',
        reason:
          'Menghubungkan antarmuka frontend dengan backend service untuk menampilkan data artikel terkini secara dinamis.',
      },
    ],
    keyFeatures: [
      'Papan pengumuman kegiatan kampus dengan label kategori terorganisir',
      'Halaman baca artikel dengan tipografi yang nyaman di mata',
      'Formulir kontribusi artikel untuk mahasiswa',
      'Desain responsif yang mudah dinavigasi di berbagai ukuran layar',
    ],
    metricsOrLearnings:
      'Penyelarasan tipe data API antara frontend dan backend sejak awal sprint menghindarkan bug tipe data saat rendering daftar artikel.',
  },

  'store-radeva': {
    projectId: 'store-radeva',
    tagline: 'Katalog produk e-commerce interaktif dengan manipulasi DOM murni.',
    problem:
      'Kebutuhan demonstrasi katalog produk interaktif dengan fitur filter kategori dan keranjang belanja tanpa ketergantungan pada pustaka pihak ketiga.',
    solution:
      'Membangun sistem katalog belanja berbasis JavaScript murni (vanilla), memanfaatkan CSS Grid untuk tata letak barang dan Event Delegation untuk interaktivitas komponen yang efisien.',
    architecture: [
      {
        title: 'Event Delegation Pattern',
        reason:
          'Menempatkan listener pada container induk untuk menangani aksi klik kartu produk secara efisien tanpa membuat ratusan listener individual.',
      },
      {
        title: 'CSS Grid & Flexbox Hybrid',
        reason:
          'Menyusun kartu produk agar tetap sejajar dan memiliki tinggi seragam pada berbagai resolusi layar.',
      },
    ],
    keyFeatures: [
      'Katalog kartu produk interaktif dengan informasi harga dan rating',
      'Filter kategori produk secara instan di sisi klien',
      'Pratinjau keranjang belanja dengan kalkulasi total belanja dinamis',
    ],
    metricsOrLearnings:
      'Mendalami mekanisme dasar peramban (DOM lifecycle & event bubbling) memberikan fondasi yang kuat sebelum beralih ke framework reaktif seperti React dan Vue.',
  },

  'company-profile-isc': {
    projectId: 'company-profile-isc',
    tagline: 'Landing page profil komunitas mahasiswa Informatics Study Club (ISC).',
    problem:
      'Organisasi mahasiswa memerlukan media representasi online untuk memperkenalkan divisi teknologi, dokumentasi kegiatan, dan jadwal workshop kepada calon anggota.',
    solution:
      'Merancang antarmuka profil organisasi dengan estetika modern, mikro-transisi CSS yang halus, dan navigasi anchor point yang jelas.',
    architecture: [
      {
        title: 'Modular CSS & Transitions',
        reason:
          'Menerapkan transisi hover yang snappy pada kartu divisi dan pembicara workshop.',
      },
      {
        title: 'Clean Architecture Pattern',
        reason:
          'Memisahkan struktur HTML konten, styling eksternal, dan interaktivitas JavaScript secara teratur.',
      },
    ],
    keyFeatures: [
      'Showcase struktur divisi teknologi (Web Dev, Networking, Mobile Dev)',
      'Jadwal lokakarya dan linimasa kegiatan komunitas',
      'Formulir pendaftaran anggota baru dan saluran kontak sosial',
    ],
    metricsOrLearnings:
      'Konsistensi penataan hierarki heading dan white space terbukti meningkatkan kejelasan alur baca pengunjung.',
  },

  'pig-game': {
    projectId: 'pig-game',
    tagline: 'Permainan dadu interaktif berbasis giliran dua pemain dengan manajemen logika skor.',
    problem:
      'Pengembangan logika permainan browser berbasis giliran yang membutuhkan evaluasi kondisi menang (100 poin), akumulasi skor sementara, dan reset ronde saat angka 1 muncul.',
    solution:
      'Mengimplementasikan seluruh alur permainan menggunakan logika JavaScript modular, manipulasi class CSS untuk penanda pemain aktif, dan penanganan event klik dadu.',
    architecture: [
      {
        title: 'State Machine Logic',
        reason:
          'Mengelola giliran pemain aktif (player 0 vs player 1), skor ronde, dan skor total dalam objek state yang terisolasi.',
      },
      {
        title: 'DOM UI Synchronization',
        reason:
          'Sinkronisasi visual dadu animasi dan update skor secara instan setiap tombol diaktifkan.',
      },
    ],
    keyFeatures: [
      'Mekanisme lempar dadu acak dengan aset visual dadu dinamis',
      'Fitur simpan skor (hold score) dan pengalihan giliran otomatis',
      'Deteksi otomatis kondisi kemenangan 100 poin dengan penonaktifan tombol',
      'Tombol mulai ulang (new game) yang mereset seluruh state ke nilai awal',
    ],
    metricsOrLearnings:
      'Studi kasus ini memperdalam pemahaman tentang immutability state dan alur eksekusi logika kondisional dalam lingkungan JavaScript.',
  },

  'first-portfolio': {
    projectId: 'first-portfolio',
    tagline: 'Tonggak portofolio personal pertama dalam eksplorasi standar web murni.',
    problem:
      'Langkah awal dalam merangkum hasil pembelajaran dasar pengembangan web, memahami alur deployment, dan menyusun tata letak antarmuka yang rapi.',
    solution:
      'Membangun situs web statis berbasis HTML5 dan CSS3 murni dengan implementasi Flexbox layout, navigasi link, dan deployment pertama ke platform Vercel.',
    architecture: [
      {
        title: 'Vanilla Web Standards',
        reason:
          'Fondasi dasar tanpa framework untuk menguasai box model, positioning, dan alur dokumen HTML murni.',
      },
      {
        title: 'Cloud Deployment Workflow',
        reason:
          'Pengenalan pertama alur kerja integrasi Git dan deployment otomatis pada cloud platform hosting.',
      },
    ],
    keyFeatures: [
      'Profil perkenalan diri dan daftar keahlian dasar',
      'Galeri mini proyek awal latihan coding',
      'Tautan media sosial dan kontak sederhana',
    ],
    metricsOrLearnings:
      'Menjadi bukti milestone awal perjalanan dari kode statis pertama hingga berkembang menjadi pengembang frontend yang menguasai ekosistem React 19 dan TypeScript.',
  },
};
