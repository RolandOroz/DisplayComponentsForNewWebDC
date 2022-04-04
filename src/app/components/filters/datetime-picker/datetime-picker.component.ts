import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DateSelection} from "../../../model/dateSelection";
import {IDateSelection} from "../../../model/Interface/IDateSelection";
import {addDays, startOfDay, subDays, subMonths, subWeeks} from 'date-fns';


//date fns js date library if used____as alternative to moment js

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css'],
})


export class DatetimePickerComponent implements OnInit {

  collapsed!: boolean;


  selectedDay = startOfDay(new Date());
  startDate = new Date(new Date().setHours(0,0,0,0));
  endDate = new Date(new Date().setHours(0,0,0,0));

  constructor() {
  }

  @Output() onRangeSelected = new EventEmitter<IDateSelection>();

  dateFilter_prevDay() {
    let prevDay = startOfDay(this.selectedDay);
    let prevDayEnd = startOfDay(prevDay);
    this.selectedDay = prevDay;
    prevDay.setDate(this.selectedDay.getDate()-1);
    this.onRangeSelected.emit(DateSelection.of(
      prevDay.setDate(this.selectedDay.getDate()),
      prevDayEnd.getTime()));
  }

  dateFilter_nextDay() {
    const maxDate = startOfDay(new Date());
    if (this.selectedDay >= maxDate) {
      return;
    }
    let nextDay = startOfDay(this.selectedDay);
    let nextDayEnd = addDays((nextDay),2);
    this.selectedDay = nextDay;
    nextDay.setDate(this.selectedDay.getDate()+1);
    this.onRangeSelected.emit(DateSelection.of(
      nextDay.setDate(this.selectedDay.getDate()),
      nextDayEnd.getTime()));
  }

  addDateEvent(type: string, input: MatDatepickerInputEvent<unknown, unknown | null>) {
    let singleDate = startOfDay(this.selectedDay);
    let tempSingleDate = new Date(this.selectedDay);
    let singleDateEnd = singleDate.setDate(tempSingleDate.getDate()+1);
    singleDate.setDate(this.selectedDay.getDate())
    this.onRangeSelected.emit(DateSelection.of(
      singleDate.getTime(),
      singleDateEnd));
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  startRangeChange(event: MatDatepickerInputEvent<any>) {
    this.startDate = event.value;
    this.endDate = event.value;
    this.onRangeSelected.emit(DateSelection.of(
      this.startDate.getTime(),
      this.endDate.getTime()));
  }

  endRangeChange(event: MatDatepickerInputEvent<any>) {
    this.endDate = addDays((event.value),1);
    if (this.startDate != null && this.endDate != null) {
      this.onRangeSelected.emit(DateSelection.of(
        this.startDate.getTime(),
        this.endDate.getTime()));
    }
  }

  today() {
    let today = startOfDay(new Date());
    let todayEnd = addDays((today), 1);
    this.selectedDay = today;
    this.onRangeSelected.emit(DateSelection.of(today.getTime(), todayEnd.getTime()));
  }

  yesterday() {
    let yesterday = subDays(new Date(), 1).setHours(0,0,0,0);
    let tempYesterday = subDays(new Date(), 1);
    let yesterdayEnd = new Date(new Date().setHours(0,0,0,0));
    this.selectedDay = tempYesterday;
    this.onRangeSelected.emit(DateSelection.of(yesterday, yesterdayEnd.getTime()));
  }

  lastWeek() {
    let lastWeek = startOfDay(new Date());
    let lastWeekEnd = addDays((new Date()),1);
    lastWeekEnd = startOfDay(lastWeekEnd);
    this.selectedDay = subWeeks(new Date(),1);
    lastWeek.setDate(this.selectedDay.getDate());


    this.onRangeSelected.emit(DateSelection.of(
      lastWeek.getTime(),
      lastWeekEnd.getTime()));
  }

  lastMonth() {
    let lastMonth = subMonths(new Date(),1 ).setHours(0,0,0,0);
    let lastMonthEnd = addDays((new Date()),1);
    lastMonthEnd = startOfDay(lastMonthEnd);
    this.onRangeSelected.emit(DateSelection.of(
      lastMonth,
      lastMonthEnd.getTime()));
  }

  ngOnInit(): void {
  }
}


