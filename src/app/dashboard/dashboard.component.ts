import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  type: string;
  dosageHistory: any[];
  dosageAdheranceVsTarget: any[];
  options: any;
  dashboard : any;
  selectedCompany : 'all';
  breakpointCards: any;
  breakpointCharts: any;

  constructor(private dataService: DataService) {

    dataService.getData().then((data: any) => {
      this.dosageHistory = {...data.dashboard.all.charts.dosageHistory.daily};
      this.dosageAdheranceVsTarget = {...data.dashboard.all.charts.dosageAdheranceVsTarget.daily};
      this.dashboard = data.dashboard.all;
      console.log('this.dashboard', this.dashboard);
    });

    this.type = 'line';
    this.options = {
      responsive: true,
      maintainAspectRatio: false
    };
    
  }
  ngOnChanges()	 {}

  ngOnInit(): void {
    this.onResponsive(window.innerWidth);
  }

  onResize(event) {
    this.onResponsive(event.target.innerWidth);
  }

  onResponsive(width) {
    if(width <= 650) {
      this.breakpointCards = 1;
    } else if (width > 650 &&  width <= 970) {
      this.breakpointCards = 2;
    } else if (width > 970 &&  width <= 1200) {
      this.breakpointCards = 3;
    } else if (width > 1200 &&  width <= 1600) {
      this.breakpointCards = 4;
    } else if (width > 1600) {
      this.breakpointCards = 5;
    }

    this.breakpointCharts = width <= 970 ? 1 : 2;
  }

  radioHistoryChange($event: MatRadioChange) {
    // console.log ($event.value);
    this.dosageHistory = {...this.dashboard.charts.dosageHistory[$event.value]};
  }

  radioTargetChange($event: MatRadioChange) {
    // console.log ($event.value);
    this.dosageAdheranceVsTarget = {...this.dashboard.charts.dosageAdheranceVsTarget[$event.value]};
  }

  onCompanyChange($event) {
    console.log ('onselect', $event.value);
    this.dataService.getData().then((data: any) => {
      this.dosageHistory = {...data.dashboard[$event.value].charts.dosageHistory.daily};
      this.dosageAdheranceVsTarget = {...data.dashboard[$event.value].charts.dosageAdheranceVsTarget.daily};
      this.dashboard = data.dashboard[$event.value];
    });
  }

}
