import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries;
  errMess:string;
  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountries()
      .subscribe( countries => {
        this.countries = countries;
        console.log(this.countries);
      },
        errmess => this.errMess = <any>errmess);
  }

}
