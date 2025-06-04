# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (includes sitemap generation)
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint

# Generate sitemap only
npm run generate-sitemap
```

## Architecture Overview

This is a personal portfolio website built with React 18, Vite, and Tailwind CSS, featuring:

### Routing Structure
- Uses React Router v7 with nested routing
- All routes wrap through `Layout` component for consistent header/footer
- Routes: `/` (home), `/about`, `/projects`, `/contact`
- Navigation defined in `src/components/Layout.jsx`

### Component Organization
- **Pages**: `src/pages/` - Main route components
- **Layout Components**: `src/components/` - Header, Footer, Welcome, ContactSection
- **UI Components**: `src/components/ui/` - Shadcn UI components with custom additions
- **Utilities**: `src/lib/utils.js` - Contains `cn()` function for class merging

### Styling System
- **Tailwind CSS** with custom design tokens via CSS variables
- **Shadcn UI** configured with "new-york" style and slate base color
- Design system uses HSL color space for theming
- Custom animations and gradients defined in `tailwind.config.js`

### Key Integrations
- **Cal.com**: Embedded booking widget for consultations (configured in App.jsx)
- **Lucide React**: Icon library
- **Custom Image Optimization**: `OptimizedImage` component

## Development Patterns

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route to `src/App.jsx`
3. Add navigation link to `src/components/Layout.jsx`
4. Update `generate-sitemap.js` if needed

### Styling Components
- Use `cn()` utility from `src/lib/utils.js` for class merging
- Follow Shadcn UI patterns for compound components
- Leverage CSS variables for consistent theming
- Use Tailwind utilities with design tokens

### External Integrations
- Script-based integrations go in `App.jsx` useEffect
- Cal.com bookings use `data-cal-link` attributes on buttons

## Build Process
- Vite handles bundling and dev server
- Post-build automatically generates sitemap via `generate-sitemap.js`
- Path aliases: `@/` maps to `src/`