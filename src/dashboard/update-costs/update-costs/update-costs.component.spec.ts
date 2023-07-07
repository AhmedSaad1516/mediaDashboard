import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCostsComponent } from './update-costs.component';

describe('UpdateCostsComponent', () => {
  let component: UpdateCostsComponent;
  let fixture: ComponentFixture<UpdateCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
