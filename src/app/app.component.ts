import { Component, ComponentFactoryResolver } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-impiger';
  menuOpen = false;
  user: any;
  now: any;
  sidemenus: any = [
    { path: '/',          icon:'home', name: 'Home'},
    // { path: '/dashboard', icon:'dashboard', name : 'Dashbaord' },
    { path: '/settings',  icon:'settings', name : 'Settings' },
    { path: '/profile',  icon:'account_circle', name : 'Profile' }
  ];

  constructor(private dataService: DataService) {

    dataService.getUser().then((data: any) => {
     this.user = data.user;
     console.log('user', data.user);
    });
    var days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

    this.now = days[new Date().getDay()] + ', ' + months[(new Date().getMonth() + 1)] + ' ' + new Date().getDate() + ', ' + new Date().getFullYear();
  }
  onOpenMenu(): void {
    this.menuOpen = (!this.menuOpen);
  }
}
