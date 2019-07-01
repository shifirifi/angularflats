import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatSummaryComponent } from './flat-summary.component';

describe('FlatSummaryComponent', () => {
  let component: FlatSummaryComponent;
  let fixture: ComponentFixture<FlatSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
