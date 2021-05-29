import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewinventoryPageComponent } from './admin-newinventory-page.component';

describe('AdminNewinventoryPageComponent', () => {
  let component: AdminNewinventoryPageComponent;
  let fixture: ComponentFixture<AdminNewinventoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewinventoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewinventoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
