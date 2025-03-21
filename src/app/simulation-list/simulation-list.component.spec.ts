import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SimulationListComponent } from './simulation-list.component';

describe('SimulationListComponent', () => {
  let component: SimulationListComponent;
  let fixture: ComponentFixture<SimulationListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
