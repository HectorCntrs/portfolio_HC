import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  skills: string[];
}

interface Certification {
  title: string;
  organization: string;
  year?: string;
  icon: string;
  accentClass: string;
  certificateUrl?: string;
  verificationUrl?: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  readonly leftSkillGroups: SkillGroup[] = [
    {
      title: 'BACKEND',
      skills: ['Python', 'FastAPI', 'C# / .NET', 'PHP / Laravel'],
    },
    {
      title: 'FRONTEND',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Bootstrap',
      ],
    },
    {
      title: 'DATABASES',
      skills: ['SQL Server', 'MySQL', 'MariaDB'],
    },
  ];

  readonly rightSkillGroups: SkillGroup[] = [
    {
      title: 'CLOUD & DEVOPS',
      skills: ['AWS', 'Git', 'Linux / Bash'],
    },
    {
      title: 'QUALITY',
      skills: [
        'xUnit',
        'Moq',
        'Pytest',
        'BDD / Gherkin',
        'Unit Testing',
        'API Testing',
        'Postman',
      ],
    },
    {
      title: 'SECURITY',
      skills: ['JWT'],
    },
  ];

  readonly certifications: Certification[] = [
    {
      title: 'AWS Cloud Practitioner CLF-C02',
      organization: 'Amazon Web Services',
      year: '2026',
      icon: '☁',
      accentClass: 'certification-icon--aws',
      verificationUrl:
        'https://www.credly.com/badges/f19f7944-65a2-4894-abf0-7f9a5e62db4b/public_url',
    },
    {
      title: 'CCNA Introduction to Networks',
      organization: 'Cisco Networking',
      year: '2024',
      icon: '⌁',
      accentClass: 'certification-icon--ccna',
      verificationUrl:
        'https://www.credly.com/badges/d65577b2-6481-4d5c-8d88-a033bc8c0807/public_url',
    },
    {
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      organization: 'Cisco Networking',
      year: '2025',
      icon: '⌁',
      accentClass: 'certification-icon--ccna',
      verificationUrl:
        'https://www.credly.com/badges/c1f65649-1d70-400a-9238-b240525d2ea9/public_url',
    },
  ];

  openCertificate(url?: string): void {
    if (!url) {
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
