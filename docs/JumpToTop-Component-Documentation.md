# JumpToTop Component Documentation

## Overview

The `JumpToTop` component is a React component that provides an elegant, hover-activated navigation feature allowing users to quickly scroll back to the top (hero section) of the page. It displays circular buttons in the top-left and top-right corners of the viewport that appear when users hover over invisible trigger zones.

**File Location:** `app/components/JumpToTop.tsx`

---

## Component Architecture

### Key Features

1. **Dual-corner buttons**: Buttons appear in both top-left and top-right corners for accessibility
2. **Hover-activated**: Buttons fade in when hovering over 200×200px trigger zones
3. **Hero section detection**: Automatically hides buttons when the hero section is visible
4. **Smooth scrolling**: Uses smooth scroll behavior to navigate to the hero section
5. **Accessibility-focused**: Includes ARIA labels and semantic HTML

---

## Technical Implementation

### State Management

The component uses React hooks to manage three key pieces of state:

```typescript
const [isLeftVisible, setIsLeftVisible] = useState(false);
const [isRightVisible, setIsRightVisible] = useState(false);
const [isHeroVisible, setIsHeroVisible] = useState(true);
```

- **`isLeftVisible`** (line 6): Controls visibility of the left corner button
- **`isRightVisible`** (line 7): Controls visibility of the right corner button
- **`isHeroVisible`** (line 8): Tracks whether the hero section is currently visible in the viewport

### Hero Section Detection

The component uses the **Intersection Observer API** to detect when the hero section is visible:

#### Implementation Details (lines 11-39)

```typescript
useEffect(() => {
  const heroElement = document.getElementById('hero');

  // Guard clause: If hero doesn't exist, assume we're not on hero
  if (!heroElement) {
    setIsHeroVisible(false);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setIsHeroVisible(entry.isIntersecting);
      });
    },
    {
      threshold: 0.5,  // Trigger when 50% of hero is visible
      rootMargin: '0px'
    }
  );

  observer.observe(heroElement);

  return () => {
    observer.disconnect();
  };
}, []);
```

**How it works:**

1. **Element Lookup** (line 12): Searches for an element with `id="hero"` in the DOM
2. **Guard Clause** (lines 14-18): If hero element doesn't exist, assumes we're not on the hero section and shows buttons
3. **Intersection Observer** (lines 20-31): Creates an observer that monitors when the hero section enters/exits the viewport
4. **Threshold Configuration** (line 28): Triggers when 50% of the hero section is visible
5. **Cleanup** (lines 36-38): Disconnects the observer when the component unmounts to prevent memory leaks

### Scroll Functionality

The `scrollToTop` function handles smooth scrolling to the hero section:

#### Implementation (lines 41-54)

```typescript
const scrollToTop = () => {
  const heroElement = document.getElementById('hero');
  if (heroElement) {
    heroElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};
```

**Logic flow:**

1. **Primary approach** (lines 42-47): If hero element exists, scroll to it using `scrollIntoView()`
2. **Fallback approach** (lines 49-52): If hero element doesn't exist, scroll to the top of the window using `window.scrollTo()`
3. **Smooth behavior**: Both methods use `behavior: 'smooth'` for animated scrolling

### Conditional Rendering

The component returns `null` when the hero section is visible (lines 57-59):

```typescript
if (isHeroVisible) {
  return null;
}
```

**Purpose**: Prevents the buttons from appearing on the first section (hero), ensuring they only show when users have scrolled down.

---

## Component Structure

### DOM Hierarchy

```
<>
  <!-- Left Corner System -->
  <div className="jump-to-top-trigger jump-to-top-trigger-left">
    <button className="jump-to-top-button jump-to-top-button-left">
      <svg className="jump-to-top-icon">
        <!-- Double chevron icon -->
      </svg>
    </button>
  </div>

  <!-- Right Corner System -->
  <div className="jump-to-top-trigger jump-to-top-trigger-right">
    <button className="jump-to-top-button jump-to-top-button-right">
      <svg className="jump-to-top-icon">
        <!-- Double chevron icon -->
      </svg>
    </button>
  </div>
</>
```

### Trigger Zones

