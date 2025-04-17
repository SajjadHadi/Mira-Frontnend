import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-sidebar-menu',
  imports: [MenuModule, BadgeModule, RippleModule, AvatarModule, NgIf, RouterLink, LogoComponent],
  templateUrl: './sidebarMenu.component.html',
})
export class SidebarMenuComponent {
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
          }
        ]
      },
      {
        separator: true
      }
    ];
  }
}
