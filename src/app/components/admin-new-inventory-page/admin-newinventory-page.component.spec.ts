import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewInventoryPageComponent } from './admin-newinventory-page.component';

describe('AdminNewinventoryPageComponent', () => {
  let component: AdminNewInventoryPageComponent;
  let fixture: ComponentFixture<AdminNewInventoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewInventoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewInventoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
