import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dialog-overview-inner',
  templateUrl: './dialog-overview-inner.component.html',
  styleUrls: ['./dialog-overview-inner.component.css']
})
export class DialogOverviewInnerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewInnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('constructor of DialogOverviewInnerComponent');
    console.log('injected data', data);
   }

  ngOnInit() {
    console.log('ngoninit DialogOverviewInnerComponent');
  }

  close_modal() {
    this.dialogRef.close('aaabbbcccc');
  }

}
