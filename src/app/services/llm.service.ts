import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DetectRequest, Statement, StatementsResponse, } from '../interfaces/statement';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class LlmService extends BaseService {
  private llmUrl: string;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    tokenService: TokenService,
    messageService: MessageService
  ) {
    super(tokenService, messageService);
    this.llmUrl = `${this.configService.getApiUrl()}/llm`;
  }

  detect(request: DetectRequest): Observable<Statement> {
    return this.http
      .post<Statement>(`${this.llmUrl}/predict`, request, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap(() => this.showSuccess('Prediction completed')),
        catchError(error => this.handleError(error))
      );
  }

  getStatements(page: number = 1, perPage: number = 10): Observable<StatementsResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.http
      .get<StatementsResponse>(`${this.llmUrl}/statements`, {
        headers: this.getHeaders(),
        params,
      })
      .pipe(catchError(error => this.handleError(error)));
  }
}
