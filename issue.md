# 🎨 Issue: Refactoring Sistem Warna — Seashell & Obsidian + Deep Midnight Denim

## Overview

Lakukan **refactoring menyeluruh** pada sistem styling proyek portfolio ini untuk mengganti palet warna lama (berbasis `slate-*` dan `green-*`) menjadi palet warna baru:

- **Light Mode** → tema *Seashell & Obsidian*
- **Dark Mode** → tema *Deep Midnight Denim*

Perubahan dilakukan di **Tailwind config**, **CSS global**, dan **semua komponen JSX**.

---

## Palet Warna Target

| Token | Light Mode | Dark Mode | Keterangan |
|---|---|---|---|
| `--bg-primary` | `#F9F5ED` | `#171B21` | Background utama halaman |
| `--bg-surface` | `#EFE9DD` | `#20262E` | Background card, navbar, form |
| `--text-primary` | `#2A2A2A` | `#F9F5ED` | Teks utama |
| `--text-secondary` | `#5C5A55` | `#9AA5B4` | Teks deskripsi / subtitle |
| `--accent` | `#5E83AE` | `#769BC7` | Warna aksen / tombol utama |
| `--border` | `#E2DBD0` | `#2D3540` | Warna border |

> **Aturan teks di atas tombol aksen:**
> - Light mode → teks `#F9F5ED` (terang) di atas background `#5E83AE`
> - Dark mode → teks `#171B21` (gelap) di atas background `#769BC7`

---

## Daftar File yang Diubah

| File | Jenis Perubahan |
|---|---|
| `tailwind.config.js` | Tambah custom color tokens ke `theme.extend.colors` |
| `src/index.css` | Tambah CSS variables di `:root` dan `.dark` |
| `src/components/Navbar.jsx` | Ganti warna bg, teks, logo, shadow |
| `src/components/Home.jsx` | Ganti warna bg, teks nama, border icon |
| `src/components/About.jsx` | Ganti warna bg, tombol Contact Me |
| `src/components/Portofolio.jsx` | Ganti warna bg, card border, shadow, modal |
| `src/components/Experience.jsx` | Ganti warna bg, border kategori |
| `src/components/Contact.jsx` | Ganti warna bg panel kiri, form input, tombol Send |

---

---

# STEP 1 — Tambah Custom Colors ke `tailwind.config.js`

Ini adalah **langkah pertama dan paling penting**. Semua token warna baru didefinisikan di sini agar bisa dipakai sebagai class Tailwind seperti `bg-brand-bg` atau `text-brand-accent`.

**File:** `tailwind.config.js`

**Sebelum:**
```js
theme: {
    extend: {},
},
```

**Sesudah:**
```js
theme: {
    extend: {
        colors: {
            brand: {
                // Light Mode
                'bg':        '#F9F5ED',   // bg-brand-bg
                'surface':   '#EFE9DD',   // bg-brand-surface
                'text':      '#2A2A2A',   // text-brand-text
                'muted':     '#5C5A55',   // text-brand-muted
                'accent':    '#5E83AE',   // bg-brand-accent / text-brand-accent
                'border':    '#E2DBD0',   // border-brand-border
                // Dark Mode
                'dark-bg':       '#171B21',  // dark:bg-brand-dark-bg
                'dark-surface':  '#20262E',  // dark:bg-brand-dark-surface
                'dark-text':     '#F9F5ED',  // dark:text-brand-dark-text
                'dark-muted':    '#9AA5B4',  // dark:text-brand-dark-muted
                'dark-accent':   '#769BC7',  // dark:bg-brand-dark-accent
                'dark-border':   '#2D3540',  // dark:border-brand-dark-border
            }
        }
    },
},
```

> **Kenapa ini penting?**
> Dengan token ini, kamu tidak perlu menulis hex langsung di JSX. Cukup pakai class seperti `bg-brand-bg` atau `dark:bg-brand-dark-bg`.

---

# STEP 2 — Tambah CSS Variables di `src/index.css`

Tambahkan CSS custom properties (variables) untuk digunakan apabila ada kebutuhan CSS murni di luar Tailwind.

