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


  // dateSelection_2 = new DatePickerData(parseInt(new Date().toLocaleDateString()),
  //   this.date.setDate(this.date.getDate()))

  dateSelection = new DatePickerData(parseInt(new Date().toLocaleDateString()), parseInt(new Date().toLocaleDateString()));

  constructor() { }

  ngOnInit(): void {
  }


  datePickerData(value: DatePickerData) {

   this.dateSelection.dateRangeStart = value.dateRangeStart;
   this.dateSelection.dateRangeEnd = value.dateRangeEnd + (1000 * 60 * 60 * 24);
  }

  datePickerData_2(value: DatePickerData) {
    this.dateSelection.dateRangeStart = value.dateRangeStart;
    this.dateSelection.dateRangeEnd = value.dateRangeEnd
  }
}
