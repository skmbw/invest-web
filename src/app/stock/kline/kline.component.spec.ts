import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KlineComponent} from './kline.component';

describe('KlineComponent', () => {
  let component: KlineComponent;
  let fixture: ComponentFixture<KlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
