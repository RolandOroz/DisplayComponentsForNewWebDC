import { Component, OnInit } from '@angular/core';
import { DateSelection} from "../../model/dateSelection";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  dateSelection = new DateSelection(parseInt(new Date().toDateString()), parseInt(new Date().toDateString()));

  constructor() { }

  ngOnInit(): void {
  }

  datePickerData(value: DateSelection) {
   this.dateSelection.dateRangeStart = value.dateRangeStart;
   this.dateSelection.dateRangeEnd = value.dateRangeEnd;
  }
}