**Left Trigger Zone** (lines 64-92):
- **Class**: `jump-to-top-trigger jump-to-top-trigger-left`
- **Event Handlers**:
  - `onMouseEnter`: Sets `isLeftVisible` to `true`
  - `onMouseLeave`: Sets `isLeftVisible` to `false`
- **ARIA Label**: "Jump to top trigger - left"
- **Position**: Fixed at top-left corner (CSS: `left: 0`)
- **Size**: 200×200px hover-sensitive area

**Right Trigger Zone** (lines 95-123):
- **Class**: `jump-to-top-trigger jump-to-top-trigger-right`
- **Event Handlers**:
  - `onMouseEnter`: Sets `isRightVisible` to `true`
  - `onMouseLeave`: Sets `isRightVisible` to `false`
- **ARIA Label**: "Jump to top trigger - right"
- **Position**: Fixed at top-right corner (CSS: `right: 0`)
- **Size**: 200×200px hover-sensitive area

### Buttons

Both buttons share identical structure with position-specific classes:

**Left Button** (lines 71-91):
- **Dynamic Classes**:
  - Base: `jump-to-top-button jump-to-top-button-left`
  - Conditional: `jump-to-top-visible` (when `isLeftVisible === true`)
- **Click Handler**: `scrollToTop()` function
- **Button Type**: `type="button"` (prevents form submission)
- **ARIA Label**: "Jump to top"
- **Position**: 20px from left edge, 20px from top

**Right Button** (lines 102-122):
- **Dynamic Classes**:
  - Base: `jump-to-top-button jump-to-top-button-right`
  - Conditional: `jump-to-top-visible` (when `isRightVisible === true`)
- **Click Handler**: `scrollToTop()` function
- **Button Type**: `type="button"` (prevents form submission)
- **ARIA Label**: "Jump to top"
- **Position**: 20px from right edge, 20px from top

### Icon Design

The double-chevron icon (lines 77-90, 108-121):
- **ViewBox**: `0 0 24 24` (24×24 unit square)
- **Stroke**: Uses `currentColor` (inherits from parent button)
- **Stroke Properties**:
  - Width: 2px
  - Line cap: `round`
  - Line join: `round`
- **Two Chevrons**:
  - **Outer chevron** (line 87, 118): `points="18 15 12 9 6 15"` - Points upward
  - **Inner chevron** (line 89, 120): `points="18 11 12 5 6 11"` - Points upward, positioned above outer

---

## CSS Styling

### Styling Location

All styles are defined in `app/globals.css` starting at line 1573.

### Key CSS Classes

#### Trigger Zones

**`.jump-to-top-trigger`** (lines 1573-1580):
```css
.jump-to-top-trigger {
  position: fixed;
  top: 0;
  width: 200px;
  height: 200px;
  z-index: var(--z-jump-to-top); /* 300 */
  pointer-events: auto;
}
```

**`.jump-to-top-trigger-left`** (lines 1582-1584):
```css
.jump-to-top-trigger-left {
  left: 0;
}
```

**`.jump-to-top-trigger-right`** (lines 1586-1588):
```css
.jump-to-top-trigger-right {
  right: 0;
}
```

#### Buttons

**`.jump-to-top-button`** (lines 1591-1616):
```css
.jump-to-top-button {
  position: fixed;
  top: 20px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(212, 255, 0, 0.95); /* Bright lime green */
  border: 1px solid rgba(26, 26, 26, 0.1);
  border-radius: 50%; /* Makes it circular */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: var(--z-jump-to-top);

  /* Hidden by default */
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition:
    opacity 250ms cubic-bezier(0.16, 1, 0.3, 1),
    visibility 250ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 250ms cubic-bezier(0.16, 1, 0.3, 1),
    background-color 150ms ease;
  pointer-events: none;
}
```

**Key Design Decisions:**
- **Hidden by Default**: Uses `opacity: 0`, `visibility: hidden`, and `pointer-events: none` to completely hide buttons
- **Initial Transform**: `translateY(-10px)` creates a subtle upward offset for animation
- **Transitions**: 250ms duration with custom easing function for smooth appearance
- **Color**: Bright lime green (`#D4FF00`) matching the site's accent color
- **Shadow**: Subtle drop shadow for depth

**`.jump-to-top-button-left`** (lines 1618-1620):
```css
.jump-to-top-button-left {
  left: 20px;
}
```

