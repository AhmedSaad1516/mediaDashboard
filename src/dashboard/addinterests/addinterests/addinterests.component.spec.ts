import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinterestsComponent } from './addinterests.component';

describe('AddinterestsComponent', () => {
  let component: AddinterestsComponent;
  let fixture: ComponentFixture<AddinterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinterestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddinterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
