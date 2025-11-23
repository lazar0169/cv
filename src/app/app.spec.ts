import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PortfolioService } from './services/portfolio';
import { of } from 'rxjs';
import { Portfolio } from './models/portfolio.model';

describe('App', () => {
  const mockPortfolioData: Portfolio = {
    profile: {
      name: 'Test User',
      role: 'Test Role',
      image: 'test.jpg',
      summary: 'Test summary'
    },
    contact: [],
    skills: [],
    experience: [],
    projects: [],
    education: [],
    languages: [],
    leadership: {
      approach: [],
      codeQuality: [],
      communication: []
    },
    footer: {
      text: 'Test footer'
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        {
          provide: PortfolioService,
          useValue: {
            getPortfolioData: () => of(mockPortfolioData)
          }
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should load and display portfolio data', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const app = fixture.componentInstance;
    expect(app.portfolioData()).toBeTruthy();
    expect(app.portfolioData()?.profile.name).toBe('Test User');
  });
});
