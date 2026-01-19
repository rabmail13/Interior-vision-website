Full-Page Scroll Solutions (with Navigation Dots)
1. @fullpage/react-fullpage ⭐ (Official)
The official React wrapper for fullPage.js — the most popular library for this pattern. npm
bashnpm install @fullpage/react-fullpage
It exposes a render-prop API with options like navigation: true for dots navigation, anchor links, and customizable scroll speed. GitHub Note: requires a commercial license for non-open-source projects. npm
2. react-full-page
A lighter, MIT-licensed alternative:
bashnpm i react-full-page
Includes built-in controls with controls={true}, custom controls support, beforeChange/afterChange callbacks, and configurable scroll duration. npm

ScrollSpy Navigation Components
3. react-scrollspy-navigation
Automatically updates navigation components based on scroll position to indicate which link is currently active in the viewport. npm
bashnpm i react-scrollspy-navigation
Just add unique IDs to your sections and wrap your navigation with the ScrollSpy component — it handles the rest. GitHub
4. react-use-scrollspy (Hook-based)
A flexible React hook approach:
bashnpm i react-use-scrollspy
Returns the active section index based on scroll position, with configurable offset. npm
5. react-ui-scrollspy
Uses data-to-scrollspy-id attributes on navigation elements to link them to sections, with automatic active class toggling. npm

Smooth Scroll + Navigation
6. react-scroll
Very popular for smooth scrolling with spy functionality:
bashnpm i react-scroll
Provides Link and Element components that facilitate seamless navigation between sections, with configurable smooth scrolling and duration. npm
7. react-scrollspy-nav
Provides smooth scrolling navigation and accounts for different React Router patterns (like hash pathnames). npm

Utility Libraries
8. Scroll-Pilot
Provides a scroll indicator that visualizes scrolling progress and offers easy navigation between sections, with options for indicator position, colors, and hover tooltips. GitHub
9. EasyScrollDots (Vanilla JS, works with React)
Allows you to quickly add anchor points throughout your page and have vertical navigational dots automatically appear on the side. GitHub

Quick Recommendation
Use CaseBest ChoiceFull-page snapping + dots@fullpage/react-fullpage or react-full-pageJust dots + scroll spyreact-scrollspy-navigationHook-based flexibilityreact-use-scrollspySmooth scroll linksreact-scroll
