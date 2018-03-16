import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}
   ENDPOINT: string = environment.ENDPOINT;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded',
                                'Authorization': JSON.parse(window.localStorage.token).token}),
    Accept: 'application/json',
  };

  getApps() {
    const url = this.ENDPOINT +  'apps';
    return this.http.get(url, this.httpOptions)
      .toPromise();
  }
  getApp(id) {
    const url = this.ENDPOINT +  'apps/' + id;
    return this.http.get(url, this.httpOptions)
      .toPromise();
  }
}
