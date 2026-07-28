import { Component, OnDestroy, OnInit } from '@angular/core';

interface ExperienceImage {
  src: string;
  alt: string;
}

interface Experience {
  period: string;
  company: string;
  role: string;
  images: ExperienceImage[];
  achievements: string[];
  context: string;
  demoUrl?: string;
  repositoryUrl?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit, OnDestroy {
  selectedImage: ExperienceImage | null = null;

  openImage(image: ExperienceImage): void {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeImage(): void {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }

  readonly experiences: Experience[] = [
    {
      period: 'Jun 2025 — Dic 2025',
      company: 'Amber Studio',
      role: 'QA Engineer & Game Developer',
      images: [
        {
          src: 'assets/experience/VideoAmberPortOptimize.gif',
          alt: 'Demostración del proyecto desarrollado en Amber Studio',
        },
      ],
      demoUrl:
        'https://www.roblox.com/es/games/95046143340657/Hide-n-Seek-School-Chaos',
      context:
        'Multiplayer hide-and-seek minigame for Roblox Studio developed during a 6-month internship at Amber Studio.',
      achievements: [
        'Triaged and resolved incidents across 3+ active production systems by reproducing bugs, inspecting runtime logs, and validating fixes.',
        'Performed structured manual testing across PC and mobile platforms.',
        'Coordinated with stakeholders to clarify expected vs. actual system behavior.',
        'Used profiling and monitoring tools to detect process-level bottlenecks.',
        'Collaborated in Agile/Scrum sprints using Jira.',
      ],
    },
    {
      period: 'Aug 2025 — May 2026',
      company: 'LaNGIF',
      role: 'Full-Stack Engineer',
      images: [
        {
          src: 'assets/experience/panel1.png',
          alt: 'Dashboard de monitoreo y desarrollo de software',
        },
        {
          src: 'assets/experience/panel2.png',
          alt: 'Módulo de registros médicos de LaNGIF',
        },
        {
          src: 'assets/experience/panel3.png',
          alt: 'Dashboard de monitoreo y desarrollo de software',
        },
        {
          src: 'assets/experience/panel4.png',
          alt: 'Módulo de registros médicos de LaNGIF',
        },
        {
          src: 'assets/experience/panel5.png',
          alt: 'Dashboard de monitoreo y desarrollo de software',
        },
        {
          src: 'assets/experience/panel6.png',
          alt: 'Módulo de registros médicos de LaNGIF',
        },
      ],

      demoUrl: 'https://plat-geointeligente-demo.netlify.app/',
      context:
        'Full-stack web platform for epidemiological data visualization built for LaNGIF, handling 130M+ medical records across 24 years.',
      achievements: [
        'Developed and maintained the medical records CRUD module.',
        'Wrote white-box unit tests using xUnit and Moq.',
        'Performed black-box testing on the medical records frontend.',
        'Wrote and optimized SQL Server queries.',
        'Implemented Python data validation scripts.',
        'Collaborated in Agile/Scrum sprints using Jira.',
      ],
    },
  ];

  /**
   * Guarda la imagen actual de cada experiencia.
   * La posición del arreglo corresponde al índice de la experiencia.
   */
  currentImageIndexes: number[] = [];

  private autoplayInterval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.currentImageIndexes = this.experiences.map(() => 0);

    this.autoplayInterval = setInterval(() => {
      this.experiences.forEach((experience, experienceIndex) => {
        if (experience.images.length > 1) {
          this.nextImage(experienceIndex);
        }
      });
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }

    document.body.style.overflow = '';
  }

  nextImage(experienceIndex: number): void {
    const imageCount = this.experiences[experienceIndex].images.length;

    this.currentImageIndexes[experienceIndex] =
      (this.currentImageIndexes[experienceIndex] + 1) % imageCount;
  }

  previousImage(experienceIndex: number): void {
    const imageCount = this.experiences[experienceIndex].images.length;

    this.currentImageIndexes[experienceIndex] =
      (this.currentImageIndexes[experienceIndex] - 1 + imageCount) % imageCount;
  }

  selectImage(experienceIndex: number, imageIndex: number): void {
    this.currentImageIndexes[experienceIndex] = imageIndex;
  }
}
