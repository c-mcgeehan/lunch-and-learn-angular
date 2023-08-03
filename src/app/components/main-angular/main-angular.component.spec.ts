import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAngularComponent } from './main-angular.component';

describe('MainAngularComponent', () => {
  let component: MainAngularComponent;
  let fixture: ComponentFixture<MainAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
