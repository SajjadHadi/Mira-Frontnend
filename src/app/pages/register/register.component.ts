import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormComponent } from '../../components/form/form.component';
import { Register } from '../../interfaces/form';

@Component({
  selector: 'app-register',
  imports: [
    FormComponent
  ],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerConfig = {
    title: 'Register',
    description: "Enter your credentials to create a new account. If you've already created and account please go to the login page.",
    fields: [
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        icon: 'pi-envelope',
        validators: [Validators.required, Validators.email, Validators.maxLength(255)]
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        icon: 'pi-key',
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(255)]
      },
      {
        name: 'terms',
        label: 'Agree with terms and conditions',
        type: 'checkbox',
        validators: [Validators.requiredTrue]
      },
    ],
    submitLabel: 'Register'
  }

  async onRegister(user: Register) {
    console.log(user);
  }
}
