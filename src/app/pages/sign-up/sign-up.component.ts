import { Component } from '@angular/core';
import { SignUpComComponent } from '../../components/sign-up-com/sign-up-com.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SignUpComComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
