# Vertical Scroll Parallax Website Foundation

## Instructions for Building an 8-Section Full-Screen Scroll Experience

This document provides precise specifications for constructing a vertical scroll website with parallax elements. Each section occupies the full viewport, and users navigate by scrolling through sections sequentially.

---

## 1. Document Structure

Create an HTML document with the following foundational structure:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vertical Scroll Site</title>
    <!-- Link to stylesheet -->
    <!-- Link to fonts -->
</head>
<body>
    <main class="scroll-container">
        <section class="section section-1" id="section-1">
            <div class="section-background"></div>
            <div class="section-content">
                <!-- Content layer -->
            </div>
            <div class="section-foreground"></div>
        </section>
        <!-- Repeat for sections 2-8 -->
    </main>
</body>
</html>
```

### Section Anatomy

Each of the 8 sections contains exactly 3 layers stacked via z-index:

| Layer | Class | Z-Index | Purpose |
|-------|-------|---------|---------|
| Background | `.section-background` | 1 | Parallax background images, gradients, or colors |
| Content | `.section-content` | 2 | Text, buttons, primary interactive elements |
| Foreground | `.section-foreground` | 3 | Decorative elements that scroll faster than content |

---

## 2. CSS Foundation & Reset

### Base Reset

```css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    overflow-x: hidden;
    line-height: 1.6;
}
```

### CSS Custom Properties (Define at :root)

```css
:root {
    /* Spacing Scale (8px base unit) */
    --space-unit: 8px;
    --space-xs: calc(var(--space-unit) * 1);      /* 8px */
    --space-sm: calc(var(--space-unit) * 2);      /* 16px */
    --space-md: calc(var(--space-unit) * 3);      /* 24px */
    --space-lg: calc(var(--space-unit) * 5);      /* 40px */
    --space-xl: calc(var(--space-unit) * 8);      /* 64px */
    --space-2xl: calc(var(--space-unit) * 13);    /* 104px */
    --space-3xl: calc(var(--space-unit) * 21);    /* 168px */

    /* Section Dimensions */
    --section-height: 100vh;
    --section-height-min: 600px;

    /* Content Container */
    --content-max-width: 1200px;
    --content-padding-x: clamp(24px, 5vw, 80px);
    --content-padding-y: clamp(48px, 8vh, 120px);

    /* Typography Scale */
    --font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
    --font-size-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
    --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
    --font-size-lg: clamp(1.25rem, 1rem + 1vw, 1.5rem);
    --font-size-xl: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
    --font-size-2xl: clamp(2rem, 1.5rem + 2.5vw, 3rem);
    --font-size-3xl: clamp(2.5rem, 2rem + 3vw, 4rem);
    --font-size-4xl: clamp(3rem, 2rem + 5vw, 6rem);
    --font-size-hero: clamp(3.5rem, 2.5rem + 7vw, 8rem);

    /* Line Heights */
    --line-height-tight: 1.1;
    --line-height-snug: 1.25;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.75;

    /* Letter Spacing */
    --letter-spacing-tight: -0.03em;
    --letter-spacing-normal: 0;
    --letter-spacing-wide: 0.05em;
    --letter-spacing-wider: 0.1em;

    /* Z-Index Scale */
    --z-background: 1;
    --z-content: 2;
    --z-foreground: 3;
    --z-navigation: 100;
    --z-modal: 200;

    /* Transition Timing */
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
    --ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);

    /* Transition Durations */
    --duration-fast: 150ms;
    --duration-normal: 300ms;
    --duration-slow: 500ms;
    --duration-slower: 800ms;
    --duration-slowest: 1200ms;
}
```

---

## 3. Scroll Container Configuration

### Option A: Smooth Continuous Scroll (Recommended for Parallax)

```css
.scroll-container {
    width: 100%;
    overflow-x: hidden;
}
```

### Option B: Snap Scrolling (Locks Each Section in View)

```css
.scroll-container {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
}
```

**Note**: Snap scrolling (`scroll-snap-type: y mandatory`) creates a "slide-by-slide" experience where each section locks into the viewport. Omit this for fluid continuous scrolling.

---

## 4. Section Base Styles

### Full-Screen Section Container

```css
.section {
    position: relative;
    width: 100%;
    min-height: var(--section-height);
    min-height: var(--section-height-min);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    /* If using snap scrolling */
    scroll-snap-align: start;
    scroll-snap-stop: always;
}
```

### Layer Positioning

```css
/* Background Layer - Fixed or Slow-Moving */
.section-background {
    position: absolute;
    inset: 0;
    z-index: var(--z-background);
    
    /* Extend beyond section for parallax travel */
    top: -10%;
    bottom: -10%;
    height: 120%;
}

