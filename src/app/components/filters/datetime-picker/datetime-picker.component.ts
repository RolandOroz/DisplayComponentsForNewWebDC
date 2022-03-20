import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";
import {FormControl} from "@angular/forms";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css'],

})
export class DatetimePickerComponentPage{

  collapsed: boolean | undefined;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  todayISOString : string = new Date().toISOString();

  events: string[] = [];


  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${event.value}`);
  }

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
