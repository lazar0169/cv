import { Component, Input } from '@angular/core';

export interface SnapshotCard {
  icon: string;
  title: string;
  value: string;
}

@Component({
  selector: 'app-snapshot',
  imports: [],
  templateUrl: './snapshot.html',
  styleUrl: './snapshot.scss',
})
export class SnapshotComponent {
  @Input() cards: SnapshotCard[] = [];
}
