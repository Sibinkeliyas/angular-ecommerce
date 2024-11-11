export interface ILoginApiResponse {
  id: string;
  username: string;
  email: string;
  access_token: string;
}

export class LoginModel {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}
