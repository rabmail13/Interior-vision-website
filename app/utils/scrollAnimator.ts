/**
 * ScrollAnimator
 * Handles scroll-triggered animations using Intersection Observer
 */
export class ScrollAnimator {
  private animatedElements: NodeListOf<Element>;
  private observer: IntersectionObserver;

  constructor() {
    this.animatedElements = document.querySelectorAll('[data-animate]');
    this.observer = this.setupObserver();
    this.observeElements();
  }

  private setupObserver(): IntersectionObserver {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Trigger slightly before fully in view
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
          entry.target.classList.add('is-visible');

          // Optional: Stop observing once animated (one-time animation)
          // Uncomment the next line if you want animations to trigger only once
          // this.observer.unobserve(entry.target);
        }
      });
    }, options);
  }

  private observeElements(): void {
    this.animatedElements.forEach(el => this.observer.observe(el));
  }

  // Public method to refresh observer (useful after dynamic content changes)
  public refresh(): void {
    // Disconnect existing observer
    this.observer.disconnect();

    // Re-query elements
    this.animatedElements = document.querySelectorAll('[data-animate]');

    // Re-observe
    this.observeElements();
  }

  // Public method to manually trigger animation on an element
  public animateElement(element: Element): void {
    element.classList.add('is-visible');
  }

  // Public method to reset animation on an element
  public resetElement(element: Element): void {
    element.classList.remove('is-visible');
  }

  // Clean up
  public destroy(): void {
    this.observer.disconnect();
  }
}
