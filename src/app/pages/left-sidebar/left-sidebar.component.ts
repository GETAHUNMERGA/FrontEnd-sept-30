import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css',
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    // {
    //   routeLink: 'dashboard',
    //   icon: 'fal fa-home',
    //   label: 'Dashboard',
    // },
    {
      routeLink: 'books',
      icon: 'fal fa-box-open',
      label: 'Books',
    },
    {
      routeLink:'rent',
      icon:'fal fa-box-open',
      label:'Rent'
    },
    {
      routeLink: 'pages',
      icon: 'fal fa-file',
      label: 'Pages',
    },
    {
      routeLink: '',
      icon: 'fal fa-file',
      label: 'Rented Lists',
    },
    
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
