import { Component } from '@angular/core';
import { AboutUsComComponent } from '../../components/about-us/about-us.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutUsComComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
