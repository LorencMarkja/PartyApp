import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Key } from 'protractor';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

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

  constructor(
      private http: HttpClient,
      private router: Router
  ) { }

  ngOnInit() {}

  ionViewDidEnter(){
    var token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    console.log(decoded);

    this.name=decoded['firstname'];
    this.lastname=decoded['lastname'];
    this.username=decoded['username'];
    this.Uid=decoded['user_id'];

}}
