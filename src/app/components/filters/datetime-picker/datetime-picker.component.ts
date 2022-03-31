import {Component, OnInit} from '@angular/core';
import {Output, EventEmitter} from "@angular/core";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DateSelection} from "../../../model/dateSelection";

import {IDateSelection} from "../../../model/Interface/IDateSelection";


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
  endDate!: Date;



  dateFilter_prevDay() {
    let prevDay = new Date(this.selectedDay);
    this.selectedDay = prevDay;

    prevDay.setDate(this.selectedDay.getDate());
    this.onRangeSelected.emit({
      dateRangeEnd: prevDay.getTime(),
      dateRangeStart: prevDay.setDate(this.selectedDay.getDate() - 1),
    });
  }

  dateFilter_nextDay() {
    const maxDate = new Date();
    let nextDay = new Date(this.selectedDay);
    this.selectedDay = nextDay;

    nextDay.setDate(this.selectedDay.getDate());


    this.onRangeSelected.emit({
      dateRangeEnd: nextDay.getTime(),
      dateRangeStart: nextDay.setDate(this.selectedDay.getDate() +1),


    });

    this.selectedDay = nextDay;
    if (this.selectedDay >= maxDate) {
      this.selectedDay = maxDate;
    }
  }

  // dateFilter_nextDay() {
  //   const maxDate = new Date();
  //   this.nextDay = this.selectedDay;
  //   this.selectedDay = this.nextDay;
  //   this.nextDay.setDate(this.selectedDay.getDate());
  //   this.selectedDay = this.nextDay;
  //
  //   this.onRangeSelected.emit({
  //     dateRangeStart:this.nextDay.setDate(this.selectedDay.getDate()),
  //     dateRangeEnd: this.nextDay.setDate(this.selectedDay.getDate()+1),
  //
  //
  //   });
  //
  //   this.selectedDay = this.nextDay;
  //   if (this.selectedDay >= maxDate) {
  //     this.selectedDay = maxDate;
  //   }
  // }

  addDateEvent(type: string, input: MatDatepickerInputEvent<unknown, unknown | null>) {
    this.onRangeSelected.emit(DateSelection.of(this.selectedDay, this.selectedDay));
    let singleDate = new Date(this.selectedDay)

    singleDate.setDate(this.selectedDay.getDate())
      this.onRangeSelected.emit({
        dateRangeStart: singleDate.getTime(),
        dateRangeEnd: singleDate.setDate(this.selectedDay.getDate() + 1)
      })
  }


  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }





  ngOnInit(): void {
  }

  startRangeChange(event: MatDatepickerInputEvent<any>) {
    this.startDate = event.value;
    this.endDate = null;
    this.onRangeSelected.emit(DateSelection.of(this.startDate, this.endDate));
  }

  endRangeChange(event: MatDatepickerInputEvent<any>) {
    this.endDate = event.value;
    if (this.startDate != null && this.endDate != null) {
      this.onRangeSelected.emit(DateSelection.of(this.startDate, this.endDate));
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
