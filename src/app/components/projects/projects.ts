import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
  @Input() showOnlyFeatured: boolean = false;

  get displayedProjects(): Project[] {
    return this.showOnlyFeatured
      ? this.projects.filter((p) => p.featured)
      : this.projects;
  }
}
