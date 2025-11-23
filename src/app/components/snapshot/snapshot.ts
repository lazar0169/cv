import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SnapshotCard {
  icon: string;
  title: string;
  value: string;
}

@Component({
  selector: 'app-snapshot',
  imports: [CommonModule],
  templateUrl: './snapshot.html',
  styleUrl: './snapshot.scss',
})
export class SnapshotComponent {
  @Input() cards: SnapshotCard[] = [];
}