**File:** `src/index.css`

**Sesudah (tambahkan di bawah `@tailwind utilities;`):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ===== TEMA: Seashell & Obsidian (Light) + Deep Midnight Denim (Dark) ===== */
:root {
    --bg-primary:    #F9F5ED;
    --bg-surface:    #EFE9DD;
    --text-primary:  #2A2A2A;
    --text-secondary:#5C5A55;
    --accent:        #5E83AE;
    --border:        #E2DBD0;
}

.dark {
    --bg-primary:    #171B21;
    --bg-surface:    #20262E;
    --text-primary:  #F9F5ED;
    --text-secondary:#9AA5B4;
    --accent:        #769BC7;
    --border:        #2D3540;
}
```

---

# STEP 3 — Refactor `Navbar.jsx`

**File:** `src/components/Navbar.jsx`

## Mapping Warna

| Elemen | Kelas Lama | Kelas Baru |
|---|---|---|
| Wrapper navbar saat scroll | `bg-slate-300 dark:bg-slate-950` | `bg-brand-surface dark:bg-brand-dark-surface` |
| Logo FHZ (default) | `dark:text-white` | `text-brand-text dark:text-brand-dark-text` |
| Logo FHZ saat scroll (dark) | `dark:text-green-500` | `dark:text-brand-dark-accent` |
| Link nav | `text-gray-800 dark:text-white` | `text-brand-text dark:text-brand-dark-text` |
| Link nav hover | `hover:text-green-600 dark:hover:text-green-500` | `hover:text-brand-accent dark:hover:text-brand-dark-accent` |
| Toggle dark mode icon | `dark:text-white` | `dark:text-brand-dark-text` |
| Mobile menu background | `bg-white dark:bg-slate-700` | `bg-brand-bg dark:bg-brand-dark-surface` |
| Mobile menu teks | `dark:text-white` | `dark:text-brand-dark-text` |

## Bagian yang Diubah

### 1. Wrapper utama (className div paling luar)
```jsx
// SEBELUM
className={cn(
    'text-black flex justify-between items-center w-full h-20 fixed md:px-4 navbar z-10',
    {
        'bg-slate-300 dark:bg-slate-950 shadow-lg': hasScrolled
    }
)}

// SESUDAH
className={cn(
    'flex justify-between items-center w-full h-20 fixed md:px-4 navbar z-10 text-brand-text dark:text-brand-dark-text',
    {
        'bg-brand-surface dark:bg-brand-dark-surface shadow-lg': hasScrolled
    }
)}
```

### 2. Logo FHZ
```jsx
// SEBELUM
className={cn(
    'text-4xl md:text-5xl italic font-semibold ml-8 logo-shine dark:logo-dark dark:text-white',
    { 'dark:text-green-500': hasScrolled }
)}

// SESUDAH
className={cn(
    'text-4xl md:text-5xl italic font-semibold ml-8 logo-shine dark:logo-dark text-brand-text dark:text-brand-dark-text',
    { 'dark:text-brand-dark-accent': hasScrolled }
)}
```

### 3. Link navigasi (desktop)
```jsx
// SEBELUM
className='dark:text-white hover:text-green-600 dark:hover:text-green-500 text-xl px-4 mr-8 cursor-pointer font-medium text-gray-800 hover:scale-110 duration-200'

// SESUDAH
className='text-brand-text dark:text-brand-dark-text hover:text-brand-accent dark:hover:text-brand-dark-accent text-xl px-4 mr-8 cursor-pointer font-medium hover:scale-110 duration-200'
```

### 4. Mobile menu overlay (ul fullscreen)
```jsx
// SEBELUM
className='opacity-80 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-slate-700 dark:text-white'

