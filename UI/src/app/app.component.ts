import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  isSignUp = false;

  public toggleView(): void {
    this.isSignUp = !this.isSignUp;
  }

  constructor(private apiService : ApiService){}

  onSignUp(payload: any): void {
    this.apiService.addUser(payload).subscribe((resp)=>{
      alert(resp.description);
      this.isSignUp = false;
    },(error)=>{
      alert(error.error.description);
    })
  }

  onLogin(payload: any): void {
    this.apiService.userLogin(payload).subscribe((resp)=>{
      alert(resp.description);
    },(error)=>{
      alert(error.error.description);
    })
  }
}
