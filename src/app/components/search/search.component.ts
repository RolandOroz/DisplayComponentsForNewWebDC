import { Component, OnInit } from '@angular/core';
import { DatePickerDataService } from "../../services/date-picker-data.service";

@Component({
  selector: 'cpmt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  pickerData:any;
  constructor(private datePickerDataService:DatePickerDataService) {
  }
  search: String = "";

  ngOnInit(): void {
    this.pickerData = this.datePickerDataService.getPickerData();
  }

}
