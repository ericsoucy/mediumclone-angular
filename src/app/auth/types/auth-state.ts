import { BackendErrors } from 'src/app/shared/types/backend-errors';
import { CurrentUser } from 'src/app/shared/types/current-user';

export interface AuthState {
  isSubmitting: boolean;
  currentUser: CurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrors | null;
}
