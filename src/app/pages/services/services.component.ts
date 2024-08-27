import { Component } from '@angular/core';
import { ServicesComComponent } from '../../components/services-com/services-com.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServicesComComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
