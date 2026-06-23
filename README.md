# Exalt Impact Network — Website

A modern, faith-driven social impact website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
exalt-impact/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + Tailwind
│   ├── about/page.tsx      # About / Who We Are
│   ├── what-we-do/page.tsx # Programs & Initiatives
│   ├── get-involved/page.tsx # Donate, Volunteer, Partner, Membership
│   ├── contact/page.tsx    # Contact form + info
│   └── not-found.tsx       # 404 page
├── components/
│   ├── Navbar.tsx          # Sticky header with dropdown nav
│   └── Footer.tsx          # Full footer with links, social, CTA
├── tailwind.config.ts      # Custom design tokens
├── next.config.mjs
└── tsconfig.json
```

---

## 🎨 Design System

### Colors
| Token              | Hex       | Use                     |
|--------------------|-----------|-------------------------|
| `brand-forest`     | `#1A4731` | Primary (headers, nav)  |
| `brand-gold`       | `#C8932A` | Accent (CTAs, borders)  |
| `brand-clay`       | `#8B4513` | Secondary accent        |
| `brand-sky`        | `#E8F4F0` | Light background tint   |
| `brand-night`      | `#0D1F17` | Dark backgrounds        |
| `brand-cream`      | `#FAF7F2` | Warm off-white sections |

### Fonts
- **Display**: Georgia / Cambria serif — headings, hero titles
- **Body**: system-ui sans-serif — body copy, navigation

### Utility Classes
- `.btn-primary` — gold filled button
- `.btn-outline` — white outlined button (on dark bg)
- `.btn-ghost` — forest outlined button
- `.section-label` — small uppercase gold tag
- `.section-title` — large serif heading
- `.card-hover` — subtle lift on hover

---

## 📄 Pages

| Page           | Route           | Description                              |
|----------------|-----------------|------------------------------------------|
| Home           | `/`             | Hero, pillars, programs, values, CTA     |
| About          | `/about`        | History, vision, values, leadership, faith |
| What We Do     | `/what-we-do`   | 7 programs + campaigns + emergency relief |
| Get Involved   | `/get-involved` | Donate, partner, volunteer, membership   |
| Contact        | `/contact`      | Contact form + FAQ + location info       |

---

## 🛠 Customization

### Add Real Images
Replace the placeholder divs with `<Image>` from `next/image`:
```tsx
import Image from "next/image";
<Image src="/images/hero.jpg" alt="Community" fill className="object-cover" />
```

### Enable M-Pesa / Stripe Donations
1. Add your Paybill / Till numbers in `get-involved/page.tsx`
2. Integrate Stripe via `@stripe/stripe-js` for online giving

### Connect a CMS
Consider **Sanity**, **Contentful**, or **Notion API** for news, blog posts, and dynamic content.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 📬 Contact
**Exalt Impact Network**  
Vision Apartment, Gesora Road, Nairobi, Kenya  
info@exaltimpactnetwork.org · +254 721 827 994
