import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuComponent } from '../../components/sidebarMenu/sidebarMenu.component';

@Component({
  selector: 'app-default',
  imports: [
    RouterOutlet,
    SidebarMenuComponent
  ],
  templateUrl: './default.component.html',
})
export class DefaultComponent {

}
