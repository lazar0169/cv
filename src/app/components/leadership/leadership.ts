import { Component, Input } from '@angular/core';
import { Leadership } from '../../models/portfolio.model';

@Component({
  selector: 'app-leadership',
  imports: [],
  templateUrl: './leadership.html',
  styleUrl: './leadership.scss',
})
export class LeadershipComponent {
  @Input() leadership!: Leadership;
}
