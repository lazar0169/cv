import { Component, Input } from '@angular/core';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  @Input() experiences: Experience[] = [];
}
