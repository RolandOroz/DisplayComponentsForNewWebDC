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
  // @Output() onRangeSelected = new EventEmitter<Object>();
  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }

  collapsed: boolean | undefined;

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
    let prevDay = new Date(this.selectedDay);
    prevDay.setDate(this.selectedDay.getDate() - 1);
    this.selectedDay = prevDay;
  }

  dateFilter_nextDay() {
    const maxDate = new Date();
    let nextDay = new Date(this.selectedDay);
    nextDay.setDate(this.selectedDay.getDate() + 1);
    this.selectedDay = nextDay;
    if (this.selectedDay >= maxDate) {
      this.selectedDay = maxDate;
    }
  }


  addDateEvent(type: string, input: MatDatepickerInputEvent<unknown, unknown | null>) {
    this.onRangeSelected.emit(this.selectedDay );
    // // this.onRangeSelected.emit();
    // this.onRangeSelected.emit(this.selectedRangeEndDay);
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
