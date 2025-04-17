import { Component, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormComponent } from '../../components/form/form.component';
import { LoginRequest, RegisterRequest } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  registerConfig = {
    title: 'Register',
    description:
      "Enter your credentials to create a new account. If you've already created an account, please go to the login page.",
    fields: [
      {
        name: 'username',
        label: 'Username',
        type: 'text',
        icon: 'pi-sign',
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(255)],
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        icon: 'pi-key',
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(255)],
      },
      {
        name: 'terms',
        label: 'Agree with terms and conditions',
        type: 'checkbox',
        validators: [Validators.requiredTrue],
      },
    ],
    submitLabel: 'Register',
  };

  onRegister(user: RegisterRequest) {
    this.authService.register(user).pipe(
      switchMap(() => {
        const loginData: LoginRequest = {
          username: user.username,
          password: user.password
        };
        return this.authService.login(loginData);
      })
    ).subscribe({
      next: () => {
        this.router.navigate(['/']);
      }
    });
  }
}
