import { createAction, props } from '@ngrx/store';

export interface IUserProfile {
  _id: string;
  userName: string;
  email: string;
  password: string;
}

export const userAuthentication = createAction(
  '[user profile]',
  props<{ profile: IUserProfile; isLoggedIn: boolean }>()
);
