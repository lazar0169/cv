import { Component, Input } from '@angular/core';
import { Education } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  @Input() education: Education[] = [];
  @Input() languages: string[] = [];
}
