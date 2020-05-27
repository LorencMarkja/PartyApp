import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Key } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(
      private http: HttpClient,
      private router: Router
  ) { }
  onCreate(){
    this.router.navigateByUrl('/create-party');
  }

  onCreate_1() {
    // Do this on service. But for this demo lets do here
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });

    this.http.post(`http://localhost/auth_app/api/dashboard.php`, 'body', { headers }).subscribe(console.log);
  }
}



