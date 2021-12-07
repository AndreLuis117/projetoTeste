import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RootObject} from "../model/PersonPhone/RootObject";
import {PersonPhoneObject} from "../model/PersonPhone/PersonPhoneObject";




@Injectable()
export class PersonPhoneService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:59230/api/personPhone';

  getPersonPhones() {
    return this.http.get<RootObject>(this.baseUrl);
  }

  getPersonPhoneById(phoneNumber: string) {
    return this.http.get<RootObject>(this.baseUrl + '/' + phoneNumber);
  }

  createPersonPhone(personPhone: PersonPhoneObject) {
    return this.http.post(this.baseUrl, personPhone);
  }

  updatePersonPhone(personPhone: PersonPhoneObject, phoneNumber) {
    return this.http.put(this.baseUrl + '/' + phoneNumber, personPhone);
  }

  deletePersonPhone(phoneNumber: string) {
    return this.http.delete(this.baseUrl + '/' + phoneNumber);
  }
}