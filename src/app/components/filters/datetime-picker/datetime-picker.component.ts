import {Component, OnInit} from '@angular/core';
import {Output, EventEmitter} from "@angular/core";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DateSelection} from "../../../model/dateSelection";

import {IDateSelection} from "../../../model/Interface/IDateSelection";
import { endOfTomorrow } from 'date-fns';
import { endOfYesterday } from 'date-fns';

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
  tempSelectedDay = new Date();


  startDate!: Date;
  endDate!: Date;



  dateFilter_prevDay() {

    let prevDay = new Date(this.selectedDay);
    let prevDayEnd = new Date(this.selectedDay)
    this.selectedDay = prevDay;
    let selectedDayEnd = new Date(this.selectedDay.getDate() +1 );
    prevDay.setDate(this.selectedDay.getDate());
    this.onRangeSelected.emit(DateSelection.of(
      prevDay.setDate(this.selectedDay.getDate() - 1),
      prevDayEnd.getTime()));

  }

  dateFilter_nextDay() {
    const maxDate = new Date();
    if (this.selectedDay >= maxDate) {
      return;
    }
    let nextDay = new Date(this.selectedDay);

    nextDay.setDate(this.selectedDay.getDate()+1);


    this.onRangeSelected.emit({
      dateRangeEnd: nextDay.getTime(),
      dateRangeStart: nextDay.setDate(this.selectedDay.getDate() +1),
    });

    this.selectedDay = nextDay;

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


  ngOnInit(): void {
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
}



// leave it for now commented______________Temp Archive_______________________
// todaySearch = new Date();
// yesterdaySearch = new Date();
// lastWeekSearch = new Date();
// lastMonthSearch = new Date();
// todaySearch = new Date();
// yesterdaySearch = new Date().setDate(this.selectedDay.getDate() - 1 )  ;
// lastWeekSearch = new Date().setDate(this.selectedDay.getDate() - 7 );
// lastMonthSearch = new Date().setMonth(this.selectedDay.getMonth() - 1);
//____________________________________________________________________________
