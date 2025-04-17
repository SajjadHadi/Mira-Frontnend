import { Component, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormComponent } from '../../components/form/form.component';
import { LoginRequest } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    FormComponent
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginConfig = {
    title: 'Login',
    description: "Enter your credentials to login to your account. If you're a new user please create a new account in the sign up page",
    fields: [
      {
        name: 'username',
        label: 'Username',
        type: 'text',
        icon: 'pi-at',
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
    this.authService.login(data).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
    });
  }
}
