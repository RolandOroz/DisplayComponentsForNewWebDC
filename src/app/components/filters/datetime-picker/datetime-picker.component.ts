import {Component, OnInit} from '@angular/core';
import {Output, EventEmitter} from "@angular/core";
import {DateRange, ExtractDateTypeFromSelection, MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DateSelection} from "../../../model/dateSelection";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";
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
    prevDay.setDate(this.selectedDay.getDate());
    this.selectedDay = prevDay;
    this.onRangeSelected.emit({
      dateRangeStart: prevDay.getTime(),
      dateRangeEnd: prevDay.setDate(this.selectedDay.getDate() - 1)
    });
  }

  dateFilter_nextDay() {
    const maxDate = new Date();
    let nextDay = new Date(this.selectedDay);
    nextDay.setDate(this.selectedDay.getDate());
    this.selectedDay = nextDay;
    this.onRangeSelected.emit({
      dateRangeStart: nextDay.getTime(),
      dateRangeEnd: nextDay.setDate(this.selectedDay.getDate() + 1)
    });
    this.selectedDay = nextDay;
    if (this.selectedDay >= maxDate) {
      this.selectedDay = maxDate;
    }
  }

  addDateEvent(type: string, input: MatDatepickerInputEvent<unknown, unknown | null>) {
    this.onRangeSelected.emit(DateSelection.of(this.selectedDay, this.selectedDay));
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
