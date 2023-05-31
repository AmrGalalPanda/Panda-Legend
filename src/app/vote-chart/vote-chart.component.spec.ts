import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteChartComponent } from './vote-chart.component';

describe('VoteChartComponent', () => {
  let component: VoteChartComponent;
  let fixture: ComponentFixture<VoteChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoteChartComponent]
    });
    fixture = TestBed.createComponent(VoteChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
