import { ArrayType } from "@angular/compiler";

export interface AppsResp{
        "data":string;
        "code": number;
        "title": string;
          "errors"?: string;
}

export interface Registro{
email: string
first_name: string
last_name: string
password: string
password_confirmation: string
phone_country_code: string
phone: string
referrer_code: string
country_id: string
}

export interface RespRegistro{
data:string
title: string
errors: []
}

