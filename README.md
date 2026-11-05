# izzahfarhanah.vercel.app

Personal site of Izzah Farhanah Faizul, full-stack software engineer.

Built with Next.js and TypeScript, styled with plain CSS, and deployed on Vercel. Every page is static.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit the content

All the text lives in `app/data.ts`: facts, projects, experience, certifications, awards, leadership and skills. Change it there, push to `main`, and Vercel redeploys in about a minute.

The Tayyib case study is in `app/work/tayyib/page.tsx`.

## Design

- Palette: indigo base cloth `#13213b`, songket gold `#c9a04a`, pale gold `#e8d6a3`, paper `#ede7d9`, mist `#9aa7bb`
- Type: Gloock for display, Hanken Grotesk for everything else
- The hero lattice (`app/components/Songket.tsx`) draws itself ring by ring on load and lights up under the cursor. It stays still for visitors who turn off motion.
