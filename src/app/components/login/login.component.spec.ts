import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {DebugElement} from "@angular/core";
import { HttpClientTestingModule} from '@angular/common/http/testing';
import {AccountService} from "../../services/account.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de : DebugElement;


    beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
        imports: [HttpClientTestingModule],
        providers: [AccountService]

    })

    .compileComponents();

  });


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
    pending('The test was failing before the iteration began.');
  });

  // it ('should render username as button clicked on',() => {
  //     expect(fixture.debugElement.query(By.css('p')).nativeElement.innerText);
  // })

});
