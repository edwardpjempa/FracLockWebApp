import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageNavBarComponent } from './home-page-nav-bar.component';

describe('HomePageNavBarComponent', () => {
  let component: HomePageNavBarComponent;
  let fixture: ComponentFixture<HomePageNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
