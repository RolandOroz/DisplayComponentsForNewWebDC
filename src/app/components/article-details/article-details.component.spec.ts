import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailsComponentPage } from './article-details.component';

describe('ArticleDetailsComponent', () => {
  let component: ArticleDetailsComponentPage;
  let fixture: ComponentFixture<ArticleDetailsComponentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetailsComponentPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailsComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
