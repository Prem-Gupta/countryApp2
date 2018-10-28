import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryNameComponent } from './country-name.component';

describe('CountryNameComponent', () => {
  let component: CountryNameComponent;
  let fixture: ComponentFixture<CountryNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
