import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { ListPayeeComponent } from './list-payee/list-payee.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationPageComponent } from './add-payee/confirmation-page/confirmation-page.component';
import { UpdatePayeeComponent } from './list-payee/update-payee/update-payee.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'addpayee',
    component: AddPayeeComponent,
  },
  {
    path: 'listpayee',
    component: ListPayeeComponent
  },
  {
    path: 'confirmOTP',
    component: ConfirmationPageComponent
  },
  {
    path: 'updatepayee',
    component: UpdatePayeeComponent
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
