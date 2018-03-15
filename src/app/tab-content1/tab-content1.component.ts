import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tab-content1',
  templateUrl: './tab-content1.component.html',
  styleUrls: ['./tab-content1.component.css']
})
export class TabContent1Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('app-tab-content1 init')
  }

  ngOnDestroy() {
    console.log('app-tab-content1 destroy')
  }
}
