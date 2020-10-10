import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data : any = {
    dashboard : { 
      name : 'Dashboard',
      cards : [
        {
          title:'Total Patients', 
          total: 63,
          color: 'card-header-purple',
          content: [
            {title: 'Male', value: 34, percentage: true},
            {title: 'Female', value: 29, percentage: true},
            {title: 'Unknown', value: 0, percentage: true},
            {title: 'New This Week', value: 6, percentage: false}
          ]
        },
        {
          title:'Dosage Summary', 
          total: 508, 
          color:'card-header-red',
          content: [
            {title: 'Captured', value: 94, percentage: true},
            {title: 'Missed', value: 414, percentage: true},
            {title: 'Missed Last Week', value: 257, percentage: false}
          ]
        },
        {
          title:'Dosage Captured', 
          total: 94, 
          color:'card-header-blue',
          content: [
            {title: 'Scanned', value: 21, percentage: true},
            {title: 'Manual', value: 73, percentage: true},
            {title: 'Captured Last Week', value: 71, percentage: false}
          ]
        },
        {
          title:'Doses Non Complaint', 
          total: 415, 
          color:'card-header-green',
          content: [
            {title: 'Late', value: 1, percentage: true},
            {title: 'Overdose', value: 0, percentage: true},
            {title: 'Underdose', value: 0, percentage: true},
            {title: 'Missed', value: 414, percentage: true}
          ]
        },
        {
          title:'Doses Distributed', 
          total: 187, 
          color:'card-header-grey',
          content: [
            {title: 'Avg Per Person', value: 5.7, percentage: false},
            {title: 'Avg Per Trial', value: 11, percentage: false},
            {title: 'Distributed Last Week', value: 92, percentage: false},
          ]
        },
      ]
    }
  };

  constructor() { }

  getData () {
    return this.data;
  }
  
}
