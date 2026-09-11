# MakerGhat — Our Story

A responsive recreation of the “Our Story” page from [makerghat.org](https://makerghat.org), built from the supplied Figma design with React, Vite, Tailwind CSS, and GSAP.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

To build and preview a production bundle:

```bash
npm run build
npm run preview
```

## Project structure

```text
index.html                     Vite entry point and page metadata
src/
  main.jsx                     Mounts the React application
  App.jsx                      Tab state and top-level page composition
  styles.css                   Tailwind directives and global browser rules
  pages/
    MakerGhatStoryPage.jsx      Assembles the complete story page
  components/
    Header.jsx                 Desktop navigation and mobile menu
    Logo.jsx                   Reusable header/footer MakerGhat logo
    StoryTabs.jsx              Accessible overlapping page tabs
    Hero.jsx                   Page title and hero photograph
    IntroJourney.jsx           Intro content and animated timeline layout
    FigmaRoute.jsx             Responsive inline SVG timeline route
    YearCard.jsx               Reusable hover, tap, and keyboard year card
    EmptyState.jsx             Placeholder for tabs without page content
    Footer.jsx                 Skyline transition, links, and contact details
  data/
    timeline.js                Timeline content, images, crops, and positions
public/
  assets/
    figma/                     Original photographs and SVGs exported from Figma
    makerghat-logo.svg         Header wordmark
    footer-hand.svg            Footer logo artwork
    footer-wordmark.svg        Footer wordmark artwork
tailwind.config.js             Design tokens, shadows, fonts, and animations
vite.config.js                 Vite and React configuration
```

## Current experience

- Pixel-aligned desktop composition based on the supplied Figma frame.
- Responsive mobile layout with a simplified vertical timeline.
- Accessible tab navigation using click, tap, and keyboard arrow controls.
- Reusable year cards with hover, focus, and tap-accessible detail panels.
- Original Figma photographs, icons, decorative vectors, and skyline artwork.
- A responsive inline SVG route with a centered white dashed line.
- GSAP ScrollTrigger reveals the route as the page scrolls; its endpoint dot appears only when the route reaches the end.
- Animated two-tone direction arrows with reduced-motion support.
- Empty states for the MakerGhat team, Support system, and Volunteers & Alumni tabs.

## Development approach

The site was built from the Figma design in three stages:

1. **Components first** — the design was divided into reusable navigation, content, year-card, route, and footer components.
2. **Page composition second** — the components were assembled into `MakerGhatStoryPage`, while `App.jsx` manages the tabbed single-page experience.
3. **Motion last** — GSAP and ScrollTrigger reveal a shared SVG mask so the green route and centered white dashed line draw together. The endpoint dot appears near completion, and motion is skipped for users who prefer reduced motion.

Styling uses Tailwind CSS utility classes directly in JSX. Shared MakerGhat colors, fonts, shadows, and animation keyframes live in `tailwind.config.js`; `src/styles.css` is intentionally limited to Tailwind directives and global browser-level exceptions.

There is no router or backend. Page and interaction state remains local to the React components.
