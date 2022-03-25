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

  dateSelection = new DatePickerData(this.date.setDate( this.date.getTime()), this.date.setDate( this.date.getDate()));

  constructor() { }

  ngOnInit(): void {
  }


  datePickerData(value: any) {
    // TODO make use of moment lib https://momentjs.com/
   this.dateSelection.start = value.getTime();
   this.dateSelection.end = value.getTime() + (1000 * 60 * 60 * 24);
  }

}
