# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Angular 21 portfolio/CV website for Lazar Manasijević, a Technical Lead & Senior Software Engineer. The site uses standalone components, TypeScript, and SCSS for a modern, maintainable architecture.

**Key characteristics:**
- Angular 21 with standalone components (no NgModules)
- Data-driven content from `src/assets/portfolio-config.json`
- Dark theme with Zinc color palette
- Mobile-first responsive design
- Intersection Observer for scroll animations
- Deployed to GitHub Pages with custom domain

## Development Workflow

**Local development:**
```bash
npm start
# Navigate to http://localhost:4200
```

**Build for production:**
```bash
npm run build
# Output: dist/portfolio/browser/
```

**Deploy to GitHub Pages:**
```bash
npm run deploy
# Builds and pushes to gh-pages branch
```

**No test runner configured** - tests can be added using Vitest (already in devDependencies).

## Architecture

### Component Structure

All components are standalone (no NgModules). Located in `src/app/components/`:

1. **HeroComponent** (`hero/`) - Profile header with image, name, role, contact buttons
   - Inputs: `profile: Profile`, `contact: ContactItem[]`
   - Includes inline SVG icons for email, phone, LinkedIn

2. **SnapshotComponent** (`snapshot/`) - At-a-glance cards (years of experience, domains, etc.)
   - Can be populated with dynamic data or static content

3. **SkillsComponent** (`skills/`) - Grouped skills display with categories
   - Input: `skillGroups: SkillGroup[]`
   - Shows primary vs secondary skill groups

4. **ExperienceComponent** (`experience/`) - Timeline of work history
   - Input: `experiences: Experience[]`
   - Timeline styling with dots and vertical borders

5. **ProjectsComponent** (`projects/`) - Project showcase cards
   - Input: `projects: Project[]`
   - Can filter by `featured` flag
   - Displays: context, problem, approach, result, tech stack

6. **LeadershipComponent** (`leadership/`) - Leadership philosophy
   - Input: `leadership: Leadership`
   - Three columns: approach, code quality, communication

7. **EducationComponent** (`education/`) - Education history + languages
   - Inputs: `education: Education[]`, `languages: string[]`

8. **ContactComponent** (`contact/`) - Footer with copyright and availability

### Data Models

All TypeScript interfaces defined in `src/app/models/portfolio.model.ts`:

- `Portfolio` - Root data structure
- `Profile`, `ContactItem`, `SkillGroup`, `Experience`, `Project`, `Education`, `Leadership`, `Footer`

### Services

**PortfolioService** (`src/app/services/portfolio.ts`):
- Fetches `portfolio-config.json` via HttpClient
- Returns `Observable<Portfolio>`
- Used by root App component to load all data

### Directives

**RevealDirective** (`src/app/directives/reveal.ts`):
- Handles scroll-triggered animations
- Uses Intersection Observer API
- Adds `.reveal` class on init, `.active` class when in viewport
- Applied to sections for fade-in-up animation

### Content Management

All portfolio content lives in `src/assets/portfolio-config.json`:

```json
{
  "profile": { "name", "role", "image", "summary", "location", "tagline" },
  "contact": [ { "type", "label", "link", "icon" } ],
  "skills": [ { "category", "skills", "primary" } ],
  "experience": [ { "title", "company", "date", "responsibilities" } ],
  "projects": [ { "title", "role", "stack", "context", "problem", "approach", "result", "featured" } ],
  "education": [ { "degree", "school", "date" } ],
  "languages": [ "Serbian (Native)", ... ],
  "leadership": { "approach", "codeQuality", "communication" },
  "footer": { "text", "openTo" }
}
```

**To update content:** Edit this JSON file. Changes appear immediately in dev mode.

### Design System

**Global styles** (`src/styles.scss`):

CSS custom properties:
- `--bg-body`: #18181b (Zinc 900) - main background
- `--bg-card`: #27272a (Zinc 800) - card backgrounds
- `--text-main`: #f4f4f5 (Zinc 100) - primary text
- `--text-muted`: #a1a1aa (Zinc 400) - secondary text
- `--accent`: #e4e4e7 (Zinc 200) - headings
- `--border`: #3f3f46 (Zinc 700) - borders
- `--icon-color`: #d4d4d8 (Zinc 300) - icons
- `--transition`: all 0.2s ease

