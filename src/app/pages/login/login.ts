import { Component } from '@angular/core';
import {DefaultLoginLayout} from '../../components/default-login-layout/default-login-layout';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PrimaryInputComponent} from '../../components/primary-input/primary-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayout,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

}
