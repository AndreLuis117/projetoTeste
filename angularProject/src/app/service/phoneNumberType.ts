import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RootObject} from "../model/PhoneNumberType/RootObject";
import {PersonPhoneObject} from "../model/PersonPhone/PersonPhoneObject";




@Injectable()
export class PersonPhoneSphoneNumberTypeervice {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:59230/api/phoneNumberType';

  getPhoneNumberTypes() {
    return this.http.get<RootObject>(this.baseUrl);
  }

  getPhoneNumberTypeById(id: number) {
    return this.http.get<RootObject>(this.baseUrl + '/' + id);
  }

}