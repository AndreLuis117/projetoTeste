import { Component, OnInit } from '@angular/core';
import {PersonPhoneService} from "../service/personPhone.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {PersonPhoneObject} from "../model/PersonPhoneObject";


@Component({
  selector: 'app-edit-person-phone',
  templateUrl: './edit-person-phone.component.html',
  styleUrls: ['./edit-person-phone.component.css']
})
export class EditPersonPhoneComponent implements OnInit {

  personPhone: PersonPhoneObject;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private personPhoneService: PersonPhoneService) { }

  ngOnInit() {
    let phoneNumber = localStorage.getItem("editPersonPhoneId");
    console.log(localStorage.getItem("editPersonPhoneId"));
    if(!phoneNumber) {
      alert("Ocorreu um problema na aplicação!")
      this.router.navigate(['list-phone-number']);
      return;
    }
    this.editForm = this.formBuilder.group({
      phoneNumber: [],
      businessEntityID: ['', Validators.required],
      phoneNumberTypeID: ['', Validators.required],
    });
    this.personPhoneService.getPersonPhoneById(phoneNumber)
      .subscribe( data => {
        this.editForm.setValue(data.data.personPhoneObjects[0]);
      });
  }

  onSubmit() {
    let phoneNumber = localStorage.getItem("editPersonPhoneId");

    this.personPhoneService.updatePersonPhone(this.editForm.value, phoneNumber)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-person-phone']);
        },
        error => {
          alert(error);
        });
  }

}
