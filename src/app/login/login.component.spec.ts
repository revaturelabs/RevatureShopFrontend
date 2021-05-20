import { ComponentFixture, TestBed } from '@angular/core/testing';
import {async,inject,tick,fakeAsync} from "@angular/core/testing";
import { LoginComponent } from './login.component';
import {DebugElement} from "@angular/core";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {By} from "@angular/platform-browser";
import {GetDummyUsersService} from "../get-dummy-users.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de : DebugElement;


    beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
        imports: [HttpClientTestingModule],
        providers: [GetDummyUsersService]

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
  });

  // it ('should render username as button clicked on',() => {
  //     expect(fixture.debugElement.query(By.css('p')).nativeElement.innerText);
  // })

});