/* Content Layer - Primary Content */
.section-content {
    position: relative;
    z-index: var(--z-content);
    width: 100%;
    max-width: var(--content-max-width);
    padding: var(--content-padding-y) var(--content-padding-x);
    
    /* Content alignment options */
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* or center, flex-end */
    justify-content: center;
    min-height: 100%;
}

/* Foreground Layer - Decorative Elements */
.section-foreground {
    position: absolute;
    inset: 0;
    z-index: var(--z-foreground);
    pointer-events: none; /* Allow clicks to pass through */
    overflow: hidden;
}
```

---

## 5. Typography Specifications

### Heading Styles

```css
.section-eyebrow {
    font-size: var(--font-size-sm);
    font-weight: 500;
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    margin-bottom: var(--space-sm);
}

.section-title {
    font-size: var(--font-size-hero);
    font-weight: 700;
    line-height: var(--line-height-tight);
    letter-spacing: var(--letter-spacing-tight);
    margin-bottom: var(--space-md);
}

.section-subtitle {
    font-size: var(--font-size-2xl);
    font-weight: 400;
    line-height: var(--line-height-snug);
    margin-bottom: var(--space-lg);
}

.section-body {
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
    max-width: 65ch; /* Optimal reading width */
    margin-bottom: var(--space-lg);
}
```

### Spacing Between Text Elements

| Element Sequence | Spacing Variable | Pixel Value (approx) |
|-----------------|------------------|---------------------|
| Eyebrow → Title | `--space-sm` | 16px |
| Title → Subtitle | `--space-md` | 24px |
| Title → Body (no subtitle) | `--space-lg` | 40px |
| Subtitle → Body | `--space-md` | 24px |
| Body → CTA Button | `--space-xl` | 64px |
| Paragraph → Paragraph | `--space-md` | 24px |

---

## 6. Content Alignment Patterns

### Pattern A: Left-Aligned (Default)

```css
.section-content.align-left {
    align-items: flex-start;
    text-align: left;
}
```

### Pattern B: Center-Aligned

```css
.section-content.align-center {
    align-items: center;
    text-align: center;
}

.section-content.align-center .section-body {
    max-width: 50ch;
}
```

### Pattern C: Right-Aligned

```css
.section-content.align-right {
    align-items: flex-end;
    text-align: right;
}
```

### Pattern D: Split Layout (Text + Media Side-by-Side)

```css
.section-content.split {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-2xl);
}

.section-content.split .text-column {
    flex: 1;
    max-width: 50%;
}

.section-content.split .media-column {
    flex: 1;
    max-width: 45%;
}

/* Reverse order: media left, text right */
.section-content.split.reverse {
    flex-direction: row-reverse;
}

/* Stack on mobile */
@media (max-width: 768px) {
    .section-content.split {
        flex-direction: column;
        text-align: center;
    }
    
    .section-content.split .text-column,
    .section-content.split .media-column {
        max-width: 100%;
    }
}
```

---

## 7. Parallax Implementation

### Method 1: CSS-Only with `transform: translateY()` on Scroll

Apply these transforms dynamically via JavaScript based on scroll position:

```css
/* Background moves slower than scroll (parallax depth) */
.section-background[data-parallax="slow"] {
    will-change: transform;
    transition: transform 0.1s linear;
}

/* Foreground moves faster than scroll */
.section-foreground[data-parallax="fast"] {
    will-change: transform;
    transition: transform 0.1s linear;
}
```

### JavaScript Parallax Controller

```javascript
class ParallaxController {
    constructor() {
        this.sections = document.querySelectorAll('.section');
        this.backgrounds = document.querySelectorAll('.section-background[data-parallax]');
        this.foregrounds = document.querySelectorAll('.section-foreground[data-parallax]');
        
        this.bindEvents();
    }
    
    bindEvents() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    updateParallax() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        this.sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + scrollY;
            const sectionCenter = sectionTop + (rect.height / 2);
            const viewportCenter = scrollY + (windowHeight / 2);
            
            // Calculate offset from center (-1 to 1 range)
            const offset = (viewportCenter - sectionCenter) / windowHeight;
            
