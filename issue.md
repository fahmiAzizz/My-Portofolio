# 📋 Issue: Portfolio Feature Improvements

## Overview

Terdapat dua fitur utama yang perlu diimplementasikan pada project portfolio ini:

1. **[Feature A]** – Section `Portfolio`: Project card bisa diklik dan menampilkan modal detail project (dengan carousel jika project > 3)
2. **[Feature B]** – Section `Experience`: Tampilan tech stack diurutkan berdasarkan kategori/jenis teknologi

---

## Tech Stack Project

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **File relevan:**
  - `src/components/Portofolio.jsx` – komponen section portfolio
  - `src/components/Experience.jsx` – komponen section experience

---

---

# ✅ Feature A — Portfolio: Project Modal Detail + Carousel

## Deskripsi

Saat ini, setiap project card di section Portfolio hanya menampilkan gambar, nama, dan link Demo/Code.

**Yang diinginkan:**
- Setiap project card dapat **diklik** (seluruh area card, bukan hanya tombol)
- Setelah diklik, muncul **modal/popup** yang menampilkan detail project:
  - 📸 Screenshot project (gambar)
  - 📝 Deskripsi project (teks singkat)
  - 🛠️ Teknologi yang digunakan (misal: React, Tailwind, dll)
  - 🔗 Link Demo (tombol klik ke URL demo)
- Jika jumlah project **lebih dari 3**, bagian gambar screenshot di dalam modal menggunakan **carousel** (bisa swipe/klik next-prev antar gambar)

---

## File yang Dimodifikasi

### `src/components/Portofolio.jsx`

---

## Langkah Implementasi

### Step 1 — Tambah field data project

Pada array `projects`, tambahkan field baru: `description` dan `tech` untuk setiap project.

**Sebelum:**
```jsx
const projects = [
    {
        id: 1,
        name: 'Wheater APP',
        pict: Project3,
        demo: 'https://weather-app-theta-smoky.vercel.app/',
        github: 'https://github.com/fahmiAzizz/WeatherApp'
    },
    // ...
]
```

**Sesudah:**
```jsx
const projects = [
    {
        id: 1,
        name: 'Weather APP',
        pict: Project3,
        demo: 'https://weather-app-theta-smoky.vercel.app/',
        github: 'https://github.com/fahmiAzizz/WeatherApp',
        description: 'Aplikasi cuaca real-time yang menampilkan kondisi cuaca berdasarkan kota yang dicari. Menggunakan OpenWeather API untuk mengambil data cuaca terkini.',
        tech: ['React', 'Tailwind CSS', 'OpenWeather API']
    },
    {
        id: 2,
        name: 'PetX',
        pict: Project2,
        demo: 'https://pet-x-fahmiazizzs-projects.vercel.app/',
        github: 'https://github.com/fahmiAzizz/PetX',
        description: 'Platform e-commerce untuk kebutuhan hewan peliharaan. Menampilkan berbagai produk dan kategori untuk pet owner.',
        tech: ['React', 'Tailwind CSS', 'JavaScript']
    },
    {
        id: 3,
        name: 'Wedding Invitation',
        pict: Projectw,
        demo: 'https://alya-dody2.vercel.app/',
        github: 'https://github.com/fahmiAzizz/wedding_invitation',
        description: 'Website undangan pernikahan digital yang elegan dan responsif, dilengkapi dengan countdown timer dan galeri foto.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion']
    },
]
```

> **Catatan:** Isi `description` dan `tech` disesuaikan dengan project asli. Ini hanya contoh placeholder — minta konfirmasi ke pemilik project.

---

### Step 2 — Tambah State untuk Modal

Di dalam komponen `Portofolio`, tambahkan state berikut:

```jsx
// state untuk menyimpan project yang dipilih (null = modal tertutup)
const [selectedProject, setSelectedProject] = useState(null);

// state untuk index slide carousel (hanya aktif jika projects.length > 3)
const [carouselIndex, setCarouselIndex] = useState(0);
```

Jangan lupa import `useState` dari React:

```jsx
import React, { useEffect, useRef, useState } from 'react'
```

---

### Step 3 — Jadikan Card Bisa Diklik

Pada `motion.div` card project, tambahkan `onClick` handler dan ubah cursor menjadi pointer:

