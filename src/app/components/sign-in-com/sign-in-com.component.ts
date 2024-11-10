import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in-com',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './sign-in-com.component.html',
  styleUrl: './sign-in-com.component.css',
})
export class SignInComComponent {
  router = inject(Router);

  userName: string = '';
  password: string = '';

  onRegisterRedirect() {
    this.router && this.router?.navigate(['/sign-up']);
  }

  onSubmit () {
    console.log(this.userName, this.password);
    
  }
}
