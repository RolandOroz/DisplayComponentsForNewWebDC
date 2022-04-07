import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTreeItemComponent } from './FilterTreeItem.component';

describe('FiltersComponent', () => {
  let component: FilterTreeItemComponent;
  let fixture: ComponentFixture<FilterTreeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTreeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTreeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
