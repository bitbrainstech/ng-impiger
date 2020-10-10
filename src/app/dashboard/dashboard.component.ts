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

  constructor(dataService: DataService) {
    dataService.getData().then((data: any) => {
      this.dosageHistory = {...data.dashboard.charts.dosageHistory.daily};
      this.dosageAdheranceVsTarget = {...data.dashboard.charts.dosageAdheranceVsTarget.daily};
      this.dashboard = data.dashboard;
    });

    this.type = 'line';
    this.options = {
      responsive: true,
      maintainAspectRatio: false
    };
    
   }
   ngOnChanges()	 {
   }

  ngOnInit(): void {
    
  }

  radioHistoryChange($event: MatRadioChange) {
    // console.log ($event.value);
    this.dosageHistory = {...this.dashboard.charts.dosageHistory[$event.value]};
  }

  radioTargetChange($event: MatRadioChange) {
    // console.log ($event.value);
    this.dosageAdheranceVsTarget = {...this.dashboard.charts.dosageAdheranceVsTarget[$event.value]};
  }

}
