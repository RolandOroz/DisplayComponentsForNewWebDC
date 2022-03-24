import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  myItem= new Date();

  //TODO make model with date type

  dateSelection = {
    'start': new Date(),
    'end': new Date()
  }

  constructor() { }

  ngOnInit(): void {
  }

  // datePickerDateFormat(value: Date) {
  //
  // }


  datePickerData(value: Date) {
    // TODO make use of moment lib https://momentjs.com/
   this.dateSelection.start = value;
   this.dateSelection.end = value;

  }

}
