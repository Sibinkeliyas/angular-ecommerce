import { Component } from '@angular/core';
import { ContactComComponent } from '../../components/contact-com/contact-com.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactComComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
