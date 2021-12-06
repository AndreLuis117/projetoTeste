import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonPhoneService} from "../service/personPhone.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-person-phone',
  templateUrl: './add-person-phone.component.html',
  styleUrls: ['./add-person-phone.component.css']
})
export class AddPersonPhoneComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private personPhoneService: PersonPhoneService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      phoneNumber: [],
      businessEntityID: ['', Validators.required],
      phoneNumberTypeID: ['', Validators.required],
    });

  }

  onSubmit() {
    this.personPhoneService.createPersonPhone(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-person-phone']);
      });
  }

}