// SESUDAH
className='opacity-80 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-brand-bg dark:bg-brand-dark-surface text-brand-text dark:text-brand-dark-text'
```

---

# STEP 4 — Refactor `Home.jsx`

**File:** `src/components/Home.jsx`

## Mapping Warna

| Elemen | Kelas Lama | Kelas Baru |
|---|---|---|
| Background section | `bg-slate-50 dark:from-slate-800 dark:to-slate-900` | `bg-brand-bg dark:bg-brand-dark-bg` |
| Teks utama | `text-slate-800 dark:text-slate-100` | `text-brand-text dark:text-brand-dark-text` |
| Nama "Fahmi Aziz" | `text-green-500` | `text-brand-accent dark:text-brand-dark-accent` |
| Border icon sosmed | `border-slate-700 dark:border-white` | `border-brand-border dark:border-brand-dark-border` |

## Perubahan JSX

### 1. Wrapper section
```jsx
// SEBELUM
className='pt-20 md:pt-0 h-screen w-full bg-slate-50 text-slate-800 
dark:text-slate-100 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900'

// SESUDAH
className='pt-20 md:pt-0 h-screen w-full bg-brand-bg text-brand-text 
dark:bg-brand-dark-bg dark:text-brand-dark-text'
```

### 2. Span nama
```jsx
// SEBELUM
<span className='text-green-500'>Fahmi Aziz</span>

// SESUDAH
<span className='text-brand-accent dark:text-brand-dark-accent'>Fahmi Aziz</span>
```

### 3. Border icon sosmed
```jsx
// SEBELUM
className='border border-slate-700 dark:border-white hover:scale-110 duration-300 rounded-full'

