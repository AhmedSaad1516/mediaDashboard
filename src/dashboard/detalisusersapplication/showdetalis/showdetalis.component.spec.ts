import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdetalisComponent } from './showdetalis.component';

describe('ShowdetalisComponent', () => {
  let component: ShowdetalisComponent;
  let fixture: ComponentFixture<ShowdetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdetalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowdetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
