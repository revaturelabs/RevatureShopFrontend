import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminItemModalComponent } from './admin-item-modal.component';



describe('ItemModalComponent', () => {
  let component: AdminItemModalComponent;
  let fixture: ComponentFixture<AdminItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
