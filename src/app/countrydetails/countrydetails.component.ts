import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Params, ActivatedRoute } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { Location } from '@angular/common';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent implements OnInit {

  visibility = 'shown';
  prev: string;
  next: string;
  errMess: string;
  country;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private countriesService: CountriesService,
    private homeComponent: HomeComponent) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => {this.visibility = 'hidden'; return this.countriesService.getCountry(params ['name']); }))
      .subscribe(country => { 
        this.country = country;
        console.log(country);
        console.log(country[0].name);
        this.visibility = 'shown';},
        errmess => this.errMess = <any>errmess);
  }

  goBack(): void {
    this.location.back();
    this.homeComponent.visible = true;
  }
}
