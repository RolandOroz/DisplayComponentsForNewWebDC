import {Component, OnInit} from '@angular/core';
import {DatePickerDataService} from "../../../services/date-picker-data.service";
import {Output, EventEmitter} from "@angular/core";


@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css'],

})

export class DatetimePickerComponentPage implements OnInit {

  constructor(private datePickerDataService: DatePickerDataService) {
  }

  @Output() newItemEvent = new EventEmitter<Date>();

  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }

  collapsed: boolean | undefined;


  dateDayPickerData = new Date();
  dateRangePickerDataArr: any[] = [];
  dateRangePickerDataStart = new Date().toLocaleDateString();
  dateRangePickerDataEnd = new Date().toLocaleDateString();

  pickerChange: Date = new Date();


  selectedDay = new Date();
  startDate = new Date().toLocaleDateString();
  endDate = new Date().toLocaleDateString();

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

  dateChange() {
    this.dateDayPickerData = this.selectedDay;
    this.pickerData = this.selectedDay;
    this.newItemEvent.emit(this.pickerData);

  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    this.startDate = (`${dateRangeStart.value}`);
    this.endDate = (`${dateRangeEnd.value}`);
    this.dateRangePickerDataArr.push(`${dateRangeStart.value}`, `${dateRangeEnd.value}`);
    this.dateRangePickerDataStart = (`${dateRangeStart.value}`);
    this.dateRangePickerDataEnd = (`${dateRangeEnd.value}`);
  }

  pickerData = this.dateDayPickerData;

  ngOnInit(): void {
    this.datePickerDataService.setPickerData(this.pickerData);
  }

}
