import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductService } from './services/product.service';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UHeadComponent } from './u-head/u-head.component';
import { UBodyComponent } from './u-body/u-body.component';
import { UFooterComponent } from './u-footer/u-footer.component';
import { AHeadComponent } from './a-head/a-head.component';
import { ABodyComponent } from './a-body/a-body.component';
import { AFooterComponent } from './a-footer/a-footer.component';
import { InsertComponent } from './insert/insert.component';
import { EditComponent } from './edit/edit.component';
import { ManagerComponent } from './manager/manager.component';
import { DetailsComponent } from './u-details/u-details.component';
import { ADetailsComponent } from './a-details/a-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ListComponent, AboutComponent, ContactComponent, UHeadComponent, UBodyComponent, UFooterComponent, AHeadComponent, ABodyComponent, AFooterComponent, InsertComponent, EditComponent, ManagerComponent, DetailsComponent , ADetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
