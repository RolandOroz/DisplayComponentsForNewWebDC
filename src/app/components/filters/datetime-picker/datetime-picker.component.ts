import {Component, OnInit} from '@angular/core';
import { DatePickerDataService } from "../../../services/date-picker-data.service";
import { Output, EventEmitter } from "@angular/core";
import { MatDatepicker, MatDatepickerInputEvent } from "@angular/material/datepicker";
import { Moment } from "moment/moment";
import * as moment from "moment/moment";

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css'],

})

export class DatetimePickerComponentPage implements OnInit{

  private date: any;
  private dates: any;
  datesInput: string[] = [];
  constructor(private datePickerDataService:DatePickerDataService) {
  }

  @Output() newItemEvent = new EventEmitter<Date>();
  @Output() newDateEvent = new EventEmitter<number>();
  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }

  collapsed: boolean | undefined;


// formated dates with moment.js (EPOCH)
  dateDayPickerData = new Date();
  dateRangePickerDataArr: any[] = [];
  dateRangePickerDataStart = new Date().toLocaleDateString();
  dateRangePickerDataEnd = new Date().toLocaleDateString();

  pickerChange: Date = new Date();


  selectedDay = new Date();
  startDate = new Date().toLocaleDateString();
  endDate = new Date().toLocaleDateString();

  todaySearch = new Date();
  yesterdaySearch= "date -1";
  lastWeekSearch = "date -7";
  lastMonthSearch = "date -Month";


  addNewDate(value: MatDatepicker<any>) {
  this.newDateEvent.emit(this.dateFormat);

  }


  dateFilter_prevDay() {
    let prevDay = new Date(this.dateDayPickerData);
    prevDay.setDate(this.dateDayPickerData.getDate()-1);
    this.dateDayPickerData = prevDay;
  }

  dateFilter_nextDay() {
    const maxDate = new Date();
    let nextDay = new Date(this.dateDayPickerData);
    nextDay.setDate(this.dateDayPickerData.getDate()+1);
    this.dateDayPickerData = nextDay;
    if(this.dateDayPickerData >= maxDate){
      this.dateDayPickerData = maxDate;
    }
  }
  timestampToMoment(value: number): Moment {
    return moment(value * 1000);
  }
  dateChange($event: MatDatepickerInputEvent<unknown, unknown | null>) {
    this.dateDayPickerData = this.selectedDay;
    this.pickerData = this.selectedDay;
    this.newItemEvent.emit(this.pickerData);
    this.newDateEvent.emit(this.dateFormat);
    this.dateFormat = this.pickerData;
    console.log(this.startDate);
  }

  addDateEvent(type: string, dinput: MatDatepickerInputEvent<unknown, unknown | null>) {
    this.datesInput.push(`${dinput.value}`);
    this.date = new Date(this.datesInput[0].toString());
    this.selectedDay = new Date(this.datesInput[0].toString());
    this.dates = moment(this.date, 'YYYY-MM-DD').toString();
    console.log(this.datesInput);
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    this.startDate = (`${dateRangeStart.value}`);
    this.endDate = (`${dateRangeEnd.value}`);
    this.dateRangePickerDataArr.push(`${dateRangeStart.value}`,`${dateRangeEnd.value}`);
    this.dateRangePickerDataStart = (`${dateRangeStart.value}`);
    this.dateRangePickerDataEnd = (`${dateRangeEnd.value}`);
  }
  pickerData = this.dateDayPickerData;
  dateFormat:any;

  ngOnInit(): void {
    this.datePickerDataService.setPickerData(this.pickerData);
  }

}
