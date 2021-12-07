import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";



import { AppComponent } from './app.component';
import { ListPersonPhoneComponent } from './list-person-phone/list-person-phone.component';
import { EditPersonPhoneComponent } from './edit-person-phone/edit-person-phone.component';
import { AddPersonPhoneComponent } from './add-person-phone/add-person-phone.component';
import {routing} from "./app.routing";
import {PersonPhoneService} from "./service/personPhone.service";
import { PhoneNumberTypeService } from './service/phoneNumberTypeService';




@NgModule({
  declarations: [
    AppComponent,
    ListPersonPhoneComponent,
    EditPersonPhoneComponent,
    AddPersonPhoneComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  providers: [PersonPhoneService, PhoneNumberTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
