import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Key } from 'protractor';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  Uid: any ;
  name: any;

  constructor(
      private http: HttpClient,
      private router: Router
  ) {
    /*
        this.token = localStorage.getItem('token');
        var token1 = this.token;

        var decoded = jwt_decode(token1);
        console.log(decoded);

        this.nome = this.decoded;
       // var givenName = decoded['firstname'];


     */
  }




  onCreate(){
    this.router.navigateByUrl('/create-party');
  }

  /* onCreate_1() {
     // Do this on service. But for this demo lets do here
     this.token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer ' + token
    // });

   //  this.http.post(`http://localhost/auth_app/api/dashboard.php`, 'body', { headers }).subscribe(console.log);
   }*/

  ionViewDidEnter(){
    var token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    console.log(decoded);

    this.name=decoded['firstname'];
    this.Uid=decoded['user_id'];
  }

}



