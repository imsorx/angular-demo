import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usr;
  pass;
  errstatus = false;
  constructor() { }

  ngOnInit() {
  }
  login(){
    if (this.usr == null || this.pass == null) {
      this.errstatus = true;
    } else {
      this.errstatus = false;
      alert('Success');
    }
  }
}