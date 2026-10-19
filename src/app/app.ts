import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly menuOpen = signal(false);
  protected readonly currentYear = new Date().getFullYear();

  protected readonly projects = [
    {
      number: '01',
      name: 'Unity Next',
      type: 'CLINICAL QC DATA PLATFORM',
      visualTitle: 'Clinical QC overview',
      logo: 'unity-next-biorad-logo.png',
      logoAlt: 'Bio-Rad Unity logo',
      sourceUrl: null,
      description:
        'Cloud-based clinical quality control modules for multi-code tracking, bulk layout mapping, and drill-down data visualization.',
      tags: ['Angular', 'TypeScript', 'Entity mapping', 'Role-based UI'],
      artClass: 'garden-art',
      artCaption: 'CLINICAL DATA, CONNECTED'
    },
    {
      number: '02',
      name: 'ELIPO',
      type: 'ACCOUNTS PAYABLE INVOICE MANAGEMENT',
      visualTitle: 'Invoice workflow',
      logo: 'elipo-logo.png',
      logoAlt: 'ELIPO logo',
      sourceUrl: null,
      description:
        'An invoice management solution for settlement tracking, vendor audits, tax breakdowns, and multi-level approvals.',
      tags: ['Angular', 'Invoice workflows', 'Vendor grids', 'Approvals'],
      artClass: 'form-art',
      artCaption: 'INVOICE WORKFLOWS, SIMPLIFIED'
    },
    {
      number: '03',
      name: 'Insta EMI Card',
      type: 'BAJAJ FINANCE · DIGITAL EMI EXPERIENCE',
      visualTitle: 'Insta EMI',
      logo: 'insta-emi-project.png',
      logoAlt: 'Bajaj Finserv Insta EMI Card',
      sourceUrl: 'https://www.bajajfinserv.in/insta-emi-card',
      description:
        'Bajaj Finance’s digital EMI-financing product. Its published application journey includes mobile and OTP verification, personal-detail confirmation, a pre-qualified offer, and KYC.',
      tags: ['Digital finance', 'OTP verification', 'KYC'],
      artClass: 'daylight-art',
      artCaption: 'BAJAJ FINANCE · INSTA EMI'
    }
  ];

  protected readonly skillGroups = [
    {
      name: 'Frameworks & libraries',
      items: ['Angular 14+', 'Angular Material', 'RxJS', 'NgRx', 'PrimeNG', 'Chart.js', 'Angular CLI']
    },
    {
      name: 'Web & architecture',
      items: [
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Responsive UI',
        'Reactive Forms',
        'Lazy loading',
        'Route guards',
        'REST APIs',
        'SPA development',
        'Bootstrap',
        'Flexbox',
        'Figma'
      ]
    },
    {
      name: 'Tools & practices',
      items: [
        'Git & GitHub',
        'Jasmine',
        'Karma',
        'Postman',
        'VS Code',
        'Jira',
        'Agile / Scrum',
        'Sprint planning',
        'Code reviews'
      ]
    },
    {
      name: 'AI-assisted development',
      items: ['Cursor AI', 'GitHub Copilot']
    }
  ];

  protected readonly experience = [
    {
      role: 'Angular Developer',
      company: 'Bajaj Finserv',
      logo: 'bajaj-finance-logo.png',
      dates: '24 Aug 2026 – Present',
      location: '',
      highlights: [
        'Working as an Angular Developer on Insta EMI Card, Bajaj Finance’s digital EMI-financing product.'
      ]
    },
    {
      role: 'Angular Developer',
      company: 'Persistent Systems',
      logo: 'persistent-logo.png',
      dates: 'Dec 2024 – 23 Aug 2026',
      location: 'Pune, Maharashtra',
      highlights: [
        'Build enterprise SPAs with Angular 14+, TypeScript, and RxJS, focusing on scalable UI behavior and efficient data handling.',
        'Create client dashboards with cross-functional filters and search workflows, plus reusable shared components.',
        'Profile performance, troubleshoot frontend issues, and refactor code to improve application load times.',
        'Deliver business-critical features with cross-functional Agile/Scrum teams.',
        'For Unity Next, developed multi-code tracking, bulk layout mapping, and drill-down visualization modules for clinical QC data.',
        'Built shared entity mapping for analytical data in strict three-level trees and license-aware UI and routing.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Peol Technology Pvt Ltd',
      logo: 'peol-logo.png',
      dates: '2022 – 2024',
      location: 'Bengaluru, Karnataka',
      highlights: [
        'Developed a renewable energy asset monitoring application to support purchase order workflows and operational metrics.',
        'Built analytics views to track live metrics against international green energy targets and integrated REST APIs with Chart.js dashboards.',
        'Implemented automated background reporting workflows to improve data accuracy and reduce manual errors.',
        'For ELIPO, developed invoice settlement tracking, vendor grids, audit details, tax line breakdowns, and multi-tier approval views.'
      ]
    }
  ];

  protected readonly education = [
    {
      qualification: 'B.E. in Computer Science & Engineering',
      institution: 'Gogte Institute of Technology, Belgaum',
      year: '2021'
    },
    {
      qualification: 'Diploma in Computer Science',
      institution: 'R.N. Shetty Polytechnic, Belgaum',
      year: '2018'
    },
    {
      qualification: 'Secondary School Certificate (SSC)',
      institution: 'Kendriya Vidyalaya, Belgaum',
      year: 'Completed'
    }
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
