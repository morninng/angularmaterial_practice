import { Component, OnInit } from '@angular/core';

import { CustomSnackbarComponent } from './../custom-snackbar/custom-snackbar.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-snackbar-container',
  templateUrl: './snackbar-container.component.html',
  styleUrls: ['./snackbar-container.component.css']
})
export class SnackbarContainerComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  open_snackbar(){
    console.log('open_snackbar');

    const action = 'test';

    this.snackBar.openFromComponent(CustomSnackbarComponent,  {
      data: 'some data',
      duration: 1000
    });

  }

}
