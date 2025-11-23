import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Leadership } from '../../models/portfolio.model';

@Component({
  selector: 'app-leadership',
  imports: [CommonModule],
  templateUrl: './leadership.html',
  styleUrl: './leadership.scss',
})
export class LeadershipComponent {
  @Input() leadership!: Leadership;
}
