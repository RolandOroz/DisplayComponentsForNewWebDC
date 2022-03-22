import {Component, OnInit} from '@angular/core';
// import {FormControl} from "@angular/forms";
// import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css'],

})

export class DatetimePickerComponentPage implements OnInit{



  collapsed: boolean | undefined;


  dateDayPickerData = new Date();
  dateRangePickerDataArr: any[] = [];
  dateRangePickerDataStart = new Date().toLocaleDateString();
  dateRangePickerDataEnd = new Date().toLocaleDateString();

  pickerChange: Date = new Date();


  selectedDay = new Date();
  startDate = new Date().toDateString();
  endDate = new Date().toDateString();

  todaySearch: string | undefined;
  yesterdaySearch: string | undefined;
  lastWeekSearch: string | undefined;
  lastMonthSearch: string | undefined;

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

  // addPickerEvent(event: MatDatepickerInputEvent<unknown, unknown | null>) {
  //   this.pickerChange = (`${event.value}`);
  //   this.fromDate = this.pickerChange;
  //   this.toDate = this.pickerChange;
  // }

  displayChange() {

    this.dateDayPickerData = this.selectedDay;

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

  ngOnInit(): void {
  }

}
