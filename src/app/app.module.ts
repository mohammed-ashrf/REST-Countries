import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { CountriesService } from './services/countries.service';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';

import 'hammerjs';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CountrydetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [
    CountriesService,
    ProcessHttpmsgService,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
