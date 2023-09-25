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
  borderCountry;
  code;
  borders=[];
  currencies = [];
  languages = [];
  constructor(private route: ActivatedRoute,
    private location: Location,
    private countriesService: CountriesService,
    private homeComponent: HomeComponent) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => {this.visibility = 'hidden'; return this.countriesService.getCountry(params ['name']); }))
      .subscribe(country => {
        this.currencies = Object.keys(country[0].currencies);
        this.languages = Object.keys(country[0].languages);
        this.borders = [];
        this.country = country;
        if (country.borders) {
          this.code = country.borders;
          for (let code of this.code) {
            this.countriesService.getCountryByCode(code).subscribe(country => {
              this.borders.push(country);
            });
          }
        };
        this.visibility = 'shown';},
        errmess => this.errMess = <any>errmess);
  }

  goBack(): void {
    this.location.back();
    this.homeComponent.visible = true;
  }
  // onClick() {
  //   if (this.borders.length ){
  //     this.borders = [];
  //   }
  // }
}
