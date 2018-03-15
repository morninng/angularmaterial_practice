import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tab-content2',
  templateUrl: './tab-content2.component.html',
  styleUrls: ['./tab-content2.component.css']
})
export class TabContent2Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('app-tab-content2 init')
  }

  ngOnDestroy() {
    console.log('app-tab-content2 destroy')
  }


}
