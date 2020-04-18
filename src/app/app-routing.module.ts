import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UBodyComponent } from './u-body/u-body.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './list/list.component';
import { ABodyComponent } from './a-body/a-body.component';

import { InsertComponent } from './insert/insert.component';
import { EditComponent } from './edit/edit.component';
import { ManagerComponent } from './manager/manager.component';
import { DetailsComponent } from './u-details/u-details.component';
import { ADetailsComponent } from './a-details/a-details.component';
const routes: Routes = [
 {
    path: '',
    component:  UBodyComponent,
    children: [
       { path: '', component: ListComponent, pathMatch: 'full'},
      { path: 'portfolio', component: ListComponent},
      { path: 'About', component: AboutComponent },
      { path : 'Detail/:id', component : DetailsComponent},
      { path: 'Contact', component: ContactComponent },
    ]
  },
  {
    path: '',
    component:  ABodyComponent ,
    children: [
      { path: 'Manager', component: ManagerComponent },
      { path : 'Edit/:id', component : EditComponent},
      { path : 'Details/:id', component : ADetailsComponent},
      { path: 'Add', component: InsertComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
