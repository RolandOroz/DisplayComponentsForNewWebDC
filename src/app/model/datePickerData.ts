import {datepickerDataInterface} from "./Interface/datepickerDataInterface";

export class DatePickerData implements datepickerDataInterface {
  public start: number;
  public end: number;

  constructor(
    start: number,
    end: number
  ) {
    this.start = start;
    this.end = end
  }

  // getDatePickerData() {
  //   const data: { start: number; end: number } = {
  //     start: new Date().getTime(),
  //     end: new Date().getTime()
  //   }
  //   return data;
  // }
}
