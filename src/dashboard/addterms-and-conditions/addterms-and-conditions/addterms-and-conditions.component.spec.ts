import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtermsAndConditionsComponent } from './addterms-and-conditions.component';

describe('AddtermsAndConditionsComponent', () => {
  let component: AddtermsAndConditionsComponent;
  let fixture: ComponentFixture<AddtermsAndConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtermsAndConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
