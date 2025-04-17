import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from 'primeng/toast';
import { SidebarMenuComponent } from './components/sidebarMenu/sidebarMenu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarMenuComponent, Toast],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'mira-frontend';
}
