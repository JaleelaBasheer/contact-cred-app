import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PnfComponent } from './pnf/pnf.component';

const routes: Routes = [
  // all contact- http://localhost:4200/
  {
    path:"",component:AllContactsComponent
  },
  // add-contact - http://localhost:4200/add-contact
  {
    path:"add-contact",component:AddContactComponent
  },
    // edit-contact - http://localhost:4200/edit-contact/10

  {
    path:"edit-contact/:id",component:EditContactComponent
  }
      // view-contact - http://localhost:4200/view-contact/10

  ,{
    path:"view-contact/:id",component:ViewContactComponent
  },
  {
    path:"**",component:PnfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