```jsx
<motion.div
    key={project.id}
    className='... cursor-pointer'   // tambahkan cursor-pointer
    onClick={() => {
        setSelectedProject(project);
        setCarouselIndex(0); // reset carousel ke slide pertama setiap buka modal
    }}
    // ... props lainnya tetap sama
>
    {/* isi card tetap sama */}
</motion.div>
```

---

### Step 4 — Buat Komponen Modal

Tambahkan JSX modal **di bawah** `</div>` penutup section utama, **sebelum** `</div>` paling luar:

```jsx
{/* MODAL DETAIL PROJECT */}
{selectedProject && (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        onClick={() => setSelectedProject(null)} // klik area luar = tutup modal
    >
        <div
            className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()} // cegah klik di dalam modal menutup modal
        >
            {/* Tombol Tutup (X) */}
            <button
                className="absolute top-3 right-4 text-2xl font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white z-10"
                onClick={() => setSelectedProject(null)}
            >
                &times;
            </button>

            {/* ========== BAGIAN GAMBAR ========== */}
            {/* 
                KONDISI:
                - Jika total project LEBIH DARI 3 → tampilkan carousel (bisa next/prev)
                - Jika total project 3 atau kurang → tampilkan gambar biasa (img tunggal)
            */}

            {projects.length > 3 ? (
                /* --- MODE CAROUSEL (jika project > 3) --- */
                <div className="relative">
                    {/* Gambar aktif berdasarkan carouselIndex */}
                    <img
                        src={projects[carouselIndex].pict}
                        alt={projects[carouselIndex].name}
                        className="w-full h-56 object-cover"
                    />

                    {/* Tombol Previous (kiri) */}
                    <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80"
                        onClick={() =>
                            setCarouselIndex((prev) =>
                                prev === 0 ? projects.length - 1 : prev - 1
                            )
                        }
                    >
                        &#8249;
                    </button>

                    {/* Tombol Next (kanan) */}
                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80"
                        onClick={() =>
                            setCarouselIndex((prev) =>
                                prev === projects.length - 1 ? 0 : prev + 1
                            )
                        }
                    >
                        &#8250;
                    </button>

                    {/* Indikator dot di bawah gambar */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    i === carouselIndex
                                        ? 'bg-white scale-125'
                                        : 'bg-white/50'
                                }`}
                                onClick={() => setCarouselIndex(i)}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                /* --- MODE GAMBAR TUNGGAL (jika project ≤ 3) --- */
                <img
                    src={selectedProject.pict}
                    alt={selectedProject.name}
                    className="w-full h-56 object-cover"
                />
            )}

            {/* ========== KONTEN DETAIL PROJECT ========== */}
            {/* 
                Jika mode carousel aktif: tampilkan detail project sesuai carouselIndex
                Jika mode gambar biasa: tampilkan detail selectedProject
            */}
            {(() => {
                const displayProject =
                    projects.length > 3
                        ? projects[carouselIndex]
                        : selectedProject;

                return (
                    <div className="p-6">
                        {/* Nama project */}
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                            {displayProject.name}
                        </h2>

                        {/* Deskripsi */}
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                            {displayProject.description}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {displayProject.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-1 rounded-full"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Tombol Demo */}
                        <a
                            href={displayProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full text-center bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-800 font-semibold py-2 rounded-lg hover:opacity-80 transition"
                        >
                            🔗 Live Demo
                        </a>
                    </div>
                );
            })()}
        </div>
    </div>
)}
```

---

### Step 5 — Hasil Akhir `Portofolio.jsx`

Setelah semua perubahan, struktur komponen akan seperti ini:

```
Portofolio()
├── state: selectedProject (null | project object)
├── state: carouselIndex (number)
├── ref, isInView, mainControls (tidak berubah)
├── projects[] (ditambah field description & tech)
│
└── return JSX
    ├── <div id="portofolio"> (section utama)
    │   └── grid cards → tiap card onClick buka modal
    │
    └── {selectedProject && <Modal>}  ← BARU
        ├── overlay (klik tutup)
        └── modal content
            ├── tombol X
            ├── [gambar / carousel]
            └── detail (nama, deskripsi, tech, link demo)
