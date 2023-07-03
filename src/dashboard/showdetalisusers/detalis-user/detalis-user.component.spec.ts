import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisUserComponent } from './detalis-user.component';

describe('DetalisUserComponent', () => {
  let component: DetalisUserComponent;
  let fixture: ComponentFixture<DetalisUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalisUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalisUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
