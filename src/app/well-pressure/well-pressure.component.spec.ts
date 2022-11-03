import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellPressureComponent } from './well-pressure.component';

describe('WellPressureComponent', () => {
  let component: WellPressureComponent;
  let fixture: ComponentFixture<WellPressureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellPressureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
