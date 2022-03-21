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
  pickerChange: string = new Date().toDateString();
  picker2Change: string[] = [];
  prevDay = new Date(this.pickerChange);
  fromDate = new Date().toDateString();
  toDate = new Date().toDateString();
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
    this.fromDate = this.pickerChange;
    this.toDate = this.pickerChange;
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    this.picker2Change.push(`${dateRangeStart.value}`, `${dateRangeEnd.value}`);
    this.fromDate = (`${dateRangeStart.value}`);
    this.toDate = (`${dateRangeEnd.value}`);
  }

}
