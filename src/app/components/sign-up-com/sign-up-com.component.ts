import { Component, inject } from '@angular/core';
import { ILoginApiResponse, RegisterModel } from '../../models/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SessionService } from '../../services/session.service';
import { AUTH } from '../../models/enum';

@Component({
  selector: 'app-sign-up-com',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up-com.component.html',
  styleUrl: './sign-up-com.component.css',
})
export class SignUpComComponent {
  router = inject(Router);
  userService = inject(UserService);
  sessionService = inject(SessionService);

  register: RegisterModel;

  constructor() {
    this.register = new RegisterModel();
  }

  onSubmit() {
    this.userService
      .userRegistration(this.register)
      .subscribe((res: ILoginApiResponse) => {
        if (res.success) {
          this.sessionService.setSession(
            AUTH.ACCESS_TOKEN_KEY,
            res.data.access_token
          );
          this.router.navigateByUrl('/');
        }
      });
  }

  onLoginRedirect() {
    this.router.navigateByUrl('/sign-in');
  }
}
