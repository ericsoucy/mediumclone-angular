import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from '../../store/actions';
import { isSubmittingSelector } from '../../store/selectors';

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

  constructor(private formBuilder: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.initializeValues();
  }
  onSubmit(): void {
    console.log('onSubmit', this.form.value, this.form.valid);
    this.store.dispatch(registerAction(this.form.value));
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log('initializeValues', this.isSubmitting$);
  }
}
