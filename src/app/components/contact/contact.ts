import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  @Input() footer!: Footer;
}
