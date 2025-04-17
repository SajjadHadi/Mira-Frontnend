import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { TokenService } from '../services/token.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  // Determine the mode from route data (default to 'authenticated')
  const mode = route.data?.['authMode'] || 'authenticated';
  const redirectTo = mode === 'authenticated' ? '/login' : '/';

  return tokenService.isAuthenticated$.pipe(
    take(1),
    map((isAuthenticated) => {
      if (mode === 'authenticated') {
        if (isAuthenticated) {
          return true;
        } else {
          return router.createUrlTree([redirectTo]);
        }
      } else {
        if (!isAuthenticated) {
          return true;
        } else {
          return router.createUrlTree([redirectTo]);
        }
      }
    })
  );
};
