import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClearanceListComponent} from './clearance-list.component';

describe('ClearanceListComponent', () => {
  let component: ClearanceListComponent;
  let fixture: ComponentFixture<ClearanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearanceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
