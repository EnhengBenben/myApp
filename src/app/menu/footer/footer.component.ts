import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  footers: object;
  constructor() { }

  ngOnInit() {
    this.footers = new Footers(1, '我是页脚');
  }
}
export class Footers {
  constructor(public id: number,
              public name: string) {
  }
}
