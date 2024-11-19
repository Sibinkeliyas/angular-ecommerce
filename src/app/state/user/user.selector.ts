import { IInitialState } from './user.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUserState = createFeatureSelector<IInitialState>('user');

export const selectUserProfile = createSelector(
  selectUserState,
  (state) => state.profile
);

export const userLoginStatus = createSelector(
  selectUserState,
  (state) => state.isLoggedIn
);
