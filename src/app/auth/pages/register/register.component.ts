import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../../services/appservice.service';
import { NgForm } from '@angular/forms';
import { AppsResp, Registro } from '../../interfaces/interfaces';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() { }

email: string=''
first_name: string=''
last_name: string=''
password: string=''
password_confirmation: string=''
phone_country_code: string=''
phone: string=''
referrer_code: string=''
country_id: string=''

registro() {
  const user = {email: this.email, password: this.password};
  this.AppserviceService.registro(user).subscribe( data => {
    console.log(data);
  });
}




}
