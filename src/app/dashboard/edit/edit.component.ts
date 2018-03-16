import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, NgModel} from "@angular/forms";
import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less'],
  providers: [DashboardService]
})
export class DashboardEditComponent implements OnInit {

  private editId: number;
  public formModel: FormGroup;
  private datas: {};
  constructor(private routeInfo: ActivatedRoute, private service: DashboardService) {
    this.formModel = new FormGroup({
      version: new FormControl(this.datas),
      appName: new FormControl(),
      companyId: new FormControl(),
      // type: new FormControl(),
    });
  }
  save() {
    console.log(this.formModel);
  }

  ngOnInit() {
    this.editId = this.routeInfo.snapshot.params['id'];
    this.routeInfo.params.subscribe((params: Params) => this.editId = params['id']);
    this.getLists();
  }
  getLists() {
    this.service.getApp(this.editId)
      .then(res => {
        this.datas = res['app'];
        this.formModel.setValue({
          version: res['app']['version'],
          appName: res['app']['appName'],
          companyId: res['app']['companyId'],
          // type: res['app']['type']
        });
        console.log(this.formModel.value, 666);
      });
  }

}
