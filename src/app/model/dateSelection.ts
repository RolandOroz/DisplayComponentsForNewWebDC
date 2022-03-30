import {IDateSelection} from "./Interface/IDateSelection";

export class DateSelection implements IDateSelection {
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

  public static of(startDate: Date, endDate:Date): IDateSelection  {
    let selection: IDateSelection = {
      dateRangeStart: startDate.getTime(),
      dateRangeEnd: endDate.getTime()
    }
    return selection;
  }

  // getDatePickerData() {
  //   const data: { start: number; end: number } = {
  //     start: new Date().getTime(),
  //     end: new Date().getTime()
  //   }
  //   return data;
  // }
}
