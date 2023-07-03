import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpolicyAndPrivacyComponent } from './addpolicy-and-privacy.component';

describe('AddpolicyAndPrivacyComponent', () => {
  let component: AddpolicyAndPrivacyComponent;
  let fixture: ComponentFixture<AddpolicyAndPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpolicyAndPrivacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpolicyAndPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
