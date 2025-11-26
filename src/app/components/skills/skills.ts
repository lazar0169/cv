import { Component, Input } from '@angular/core';
import { SkillGroup } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  @Input() skillGroups: SkillGroup[] = [];
}
