import { Component, } from '@angular/core';
import { AppserviceService } from '../../services/appservice.service';
import { NgForm } from '@angular/forms';
import { AppsResp } from '../../interfaces/interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  email:string ='';
  password:string='';

  constructor(public AppserviceService: AppserviceService) { }

  login() {
    const user = {email: this.email, password: this.password};
    this.AppserviceService.login(user).subscribe( data => {
      console.log(data);
    });
  }
}

