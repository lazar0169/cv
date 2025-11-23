# Portfolio Website - Angular

This is a personal portfolio/CV website for Lazar Manasijević, a Technical Lead & Senior Software Engineer, built with Angular 21.

## Features

- **Modern Angular Architecture**: Component-based design with standalone components
- **Data-Driven Content**: All content managed through `src/assets/portfolio-config.json`
- **Dark Theme**: Professional Zinc color palette optimized for readability
- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Animations**: Scroll-triggered reveal animations using Intersection Observer
- **Type-Safe**: Full TypeScript support with defined interfaces
- **GitHub Pages Ready**: Configured for deployment to GitHub Pages with custom domain

## Development

### Prerequisites
- Node.js (v22+)
- npm (v10+)

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Navigate to http://localhost:4200
```

### Build

```bash
# Build for production
npm run build

# Output will be in dist/portfolio/browser/
```

### Deployment

```bash
# Deploy to GitHub Pages
npm run deploy
```

This will:
1. Build the application for production
2. Deploy to the `gh-pages` branch
3. Preserve the CNAME file for custom domain

## Project Structure

```
src/
├── app/
│   ├── components/       # Feature components
│   │   ├── hero/        # Profile header
│   │   ├── snapshot/    # At-a-glance cards
│   │   ├── skills/      # Grouped skills display
│   │   ├── experience/  # Work history timeline
│   │   ├── projects/    # Project showcase
│   │   ├── leadership/  # Leadership philosophy
│   │   ├── education/   # Education + languages
│   │   └── contact/     # Footer
│   ├── directives/      # Reveal animation directive
│   ├── models/          # TypeScript interfaces
│   ├── services/        # Data services
│   ├── app.ts           # Root component
│   └── app.config.ts    # App configuration
├── assets/              # Static assets
│   └── portfolio-config.json  # Content data
└── styles.scss          # Global styles

public/
└── CNAME                # Custom domain configuration
```

## Updating Content

Edit `src/assets/portfolio-config.json` to update:
- Profile information (name, role, summary, image)
- Contact details
- Skills (grouped by category)
- Work experience
- Projects
- Education
- Languages
- Leadership philosophy
- Footer text

All changes will be reflected immediately in development mode.

## Design System

**Color Palette (Zinc-based):**
- Background: #18181b (Zinc 900)
- Cards: #27272a (Zinc 800)
- Text: #f4f4f5 (Zinc 100)
- Muted Text: #a1a1aa (Zinc 400)
- Accent: #e4e4e7 (Zinc 200)
- Borders: #3f3f46 (Zinc 700)

**Typography:**
- Font: Inter (Google Fonts)
- Weights: 300, 400, 500, 600

## Tech Stack

- **Angular 21**: Latest Angular framework
- **TypeScript 5.9**: Type-safe development
- **SCSS**: Enhanced CSS with variables
- **RxJS 7.8**: Reactive programming
- **angular-cli-ghpages**: Deployment tool

## Custom Domain

The site is configured to work with the custom domain `lazar.manasijevic.com` via the CNAME file in the `public/` directory.

## License

© 2025 Lazar Manasijević