**`.jump-to-top-button-right`** (lines 1622-1624):
```css
.jump-to-top-button-right {
  right: 20px;
}
```

#### Visible State

**`.jump-to-top-button.jump-to-top-visible`** (lines 1627-1632):
```css
.jump-to-top-button.jump-to-top-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
}
```

**Animation Effect:** Buttons fade in and slide down into position when hovered.

#### Hover State

**`.jump-to-top-button:hover`** (lines 1635-1638):
```css
.jump-to-top-button:hover {
  background-color: rgba(196, 239, 0, 1); /* Slightly darker green */
  transform: translateY(-2px);
}
```

**Hover Effect:** Buttons lift up slightly and change to a darker green shade.

#### Icon Styling

**`.jump-to-top-icon`** (lines 1641-1646):
```css
.jump-to-top-icon {
  width: 24px;
  height: 24px;
  color: #1a1a1a; /* Dark gray/black */
  flex-shrink: 0;
}
```

### Accessibility: Reduced Motion Support

**`@media (prefers-reduced-motion: reduce)`** (lines 1671-1673):
```css
@media (prefers-reduced-motion: reduce) {
  .jump-to-top-button {
    transition: none !important;
  }
}
```

**Purpose:** Respects user's operating system preference for reduced motion by disabling all transitions.

---

## Z-Index Layering

The component uses a CSS variable for consistent z-index management:

**Variable Definition** (line 58 in globals.css):
```css
--z-jump-to-top: 300;
```

**Z-Index Hierarchy:**
- `--z-background: 1` - Background layers
- `--z-content: 2` - Main content
- `--z-foreground: 3` - Foreground decorations
- `--z-navigation: 100` - Navigation elements
- `--z-modal: 200` - Modal overlays
- **`--z-jump-to-top: 300`** - Jump to top buttons (highest priority)

**Rationale:** The buttons have the highest z-index to ensure they're always accessible and never obscured by other page elements.

---

## User Interaction Flow

### Scenario 1: User scrolls down from hero section

1. **Initial State**: User is viewing the hero section
   - `isHeroVisible = true`
   - Component returns `null` (buttons not rendered)

2. **User scrolls down**: Hero section leaves viewport
   - Intersection Observer detects change
   - `isHeroVisible` updates to `false`
   - Buttons render but remain invisible

3. **User hovers over top-left corner**:
   - `onMouseEnter` fires on left trigger zone
   - `setIsLeftVisible(true)` executes
   - Left button receives `jump-to-top-visible` class
   - Button fades in and slides down into position (250ms animation)

4. **User clicks button**:
   - `scrollToTop()` function executes
   - Page smoothly scrolls to hero section
   - Intersection Observer detects hero is visible again
   - `isHeroVisible` updates to `true`
   - Component unmounts (returns `null`)

5. **User moves mouse away**:
   - `onMouseLeave` fires on left trigger zone
   - `setIsLeftVisible(false)` executes
   - Left button loses `jump-to-top-visible` class
   - Button fades out and slides up (250ms animation)

### Scenario 2: Page without hero section

1. **Component mounts**: Searches for `id="hero"` element
2. **Element not found**: Guard clause executes
3. **`isHeroVisible` set to `false`**: Buttons are available immediately
4. **Buttons function normally**: Scroll to top of page using `window.scrollTo()`

---

## Dependencies & Browser APIs

### React Hooks
- `useState`: State management for visibility flags
- `useEffect`: Lifecycle management and side effects (Intersection Observer setup/cleanup)

### Browser APIs
- **Intersection Observer API**:
  - **Purpose**: Detect when hero section enters/exits viewport
  - **Browser Support**: All modern browsers (IE not supported)
  - **Polyfill**: May be needed for older browsers

- **Element.scrollIntoView()**:
  - **Purpose**: Smooth scroll to hero section
  - **Options Used**: `behavior: 'smooth'`, `block: 'start'`
  - **Browser Support**: All modern browsers

- **Window.scrollTo()**:
  - **Purpose**: Fallback scroll method
  - **Options Used**: `top: 0`, `behavior: 'smooth'`
  - **Browser Support**: Universal

