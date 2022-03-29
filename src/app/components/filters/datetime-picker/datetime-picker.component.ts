import {Component, OnInit} from '@angular/core';
import {Output, EventEmitter} from "@angular/core";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DatePickerData} from "../../../model/datePickerData";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css'],
})


export class DatetimePickerComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  @Output() onRangeSelected = new EventEmitter<DatePickerData>();



  collapsed!: boolean;
  formDateRangePicker!: FormGroup;
  selectedDay = new Date();

  dateFilter_prevDay() {
    let prevDay = new Date(this.selectedDay);
    prevDay.setDate(this.selectedDay.getDate() - 1);
    this.selectedDay = prevDay;
    this.onRangeSelected.emit({
      dateRangeStart: this.selectedDay.getTime(),
      dateRangeEnd: this.selectedDay.getTime()
    });
  }

  dateFilter_nextDay() {
    const maxDate = new Date();
    let nextDay = new Date(this.selectedDay);
    nextDay.setDate(this.selectedDay.getDate() + 1);
    this.onRangeSelected.emit({
      dateRangeStart: this.selectedDay.getTime(),
      dateRangeEnd: this.selectedDay.getTime()
    });
    this.selectedDay = nextDay;
    if (this.selectedDay >= maxDate) {
      this.selectedDay = maxDate;
    }
  }

  addDateEvent(type: string, input: MatDatepickerInputEvent<unknown, unknown | null>) {
    this.onRangeSelected.emit({
      dateRangeStart: this.selectedDay.getTime(),
      dateRangeEnd: this.selectedDay.getTime()
    });
  }


  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  rangeChange() {
    this.onRangeSelected.emit({
      dateRangeStart: (this.formDateRangePicker.value.dateRange.startRange),
      dateRangeEnd: (this.formDateRangePicker.value.dateRange.endRange)
    });
  }

  ngOnInit(): void {
    this.formDateRangePicker = this.fb.group({
      dateRange: new FormGroup({
        startRange: new FormControl(),
        endRange: new FormControl()
      })
    })
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
