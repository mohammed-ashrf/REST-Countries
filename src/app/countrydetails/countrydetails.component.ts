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
  constructor(private route: ActivatedRoute,
    private location: Location,
    private countriesService: CountriesService,
    private homeComponent: HomeComponent) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => {this.visibility = 'hidden'; return this.countriesService.getCountry(params ['name']); }))
      .subscribe(country => {
        this.borders = [];
        this.country = country;
        this.code = this.country[0].borders;
        for(let code of this.code){
          this.countriesService.getCountryByCode(code).subscribe(country => {
            this.borders.push(country);
            // this.borderCountry = country;
            // console.log(country);
            // console.log(this.borders);
          })
        }
        console.log(country);
        console.log(country[0].name);
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
