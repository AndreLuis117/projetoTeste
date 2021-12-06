import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PersonPhoneService} from "../service/personPhone.service";
import {PersonPhoneObject} from "../model/PersonPhoneObject";


@Component({
  selector: 'app-list-person-phone',
  templateUrl: './list-person-phone.component.html',
  styleUrls: ['./list-person-phone.component.css']
})
export class ListPersonPhoneComponent implements OnInit {

  personPhones: PersonPhoneObject[];

  constructor(private router: Router, private personPhoneService: PersonPhoneService) { }

  ngOnInit() {
    this.personPhoneService.getPersonPhones()
      .subscribe( data => {
        console.log(data);
        this.personPhones = data.data.personPhoneObjects;
        console.log(this.personPhones);
      });
  }

  deletePersonPhone(personPhone: PersonPhoneObject): void {
    this.personPhoneService.deletePersonPhone(personPhone.phoneNumber)
      .subscribe( data => {
        this.personPhones = this.personPhones.filter(u => u !== personPhone);
      })
  };

  editPersonPhone(personPhone: PersonPhoneObject): void {
    localStorage.removeItem("editPersonPhoneId");
    console.log(personPhone.phoneNumber);
    localStorage.setItem("editPersonPhoneId", personPhone.phoneNumber);
    console.log(localStorage.getItem("editPersonPhoneId"));

    this.router.navigate(['edit-person-phone']);
  };

  addPersonPhone(): void {
    this.router.navigate(['add-person-phone']);
  };

}
