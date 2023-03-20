import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName!: string;
  public userPassword!: string;
  @Output() userLoginEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  onSignInClick(): void {
    const payload = {
      user_name : this.userName,
      user_password : this.userPassword
    }
    this.userLoginEvent.emit(payload);
  }

}
