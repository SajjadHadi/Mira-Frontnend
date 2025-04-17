import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormComponent } from '../../components/form/form.component';
import { LoginRequest } from '../../interfaces/auth';

@Component({
  selector: 'app-login',
  imports: [
    FormComponent
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  loginConfig = {
    title: 'Login',
    description: "Enter your credentials to login to your account. If you're a new user please create a new account in the sign up page",
    fields: [
      {
        name: 'username',
        label: 'Username',
        type: 'text',
        icon: 'pi-sign',
        validators: [Validators.required, Validators.minLength(4), Validators.maxLength(255)]
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        icon: 'pi-key',
        validators: [Validators.required]
      },
    ],
    submitLabel: 'Login'
  }

  onLogin(data: LoginRequest) {
    console.log(data);
  }
}
