import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import miraTheme from '../theme';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: miraTheme,
        options: {
          darkModeSelector: true
        }
      }
    }), provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)]
};
