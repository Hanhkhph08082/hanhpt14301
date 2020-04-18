import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ABodyComponent } from './a-body/a-body.component';
import { ADetailsComponent } from './a-details/a-details.component';
import { AFooterComponent } from './a-footer/a-footer.component';
import { AHeadComponent } from './a-head/a-head.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { InsertComponent } from './insert/insert.component';
import { ListComponent } from './list/list.component';
import { ManagerComponent } from './manager/manager.component';
import { ServivesComponent } from './servives/servives.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ABodyComponent, ADetailsComponent, AFooterComponent, AHeadComponent, AboutComponent, ContactComponent, EditComponent, InsertComponent, ListComponent, ManagerComponent, ServivesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