```

---

### Checklist Feature A

- [ ] Tambah field `description` dan `tech` ke setiap object di array `projects`
- [ ] Import `useState` dari React
- [ ] Tambah state `selectedProject` dan `carouselIndex`
- [ ] Tambah `onClick` + `cursor-pointer` pada card
- [ ] Tambah JSX modal dengan logika conditional (carousel vs gambar tunggal)
- [ ] Test: klik card → modal muncul ✅
- [ ] Test: klik luar modal → modal tertutup ✅
- [ ] Test: tombol X → modal tertutup ✅
- [ ] Test: jika project ≤ 3 → gambar statis tampil ✅
- [ ] Test: jika project > 3 → carousel tampil dengan tombol prev/next dan dot indicator ✅

---

---

# ✅ Feature B — Experience: Urutkan Tech Stack Berdasarkan Kategori

## Deskripsi

Saat ini, section Experience menampilkan semua logo teknologi dalam satu grid tanpa pengelompokan. Tampilannya flat dan tidak terstruktur.

**Yang diinginkan:**
- Teknologi dikelompokkan berdasarkan **jenis/kategori**, misalnya:
  - **Frontend** – HTML, CSS, JavaScript, React JS, Tailwind CSS
  - **Backend** – Node JS, Express JS, TypeScript, PHP
  - **Database** – MySQL, PostgreSQL
  - **Tools/Others** – RabbitMQ
- Setiap kategori memiliki **label/judul** yang jelas
- Logo dalam setiap kategori tetap menggunakan animasi Framer Motion

---

## File yang Dimodifikasi

### `src/components/Experience.jsx`

---

## Langkah Implementasi

### Step 1 — Ubah Struktur Data `logos` menjadi `categories`

Ganti array `logos` yang flat menjadi array `categories` yang berisi group:

**Sebelum:**
```jsx
const logos = [
    { id: 1, img: html, name: 'HTML', color: 'orange' },
    { id: 2, img: css, name: 'CSS', color: 'blue' },
    { id: 3, img: js, name: 'Javascript', color: 'yellow' },
    { id: 4, img: react, name: 'React JS', color: 'blue' },
    { id: 5, img: tailwind, name: 'Tailwind CSS', color: 'blue' },
    { id: 6, img: nodejs, name: 'Node JS', color: 'green' },
    { id: 7, img: express, name: 'Express JS', color: 'purple' },
    { id: 8, img: ts, name: 'Typescript', color: 'purple' },
    { id: 9, img: php, name: 'PHP', color: 'purple' },
    { id: 10, img: mysql, name: 'Mysql', color: 'orange' },
    { id: 11, img: postgresql, name: 'Postgresql', color: 'orange' },
    { id: 12, img: rabbitmq, name: 'Rabbit MQ', color: 'orange' },
];
```

**Sesudah:**
```jsx
const categories = [
    {
        label: 'Frontend',
        items: [
            { id: 1, img: html, name: 'HTML' },
            { id: 2, img: css, name: 'CSS' },
            { id: 3, img: js, name: 'Javascript' },
            { id: 4, img: react, name: 'React JS' },
            { id: 5, img: tailwind, name: 'Tailwind CSS' },
        ]
    },
    {
        label: 'Backend',
        items: [
            { id: 6, img: nodejs, name: 'Node JS' },
            { id: 7, img: express, name: 'Express JS' },
            { id: 8, img: ts, name: 'Typescript' },
            { id: 9, img: php, name: 'PHP' },
        ]
    },
    {
        label: 'Database',
        items: [
            { id: 10, img: mysql, name: 'Mysql' },
            { id: 11, img: postgresql, name: 'Postgresql' },
        ]
    },
    {
        label: 'Tools & Others',
        items: [
            { id: 12, img: rabbitmq, name: 'Rabbit MQ' },
        ]
    },
];
```

---

### Step 2 — Ubah JSX Return untuk Render Per Kategori

Ganti JSX di dalam `return` yang sebelumnya hanya satu grid menjadi **looping per kategori**:

**Sebelum:**
```jsx
<div ref={ref} className='grid grid-cols-2 md:grid-cols-3 md:gap-8 justify-items-center'>
    {logos.map(logo => (
        <motion.div key={logo.id} ...>
            <img src={logo.img} alt={logo.name} ... />
            <p>{logo.name}</p>
        </motion.div>
    ))}
