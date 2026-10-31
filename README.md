# Anchal & Rohan — Wedding Website

Next.js (App Router) + Framer Motion invitation site.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Editing content

- Names, parents, events, times, venues and map links: `lib/wedding.js`
- Bible verses: `components/Hero.js` (Psalms 118), `components/Couple.js` (Mark 10:9), `components/Verse.js` (Ecclesiastes 4:12)
- Colours and fonts: the `:root` block at the top of `app/globals.css`

## Deploy

Push the folder to GitHub and import it on [Vercel](https://vercel.com/new) — no configuration needed.
