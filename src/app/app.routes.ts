import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { PlainComponent } from './layouts/plain/plain.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HistoryComponent } from './pages/history/history.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [authGuard],
    data: { authMode: 'authenticated' },
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'history',
        component: HistoryComponent
      },
    ]
  },
  {
    path: '',
    component: PlainComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [authGuard],
        data: { authMode: 'non-authenticated' },
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [authGuard],
        data: { authMode: 'non-authenticated' },
      }
    ]
  },
];
