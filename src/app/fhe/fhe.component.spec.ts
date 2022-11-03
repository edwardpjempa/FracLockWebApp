import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FHEComponent } from './fhe.component';

describe('FHEComponent', () => {
  let component: FHEComponent;
  let fixture: ComponentFixture<FHEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FHEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FHEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
