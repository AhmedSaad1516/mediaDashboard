import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPropromotioncustomerComponent } from './show-propromotioncustomer.component';

describe('ShowPropromotioncustomerComponent', () => {
  let component: ShowPropromotioncustomerComponent;
  let fixture: ComponentFixture<ShowPropromotioncustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPropromotioncustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPropromotioncustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
