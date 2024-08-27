import { Component } from '@angular/core';
import { ThankyouComComponent } from '../../components/thankyou/thankyou.component';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [ThankyouComComponent],
  templateUrl: './thankyou.component.html',
  styleUrl: './thankyou.component.css',
})
export class ThankyouComponent {}
