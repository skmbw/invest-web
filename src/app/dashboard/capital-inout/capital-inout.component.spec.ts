import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CapitalInoutComponent} from './capital-inout.component';

describe('CapitalInoutComponent', () => {
  let component: CapitalInoutComponent;
  let fixture: ComponentFixture<CapitalInoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalInoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalInoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
