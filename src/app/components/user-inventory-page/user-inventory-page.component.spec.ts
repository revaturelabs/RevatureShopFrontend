import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInventoryPageComponent } from './user-inventory-page.component';

describe('UserInventoryPageComponent', () => {
  let component: UserInventoryPageComponent;
  let fixture: ComponentFixture<UserInventoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInventoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInventoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
