import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css'],

})
export class DatetimePickerComponentPage{

  collapsed: boolean | undefined;
  todayISOString : string = new Date().toISOString();

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  // toggleCalendar() {
  //
  // }
  // constructor(public datepipe: DatePipe){
  //   let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
  //
  // }
}
