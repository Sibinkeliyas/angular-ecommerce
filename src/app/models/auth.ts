export interface ILoginApiResponse {
  success: boolean;
  data: {
    id: string;
    username: string;
    email: string;
    access_token: string;
  };
}

export class LoginModel {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}

export class RegisterModel {
  email: string;
  password: string;
  userName: string;
  constructor() {
    this.userName = '';
    this.email = '';
    this.password = '';
  }
}
