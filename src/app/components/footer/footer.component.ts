import { Component } from '@angular/core';

interface SocialLink {
  label: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly socialLinks: SocialLink[] = [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hector-salvador-contreras-%C3%A1lvarez-768285363/',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/HectorCntrs',
    },
  ];
}
