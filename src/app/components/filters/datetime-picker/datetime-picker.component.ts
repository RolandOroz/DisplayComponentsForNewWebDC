import {Component, OnInit} from '@angular/core';
import {Output, EventEmitter} from "@angular/core";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DatePickerData} from "../../../model/datePickerData";

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css'],

})

export class DatetimePickerComponentPage implements OnInit {


  constructor() {
  }
@Output() public greetEvent = new EventEmitter<DatePickerData>();
nameC = 'emitFromChild';
   @Output() onRangeSelected = new EventEmitter<DatePickerData>();
  //pošlji datepickerData
   @Output() onRangeSelected_2 = new EventEmitter<DatePickerData>();
  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }

  collapsed: boolean | undefined;

  // dateRangePickerDataArr: any[] = [];
  dateRangePickerDataStart = new Date().toLocaleDateString();
  dateRangePickerDataEnd = new Date().toLocaleDateString();
  datesInput: string[] = [];

  dateSelection = {
    'start': Date(),
    'end': Date()
  }

  selectedDay = new Date();

  // todaySearch = new Date();
  // yesterdaySearch = new Date();
  // lastWeekSearch = new Date();
  // lastMonthSearch = new Date();
  todaySearch = new Date();
  yesterdaySearch = new Date().setDate(this.selectedDay.getDate() - 1 )  ;
  lastWeekSearch = new Date().setDate(this.selectedDay.getDate() - 7 );
  lastMonthSearch = new Date().setMonth(this.selectedDay.getMonth() - 1);


  private dateRangeStart: any;
  private dateRangeEnd: any;



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
    this.onRangeSelected.emit({
      dateRangeStart: this.selectedDay.getTime(),
      dateRangeEnd: this.selectedDay.getTime()});
    // this.onRangeSelected_2.emit({
    //   start: parseInt(this.dateRangePickerDataStart),
    //   end: parseInt(this.dateRangePickerDataEnd)});
    this.dateRangePickerDataStart = this.dateRangeStart;
    this.dateRangePickerDataEnd = this.dateRangeEnd;


  console.log(this.dateRangeStart)
  }
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    // this.dateRangePickerDataArr.push(`${dateRangeStart.value}`, `${dateRangeEnd.value}`);

     this.onRangeSelected_2.emit({
       dateRangeStart: parseInt( `${dateRangeStart.value}`),
       dateRangeEnd: parseInt(`${dateRangeEnd.value}`)});
    console.log(`${dateRangeStart.value}`)
    console.log(`${dateRangeEnd.value}`)

  }



  // dateFormat: any;

  ngOnInit(): void {
  }

}