</div>
```

**Sesudah:**
```jsx
<div ref={ref} className='flex flex-col gap-10'>
    {categories.map((category) => (
        <div key={category.label}>
            {/* Label kategori */}
            <h3 className='text-lg font-semibold mb-4 border-b border-slate-400 dark:border-slate-600 pb-2'>
                {category.label}
            </h3>

            {/* Grid logo dalam kategori */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center'>
                {category.items.map((logo) => (
                    <motion.div
                        key={logo.id}
                        className='hover:scale-110 px-4 py-4 duration-200 flex flex-col items-center'
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial='hidden'
                        animate={mainControls}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <img
                            src={logo.img}
                            alt={logo.name}
                            className='w-16 h-16 object-contain mx-auto'
                        />
                        <p className='text-center py-2 text-sm font-semibold'>{logo.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    ))}
</div>
```

---

### Step 3 — Hasil Akhir `Experience.jsx`

Struktur komponen setelah perubahan:

```
Experience()
├── ref, isInView, mainControls (tidak berubah)
├── categories[] (pengganti logos[])
│   ├── { label: 'Frontend', items: [...] }
│   ├── { label: 'Backend', items: [...] }
│   ├── { label: 'Database', items: [...] }
│   └── { label: 'Tools & Others', items: [...] }
│
└── return JSX
    └── <div id="experience">
        └── <div ref={ref}> (flex-col)
            ├── [Frontend section]
            │   ├── <h3>Frontend</h3>
            │   └── <grid> HTML, CSS, JS, React, Tailwind
            ├── [Backend section]
            │   ├── <h3>Backend</h3>
            │   └── <grid> Node JS, Express, TS, PHP
            ├── [Database section]
            │   ├── <h3>Database</h3>
            │   └── <grid> MySQL, PostgreSQL
            └── [Tools section]
                ├── <h3>Tools & Others</h3>
                └── <grid> RabbitMQ
```

---

### Checklist Feature B

- [ ] Ganti array `logos` dengan array `categories` yang berisi grouping per jenis tech
- [ ] Update JSX: ganti satu grid menjadi loop per kategori (masing-masing dengan label `<h3>`)
- [ ] Pastikan semua import logo tetap ada (tidak ada yang dihapus)
- [ ] Pastikan `ref` masih terpasang di container terluar agar animasi `useInView` tetap berfungsi
- [ ] Test: semua kategori tampil dengan label yang jelas ✅
- [ ] Test: animasi Framer Motion masih berjalan saat scroll ✅
- [ ] Test: responsif di mobile (grid menyesuaikan kolom) ✅

---

---

# 🎨 Referensi Visual

## Feature A — Modal Layout

```
┌─────────────────────────────────┐
│  [X]                            │  ← tombol close
│ ┌─────────────────────────────┐ │
│ │   [Screenshot / Carousel]   │ │  ← gambar project
│ │  ◄          ●○○○         ► │ │  ← (hanya jika project > 3)
│ └─────────────────────────────┘ │
│                                 │
│  Nama Project                   │
│  Deskripsi singkat project...   │
│                                 │
│  [React] [Tailwind] [API]       │  ← tech stack badges
│                                 │
│  [ 🔗 Live Demo ]               │  ← tombol demo
└─────────────────────────────────┘
```

## Feature B — Experience Layout

```
Experience
──────────────────────────────────
Frontend
─────────────────
[HTML] [CSS] [JS] [React] [Tailwind]

Backend
─────────────────
[Node JS] [Express] [TypeScript] [PHP]

Database
─────────────────
[MySQL] [PostgreSQL]

Tools & Others
─────────────────
[RabbitMQ]
```

---

# ⚠️ Hal yang Perlu Diperhatikan

1. **Jangan hapus** animasi Framer Motion yang sudah ada — terutama `useInView`, `useAnimation`, dan `mainControls`
2. **Pastikan** modal menggunakan `z-50` agar tampil di atas semua elemen lain
3. **Pastikan** klik di dalam modal tidak menutup modal (`e.stopPropagation()` wajib ada)
4. **Data project** (`description`, `tech`) perlu diisi ulang oleh pemilik project sesuai project asli
5. **Carousel** hanya aktif di modal ketika total project **lebih dari 3**. Jika project saat ini hanya 3, carousel tidak muncul — cukup gambar statis
6. **Jangan ubah** nama ID section (`id="experience"` dan `id="portofolio"`) karena digunakan oleh Navbar untuk smooth scroll
7. **Buat Logo FHZ Menjadi hijau saat di scrool**
---

# 📦 Dependencies

Tidak ada dependency baru yang perlu diinstall. Semua menggunakan library yang sudah ada:
- `react` (useState, useEffect, useRef) — sudah ada
- `framer-motion` — sudah ada
- `tailwindcss` — sudah ada
