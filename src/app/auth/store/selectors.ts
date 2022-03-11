import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../types/auth-state';

export const selectAuthFeature = createFeatureSelector<AuthState>('auth');

export const selectIsSubmitting = createSelector(
  selectAuthFeature,
  (authState: AuthState) => authState.isSubmitting
);

export const selectValidationErrors = createSelector(
  selectAuthFeature,
  (authState: AuthState) => authState.validationErrors
);
