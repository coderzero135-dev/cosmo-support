# Changelog

## 2026-06-13

### Complete CSS Redesign — Professional Clean Theme
- Replaced entire 1400-line CSS with clean, minimal professional design
- New palette: GitHub-style dark (#0d1117 / #161b22 / #30363d / #58a6ff)
- Removed all gradients, glow effects, backdrop-blur, glass morphism
- No purple/pink/neon — blue accent on dark gray
- Solid backgrounds with clean 1px borders throughout
- Minimal animations — only hover transitions on borders/color
- Simplified sidebar, cards, setup grid, error cards, admin panel
- All functionality preserved: search, nav, copy, admin, variants, theme switching

### Mobile V2 Improvements
- Added search bar to mobile topbar with auto-select first match
- Sticky topbar with border shadow
- Larger font sizes (15px base, 24px h1)
- Better touch targets (38px+ for buttons)
- Sidebar uses 100dvh to handle iOS URL bar
- Cleaned up drawer styling to match new design

### Critical Mobile Rendering Fixes
- **Removed Google Fonts external `<link>`** — was blocking first contentful paint on iOS Safari, causing permanent purple background on slow mobile networks
- **Changed `background-attachment: fixed` → `scroll`** — known iOS Safari bug that breaks page rendering
- **Fixed `ReferenceError` for `initialKey`** at line 3342 — undefined variable was killing JavaScript execution
- **Added `overflow-x: hidden`** to body to prevent horizontal scroll on mobile
- **Replaced all fonts with system stacks** — no external font dependency, instant render

### Quality Fixes
- Fixed double `monospace` in font-family declarations (from find-and-replace)
- Added `mobSearch` JavaScript handler synced with sidebar nav
- Updated `adminSelectedProductKey` fallback to not use undefined var

### Mobile V1 (earlier session)
- Loading indicator with noscript fallback for mobile debugging
- Full-screen drawer navigation for sidebar on mobile
- Setup grid wrapping (flex-wrap) on mobile
- Product logo hidden on mobile
- Duplicate topbar removed

### Initial Setup
- Renamed `cosmo_support (1).html` → `index.html`
- Mobile responsive drawer nav + server API sync for shared admin data
- Vercel deployments to `cosmo-support-weld.vercel.app`

---

## Legend
- 🔴 Critical fix
- 🟡 Layout/UX change
- 🟢 Enhancement
- ⚪ Cosmetic
