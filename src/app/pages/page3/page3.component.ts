import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  myItem= new Date();

  constructor() { }

  ngOnInit(): void {
  }

  setBurek(value: Date) {
    this.myItem = value;
    console.log(this.myItem);

  }

}
