// lib/templates.ts

export type TemplateKey =
  | "titleDescription"
  | "apiReference"
  | "appendix"
  | "authors"
  | "badges"
  | "changelog"
  | "colorReference"
  | "contributing"
  | "demo"
  | "deployment"
  | "documentation"
  | "env"
  | "faq"
  | "features"
  | "feedback"
  | "ghIntro"
  | "ghAbout"
  | "ghLinks"
  | "ghSkills"
  | "ghOther"
  | "gettingStarted"
  | "installation"
  | "lessons"
  | "license"
  | "logo"
  | "optimizations"
  | "prerequisites"
  | "projectStructure"
  | "related"
  | "roadmap"
  | "runLocally"
  | "screenshots"
  | "status"
  | "support"
  | "tech"
  | "todo"
  | "tests"
  | "usageExamples";

export type TemplateItem = {
  key: TemplateKey;
  label: string;
  snippet: string;
};

export const templates: TemplateItem[] = [
  {
    key: "titleDescription",
    label: "Title & Description",
    snippet: `# Nama Proyek

Deskripsi singkat tentang proyek ini dalam 1–3 kalimat.

> Tambahkan **context**: ini proyek untuk apa, siapa yang pakai, dan masalah apa yang diselesaikan.

`,
  },
  {
    key: "gettingStarted",
    label: "Getting Started",
    snippet: `## Getting Started

Bagian ini menjelaskan cara cepat untuk mulai menggunakan proyek ini.

1. Clone repository
2. Install dependencies
3. Jalankan perintah utama

\`\`\`bash
git clone https://github.com/USERNAME/REPO.git
cd REPO
npm install
npm run dev
\`\`\`

`,
  },
  {
    key: "prerequisites",
    label: "Prerequisites",
    snippet: `## Prerequisites

Sebelum menjalankan proyek ini, pastikan sudah menginstall:

- Node.js v18+  
- npm / yarn / pnpm  
- Git

Contoh:

\`\`\`bash
node -v
npm -v
\`\`\`

`,
  },
  {
    key: "installation",
    label: "Installation",
    snippet: `## Installation

Ikuti langkah di bawah untuk menginstall proyek:

\`\`\`bash
git clone https://github.com/USERNAME/REPO.git
cd REPO
npm install
\`\`\`

Jika menggunakan *package manager* lain, sesuaikan perintahnya.

`,
  },
  {
    key: "runLocally",
    label: "Run Locally",
    snippet: `## Run Locally

Menjalankan proyek di lingkungan lokal:

\`\`\bash
npm run dev
\`\`\`

Secara default aplikasi berjalan di:

- http://localhost:3000

`,
  },
  {
    key: "usageExamples",
    label: "Usage / Examples",
    snippet: `## Usage / Examples

Contoh cara menggunakan fitur utama aplikasi:

\`\`\`ts
// Contoh kode singkat
import { something } from "library";

something("example");
\`\`\`

Tambahkan screenshot, GIF, atau contoh lain jika perlu.

`,
  },
  {
    key: "features",
    label: "Features",
    snippet: `## Features

- ✨ Fitur 1: jelaskan singkat
- ⚡ Fitur 2: jelaskan singkat
- 🧩 Fitur 3: jelaskan singkat

Tambahkan checklist jika mau:

- [x] Sudah diimplementasikan
- [ ] Dalam pengembangan

`,
  },
  {
    key: "screenshots",
    label: "Screenshots",
    snippet: `## Screenshots

Tampilkan tampilan utama aplikasi.

![Screenshot 1](./screenshots/screenshot-1.png)
*Deskripsi singkat screenshot 1.*

`,
  },
  {
    key: "apiReference",
    label: "API Reference",
    snippet: `## API Reference

### GET /api/example

Deskripsi singkat endpoint ini.

**Query params:**

| Nama | Tipe   | Deskripsi             |
|------|--------|-----------------------|
| \`page\` | number | Nomor halaman (opsional) |

**Contoh respons:**

\`\`\`json
{
  "data": [],
  "page": 1
}
\`\`\`

`,
  },
  {
    key: "documentation",
    label: "Documentation",
    snippet: `## Documentation

Dokumentasi lengkap tersedia di:

- Wiki: [Link ke wiki](https://example.com)
- Docs site: [Link ke docs](https://example.com/docs)

Tuliskan struktur dokumentasi jika perlu.

`,
  },
  {
    key: "deployment",
    label: "Deployment",
    snippet: `## Deployment

Instruksi deploy aplikasi.

Contoh: deploy ke Vercel

1. Push kode ke GitHub
2. Hubungkan repo ke Vercel
3. Set environment variables
4. Deploy

`,
  },
  {
    key: "env",
    label: "Environment Variables",
    snippet: `## Environment Variables

Untuk menjalankan proyek ini, buat file \`.env.local\` dan isi variabel berikut:

\`\`\env
NEXT_PUBLIC_API_URL=
DATABASE_URL=
\`\`\`

Jangan commit file \`.env\` ke repository publik.

`,
  },
  {
    key: "projectStructure",
    label: "Project Structure",
    snippet: `## Project Structure

Struktur folder utama:

\`\`\`bash
.
├─ app/
├─ components/
├─ lib/
├─ public/
└─ README.md
\`\`\`

Jelaskan fungsi masing-masing folder secara singkat.

`,
  },
  {
    key: "tests",
    label: "Running Tests",
    snippet: `## Running Tests

Jalankan test dengan:

\`\`\`bash
npm test
\`\`\`

Jika menggunakan Jest / Vitest / Playwright, jelaskan di sini.

`,
  },
  {
    key: "status",
    label: "Project Status",
    snippet: `## Project Status

Status saat ini: \`aktif / dalam pengembangan / maintenance only\`.

- Versi terbaru: \`v1.0.0\`
- Roadmap: lihat bagian **Roadmap** di bawah.

`,
  },
  {
    key: "roadmap",
    label: "Roadmap",
    snippet: `## Roadmap

- [ ] Fitur A
- [ ] Fitur B
- [ ] Fitur C

Silakan buat *issue* jika punya ide fitur lainnya.

`,
  },
  {
    key: "faq",
    label: "FAQ",
    snippet: `## FAQ

**Q: Pertanyaan umum 1?**  
A: Jawaban singkat.

**Q: Pertanyaan umum 2?**  
A: Jawaban singkat.

`,
  },
  {
    key: "support",
    label: "Support",
    snippet: `## Support

Jika menemukan bug atau punya permintaan fitur:

- Buat *issue* di GitHub
- Atau hubungi: \`email@example.com\`

`,
  },
  {
    key: "feedback",
    label: "Feedback",
    snippet: `## Feedback

Masukan dan saran sangat dihargai 🙌  

Silakan buka *issue* atau kirim pesan jika ada ide perbaikan.

`,
  },
  {
    key: "license",
    label: "License",
    snippet: `## License

Proyek ini dirilis menggunakan lisensi **MIT**.

Silakan gunakan, modifikasi, dan distribusikan dengan tetap menyertakan copyright.

`,
  },
  {
    key: "authors",
    label: "Authors",
    snippet: `## Authors

- **Syaifulloh** – Pembuat utama proyek ini  
- Tambahkan kontributor lain di sini.

`,
  },
  {
    key: "logo",
    label: "Logo",
    snippet: `## Logo

Jika proyek memiliki logo, tampilkan dan jelaskan cara menggunakannya.

![Logo](./public/logo.png)

`,
  },
  {
    key: "badges",
    label: "Badges",
    snippet: `## Badges

Tambahkan badge dari Shields.io:

\`\`\md
![Version](https://img.shields.io/badge/version-1.0.0-emerald)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
\`\`\`

`,
  },
  {
    key: "optimizations",
    label: "Optimizations",
    snippet: `## Optimizations

Tuliskan optimasi performa atau teknik khusus yang digunakan:

- Lazy loading
- Code splitting
- Caching
- dsb.

`,
  },
  {
    key: "related",
    label: "Related",
    snippet: `## Related

Proyek atau resource terkait:

- [Project A](https://example.com)
- [Project B](https://example.com)

`,
  },
  {
    key: "appendix",
    label: "Appendix",
    snippet: `## Appendix

Tambahkan informasi tambahan seperti referensi, istilah penting, atau lampiran lainnya.

`,
  },
  {
    key: "demo",
    label: "Demo",
    snippet: `## Demo

Link demo aplikasi:

- Live demo: https://example.com
- Video demo: https://youtu.be/xxxxxx

`,
  },
  {
    key: "tech",
    label: "Tech",
    snippet: `## Tech Stack

Teknologi utama yang digunakan:

- Next.js
- React
- Tailwind CSS
- TypeScript
- Framer Motion

`,
  },
  {
    key: "contributing",
    label: "Contributing",
    snippet: `## Contributing

Kontribusi sangat terbuka.

1. Fork repository
2. Buat branch baru: \`git checkout -b feature/nama-fitur\`
3. Commit perubahan: \`git commit -m "Tambah fitur X"\`
4. Push ke branch: \`git push origin feature/nama-fitur\`
5. Buka Pull Request

`,
  },
  {
    key: "lessons",
    label: "Lessons",
    snippet: `## Lessons Learned

Tuliskan hal-hal yang dipelajari selama mengerjakan proyek:

- Pelajaran 1
- Pelajaran 2
- Pelajaran 3

`,
  },
  {
    key: "todo",
    label: "TODO",
    snippet: `## TODO

- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

`,
  },
  {
    key: "ghIntro",
    label: "Github Profile - Introduction",
    snippet: `## Hi there 👋

Perkenalan singkat untuk README profil GitHub.

`,
  },
  {
    key: "ghAbout",
    label: "Github Profile - About Me",
    snippet: `## About Me

Tuliskan informasi singkat tentang diri kamu:

- Seorang mahasiswa / developer dari ...
- Tertarik dengan ...
- Saat ini belajar ...

`,
  },
  {
    key: "ghLinks",
    label: "Github Profile - Links",
    snippet: `## Links

- Website: https://example.com
- LinkedIn: https://linkedin.com/in/username
- Twitter: https://twitter.com/username

`,
  },
  {
    key: "ghSkills",
    label: "Github Profile - Skills",
    snippet: `## Skills

- Bahasa Pemrograman: ...
- Framework: ...
- Tools: ...

`,
  },
  {
    key: "ghOther",
    label: "Github Profile - Other",
    snippet: `## Other

Tambahkan section bebas di sini.

`,
  },
  {
    key: "changelog",
    label: "Changelog",
    snippet: `## Changelog

### v1.0.0

- Initial release

`,
  },
];
