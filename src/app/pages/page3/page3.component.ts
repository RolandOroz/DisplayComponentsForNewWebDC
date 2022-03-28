import { Component, OnInit } from '@angular/core';
import { DatePickerData} from "../../model/datePickerData";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  myItem= new Date();
  date = new Date();



  dateSelection_2 = new DatePickerData(this.date.setDate( this.date.getTime()),
    this.date.setDate(this.date.getDate()))

  dateSelection = new DatePickerData(this.date.setDate( this.date.getTime()), this.date.setDate( this.date.getDate()));

  constructor() { }

  ngOnInit(): void {
  }



  datePickerData(value: any) {

   this.dateSelection.start = value.getTime();
   this.dateSelection.end = value.getTime() + (1000 * 60 * 60 * 24);
  }

  greet(value: any) {
    this.dateSelection_2.start = value.getTime();
    this.dateSelection_2.end = value;

}
}