            // Apply parallax to background (moves slower)
            const background = section.querySelector('.section-background[data-parallax]');
            if (background) {
                const speed = parseFloat(background.dataset.speed) || 0.3;
                const yOffset = offset * windowHeight * speed;
                background.style.transform = `translateY(${yOffset}px)`;
            }
            
            // Apply parallax to foreground (moves faster)
            const foreground = section.querySelector('.section-foreground[data-parallax]');
            if (foreground) {
                const speed = parseFloat(foreground.dataset.speed) || -0.2;
                const yOffset = offset * windowHeight * speed;
                foreground.style.transform = `translateY(${yOffset}px)`;
            }
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new ParallaxController();
});
```

### Data Attributes for Parallax Speed

```html
<!-- Slow background (positive value = same direction as scroll) -->
<div class="section-background" data-parallax="slow" data-speed="0.3"></div>

<!-- Fast foreground (negative value = opposite direction) -->
<div class="section-foreground" data-parallax="fast" data-speed="-0.2"></div>
```

| Speed Value | Behavior |
|-------------|----------|
| `0.5` | Background moves at half scroll speed (strong depth) |
| `0.3` | Subtle background parallax (recommended default) |
| `0.1` | Very subtle movement |
| `0` | No parallax (static) |
| `-0.1` | Moves opposite to scroll (foreground pop) |
| `-0.3` | Strong opposite movement (floating effect) |

---

## 8. Scroll-Triggered Animations

### Intersection Observer Setup

```javascript
class ScrollAnimator {
    constructor() {
        this.animatedElements = document.querySelectorAll('[data-animate]');
        this.setupObserver();
    }
    
    setupObserver() {
        const options = {
            root: null,
            rootMargin: '0px 0px -10% 0px', // Trigger slightly before fully in view
            threshold: [0, 0.25, 0.5, 0.75, 1]
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, options);
        
        this.animatedElements.forEach(el => this.observer.observe(el));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimator();
});
```

### Animation CSS Classes

```css
/* Base state for all animated elements */
[data-animate] {
    opacity: 0;
    transition: 
        opacity var(--duration-slower) var(--ease-out-expo),
        transform var(--duration-slower) var(--ease-out-expo);
}

/* Visible state */
[data-animate].is-visible {
    opacity: 1;
    transform: none;
}

/* Animation: Fade Up */
[data-animate="fade-up"] {
    transform: translateY(60px);
}

/* Animation: Fade In */
[data-animate="fade-in"] {
    transform: none;
}

/* Animation: Slide from Left */
[data-animate="slide-left"] {
    transform: translateX(-80px);
}

/* Animation: Slide from Right */
[data-animate="slide-right"] {
    transform: translateX(80px);
}

/* Animation: Scale Up */
[data-animate="scale-up"] {
    transform: scale(0.9);
}

/* Animation: Blur In */
[data-animate="blur-in"] {
    filter: blur(10px);
    transition: 
        opacity var(--duration-slower) var(--ease-out-expo),
        filter var(--duration-slower) var(--ease-out-expo);
}

[data-animate="blur-in"].is-visible {
    filter: blur(0);
}
```

### Staggered Animation Delays

```css
/* Apply to children for staggered reveals */
[data-animate-stagger] > *:nth-child(1) { transition-delay: 0ms; }
[data-animate-stagger] > *:nth-child(2) { transition-delay: 100ms; }
[data-animate-stagger] > *:nth-child(3) { transition-delay: 200ms; }
[data-animate-stagger] > *:nth-child(4) { transition-delay: 300ms; }
[data-animate-stagger] > *:nth-child(5) { transition-delay: 400ms; }
[data-animate-stagger] > *:nth-child(6) { transition-delay: 500ms; }
```

### HTML Usage

```html
<div class="section-content" data-animate-stagger>
    <span class="section-eyebrow" data-animate="fade-up">Chapter One</span>
    <h2 class="section-title" data-animate="fade-up">The Beginning</h2>
    <p class="section-body" data-animate="fade-up">Your story starts here...</p>
    <a class="cta-button" data-animate="fade-up">Explore</a>
