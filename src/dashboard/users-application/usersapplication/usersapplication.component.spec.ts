import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersapplicationComponent } from './usersapplication.component';

describe('UsersapplicationComponent', () => {
  let component: UsersapplicationComponent;
  let fixture: ComponentFixture<UsersapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
