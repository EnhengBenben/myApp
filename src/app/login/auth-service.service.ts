import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class AuthServiceService {
  url = "https://www.celloud.cc/celloud-oms/login";
  httpOptions = {};
  body = '';
  constructor(private http: HttpClient, private router: Router) { }

  login (data) {
    console.log(data);
    this.body = "name=" + data.name + '&pwd=' + data.pwd;
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'}),
      Accept: 'application/json',
      params: this.body
    };
    console.log(this.httpOptions);
    return this.http.post(this.url, data, this.httpOptions).toPromise().then((response) => {
      console.log(response);
       window.localStorage.setItem("token", JSON.stringify(response));
       this.router.navigate(['/app/dashboard']);

    });
  }
}



