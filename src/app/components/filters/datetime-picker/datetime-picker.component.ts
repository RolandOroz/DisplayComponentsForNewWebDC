import {Component, OnInit} from '@angular/core';
import {Output, EventEmitter} from "@angular/core";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css'],

})

export class DatetimePickerComponentPage implements OnInit {


  constructor() {
  }


  @Output() onRangeSelected = new EventEmitter<Date>();
  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }

  collapsed: boolean | undefined;

  dateDayPickerData = new Date();
  dateRangePickerDataArr: any[] = [];
  dateRangePickerDataStart = new Date().toLocaleDateString();
  dateRangePickerDataEnd = new Date().toLocaleDateString();
  datesInput: string[] = [];

  dateSelection = {
    'start': Date(),
    'end': Date()
  }

  selectedDay = new Date();


  todaySearch = new Date();
  yesterdaySearch = "date -1";
  lastWeekSearch = "date -7";
  lastMonthSearch = "date -Month";


  dateFilter_prevDay() {
    let prevDay = new Date(this.dateDayPickerData);
    prevDay.setDate(this.dateDayPickerData.getDate() - 1);
    this.dateDayPickerData = prevDay;
  }

  dateFilter_nextDay() {
    const maxDate = new Date();
    let nextDay = new Date(this.dateDayPickerData);
    nextDay.setDate(this.dateDayPickerData.getDate() + 1);
    this.dateDayPickerData = nextDay;
    if (this.dateDayPickerData >= maxDate) {
      this.dateDayPickerData = maxDate;
    }
  }


  addDateEvent(type: string, dinput: MatDatepickerInputEvent<unknown, unknown | null>) {
    this.onRangeSelected.emit(this.selectedDay);
    console.log(this.selectedDay);
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    this.dateRangePickerDataArr.push(`${dateRangeStart.value}`, `${dateRangeEnd.value}`);
    this.dateRangePickerDataStart = (`${dateRangeStart.value}`);
    this.dateRangePickerDataEnd = (`${dateRangeEnd.value}`);
  }

  dateFormat: any;

  ngOnInit(): void {

  }

}
