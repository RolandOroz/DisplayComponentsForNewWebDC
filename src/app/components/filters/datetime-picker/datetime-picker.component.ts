import {Component} from '@angular/core';
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
  // serializedDate = new FormControl((new Date()).toISOString());
  pickerChange: string = new Date().toDateString();
  picker2Change: string[] = [];
  prevDay = new Date(this.pickerChange);
  todaySearch: string | undefined;
  yesterdaySearch: string | undefined;
  lastWeekSearch: string | undefined;
  lastMonthSearch: string | undefined;

  dateFilter_prevDay() {


  }

  dateFilter_nextDay() {

  }

  addPickerEvent(event: MatDatepickerInputEvent<unknown, unknown | null>) {
    this.pickerChange = (`${event.value}`);
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    this.picker2Change.push(`${dateRangeStart.value}`, `${dateRangeEnd.value}`);

  }
  // toggleCalendar() {
  //
  // }
  // constructor(public datepipe: DatePipe){
  //   let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
  //
  // }
}
