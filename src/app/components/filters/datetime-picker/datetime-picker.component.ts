import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DateSelection} from "../../../model/dateSelection";

import {IDateSelection} from "../../../model/Interface/IDateSelection";

//date fns js date library if used____as alternative to moment js

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css'],
})


export class DatetimePickerComponent implements OnInit {

  constructor() {
  }

  @Output() onRangeSelected = new EventEmitter<IDateSelection>();

  collapsed!: boolean;

  selectedDay = new Date();

  startDate!: Date;
  endDate!: Date | null;



  dateFilter_prevDay() {
    let prevDay = new Date(this.selectedDay);
    let prevDayEnd = new Date(this.selectedDay);
    this.selectedDay = prevDay;
    prevDay.setDate(this.selectedDay.getDate()-1);
    this.onRangeSelected.emit(DateSelection.of(
      prevDay.setDate(this.selectedDay.getDate()),
      prevDayEnd.getTime()));
  }

  dateFilter_nextDay() {
    const maxDate = new Date();
    if (this.selectedDay >= maxDate) {
      return;
    }
    let nextDay = new Date(this.selectedDay);
    let nextDayEnd = this.selectedDay.setDate(nextDay.getDate()+2);
    this.selectedDay = nextDay;
    nextDay.setDate(this.selectedDay.getDate()+1);
    this.onRangeSelected.emit(DateSelection.of(
      nextDay.setDate(this.selectedDay.getDate()),
      nextDayEnd));
  }


  addDateEvent(type: string, input: MatDatepickerInputEvent<unknown, unknown | null>) {
    let singleDate = new Date(this.selectedDay);
    let tempSingleDate = new Date(this.selectedDay);
    let singleDateEnd = singleDate.setDate(tempSingleDate.getDate()+1);
    singleDate.setDate(this.selectedDay.getDate())
    this.onRangeSelected.emit(DateSelection.of(
      singleDate.getTime(), singleDateEnd));
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  startRangeChange(event: MatDatepickerInputEvent<any>) {
    this.startDate = event.value;
    this.endDate = null;
    this.onRangeSelected.emit(DateSelection.of(this.startDate.getTime(), this.endDate.getTime()));
  }

  endRangeChange(event: MatDatepickerInputEvent<any>) {
    this.endDate = event.value;
    if (this.startDate != null && this.endDate != null) {
      this.onRangeSelected.emit(DateSelection.of(this.startDate.getTime(), this.endDate.getTime()));
    }
  }

  today() {
    this.selectedDay = new Date();
  }

  yesterday() {

    this.selectedDay = new Date(new Date().setDate(new Date().getDate() - 1));
  }

  lastWeek() {

    this.selectedDay = new Date(new Date().setDate(new Date().getDate() - 7));
  }

  lastMonth() {

    this.selectedDay = new Date(new Date().setMonth(new Date().getMonth() - 1));
  }

  ngOnInit(): void {
  }
}


