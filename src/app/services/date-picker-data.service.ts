import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DatePickerDataService {

 pickerData: any;

  constructor() { }

  setPickerData(data: Date) {
    this.pickerData = data;
  }

  getPickerData() {
    return this.pickerData;
  }
}
