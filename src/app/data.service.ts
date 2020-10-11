import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  async getData () {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/data.json').subscribe((data) => {
        console.log (data);
        resolve(data);
      });
    });
  }

  async getUser () {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/user.json').subscribe((data) => {
        console.log (data);
        resolve(data);
      });
    });
  }
}
