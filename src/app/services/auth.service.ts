import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginRequest, LoginResponse, RegisterRequest, User } from '../interfaces/auth';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  private readonly authUrl;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    tokenService: TokenService,
    messageService: MessageService
  ) {
    super(tokenService, messageService);
    this.authUrl = `${this.configService.getApiUrl()}/auth`;
  }

  register(user: RegisterRequest): Observable<User> {
    return this.http.post<User>(`${this.authUrl}/register`, user).pipe(
      tap(() => this.showSuccess('Registration successful')),
      catchError(error => this.handleError(error))
    );
  }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authUrl}/login`, data).pipe(
      tap((response) => {
        if (response?.access_token) {
          this.tokenService.setToken(response.access_token);
          this.showSuccess('Login successful');
        } else {
          throw new Error('Invalid login response: missing access_token');
        }
      }),
      catchError(error => this.handleError(error))
    );
  }

  logout(): void {
    this.tokenService.removeToken();
    this.showSuccess('Logged out');
  }
}
