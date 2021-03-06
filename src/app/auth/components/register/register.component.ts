import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrors } from 'src/app/shared/types/backend-errors';
import { registerAction } from '../../store/actions/register.action';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/selectors';
import { RegisterRequest } from '../../types/register-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrors | null>;

  constructor(private formBuilder: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.initializeValues();
  }
  onSubmit(): void {
    console.log('onSubmit', this.form.value, this.form.valid);
    const request: RegisterRequest = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.select(selectIsSubmitting);
    console.log('initializeValues', this.isSubmitting$);
    this.backendErrors$ = this.store.select(selectValidationErrors);
  }
}
