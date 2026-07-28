import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  form: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  submitted = false;

  submitForm(): void {
    if (
      !this.form.name.trim() ||
      !this.form.email.trim() ||
      !this.form.subject.trim() ||
      !this.form.message.trim()
    ) {
      return;
    }

    const recipient = 'hector.salvador@example.com';

    const body = [
      `Name: ${this.form.name}`,
      `Email: ${this.form.email}`,
      '',
      this.form.message,
    ].join('\n');

    const mailtoUrl =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(this.form.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    this.submitted = true;
  }
}
