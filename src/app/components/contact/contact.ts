import { Component, Input } from '@angular/core';
import { Footer } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  @Input() footer!: Footer;
}