</div>
```

---

## 9. Section-by-Section Template

### Section 1: Hero / Opening

```html
<section class="section section-1" id="hero">
    <div class="section-background" data-parallax="slow" data-speed="0.4">
        <!-- Full-bleed background image or video -->
    </div>
    <div class="section-content align-center" data-animate-stagger>
        <h1 class="section-title" data-animate="fade-up">Main Headline</h1>
        <p class="section-subtitle" data-animate="fade-up">Supporting tagline</p>
        <a class="cta-button" data-animate="fade-up">Primary Action</a>
    </div>
    <div class="section-foreground" data-parallax="fast" data-speed="-0.15">
        <!-- Floating decorative elements -->
    </div>
</section>
```

### Sections 2-7: Content Sections

Alternate between these patterns:

**Even sections (2, 4, 6, 8)**: Split layout, media on right
**Odd sections (3, 5, 7)**: Split layout, media on left (reversed)

Or use center-aligned for key statements/quotes.

```html
<!-- Example: Section with split layout -->
<section class="section section-2" id="about">
    <div class="section-background" data-parallax="slow" data-speed="0.3">
        <!-- Solid color, gradient, or subtle pattern -->
    </div>
    <div class="section-content split">
        <div class="text-column" data-animate-stagger>
            <span class="section-eyebrow" data-animate="fade-up">About Us</span>
            <h2 class="section-title" data-animate="fade-up">Section Title</h2>
            <p class="section-body" data-animate="fade-up">Body content...</p>
        </div>
        <div class="media-column" data-animate="slide-right">
            <!-- Image, video, or illustration -->
        </div>
    </div>
</section>
```

### Section 8: Closing / CTA

```html
<section class="section section-8" id="contact">
    <div class="section-background" data-parallax="slow" data-speed="0.3"></div>
    <div class="section-content align-center" data-animate-stagger>
        <h2 class="section-title" data-animate="fade-up">Final Call to Action</h2>
        <p class="section-body" data-animate="fade-up">Compelling closing message</p>
        <div class="cta-group" data-animate="fade-up">
            <a class="cta-button primary">Primary Action</a>
            <a class="cta-button secondary">Secondary Action</a>
        </div>
    </div>
</section>
```

---

## 10. Responsive Breakpoints

```css
/* Mobile First Base: < 640px */

/* Small tablets and large phones */
@media (min-width: 640px) {
    :root {
        --content-padding-x: 40px;
    }
}

/* Tablets */
@media (min-width: 768px) {
    :root {
        --content-padding-x: 60px;
    }
    
    .section-content.split {
        flex-direction: row;
    }
}

/* Small desktops */
@media (min-width: 1024px) {
    :root {
        --content-padding-x: 80px;
    }
}

/* Large desktops */
@media (min-width: 1280px) {
    :root {
        --content-max-width: 1400px;
    }
}

/* Extra large screens */
@media (min-width: 1536px) {
    :root {
        --section-height: 100vh;
        --content-max-width: 1600px;
    }
}
```

---

## 11. Performance Considerations

### Critical CSS

1. **Use `will-change` sparingly**: Only on elements that will animate
2. **Prefer `transform` and `opacity`**: These properties are GPU-accelerated
3. **Avoid layout thrashing**: Batch DOM reads and writes in JavaScript

```css
/* Apply only to parallax elements */
.section-background[data-parallax],
.section-foreground[data-parallax] {
    will-change: transform;
    backface-visibility: hidden;
    transform: translateZ(0); /* Force GPU layer */
}
```

### Image Optimization

- Use `loading="lazy"` on images below the fold
- Provide `srcset` for responsive images
- Use modern formats (WebP, AVIF) with fallbacks

```html
<picture>
    <source srcset="image.avif" type="image/avif">
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

---

## 12. Complete File Structure

```
project/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── base.css
│   ├── sections.css
│   ├── typography.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── parallax.js
│   └── scroll-animator.js
└── assets/
    ├── images/
    └── fonts/
```

---

## Summary: Quick Reference

| Property | Value |
|----------|-------|
| Section height | `100vh` (min `600px`) |
| Content max-width | `1200px` - `1600px` |
| Content padding (horizontal) | `24px` → `80px` (responsive) |
| Content padding (vertical) | `48px` → `120px` (responsive) |
| Base spacing unit | `8px` |
| Hero font size | `3.5rem` → `8rem` (responsive) |
| Body font size | `1rem` → `1.125rem` (responsive) |
| Body max-width | `65ch` |
| Parallax background speed | `0.3` - `0.5` |
| Parallax foreground speed | `-0.1` - `-0.3` |
| Animation duration | `800ms` - `1200ms` |
| Animation easing | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Stagger delay | `100ms` per element |
