# Urus Kredit Mudah — Astro Site Setup

## 1. Create the Astro project (Windows PowerShell)

```powershell
cd C:\Users\%USERNAME%\Documents
npm create astro@latest uruskreditmudah
```
Choose: **Empty template**, TypeScript **strict**, install deps **yes**, git repo **yes**.

```powershell
cd uruskreditmudah
npx astro add mdx
npx astro add sitemap
npx astro add tailwind
```
(Tailwind is added for future use — the current design uses plain CSS in each component.)

## 2. Copy these files into your project

Copy every file in this folder into the matching path inside your new
`uruskreditmudah` project (overwrite `astro.config.mjs`, `src/pages/index.astro`, etc.
that Astro's scaffold created).

## 3. Preview locally

```powershell
npm run dev
```
Open `http://localhost:4321`

## 4. Add your articles

For each Hashnode article:
1. Copy the content into a new file: `src/content/guides/[exact-old-slug].mdx`
2. Fill in the frontmatter (see `contoh-artikel-panduan.mdx` for the template)
3. Set `category` to one of: `Kad Kredit`, `Pinjaman Peribadi`, `AKPK & Muflis`, `Tips Kewangan`
4. Add a featured image to `public/images/[slug]/featured.webp` and reference it in frontmatter

Delete `contoh-artikel-panduan.mdx` once you have real articles.

## 5. Push to GitHub

```powershell
git add .
git commit -m "Initial Astro site for uruskreditmudah.com"
git branch -M main
git remote add origin https://github.com/mcalpineally/uruskreditmudah.git
git push -u origin main
```

## 6. Deploy on Cloudflare Pages

1. dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
2. Select the `uruskreditmudah` repo
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Save and Deploy

## 7. Connect domain

Workers & Pages → project → Custom domains → add `uruskreditmudah.com`.
If the domain isn't on Cloudflare DNS yet, add it first (Add a domain → Free plan),
delete old Hashnode DNS records, then update nameservers at your registrar.

## 8. Contact form

`src/pages/hubungi-kami.astro` has a placeholder Formspree action
(`https://formspree.io/f/REPLACE_ME`). Sign up at formspree.io (free tier)
and swap in your real form ID — or wire it to GoHighLevel like KedahHouseForSale.com.

## Design notes

- Palette: deep teal (#16423C) primary, warm cream (#FAF6EF) background, amber accent (#E08E45)
- Type: Fraunces (headlines), Public Sans (body), IBM Plex Mono (labels/stats)
- Categories: Kad Kredit, Pinjaman Peribadi, AKPK & Muflis, Tips Kewangan
