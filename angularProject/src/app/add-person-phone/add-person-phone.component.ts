import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonPhoneService} from "../service/personPhone.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { PhoneNumberTypeObject } from '../model/PhoneNumberType/PhoneNumberTypeObject';
import { PhoneNumberTypeService } from '../service/phoneNumberTypeService';

@Component({
  selector: 'app-add-person-phone',
  templateUrl: './add-person-phone.component.html',
  styleUrls: ['./add-person-phone.component.css']
})
export class AddPersonPhoneComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
                      private router: Router, 
                      private personPhoneService: PersonPhoneService,
                      private phoneNumberTypeService: PhoneNumberTypeService) { }

  addForm: FormGroup;
  phoneNumberTypes: PhoneNumberTypeObject[];


  ngOnInit() {

    this.addForm = this.formBuilder.group({
      phoneNumber: [],
      businessEntityID: ['', Validators.required],
      phoneNumberTypeID: ['', Validators.required],
    });

    this.phoneNumberTypeService.getPhoneNumberTypes()
      .subscribe( data => {
        this.phoneNumberTypes = data.data.phoneNumberTypeObjects;
      });

  }

  onSubmit() {
    this.personPhoneService.createPersonPhone(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-person-phone']);
      });
  }

}
