import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/mainpage/footer/footer.component';
import { HeaderComponent } from './layouts/mainpage/header/header.component';
import { CircleAnimationComponent } from './layouts/mainpage/circle-animation/circle-animation.component';
import { MainpageComponent } from './layouts/mainpage/maipage/mainpage.component';
import { AboutUsComponent } from './layouts/mainpage/about-us/about-us.component';
import { ContactFormComponent } from './layouts/mainpage/contact-form/contact-form.component';
import { BoxOfBestTasteComponent } from './layouts/mainpage/box-of-best-taste/box-of-best-taste.component';
import { MacarunsComponent } from './layouts/mainpage/macaruns/macaruns.component';
import { CarComponent } from './layouts/mainpage/car/car.component';
import { CalendarComponent } from './layouts/mainpage/calendar/calendar.component';
import { BigLogoComponent } from './layouts/mainpage/big-logo/big-logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list';
import { AssortmentComponent } from './layouts/assortment/assortment.component';
import { CircleHeaderComponent } from './layouts/mainpage/circle-header/circle-header.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CircleAnimationComponent,
    MainpageComponent,
    AboutUsComponent,
    ContactFormComponent,
    BoxOfBestTasteComponent,
    MacarunsComponent,
    CarComponent,
    CalendarComponent,
    BigLogoComponent,
    
    AssortmentComponent,
    CircleHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    NgIf,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