// SESUDAH
className='border border-brand-border dark:border-brand-dark-border hover:scale-110 duration-300 rounded-full'
```

---

# STEP 5 — Refactor `About.jsx`

**File:** `src/components/About.jsx`

## Mapping Warna

| Elemen | Kelas Lama | Kelas Baru |
|---|---|---|
| Background section | `bg-slate-200 dark:from-slate-900 dark:to-slate-800` | `bg-brand-surface dark:bg-brand-dark-bg` |
| Teks | `text-slate-800 dark:text-slate-100` | `text-brand-text dark:text-brand-dark-text` |
| Tombol "Contact Me" | `from-green-500 to-green-600 hover:ring-green-700 text-white` | `bg-brand-accent dark:bg-brand-dark-accent text-[#F9F5ED] dark:text-[#171B21] hover:ring-brand-accent` |

## Perubahan JSX

### 1. Wrapper section
```jsx
// SEBELUM
className='w-full h-screen dark:text-slate-100 dark:bg-gradient-to-b dark:to-slate-800 
dark:from-slate-900 text-slate-800 bg-slate-200'

// SESUDAH
className='w-full h-screen bg-brand-surface text-brand-text 
dark:bg-brand-dark-bg dark:text-brand-dark-text'
```

### 2. Tombol Contact Me
```jsx
// SEBELUM
className='bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-2 text-white hover:scale-105 duration-300 hover:ring-green-700 hover:ring-2'

// SESUDAH
className='bg-brand-accent dark:bg-brand-dark-accent rounded-xl p-2 text-[#F9F5ED] dark:text-[#171B21] font-semibold hover:scale-105 duration-300 hover:ring-2 hover:ring-brand-accent dark:hover:ring-brand-dark-accent'
```

> **Catatan teks tombol:** Warna teks ditulis sebagai hex literal karena ini adalah aturan kontras khusus — teks terang di atas aksen light, teks gelap di atas aksen dark.

---

# STEP 6 — Refactor `Portofolio.jsx`

**File:** `src/components/Portofolio.jsx`

## Mapping Warna

| Elemen | Kelas Lama | Kelas Baru |
|---|---|---|
| Background section | `bg-slate-50 dark:from-slate-800 dark:to-slate-900` | `bg-brand-bg dark:bg-brand-dark-bg` |
| Teks | `text-slate-800 dark:text-slate-100` | `text-brand-text dark:text-brand-dark-text` |
| Card border | `border-slate-800 dark:border-slate-100` | `border-brand-border dark:border-brand-dark-border` |
| Card shadow hover | `hover:shadow-slate-800 hover:dark:shadow-slate-100` | `hover:shadow-brand-accent dark:hover:shadow-brand-dark-accent` |
| Card nama project (border bawah) | `border-slate-300` | `border-brand-border dark:border-brand-dark-border` |
| Modal background | `bg-white dark:bg-slate-800` | `bg-brand-bg dark:bg-brand-dark-surface` |
| Modal teks nama | `text-slate-800 dark:text-white` | `text-brand-text dark:text-brand-dark-text` |
| Modal teks deskripsi | `text-slate-600 dark:text-slate-300` | `text-brand-muted dark:text-brand-dark-muted` |
| Tech badges | `bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600` | `bg-brand-surface dark:bg-brand-dark-bg text-brand-text dark:text-brand-dark-muted border-brand-border dark:border-brand-dark-border` |
| Tombol Demo | `bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-800` | `bg-brand-accent dark:bg-brand-dark-accent text-[#F9F5ED] dark:text-[#171B21]` |
| Tombol close (×) | `text-slate-400 hover:text-slate-800 dark:hover:text-white` | `text-brand-muted hover:text-brand-text dark:hover:text-brand-dark-text` |

## Perubahan JSX

### 1. Wrapper section
```jsx
// SEBELUM
className='w-full py-20 text-slate-800 h-auto bg-slate-50 dark:text-slate-100 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900'

// SESUDAH
className='w-full py-20 h-auto bg-brand-bg text-brand-text dark:bg-brand-dark-bg dark:text-brand-dark-text'
```

### 2. Card project
```jsx
// SEBELUM
className='border hover:shadow-md hover:shadow-slate-800 hover:dark:shadow-slate-100 border-slate-800 rounded-lg overflow-hidden hover:scale-105 duration-200 dark:border-slate-100 cursor-pointer'

// SESUDAH
className='border hover:shadow-md hover:shadow-brand-accent dark:hover:shadow-brand-dark-accent border-brand-border dark:border-brand-dark-border rounded-lg overflow-hidden hover:scale-105 duration-200 cursor-pointer'
```

### 3. Border nama project
```jsx
// SEBELUM
className='border-b-2 border-slate-300 p-2 text-center'

// SESUDAH
className='border-b-2 border-brand-border dark:border-brand-dark-border p-2 text-center'
```

### 4. Modal overlay → tidak ada perubahan warna (bg-black/60 tetap)

### 5. Modal container
```jsx
// SEBELUM
className='relative bg-white dark:bg-slate-800 rounded-2xl ...'

// SESUDAH
className='relative bg-brand-bg dark:bg-brand-dark-surface rounded-2xl ...'
```

### 6. Tombol Demo di modal
```jsx
// SEBELUM
className='inline-block w-full text-center bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-800 font-semibold py-2.5 rounded-xl hover:opacity-80 transition'

// SESUDAH
className='inline-block w-full text-center bg-brand-accent dark:bg-brand-dark-accent text-[#F9F5ED] dark:text-[#171B21] font-semibold py-2.5 rounded-xl hover:opacity-80 transition'
```

### 7. Tech badges di modal
```jsx
// SEBELUM
className='text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-full border border-slate-300 dark:border-slate-600'

// SESUDAH
className='text-xs bg-brand-surface dark:bg-brand-dark-bg text-brand-text dark:text-brand-dark-muted px-3 py-1 rounded-full border border-brand-border dark:border-brand-dark-border'
```

---

# STEP 7 — Refactor `Experience.jsx`

**File:** `src/components/Experience.jsx`

## Mapping Warna

| Elemen | Kelas Lama | Kelas Baru |
|---|---|---|
| Background section | `bg-slate-200 dark:bg-slate-900` | `bg-brand-surface dark:bg-brand-dark-bg` |
| Teks | `text-black dark:text-slate-100` | `text-brand-text dark:text-brand-dark-text` |
| Border kategori | `border-slate-400 dark:border-slate-600` | `border-brand-border dark:border-brand-dark-border` |

## Perubahan JSX

### 1. Wrapper section
```jsx
// SEBELUM
className='w-full py-20 text-black bg-slate-200 dark:text-slate-100 dark:bg-slate-900'

// SESUDAH
className='w-full py-20 bg-brand-surface text-brand-text dark:bg-brand-dark-bg dark:text-brand-dark-text'
```

### 2. Border label kategori
```jsx
// SEBELUM
className='text-lg font-semibold mb-4 pb-2 border-b-2 border-slate-400 dark:border-slate-600'

// SESUDAH
className='text-lg font-semibold mb-4 pb-2 border-b-2 border-brand-border dark:border-brand-dark-border'
```

---

# STEP 8 — Refactor `Contact.jsx`

**File:** `src/components/Contact.jsx`

## Mapping Warna

| Elemen | Kelas Lama | Kelas Baru |
|---|---|---|
| Background section | `bg-white dark:bg-slate-950 dark:from-slate-900` | `bg-brand-bg dark:bg-brand-dark-bg` |
| Teks | `text-slate-800 dark:text-slate-100` | `text-brand-text dark:text-brand-dark-text` |
| Card wrapper | `bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-900` | `bg-brand-surface border-brand-border dark:bg-brand-dark-surface dark:border-brand-dark-border` |
| Panel kiri (info kontak) | `bg-green-600 dark:bg-green-600 text-white` | `bg-brand-accent dark:bg-brand-dark-accent text-[#F9F5ED] dark:text-[#171B21]` |
| Input form | `dark:bg-slate-700 dark:border-slate-800 dark:text-slate-50 border-slate-300` | `bg-brand-bg dark:bg-brand-dark-bg border-brand-border dark:border-brand-dark-border text-brand-text dark:text-brand-dark-text` |
| Tombol Send Message | `from-green-500 to-green-600 hover:ring-green-700 text-white` | `bg-brand-accent dark:bg-brand-dark-accent text-[#F9F5ED] dark:text-[#171B21] hover:ring-brand-accent` |

## Perubahan JSX

### 1. Wrapper section
```jsx
// SEBELUM
className='md:h-screen items-center flex justify-center bg-white dark:bg-slate-950 w-full p-4 md:p-0 dark:text-slate-100 dark:bg-gradient-to-b dark:to-slate-950 dark:from-slate-900 text-slate-800'

// SESUDAH
className='md:h-screen items-center flex justify-center bg-brand-bg text-brand-text dark:bg-brand-dark-bg dark:text-brand-dark-text w-full p-4 md:p-0'
```

### 2. Card wrapper (motion.div)
```jsx
// SEBELUM
className='flex justify-center border-2 border-slate-300 bg-slate-200 shadow-lg rounded-md p-3 items-center w-full mx-2 md:mx-32 h-full md:h-[80%] flex-col md:flex-row dark:bg-slate-800 dark:border-slate-900'

// SESUDAH
className='flex justify-center border-2 border-brand-border bg-brand-surface shadow-lg rounded-md p-3 items-center w-full mx-2 md:mx-32 h-full md:h-[80%] flex-col md:flex-row dark:bg-brand-dark-surface dark:border-brand-dark-border'
```

### 3. Panel kiri (info kontak)
```jsx
// SEBELUM
className='bg-green-600 dark:bg-green-600 text-white mx-auto md:h-full md:1/2 lg:w-2/5 w-full justify-center items-center rounded-lg p-2'

// SESUDAH
className='bg-brand-accent dark:bg-brand-dark-accent text-[#F9F5ED] dark:text-[#171B21] mx-auto md:h-full md:1/2 lg:w-2/5 w-full justify-center items-center rounded-lg p-2'
```

### 4. Input & Textarea
```jsx
// SEBELUM (input)
className='w-full dark:bg-slate-700 dark:border-slate-800 dark:text-slate-50 border-slate-300 border-2 rounded-sm p-3'

// SESUDAH (input)
className='w-full bg-brand-bg dark:bg-brand-dark-bg border-brand-border dark:border-brand-dark-border text-brand-text dark:text-brand-dark-text border-2 rounded-sm p-3'
```

> **Catatan:** Ada **2 input** (Name & Email) dan **1 textarea** (Message). Ketiga elemen menggunakan class yang sama — ganti semuanya.

### 5. Tombol Send Message
```jsx
// SEBELUM
className='duration-300 text-center p-2 rounded-lg mx-auto bg-gradient-to-r from-green-500 to-green-600 hover:scale-105 hover:ring-green-700 hover:ring-2'

// SESUDAH
className='duration-300 text-center p-2 rounded-lg mx-auto bg-brand-accent dark:bg-brand-dark-accent text-[#F9F5ED] dark:text-[#171B21] font-semibold hover:scale-105 hover:ring-2 hover:ring-brand-accent dark:hover:ring-brand-dark-accent'
```

> **Catatan:** Hapus juga `className='w-full text-center mt-4 text-white'` pada `div` pembungkus tombol — warna teks sudah diatur di dalam tombol.

---

# 🎨 Referensi Visual Perbedaan Warna

## Light Mode

| Sebelum | Sesudah |
|---|---|
| `bg-slate-50` (#F8FAFC) | `bg-brand-bg` (#F9F5ED) — sedikit lebih hangat |
| `bg-slate-200` (#E2E8F0) | `bg-brand-surface` (#EFE9DD) — krem hangat |
| `text-slate-800` (#1E293B) | `text-brand-text` (#2A2A2A) — sedikit lebih gelap |
| Tombol `green-500/600` | Tombol `brand-accent` (#5E83AE) — biru tenang |

## Dark Mode

| Sebelum | Sesudah |
|---|---|
| `dark:bg-slate-900` (#0F172A) | `dark:bg-brand-dark-bg` (#171B21) — biru malam lebih gelap |
| `dark:bg-slate-800` (#1E293B) | `dark:bg-brand-dark-surface` (#20262E) — sedikit lebih terang |
| `dark:text-slate-100` (#F1F5F9) | `dark:text-brand-dark-text` (#F9F5ED) — putih hangat |
| Tombol `dark:green-600` | Tombol `dark:brand-dark-accent` (#769BC7) — biru lembut |

---

# ⚠️ Hal Penting / Larangan

1. **Jangan hapus** class layout seperti `flex`, `grid`, `px-*`, `py-*`, `rounded-*`, `shadow-*`, `hover:scale-*`, `duration-*` — hanya warna yang boleh diubah
2. **Jangan ubah** class animasi Framer Motion (`variants`, `initial`, `animate`, `transition`)
3. **Jangan ubah** ID section (`id="home"`, `id="about"`, dll) — digunakan untuk smooth scroll
4. Untuk **teks di atas tombol aksen**, selalu gunakan hex literal: `text-[#F9F5ED]` (light) dan `dark:text-[#171B21]` (dark) karena warna ini adalah aturan kontras khusus
5. Tailwind **harus di-rebuild** (dev server restart) setelah mengubah `tailwind.config.js`

---

# ✅ Checklist Global

### Setup
- [ ] Tambah `colors.brand.*` ke `tailwind.config.js`
- [ ] Tambah CSS variables ke `src/index.css`
- [ ] Restart dev server (`npm run dev`) agar Tailwind generate ulang

### Per Komponen
- [ ] `Navbar.jsx` — bg scroll, logo, nav links, mobile menu
- [ ] `Home.jsx` — bg section, nama aksen, border sosmed
- [ ] `About.jsx` — bg section, tombol Contact Me
- [ ] `Portofolio.jsx` — bg section, card, modal (gambar, judul, deskripsi, badges, tombol demo)
- [ ] `Experience.jsx` — bg section, border kategori
- [ ] `Contact.jsx` — bg section, card, panel kiri, input/textarea, tombol Send

### Verifikasi
- [ ] Cek tampilan di **light mode** — tidak ada warna hijau tersisa
- [ ] Cek tampilan di **dark mode** — tidak ada `slate-*` gelap yang terlalu biru/pucat
- [ ] Cek **kontras teks** di atas tombol aksen (harus mudah dibaca)
- [ ] Cek **responsif mobile** — tidak ada layout yang rusak

---

# 📦 Dependencies

Tidak ada dependency baru yang perlu diinstall. Semua menggunakan:
- `tailwindcss` — sudah ada
- CSS custom properties — built-in browser
