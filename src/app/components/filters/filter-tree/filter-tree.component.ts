import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-filter-tree',
  templateUrl: './filter-tree.component.html',
  styleUrls: ['./filter-tree.component.css']
})
export class FilterTreeComponent {
  filterCollection: FormGroup;

  constructor(fb: FormBuilder) {
    this.filterCollection = fb.group({
      media: false,
      both: false,
      engagement: false,
    });
  }
}
