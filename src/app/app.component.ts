import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuComponent } from './components/sidebarMenu/sidebarMenu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mira-frontend';
}
