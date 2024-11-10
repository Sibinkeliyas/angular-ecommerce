import { Component } from '@angular/core';
import { SignInComComponent } from '../../components/sign-in-com/sign-in-com.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [SignInComComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
