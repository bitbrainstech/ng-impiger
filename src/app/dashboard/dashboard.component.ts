import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  type: string;
  data: any[];
  options: any;
  cards: any[];

  dashboard : any;

  constructor(dataService: DataService) {
    this.dashboard = dataService.getData().dashboard;
    this.type = 'line';
    this.data = [
      [
        {
          labels: ["Today", "Yesterday", "2 Days Ago", "3 Days Ago", "4 Days Ago", "5 Days Ago", "7 Days Ago"],
          datasets: [
            {label: "Missed", data: [4, 11, 21, 28, 36, 41, 62]},
            {label: "Taken", data: [3, 4, 3, 0, 7, 9, 5]}
          ],
          token: 'DAILY'
        },
        {
          labels: ["This Week", "Last Week", "2 Weeks Ago", "3 Weeks Ago", "4 Weeks Ago", "5 Weeks Ago", "7 Weeks Ago"],
          datasets: [
            {label: "Missed", data: [114, 132, 125, 140, 152, 165, 171]},
            {label: "Taken", data: [19, 35, 51, 70, 77, 69, 75]}
          ],
          token: 'WEEKLY'
        },
        {
          labels: ["This Month", "Last Month", "2 Months Ago", "3 Months Ago", "4 Months Ago", "5 Months Ago", "7 Months Ago"],
          datasets: [
            {label: "Missed", data: [404, 411, 421, 428, 436, 441, 462]},
            {label: "Taken", data: [114, 132, 125, 140, 152, 165, 171]}
          ],
          token: 'MONTHLY'
        }
      ],
      [
        {
          labels: ["Today", "Yesterday", "2 Days Ago", "3 Days Ago", "4 Days Ago", "5 Days Ago", "7 Days Ago"],
          datasets: [
            {label: "Adherence", data: [40, 28, 5, 0, 10, 17, 9]},
            {label: "Company Target %", data: [100, 100, 100, 100, 100, 100, 100]}
          ],
          token: 'DAILY'
        },
        {
          labels: ["This Week", "Last Week", "2 Weeks Ago", "3 Weeks Ago", "4 Weeks Ago", "5 Weeks Ago", "7 Weeks Ago"],
          datasets: [
            {label: "Adherence", data: [34, 28, 15, 7, 10, 21, 9]},
            {label: "Company Target %", data: [100, 100, 100, 100, 100, 100, 100]}
          ],
          token: 'WEEKLY'
        },
        {
          labels: ["This Month", "Last Month", "2 Months Ago", "3 Months Ago", "4 Months Ago", "5 Months Ago", "7 Months Ago"],
          datasets: [
            {label: "Adherence", data: [44, 28, 5, 3, 22, 17, 19]},
            {label: "Company Target %", data: [100, 100, 100, 100, 100, 100, 100]}
          ],
          token: 'MONTHLY'
        }
      ]
    ];
    this.options = {
      responsive: true,
      maintainAspectRatio: false
    };
    
   }

  ngOnInit(): void {
  }

}
