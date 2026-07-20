<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Swami Enterprise — Agent Workspace Guidelines

## Project Overview
Next.js 16 (App Router) financial advisory landing application for Swami Enterprises (Founder: Mr. Sameer Dalvi).

## Key Architecture & Styling Rules
1. **Design System & Color Tokens**:
   - `navy-dark`: Primary dark background (`#0B1325` / `#0D162B`)
   - `navy-slate`: Card & surface background (`#152238` / `#1B2A4A`)
   - `gold`: Primary accent (`#D4AF37` / `#E5C158`)
   - `gold-light`: Bright gold highlights (`#F3E5AB`)
   - `warm-white`: Primary text color (`#F8F9FA` / `#F0F4F8`)
2. **Asset Management**:
   - Save all static media assets in `public/` (e.g., `public/logo.jpeg`, `public/swamiphoto.png`, `public/banner.jpeg`).
   - Do NOT store unreferenced images in the root directory. Keep the project root clean.
3. **Component Conventions**:
   - Components are modularized inside `src/components/`.
   - Main page layout is assembled in `src/app/page.tsx`.
   - Use Next.js `<Image />` from `next/image` for static and optimized media rendering.
4. **Validation**:
   - Always run `npm run build` to verify TypeScript and Next.js static page generation before completing tasks.

