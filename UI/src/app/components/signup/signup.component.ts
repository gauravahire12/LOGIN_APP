import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public userName!: string;
  public userEmail!: string;
  public userMobile!: string;
  public userPassword!: string;
  public userConfirmPassword!: string;
  @Output() userSignUpEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSignUpClick(): void {
    const payload = {
      user_name : this.userName,
      user_password : this.userPassword,
      user_mobile_number : this.userMobile,
      user_email : this.userEmail
    }
    if(this.userPassword !== this.userConfirmPassword){
      alert('password does not match');
      return;
    }
    this.userSignUpEvent.emit(payload);
  }

}
