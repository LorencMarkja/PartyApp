import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Key } from 'protractor';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import {PartyService} from '../services/party.service';
import {Party} from '../services/party.model';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.page.html',
  styleUrls: ['./user-area.page.scss'],
})
export class UserAreaPage implements OnInit {

  Uid: any ;
  name: any;
  lastname: any;
  username: any;
  partys: Party [];

  constructor(
      private http: HttpClient,
      private router: Router,
      private service: PartyService
  ) { }

  ngOnInit() {}

  ionViewDidEnter(){
    let token = localStorage.getItem('token');
    let decoded = jwt_decode(token);
    console.log(decoded);

    this.name = decoded.firstname;
    this.lastname = decoded.lastname;
    this.username = decoded.username;
    this.Uid = decoded.user_id;

    this.service.get(this.Uid).subscribe(response => {
      // this.partys = response;
      this.partys = response;
    });
    };

  logout(){

    localStorage.removeItem('token');
    this.router.navigateByUrl('/home');
}
  }
