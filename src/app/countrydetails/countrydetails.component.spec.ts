import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrydetailsComponent } from './countrydetails.component';

describe('CountrydetailsComponent', () => {
  let component: CountrydetailsComponent;
  let fixture: ComponentFixture<CountrydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
