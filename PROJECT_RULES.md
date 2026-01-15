# Interior Vision Project Rules

## Critical Design Principles

### ❌ NO DYNAMIC RESIZING - EVER

This project uses **FIXED SIZING ONLY**. Dynamic resizing is never necessary and should never be implemented.

#### What This Means:

1. **No responsive font sizes** - All font sizes are fixed values in rem/px
   - ❌ Never use: `clamp()`, `min()`, `max()`, viewport units (`vw`, `vh`, `vmin`, `vmax`)
   - ✅ Always use: Fixed `rem` or `px` values

2. **No responsive spacing** - All spacing is fixed
   - ❌ Never use: Dynamic calculations, viewport-based spacing
   - ✅ Always use: CSS custom properties with fixed pixel values

3. **No media queries for layout changes** - Layout is fixed
   - ❌ Never use: `@media` queries for layout/sizing (except accessibility)
   - ✅ Only allowed: `@media (prefers-reduced-motion: reduce)` for accessibility

4. **No JavaScript resize listeners** - No dynamic calculations
   - ❌ Never use: `window.innerWidth`, `window.innerHeight`, `resize` event listeners
   - ✅ Always use: Fixed CSS values

5. **No parallax or dynamic scroll effects**
   - ❌ Never use: Transform calculations based on scroll position
   - ✅ All elements remain static during scroll

#### Files That Enforce This Rule:

- `app/globals.css` - **COMPLETELY REWRITTEN** with fixed pixel values only
  - NO `width: 100%` or `height: 100%`
  - NO `flex: 1` or percentage-based flex
  - NO `100vh` or `100vw` viewport units
  - NO `1fr` fractional grid units
  - NO percentage-based widths/heights
  - ALL sizing is in fixed pixels (px)
- `app/components/ScrollEffects.tsx` - Disabled (returns null)
- `app/utils/parallax.ts` - Disabled (empty implementation)
- `app/globals-dynamic-OLD.css` - Old file with dynamic resizing (kept for reference)

#### Why This Rule Exists:

Content that doesn't fit the viewport is intentionally cut off. This is a design choice, not a bug. The layout is optimized for a specific viewport size and should not adapt.

#### For Future Development:

When adding new sections or components:
1. Use the existing CSS custom properties with fixed values
2. Never add responsive calculations
3. Never add resize event listeners
4. Content overflow is acceptable - do not try to "fix" it with dynamic sizing

---

**Remember: If you're tempted to make something "responsive" or "adaptive", you're going against the core design principle of this project.**
