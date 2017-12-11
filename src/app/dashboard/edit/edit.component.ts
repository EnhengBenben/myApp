import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class DashboardEditComponent implements OnInit {

  private editId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // this.editId = this.routeInfo.snapshot.params['id'];
    this.routeInfo.params.subscribe((params: Params) => this.editId = params['id']);
  }

}
