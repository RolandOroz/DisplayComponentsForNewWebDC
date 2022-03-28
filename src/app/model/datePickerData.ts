import {DatepickerDataInterface} from "./Interface/datepickerDataInterface";

export class DatePickerData implements DatepickerDataInterface {
  // public start: number;
  // public end: number;
  public dateRangeStart: number;
  public dateRangeEnd: number;

  constructor(
    // start: number,
    // end: number,
    dateRangeStart: number,
    dateRangeEnd: number,
  ) {
    // this.start = start;
    // this.end = end;
    this.dateRangeStart = dateRangeStart;
    this.dateRangeEnd = dateRangeEnd;
  }

  // getDatePickerData() {
  //   const data: { start: number; end: number } = {
  //     start: new Date().getTime(),
  //     end: new Date().getTime()
  //   }
  //   return data;
  // }
}
