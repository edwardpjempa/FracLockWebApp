import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPressureComponent } from './set-pressure.component';

describe('SetPressureComponent', () => {
  let component: SetPressureComponent;
  let fixture: ComponentFixture<SetPressureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPressureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
