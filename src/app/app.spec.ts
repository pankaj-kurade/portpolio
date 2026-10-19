import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render Pankaj’s introduction and selected projects', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Building enterprise apps.');
    expect(compiled.querySelector('.hero-intro')?.textContent).toContain('Pankaj Kurade');
    expect(compiled.querySelector('#work')?.textContent).toContain('Unity Next');
    expect(compiled.querySelector('#work')?.textContent).toContain('ELIPO');
    expect(compiled.querySelector('#work img[alt="Bio-Rad Unity logo"]')?.getAttribute('src'))
      .toBe('unity-next-biorad-logo.png');
    expect(compiled.querySelector('#work img[alt="Bio-Rad Unity logo"]')?.classList)
      .toContain('full-bleed-project-image');
    expect(compiled.querySelector('#work img[alt="ELIPO logo"]')?.getAttribute('src'))
      .toBe('elipo-logo.png');
    expect(compiled.querySelector('#work img[alt="Bajaj Finserv Insta EMI Card"]')?.getAttribute('src'))
      .toBe('insta-emi-project.png');
    expect(compiled.querySelector('#work')?.textContent).toContain('Insta EMI Card');
    expect(compiled.querySelector('#work')?.textContent).not.toContain('Renewable Energy Monitoring');
    expect(compiled.querySelectorAll('#work .project-card').length).toBe(3);
    expect(compiled.querySelector('#work a.project-source')?.getAttribute('href'))
      .toBe('https://www.bajajfinserv.in/insta-emi-card');
  });

  it('should include experience, education, and contact details', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#experience')?.textContent).toContain('Bajaj Finserv');
    expect(compiled.querySelector('#experience')?.textContent).toContain('24 Aug 2026 – Present');
    expect(compiled.querySelector('#experience')?.textContent).toContain('23 Aug 2026');
    expect(compiled.querySelector('#experience img[alt="Bajaj Finance logo"]')?.getAttribute('src'))
      .toBe('bajaj-finance-logo.png');
    expect(compiled.querySelector('#experience')?.textContent).toContain('Persistent Systems');
    expect(compiled.querySelector('#experience img[alt="Persistent Systems logo"]')?.getAttribute('src'))
      .toBe('persistent-logo.png');
    expect(compiled.querySelector('#experience img[alt="Peol Technology Pvt Ltd logo"]')?.getAttribute('src'))
      .toBe('peol-logo.png');
    expect(compiled.querySelector('#experience')?.textContent).toContain('Gogte Institute of Technology');
    expect(compiled.querySelector('a[href="Pankaj_Kurade_Angular_Developer.pdf"]')).toBeTruthy();
    expect(compiled.querySelector('#contact a[href="mailto:pankajkurade316@gmail.com"]')).toBeTruthy();
    expect(compiled.querySelector('#contact a[href="tel:+917411942021"]')).toBeTruthy();
  });
});
