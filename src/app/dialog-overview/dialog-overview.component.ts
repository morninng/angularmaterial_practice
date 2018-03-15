import { Component, OnInit } from '@angular/core';

import { DialogOverviewInnerComponent } from './../dialog-overview-inner/dialog-overview-inner.component'

import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewInnerComponent, {
      width: '550px',
      height: '400px',
      data: { name: 'moriyama', animal: 'human' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log( result);
    });
  }


}
