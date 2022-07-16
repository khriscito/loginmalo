import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { Observable } from 'rxjs';
import { AppsResp, Registro } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }



  login ( email: string, password: string ){
const body = {email,password}
return this.http.post <AppsResp>("http://apitest.e-bango.com/api/auth/login" , body );
  }

  }
