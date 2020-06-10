import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Key } from 'protractor';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import {PartyService} from '../services/party.service';
import {Party} from '../services/party.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  Uid: any;
  name: any;
  // @ts-ignore
  partys: Party[100] ;


  constructor(
      private http: HttpClient,
      private router: Router,
      private service: PartyService
  ) {
  }


  onCreate() {
    this.router.navigateByUrl('/create-party');
  }

  NavParty(id){
    this.router.navigateByUrl('/party/' + id);
  }

  ionViewDidEnter() {
    var token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    console.log(decoded);

    this.name = decoded['firstname'];
    this.Uid = decoded['user_id'];

    this.service.getAll().subscribe(response => {
      // this.partys = response;
      this.partys = response;
    });
  }

}



