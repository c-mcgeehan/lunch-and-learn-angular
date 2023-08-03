import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsOverviewComponent } from './obs-overview.component';

describe('ObsOverviewComponent', () => {
  let component: ObsOverviewComponent;
  let fixture: ComponentFixture<ObsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
