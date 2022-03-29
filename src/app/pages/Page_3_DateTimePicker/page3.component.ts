import { Component, OnInit } from '@angular/core';
import { DatePickerData} from "../../model/datePickerData";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  dateSelection = new DatePickerData(parseInt(new Date().toDateString()), parseInt(new Date().toDateString()));

  constructor() { }

  ngOnInit(): void {
  }

  datePickerData(value: DatePickerData) {
   this.dateSelection.dateRangeStart = value.dateRangeStart;
   this.dateSelection.dateRangeEnd = value.dateRangeEnd + (1000 * 60 * 60 * 24);
  }
}