- **Document.getElementById()**:
  - **Purpose**: Find hero section element
  - **Browser Support**: Universal

---

## Performance Considerations

### Optimization Strategies

1. **Conditional Rendering**:
   - Returns `null` when hero is visible, completely removing buttons from DOM
   - Reduces unnecessary re-renders and DOM nodes

2. **Event Handler Optimization**:
   - Uses local state updates (no props drilling)
   - Mouse events are lightweight (no scroll listeners)

3. **Intersection Observer Benefits**:
   - More performant than scroll event listeners
   - Runs asynchronously, doesn't block main thread
   - Automatically throttled by browser

4. **CSS Transitions**:
   - Hardware-accelerated (`transform`, `opacity`)
   - Uses GPU for smooth animations
   - More performant than JavaScript animations

5. **Cleanup Pattern**:
   - Properly disconnects Intersection Observer on unmount
   - Prevents memory leaks in single-page applications

### Potential Optimizations

- **useCallback**: Could wrap `scrollToTop` in `useCallback` to prevent recreation on every render
- **Debouncing**: Not needed due to Intersection Observer's built-in throttling
- **Memoization**: Component is lightweight, `React.memo` unlikely to provide benefit

---

## Accessibility Features

### ARIA Labels

1. **Trigger Zones** (lines 68, 99):
   - `aria-label="Jump to top trigger - left"`
   - `aria-label="Jump to top trigger - right"`
   - Provides context for screen reader users about hover zones

2. **Buttons** (lines 75, 106):
   - `aria-label="Jump to top"`
   - Describes button action clearly for assistive technologies

### Semantic HTML

- Uses `<button>` element (not `<div>` or `<a>`)
- Includes `type="button"` to prevent form submission
- Proper keyboard navigation support (native button behavior)

### Motion Sensitivity

- Respects `prefers-reduced-motion` media query
- Disables transitions for users with motion sensitivity
- Maintains functionality while removing animations

### Keyboard Accessibility

- Buttons are focusable by default (native `<button>` behavior)
- Can be activated with Enter or Space keys
- Clear visual focus indicators needed (not currently implemented)

### Recommended Improvements

1. **Add focus-visible styles**:
   ```css
   .jump-to-top-button:focus-visible {
     outline: 2px solid #1a1a1a;
     outline-offset: 2px;
   }
   ```

2. **Consider adding keyboard shortcut** (e.g., "Home" key support)

3. **Add screen reader announcements** when scrolling completes

---

## Integration with Page Layout

### Required HTML Structure

The component expects a page structure with:

```html
<div id="hero">
  <!-- Hero section content -->
</div>

<!-- Other sections -->
```

**Critical Requirements:**
- An element with `id="hero"` must exist for optimal functionality
- Works as fallback without hero element (scrolls to `top: 0`)

### Usage in Layout

Currently integrated in the main layout file (based on git commit history):

```tsx
import JumpToTop from './components/JumpToTop';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <JumpToTop />
      </body>
    </html>
  );
}
```

**Placement:** Should be rendered at root level, outside scroll containers.

---

## Design Patterns & Best Practices

### React Patterns Used

1. **Custom Client Component**: Uses `'use client'` directive for browser APIs
2. **Hook-based State Management**: Modern functional component approach
3. **Effect Cleanup**: Proper cleanup of side effects in `useEffect`
4. **Guard Clauses**: Early returns for cleaner code flow
5. **Conditional Rendering**: Returns `null` when not needed

### Code Quality

**Strengths:**
- Clean separation of concerns (visibility states for each corner)
- Proper TypeScript/ESLint compatibility
- Accessible markup with ARIA labels
- Graceful degradation (fallback scroll method)
- Memory leak prevention (observer cleanup)

**Potential Improvements:**
- Add TypeScript types for better type safety
- Extract magic numbers to constants (threshold: 0.5, widths/heights)
- Add JSDoc comments for better documentation
- Consider extracting trigger zone logic into custom hook

### Naming Conventions

- **Component**: PascalCase (`JumpToTop`)
- **Functions**: camelCase (`scrollToTop`)
- **State Variables**: Descriptive boolean names with "is" prefix (`isLeftVisible`)
- **CSS Classes**: BEM-inspired naming (`jump-to-top-button`, `jump-to-top-button-left`)

