import { Component, OnInit } from '@angular/core';
import {PersonPhoneService} from "../service/personPhone.service";
import {Router} from "@angular/router";
import {PersonPhone} from "../model/personPhone.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-person-phone',
  templateUrl: './edit-person-phone.component.html',
  styleUrls: ['./edit-person-phone.component.css']
})
export class EditPersonPhoneComponent implements OnInit {

  personPhone: PersonPhone;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private personPhoneService: PersonPhoneService) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.personPhoneService.getPersonPhoneById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.personPhoneService.updatePersonPhone(this.editForm.value)
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
