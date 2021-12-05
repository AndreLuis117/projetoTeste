import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PersonPhoneService} from "../service/personPhone.service";
import {PersonPhone} from "../model/personPhone.model";

@Component({
  selector: 'app-list-person-phone',
  templateUrl: './list-person-phone.component.html',
  styleUrls: ['./list-person-phone.component.css']
})
export class ListPersonPhoneComponent implements OnInit {

  personPhones: PersonPhone[];

  constructor(private router: Router, private personPhoneService: PersonPhoneService) { }

  ngOnInit() {
    this.personPhoneService.getPersonPhones()
      .subscribe( data => {
        this.personPhones = data;
      });
  }

  deletePersonPhone(personPhone: PersonPhone): void {
    this.personPhoneService.deletePersonPhone(personPhone.phoneNumber)
      .subscribe( data => {
        this.personPhones = this.personPhones.filter(u => u !== personPhone);
      })
  };

  editPersonPhone(personPhone: PersonPhone): void {
    localStorage.removeItem("editpersonPhoneId");
    localStorage.setItem("editPersonPhoneId", personPhone.phoneNumber.toString());
    this.router.navigate(['edit-person-phone']);
  };

  addPersonPhone(): void {
    this.router.navigate(['add-person-phone']);
  };

}
