import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup, NgModel} from "@angular/forms";
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
      companyId: new FormControl()
    });
  }
  save() {
    console.log(this.formModel);
  }
  onBeforeSend($event) {
    $event.xhr.setRequestHeader('Authorization', JSON.parse(window.localStorage['token'])['token']);
    console.log($event);
    $event.formData = {
      pictureName: 'pictureName'
    };
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
