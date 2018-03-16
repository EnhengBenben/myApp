import {Component, OnInit} from '@angular/core';
import {NgModel} from "@angular/forms";
import {Http} from "@angular/http";
import {AuthServiceService} from "./auth-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  auth = {
  name: '',
  pwd: ''
};
  constructor(public Service: AuthServiceService) {
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.auth.name);
    console.log(this.auth.pwd);
    this.Service.login(this.auth);
  }

}
