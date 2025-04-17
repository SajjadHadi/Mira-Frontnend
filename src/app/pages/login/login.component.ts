import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormComponent } from '../../components/form/form.component';
import { Login } from '../../interfaces/form';

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
        name: 'email',
        label: 'Email',
        type: 'email',
        icon: 'pi-envelope',
        validators: [Validators.required, Validators.email]
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

  onLogin(data: Login) {
    console.log(data);
  }
}
