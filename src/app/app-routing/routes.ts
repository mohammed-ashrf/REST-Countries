import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CountrydetailsComponent } from '../countrydetails/countrydetails.component';
export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    {path: 'countrydetail/:name', component: CountrydetailsComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];