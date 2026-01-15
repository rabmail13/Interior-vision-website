/**
 * ParallaxController
 * Handles parallax scrolling effects for section backgrounds and foregrounds
 */
export class ParallaxController {
  private sections: NodeListOf<Element>;
  private backgrounds: NodeListOf<Element>;
  private foregrounds: NodeListOf<Element>;
  private ticking: boolean = false;

  constructor() {
    this.sections = document.querySelectorAll('.section');
    this.backgrounds = document.querySelectorAll('.section-background[data-parallax]');
    this.foregrounds = document.querySelectorAll('.section-foreground[data-parallax]');

    this.bindEvents();
    // Initial update
    this.updateParallax();
  }

  private bindEvents(): void {
    window.addEventListener('scroll', () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.updateParallax();
          this.ticking = false;
        });
        this.ticking = true;
      }
    });
  }

  private updateParallax(): void {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    this.sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;
      const sectionCenter = sectionTop + (rect.height / 2);
      const viewportCenter = scrollY + (windowHeight / 2);

      // Calculate offset from center (-1 to 1 range)
      const offset = (viewportCenter - sectionCenter) / windowHeight;

      // Apply parallax to background (moves slower)
      const background = section.querySelector('.section-background[data-parallax]') as HTMLElement;
      if (background) {
        const speed = parseFloat(background.dataset.speed || '0.3');
        const yOffset = offset * windowHeight * speed;
        background.style.transform = `translateY(${yOffset}px)`;
      }

      // Apply parallax to foreground (moves faster)
      const foreground = section.querySelector('.section-foreground[data-parallax]') as HTMLElement;
      if (foreground) {
        const speed = parseFloat(foreground.dataset.speed || '-0.2');
        const yOffset = offset * windowHeight * speed;
        foreground.style.transform = `translateY(${yOffset}px)`;
      }
    });
  }

  // Public method to refresh parallax (useful after dynamic content changes)
  public refresh(): void {
    this.sections = document.querySelectorAll('.section');
    this.backgrounds = document.querySelectorAll('.section-background[data-parallax]');
    this.foregrounds = document.querySelectorAll('.section-foreground[data-parallax]');
    this.updateParallax();
  }
}