**Typography:**
- Font: Inter (Google Fonts, weights 300/400/500/600)
- H1: 3rem (2.25rem mobile), weight 600
- H2: 1.6rem, weight 500, with decorative line
- H3: 1.2rem, weight 600

**Layout:**
- Container: max-width 850px, centered
- Padding: 24px (16px mobile)
- Mobile breakpoint: 768px

**Animations:**
- Reveal: opacity 0 → 1, translateY 15px → 0, 0.6s ease
- Hover: 0.2s transitions on interactive elements

### Component-Specific Patterns

**Using CommonModule:**
All components import `CommonModule` for `*ngFor`, `*ngIf`, etc.

**Input binding:**
Components use `@Input()` decorators. When binding in templates, match property names exactly:
- `[skillGroups]` not `[skills]`
- `[experiences]` not `[experience]`
- `[education]` not `[educationList]`

**Icons:**
SVG icons are inline in component code or templates. HeroComponent has an `getIcon()` helper method.

## Common Modifications

**Adding a new section:**
1. Generate component: `npx ng generate component components/section-name --skip-tests`
2. Define @Input() properties in the component
3. Add to `app.ts` imports array
4. Add to `app.html` template
5. Create corresponding interface in `portfolio.model.ts`
6. Add data to `portfolio-config.json`

**Updating skills:**
Edit `skills` array in `portfolio-config.json`. Group by category with `primary: true/false`.

**Adding projects:**
Add to `projects` array with `featured: true` to show in main showcase.

**Changing colors:**
Modify CSS custom properties in `src/styles.scss` `:root`. The Zinc palette is from Tailwind CSS.

**Customizing animations:**
Edit `RevealDirective` options (threshold, rootMargin) or `.reveal` styles in `styles.scss`.

## Deployment

**GitHub Pages configuration:**
- Custom domain: `lazar.manasijevic.com` (CNAME in `public/`)
- Build output: `dist/portfolio/browser/`
- Base href: `/` (root, not `/cv/`)
- Deploy script uses `angular-cli-ghpages`

**Important:** The CNAME file must be in `public/` to be included in builds automatically.

**Deployment process:**
1. `npm run deploy` builds for production
2. Pushes to `gh-pages` branch
3. GitHub Pages serves from that branch
4. Custom domain configured via CNAME

## Angular-Specific Notes

- This project uses **standalone components** (Angular 21 pattern)
- No `app.module.ts` or NgModules
- Components declare their own imports
- `provideHttpClient()` in `app.config.ts` for HttpClient
- Signals used for reactive state (`signal()`, `computed()`)
- Control flow syntax: `@if`, `@for` (not `*ngIf`, `*ngFor`)

## File Reference

- `src/app/app.ts` - Root component, loads portfolio data
- `src/app/app.html` - Main template, includes all section components
- `src/app/app.config.ts` - App configuration (providers, HTTP, routing)
- `src/assets/portfolio-config.json` - All content data
- `src/styles.scss` - Global styles and design system
- `public/CNAME` - Custom domain for GitHub Pages
- `angular.json` - Angular CLI configuration
- `package.json` - Scripts and dependencies

## Migration from Old Site

Original static site backed up in `old-site/` directory. Key improvements:
- Component-based architecture (vs single HTML file)
- TypeScript type safety
- Grouped skills (vs flat list)
- Projects showcase with detailed case studies
- Leadership section
- Scroll animations via directive (vs inline JS)
- Build process for optimization

## Troubleshooting

**Build errors about unknown properties:**
- Check @Input() property names match template bindings
- Ensure component is imported in parent's imports array

**CNAME not in build output:**
- Verify CNAME is in `public/` directory
- Check `angular.json` includes `{"glob": "**/*", "input": "public"}`

**Styles not applying:**
- Check CSS variables are defined in `src/styles.scss`
- Component styles are scoped; use global styles for cross-component patterns

**Data not loading:**
- Check `portfolio-config.json` path in PortfolioService
- Verify HttpClient is provided in app.config.ts
- Check browser network tab for 404 errors
