# Changelog

## 2026-06-13

### Complete Rebuild — Clean Architecture
- **Rebuilt from scratch**: New HTML structure, fresh CSS, preserved all JS functionality
- **2508 lines** (down from 3063 — 18% smaller, no feature loss)
- **Clean sidebar**: Cohesive header with brand + version, simplified nav, consistent footer
- **Unified button system**: `.copy-btn` and `.copy-all` have full standalone styles (no `.btn` dependency)
- **Simplified DOM**: Removed `hidden-access` floating button, `nav-section-label` → `sb-label`, `section-header` → `section-title` (matches JS)
- **Admin panel**: Streamlined markup with consistent class names, cleaner grid structure
- **Mobile**: Unified breakpoints, cleaner drawer animation, mobile search input kept intact
- **Print styles**: Updated to match new class names

### Visual Redesign V2 — Professional Polish
- **Richer color palette**: Linear-style dark (#09090b / #131316 / #27272a) with zinc-toned borders, true white text (#fafafa), blue accent (#3b82f6)
- **Setup grid → clean table**: Replaced scrollable flex cards with a bordered two-column table (`setup-table` / `setup-row`). Left-aligned labels, values with contextual color coding. Subtle hover + copy hint on each row.
- **Refined typography**: 28px h1 (bold 700, tighter letter-spacing), 11px section headers, 13px body
- **Improved sidebar**: Tighter nav items (7px padding), subtle white-alpha hover instead of colored background
- **Mobile cleanup**: Removed duplicate CSS rules, adjusted 480px breakpoint

### CSS Redesign V1 — Professional Clean Theme
- Replaced entire 1400-line CSS with clean, minimal professional design
- New palette: GitHub-style dark (#0d1117 / #161b22 / #30363d / #58a6ff)
- Removed all gradients, glow effects, backdrop-blur, glass morphism
- No purple/pink/neon — blue accent on dark gray
- Solid backgrounds with clean 1px borders throughout
- Minimal animations — only hover transitions on borders/color
- All functionality preserved: search, nav, copy, admin, variants, theme switching

### Mobile V2 Improvements
- Added search bar to mobile topbar with auto-select first match
- Sticky topbar with border shadow
- Larger font sizes (15px base, 24px h1)
- Better touch targets (38px+ for buttons)
- Sidebar uses 100dvh to handle iOS URL bar

### Critical Mobile Rendering Fixes
- **Removed Google Fonts external `<link>`** — was blocking first contentful paint on iOS Safari
- **Changed `background-attachment: fixed` → `scroll`** — known iOS Safari bug
- **Fixed `ReferenceError` for `initialKey`** at line 3342 — killed JS execution
- **Added `overflow-x: hidden`** to body
- **Replaced all fonts with system stacks** — no external font dependency

### Quality Fixes
- Fixed double `monospace` in font-family declarations
- Added `mobSearch` JavaScript handler synced with sidebar nav
- Updated `adminSelectedProductKey` fallback
- Null-guarded `hiddenAccess` event listener

### Initial Setup
- Renamed `cosmo_support (1).html` → `index.html`
- Mobile responsive drawer nav + server API sync
- Vercel deployments to `https://cosmo-support-weld.vercel.app`
