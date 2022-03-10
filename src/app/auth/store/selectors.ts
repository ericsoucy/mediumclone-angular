import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../types/auth-state';

export const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
);
