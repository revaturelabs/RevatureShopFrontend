import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPointsComponent } from './admin-add-points.component';

describe('AdminAddPointsComponent', () => {
  let component: AdminAddPointsComponent;
  let fixture: ComponentFixture<AdminAddPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
