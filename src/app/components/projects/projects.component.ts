import { Component, OnDestroy, OnInit } from '@angular/core';

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  bullets: string[];
  images: ProjectImage[];
  technologies: string[];
  sourceUrl?: string;
  demoUrl?: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  readonly projects: Project[] = [
    {
      title: 'RefuPet Adoption System',
      bullets: [
        'Developed a full-stack pet adoption platform with 3 CRUD modules (animals, adoption requests, users) using PHP/Laravel and MySQL, including server-side validation with Laravel Form Requests and paginated list views.',
        'Built a RESTful API with Laravel Sanctum token authentication, documented via Postman collection with verified HTTP status codes (200, 201, 404, 422) across all endpoints.',
        'Enforced role-based access control (admin vs. adopter) using Spatie Permissions with middleware-protected routes and automatic dashboard redirection per role.',
        'Generated dynamic PDF reports from live database data using DomPDF and automated confirmation emails on adoption request events using Laravel Mailable and Queues.',
      ],
      images: [
        {
          src: 'assets/projects/refupet1.png',
          alt: 'Panel administrativo del sistema RefuPet',
        },
        {
          src: 'assets/projects/refupet2.png',
          alt: 'Módulo de animales de RefuPet',
        },
        {
          src: 'assets/projects/refupet3.png',
          alt: 'Solicitudes de adopción de RefuPet',
        },
        {
          src: 'assets/projects/refupet4.png',
          alt: 'Panel administrativo del sistema RefuPet',
        },
        {
          src: 'assets/projects/refupet5.png',
          alt: 'Módulo de animales de RefuPet',
        },
        {
          src: 'assets/projects/refupet6.png',
          alt: 'Solicitudes de adopción de RefuPet',
        },
        {
          src: 'assets/projects/refupet7.png',
          alt: 'Módulo de animales de RefuPet',
        },
        {
          src: 'assets/projects/refupet8.png',
          alt: 'Solicitudes de adopción de RefuPet',
        },
      ],
      technologies: [
        'PHP',
        'Laravel',
        'MySQL',
        'Laravel Sanctum',
        'DomPDF',
        'Laravel Mail',
        'Bootstrap',
        'Tailwind',
        'REST API',
        'Postman',
        'Git',
      ],
      sourceUrl: 'https://github.com/HectorCntrs/refupet.git',
      demoUrl: 'https://refupetdemo.netlify.app/',
      icon: '♣',
    },
    {
      title: 'Roberto Stickers Chatbot',
      bullets: [
        'Developed a Python-based WhatsApp automation chatbot for a real sticker business client, handling predefined response flows for frequent customer questions about products, prices, and shipping.',
        'Implemented detection logic for unanswered questions and an automatic owner notification flow delivering the customer is phone number and full message context for human follow-up.',
        'Deployed the full solution on AWS using API Gateway, Lambda, DynamoDB, and Security Groups — serverless architecture with no dedicated server required.',
        'Designed BDD/Gherkin test scenarios to validate conversation flows, fallback behavior, and notification triggers across happy paths and edge cases.',
        'Delivered to Roberto Stickers as a production-ready solution, currently handling real customer interactions via WhatsApp Business API.',
      ],
      images: [
        {
          src: 'assets/projects/stickerbot1.png',
          alt: 'Interfaz del chatbot Roberto Stickers',
        },
        {
          src: 'assets/projects/stickerbot2.png',
          alt: 'Interfaz del chatbot Roberto Stickers',
        },
      ],
      technologies: [
        'Python',
        'WhatsApp Cloud API',
        'AWS Lambda',
        'AWS API Gateway',
        'DynamoDB',
        'Security Groups',
        'BDD/Gherkin',
        'Git',
      ],
      icon: '▣',
    },
    {
      title: 'Swim Event Pro',
      bullets: [
        'Built a responsive Angular/TypeScript registration frontend with a validated form for a real public open-water swimming event, handling participant onboarding end-to-end.',
        'Integrated Google Apps Script and Google Sheets as a zero-cost serverless backend for participant data storage, processing, and automated confirmation emails with unique folio numbers.',
        'Delivered to the Consejo Supremo Indígena de Michoacán as a fully functional registration system for their public open-water swimming event, managing real participant data end-to-end.',
      ],
      images: [
        {
          src: 'assets/projects/zirahuen.jpeg',
          alt: 'Página principal de Swim Event Pro',
        },
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Google Apps Script',
        'Google Sheets',
        'Git',
      ],
      demoUrl: 'https://competenciazirahuen2026.netlify.app/',
      icon: '≋',
    },
    {
      title: 'Fake News Detector',
      bullets: [
        'Fine-tuned a multilingual BERT model using Hugging Face Transformers and PyTorch to classify news headlines as real or fake across multiple languages.',
        'Built a FastAPI REST endpoint for real-time text classification, validating request handling, response structure, prediction output, and error scenarios.',
        'Integrated OpenAI API for automatic text translation to English before model classification, preserving context and sentiment.',
        'Built a simple web interface for submitting news text and displaying instant classification results.',
      ],
      images: [
        {
          src: 'assets/projects/sensacionalismo.png',
          alt: 'Dashboard de análisis de TruthLens Detector',
        },
      ],
      technologies: [
        'Python',
        'FastAPI',
        'Hugging Face Transformers',
        'BERT',
        'PyTorch',
        'Scikit-learn',
        'Pandas',
        'OpenAI API',
        'JavaScript',
        'Git',
      ],
      sourceUrl:
        'https://colab.research.google.com/drive/1aIloYbZVoI1o8Q1A9gRkd1l27mWXe5z7?usp=sharing',
      icon: '⬡',
    },
  ];

  currentImageIndexes: number[] = [];

  selectedImage: ProjectImage | null = null;

  private autoplayInterval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.currentImageIndexes = this.projects.map(() => 0);

    this.autoplayInterval = setInterval(() => {
      this.projects.forEach((project, projectIndex) => {
        if (project.images.length > 1) {
          this.nextImage(projectIndex);
        }
      });
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextImage(projectIndex: number): void {
    const imageCount = this.projects[projectIndex]?.images.length ?? 0;

    if (imageCount <= 1) {
      return;
    }

    this.currentImageIndexes[projectIndex] =
      (this.currentImageIndexes[projectIndex] + 1) % imageCount;
  }

  previousImage(projectIndex: number): void {
    const imageCount = this.projects[projectIndex]?.images.length ?? 0;

    if (imageCount <= 1) {
      return;
    }

    this.currentImageIndexes[projectIndex] =
      (this.currentImageIndexes[projectIndex] - 1 + imageCount) % imageCount;
  }

  selectImage(projectIndex: number, imageIndex: number): void {
    this.currentImageIndexes[projectIndex] = imageIndex;
  }

  openImage(image: ProjectImage): void {
    this.selectedImage = image;
    document.body.style.overflow = '';
  }

  closeImage(): void {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }
}