---

## Testing Considerations

### Unit Testing Recommendations

1. **State Management Tests**:
   - Verify initial state values
   - Test state updates on mouse events
   - Test visibility toggle logic

2. **Intersection Observer Tests**:
   - Mock Intersection Observer API
   - Test hero visibility detection
   - Verify cleanup on unmount

3. **Scroll Behavior Tests**:
   - Mock `scrollIntoView` and `scrollTo`
   - Test both hero element and fallback scenarios
   - Verify smooth behavior configuration

### Integration Testing

1. **User Interaction Flows**:
   - Test hover → visible → click → scroll sequence
   - Test both left and right buttons independently
   - Test behavior when hero element is missing

2. **Accessibility Testing**:
   - Verify ARIA labels are present
   - Test keyboard navigation
   - Test with screen readers
   - Verify focus management

### Visual Regression Testing

- Test button appearance/disappearance animations
- Verify positioning in various viewport sizes
- Test hover states
- Test reduced motion preferences

---

## Browser Compatibility

### Fully Supported Features

- Chrome 58+ (Intersection Observer support)
- Firefox 55+
- Safari 12.1+
- Edge 79+

### Partial Support / Polyfills Needed

- **Internet Explorer**: Not supported (lacks Intersection Observer)
  - Requires polyfill: `intersection-observer` npm package
  - Alternative: Use scroll event listener fallback

### Fallback Strategies

1. **No Intersection Observer**:
   - Could implement scroll event listener as fallback
   - Show buttons at all times except on initial load

2. **No smooth scrolling support**:
   - Gracefully degrades to instant scroll
   - `behavior: 'smooth'` is safely ignored in unsupported browsers

---

## Maintenance & Future Enhancements

### Potential Feature Additions

1. **Customizable appearance**: Accept props for colors, sizes, icons
2. **Animation variants**: Different entrance/exit animations
3. **Progress indicator**: Show scroll progress in button
4. **Section navigation**: Expand to navigate between multiple sections
5. **Mobile adaptations**: Touch-friendly version for mobile devices
6. **Keyboard shortcuts**: Add hotkey support (e.g., "Ctrl + Home")

### Refactoring Opportunities

1. **Extract Custom Hook**:
   ```typescript
   function useIntersectionObserver(elementId, options) {
     // Intersection Observer logic
   }
   ```

2. **Component Composition**:
   ```typescript
   <CornerButton
     position="left"
     isVisible={isLeftVisible}
     onVisibilityChange={setIsLeftVisible}
     onClick={scrollToTop}
   />
   ```

3. **Configuration Object**:
   ```typescript
   const config = {
     triggerSize: 200,
     buttonSize: 48,
     buttonOffset: 20,
     heroThreshold: 0.5,
   };
   ```

### Known Limitations

1. **Fixed positioning**: May conflict with other fixed elements
2. **Mobile experience**: Hover doesn't work well on touch devices
3. **Hero dependency**: Tightly coupled to hero section's ID
4. **No customization**: Hard-coded styles and behavior
5. **Single scroll target**: Can only scroll to hero section

---

## Related Files

- **Component**: `app/components/JumpToTop.tsx`
- **Styles**: `app/globals.css` (lines 1573-1673)
- **Integration**: Main layout file (confirmed via git history)
- **CSS Variables**: `app/globals.css` (line 58 for z-index)

---

## Version History

Based on git commit history:

- **Latest commit** (ed0716d): "Remove JumpToBottom component from layout.tsx and ensure JumpToTop is integrated for streamlined navigation experience"
- **Previous commits**:
  - 167386a: Added Jump to Bottom functionality
  - c3bd48a: Refactored to remove typing animations, implemented visibility based on scroll
  - 3de9409: Enhanced with typing animation for button text
  - 919f7f1: Initial implementation replacing FloatingNav component

---

## Summary

The `JumpToTop` component is a well-architected, accessible navigation enhancement that provides users with a convenient way to return to the top of the page. It demonstrates modern React patterns, proper use of browser APIs, and thoughtful UX design with its hover-activated interface and automatic hiding when not needed. The component is production-ready with good performance characteristics and accessibility support, though it could benefit from additional customization options and mobile-specific enhancements.
