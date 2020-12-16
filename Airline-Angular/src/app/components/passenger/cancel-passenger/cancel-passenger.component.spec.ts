import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPassengerComponent } from './cancel-passenger.component';

describe('CancelPassengerComponent', () => {
  let component: CancelPassengerComponent;
  let fixture: ComponentFixture<CancelPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelPassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
