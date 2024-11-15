import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ILoginApiResponse, LoginModel } from '../../models/auth';
import { SessionService } from '../../services/session.service';
import { AUTH } from '../../models/enum';

@Component({
  selector: 'app-sign-in-com',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './sign-in-com.component.html',
  styleUrl: './sign-in-com.component.css',
})
export class SignInComComponent {
  router = inject(Router);
  userService = inject(UserService);
  sessionService = inject(SessionService);

  login: LoginModel;

  constructor() {
    this.login = new LoginModel();
  }

  onRegisterRedirect() {
    this.router && this.router?.navigate(['/sign-up']);
  }

  onSubmit() {
    this.userService
      .userLogin(this.login.email, this.login.password)
      .subscribe((res: ILoginApiResponse) => {
        if (res)
          this.sessionService.setSession(
            AUTH.ACCESS_TOKEN_KEY,
            res.data.access_token
          );
        this.router.navigateByUrl('/');
      });
  }
}
