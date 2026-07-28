import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  scrollToProjects(): void {
    const projectsSection = document.getElementById('projects');

    if (!projectsSection) {
      return;
    }

    projectsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
