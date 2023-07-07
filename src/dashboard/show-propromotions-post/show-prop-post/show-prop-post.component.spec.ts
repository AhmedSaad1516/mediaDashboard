import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPropPostComponent } from './show-prop-post.component';

describe('ShowPropPostComponent', () => {
  let component: ShowPropPostComponent;
  let fixture: ComponentFixture<ShowPropPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPropPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPropPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
