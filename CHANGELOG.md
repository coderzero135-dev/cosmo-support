# Changelog

## 2026-06-13

### Visual Redesign V2 — Professional Polish
- **Richer color palette**: Linear-style dark (#09090b / #131316 / #27272a) with zinc-toned borders, true white text (#fafafa), blue accent (#3b82f6)
- **Setup grid → clean table**: Replaced scrollable flex cards with a bordered two-column table (`setup-table` / `setup-row`). Left-aligned labels, right-aligned values with contextual color coding. Subtle hover + copy hint on each row.
- **Refined typography**: 28px h1 (bold 700, tighter letter-spacing), 11px section headers, 13px body
- **Improved sidebar**: Tighter nav items (7px padding), subtle white-alpha hover instead of colored background
- **Mobile cleanup**: Removed duplicate CSS rules, adjusted 480px breakpoint (18px h1, 90px label column)
- **Print styles updated** to match new class names

### CSS Redesign V1 — Professional Clean Theme
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
- Vercel deployments to `https://cosmo-support-weld.vercel.app`
