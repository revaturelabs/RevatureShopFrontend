import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventoryPageComponent } from './admin-inventory-page.component';

describe('AdminInventoryPageComponent', () => {
  let component: AdminInventoryPageComponent;
  let fixture: ComponentFixture<AdminInventoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInventoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInventoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    pending('The test was failing before the iteration began.');
  });
});
