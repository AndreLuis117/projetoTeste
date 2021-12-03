import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListPersonPhoneComponent } from './list-person-phone/list-person-phone.component';
import { EditPersonPhoneComponent } from './edit-person-phone/edit-person-phone.component';
import { AddPersonphoneComponent } from './add-personphone/add-personphone.component';
import { AddPersonPhoneComponent } from './add-person-phone/add-person-phone.component';
import { DeletePersonPhoneComponent } from './delete-person-phone/delete-person-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    ListPersonPhoneComponent,
    EditPersonPhoneComponent,
    AddPersonphoneComponent,
    AddPersonPhoneComponent,
    DeletePersonPhoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
