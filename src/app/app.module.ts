import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { WavesComponent } from './layouts/mainpage/waves/waves.component';

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
    WavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
