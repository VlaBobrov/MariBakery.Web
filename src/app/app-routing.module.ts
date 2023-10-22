import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './layouts/mainpage/maipage/mainpage.component';
import { AssortmentComponent } from './layouts/assortment/assortment.component';

const routes: Routes = [
  {path: 'mainpage', component: MainpageComponent},
  {path: 'assortment', component: AssortmentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
