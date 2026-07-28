import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  readonly navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  activeSection = 'home';
  menuOpen = false;

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    setTimeout(() => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');

      this.observer = new IntersectionObserver(
        (entries) => {
          const visibleSection = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (first, second) =>
                second.intersectionRatio - first.intersectionRatio,
            )[0];

          if (visibleSection) {
            this.activeSection = visibleSection.target.id;
          }
        },
        {
          rootMargin: '-25% 0px -55% 0px',
          threshold: [0.1, 0.25, 0.5],
        },
      );

      sections.forEach((section) => {
        this.observer?.observe(section);
      });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  scrollTo(sectionId: string): void {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    this.activeSection = sectionId;
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
