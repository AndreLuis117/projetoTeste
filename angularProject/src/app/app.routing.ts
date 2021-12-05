import { RouterModule, Routes } from '@angular/router';
import {AddPersonPhoneComponent} from "./add-person-phone/add-person-phone.component";
import {ListPersonPhoneComponent} from "./list-person-phone/list-person-phone.component";
import {EditPersonPhoneComponent} from "./edit-person-phone/edit-person-phone.component";


const routes: Routes = [
  { path: 'add-person-phone', component: AddPersonPhoneComponent },
  { path: 'list-person-phone', component: ListPersonPhoneComponent },
  { path: 'edit-person-phone', component: EditPersonPhoneComponent },
  {path : '', component : ListPersonPhoneComponent}
];

export const routing = RouterModule.forRoot(routes);