import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponents } from './sidebar/sidebar.component';
import { HeaderComponents } from './header/header.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, SidebarComponents, HeaderComponents],
  templateUrl: './admin.component.html',
})
export class AdminLayout {}
