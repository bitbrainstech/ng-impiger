import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-impiger';
  menuOpen = true;

  sidemenus: any = [
    { path: '/',          icon:'home', name: 'Home'},
    { path: '/dashboard', icon:'dashboard', name : 'Dashbaord' },
    { path: '/settings',  icon:'settings', name : 'Settings' }
  ];

  onOpenMenu(): void {
    this.menuOpen = (!this.menuOpen);
  }
}
