# Swami Enterprises — Financial Advisory & Business Solutions

**Swami Enterprises** is a premier financial advisory and business solutions platform founded by **Mr. Sameer Dalvi**. The platform provides comprehensive financial planning, mutual fund investments, equity portfolio management, insurance protection, borrowing guidance, and tax compliance coordination.

---

## 🚀 Key Features & Services

- **Financial Advisory & Wealth Management**: Personalised investment planning backed by 18+ years of equity market experience.
- **Service Verticals**:
  - Mutual Funds & Wealth Management
  - Equity Segment & PMS Advisory
  - Life & General Insurance Protection
  - Home & Business Loan Facilitation
  - Income Tax Return (ITR) Filing & Tax Planning
  - GST & Business Registration Services
- **Founder Profile**: Highlighting Mr. Sameer Dalvi (*B.Com., GDC&A, PGDFM*), NISM-certified financial specialist.
- **Interactive UI**: Dark luxury gold & navy theme, smooth scrolling (Lenis), responsive layouts, and modern interactive components.

---

## 🎨 Accessibility, Performance & SEO Compliance

The platform has been audited and fully optimized to meet modern performance and usability standards:
- **WCAG 2.2 AA Compliant**:
  - Text, disclaimers, and social icons achieve standard contrast ratios of at least `4.5:1` and `3:1` for graphical controls.
  - Active visual controls have distinct focus outlines (`focus-visible:ring-2`).
  - Inputs are bound to descriptive elements (`aria-invalid`, `aria-describedby`) for screen readers.
  - Testimonial marquee looping clones use `aria-hidden="true"` to prevent screen reader redundancy.
- **High Performance Image Delivery**:
  - Optimized the main portrait image from a **1.73 MB PNG** to a **33 KB WebP** asset, realizing a **98.10%** file-size reduction.
- **Robust Mobile Drawer**:
  - Solved sticky overlay touch freezes on iOS and Android.
  - Programmatic focus shifting and resize listeners clean up scroll locks dynamically when screen width moves to desktop layouts.
  - Background scrolling is locked (`overflow: hidden` on body) only while the drawer is open.
  - Aligned Lenis breakpoint parameters to activate ONLY above the desktop breakpoint (`>= 1024px`).
- **SEO Base Domain**:
  - Standardized sitemap, robots, layout schema, metadataBase, and Open Graph attributes to point to the production host: `https://swamienterprises.com`.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16.2.11](https://nextjs.org/) (App Router, Turbopack)
- **Library**: React 19.2.4 & React DOM 19.2.4
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations & Motion**: [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll Engine)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Directory Structure

```text
swami-enterprise/
├── public/                # Static assets (logo, photos, icons, sitemap, robots.txt)
│   ├── logo.jpeg          # Company Logo
│   ├── swamiphoto.webp    # Optimized Founder Portrait (Mr. Sameer Dalvi)
│   └── banner.jpeg        # Services Banner Image
├── src/
│   ├── app/               # App Router pages & layout
│   │   ├── layout.tsx     # Global layout & metadata base
│   │   ├── page.tsx       # Landing page assembler
│   │   ├── globals.css    # Design tokens & tailwind base
│   │   ├── not-found.tsx  # Custom branded 404 page
│   │   └── error.tsx      # Client boundary error handler
│   └── components/        # Reusable UI components
│       ├── Header.tsx     # Navigation header & drawer
│       ├── Hero.tsx       # Hero section
│       ├── About.tsx      # About Swami Enterprises
│       ├── FounderProfile.tsx # Leadership profile & qualifications
│       ├── ServiceVerticals.tsx # Detailed services grid
│       ├── TrustBar.tsx   # Key metrics & trust bar
│       ├── WhyChooseUs.tsx# Value proposition grid
│       ├── Testimonials.tsx # Client reviews marquee slider
│       ├── Partners.tsx   # Trusted partners grid
│       ├── ContactForm.tsx# Contact details & inquiry form
│       └── Footer.tsx     # Footer navigation & copyright
├── AGENTS.md              # AI agent guidelines & project rules
├── CLAUDE.md              # Developer instructions & quick commands
└── README.md              # Project documentation
```

---

## ⚙️ Development & Build Commands

```bash
# Run local development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start

# Run ESLint validation
npm run lint
```

---

## 💼 Business Contact

- **Founder**: Mr. Sameer Dalvi
- **Phone**: [+91 97690 42701](tel:+919769042701)
- **Email**: [swamienterprise13@gmail.com](mailto:swamienterprise13@gmail.com)
- **Location**: Mumbai, Maharashtra, India

