import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { AuthService } from '../../services/auth.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-sidebar-menu',
  imports: [MenuModule, BadgeModule, RippleModule, AvatarModule, RouterLink, LogoComponent],
  templateUrl: './sidebarMenu.component.html',
})
export class SidebarMenuComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        separator: true
      },
      {
        label: 'Statements',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            routerLink: '/'
          },
          {
            label: 'History',
            icon: 'pi pi-list',
            routerLink: '/history'
          }
        ]
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => this.logout()
          }
        ]
      },
      {
        separator: true
      }
    ];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
