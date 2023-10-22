import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './layouts/mainpage/maipage/mainpage.component';
import { AssortmentComponent } from './layouts/assortment/assortment.component';
import {ContactFormComponent } from './layouts/mainpage/contact-form/contact-form.component';

const routes: Routes = [
  {path: 'mainpage', component: MainpageComponent},
  {path: 'assortment', component: AssortmentComponent},
  {path: 'contactform', component: ContactFormComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
