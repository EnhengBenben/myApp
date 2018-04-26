import { Component, OnInit } from '@angular/core';
import {DashboardService} from "./dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  data = [];
  constructor(private service: DashboardService) {

  }

  ngOnInit() {
    this.service.getApps()
      .then(res => {
        this.data = res['list'];
      });
  }

}
