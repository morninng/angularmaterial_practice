import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  color = 'accent';
  checked = false;
  disabled = false;


  constructor() { }

  ngOnInit() {

  }


  // https://stackoverflow.com/questions/42793095/angular2-md-slide-toggle-displays-the-wrong-value
  toggle_slide(e: any) {
    console.log('checked', e.checked);
  }
  change_slide() {
    this.checked = !this.checked;
  }

}
