import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { ListPayeeComponent } from './list-payee/list-payee.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationPageComponent } from './add-payee/confirmation-page/confirmation-page.component';
import { UpdatePayeeComponent } from './list-payee/update-payee/update-payee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPayeeComponent,
    ListPayeeComponent,
    HomeComponent,
    ConfirmationPageComponent,
    UpdatePayeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
