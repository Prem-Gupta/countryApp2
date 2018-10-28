import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryISOComponent } from './country-iso.component';

describe('CountryISOComponent', () => {
  let component: CountryISOComponent;
  let fixture: ComponentFixture<CountryISOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryISOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryISOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
