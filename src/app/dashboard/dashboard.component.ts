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
  historyData: any[];
  targetData: any[];
  options: any;
  historyRadio: 'DAILY';
  targetRadio: 'DAILY';

  dashboard : any;

  constructor(dataService: DataService) {
    dataService.getData().then((data: any) => {
      this.dashboard = data.dashboard;
      this.historyData = data.dashboard.charts[0].find(dt => dt.token === 'DAILY');
      this.targetData = data.dashboard.charts[1].find(dt => dt.token === 'DAILY');
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
    // this.historyRadio = this.targetRadio = 'DAILY';
    
  }

  radioHistoryChange($event: MatRadioChange) {
    this.historyRadio =$event.value;
    let fil = this.dashboard.charts[0].find(dt => dt.token === $event.value);
    let dat: any = {
      labels: fil.labels,
      datasets: fil.datasets
    }
    this.historyData = dat;
    console.log('rafdioooo', this.dashboard.charts, $event.value);
  }

  radioTargetChange($event: MatRadioChange) {
    this.targetRadio =$event.value;
    this.targetData = this.dashboard.charts[1].find(dt => dt.token === $event.value);
  }

}
