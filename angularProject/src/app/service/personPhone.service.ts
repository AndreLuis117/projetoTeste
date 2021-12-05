import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PersonPhone} from "../model/personPhone.model";

@Injectable()
export class PersonPhoneService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:55273/api/personPhone';

  getPersonPhones() {
    return this.http.get<PersonPhone[]>(this.baseUrl);
  }

  getPersonPhoneById(id: number) {
    return this.http.get<PersonPhone>(this.baseUrl + '/' + id);
  }

  createPersonPhone(personPhone: PersonPhone) {
    return this.http.post(this.baseUrl, personPhone);
  }

  updatePersonPhone(personPhone: PersonPhone) {
    return this.http.put(this.baseUrl, personPhone);
  }

  deletePersonPhone(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}