import { createReducer, on } from '@ngrx/store';
import { userAuthentication, IUserProfile } from './user.actions';

export interface IInitialState {
  profile: IUserProfile | null;
  isLoggedIn: boolean;
}

const initialValue: IInitialState = {
  profile: null,
  isLoggedIn: false,
};

export const userReducer = createReducer(
  initialValue,
  on(userAuthentication, (state, { profile }) => ({
    ...state,
    profile,
    isLoggedIn: true,
  }))
);
