import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private settings = {
    apiUrl: 'http://localhost:8000',
    defaultPageSize: 10,
  };

  getApiUrl(): string {
    return this.settings.apiUrl;
  }

  getDefaultPageSize(): number {
    return this.settings.defaultPageSize;
  }
}
