import { Component, OnInit, signal, inject } from '@angular/core';
import { PortfolioService } from './services/portfolio';
import { Portfolio } from './models/portfolio.model';
import { HeroComponent } from './components/hero/hero';
import { SnapshotComponent } from './components/snapshot/snapshot';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { LeadershipComponent } from './components/leadership/leadership';
import { EducationComponent } from './components/education/education';
import { ContactComponent } from './components/contact/contact';
import { ContactModal } from './components/contact-modal/contact-modal';
import { ContactModalService } from './services/contact-modal';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    SnapshotComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    LeadershipComponent,
    EducationComponent,
    ContactComponent,
    ContactModal
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  portfolioData = signal<Portfolio | null>(null);
  contactModalService = inject(ContactModalService);

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.portfolioData.set(data);
    });
  }
}
