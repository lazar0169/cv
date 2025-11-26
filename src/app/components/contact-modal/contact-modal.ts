import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactModalService } from '../../services/contact-modal';

@Component({
  selector: 'app-contact-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-modal.html',
  styleUrl: './contact-modal.scss',
})
export class ContactModal {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private contactModalService = inject(ContactModalService);
  private cdr = inject(ChangeDetectorRef);

  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  closeModal(delay: number = 0) {
    setTimeout(() => {
      this.contactModalService.close();
      // Reset form and states after modal closes (for next time)
      setTimeout(() => {
        this.contactForm.reset();
        this.submitSuccess = false;
        this.submitError = false;
      }, 300);
    }, delay);
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;
    this.submitSuccess = false;

    const formData = {
      access_key: 'df99ee01-17ee-4e10-92e7-336c9ec011c2',
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
      subject: `Portfolio Contact from ${this.contactForm.value.name}`
    };

    try {
      const response = await this.http.post<any>('https://api.web3forms.com/submit', formData).toPromise();

      if (response.success) {
        this.submitSuccess = true;
        this.cdr.detectChanges();
        this.closeModal(2500); // Close after 2 seconds
      } else {
        this.submitError = true;
      }
    } catch (error) {
      this.submitError = true;
    } finally {
      this.isSubmitting = false;
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}
