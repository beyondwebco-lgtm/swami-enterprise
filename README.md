# Swami Enterprises — Next.js conversion

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Conversion approach

This Next.js App Router project uses a React page shell and loads the archived homepage from `public/legacy/index.html`. This preserves the original WordPress/Elementor visual output and client-side behavior as faithfully as possible while making the project runnable through Next.js.

The legacy HTML, styles, JavaScript, images, fonts and other archived assets are retained under `public/legacy`. The original WordPress PHP/database/admin functionality is not present in the downloaded archive and cannot be reconstructed from static files alone.