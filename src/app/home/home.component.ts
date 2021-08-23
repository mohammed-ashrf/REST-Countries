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
  name;
  input;
  dropdownMenu;
  dropdownMenuValue;
  countryName;
  isClicked:boolean = false;
  visible:boolean = true;
  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountries()
      .subscribe( countries => {
        this.countries = countries;
        this.name = countries[0]['name'];
        console.log(this.countries);
        console.log(this.name);
      },
        errmess => this.errMess = <any>errmess);

    this.isClicked = false;
    this.visible = true;
  }
  onClick(){
    this.isClicked = true;
    this.visible = false;
  }

  onSearch(){
    this.input= document.getElementById('input');
    this.countryName = this.input.value;
    this.countryName.toUpperCase();
    console.log(this.countryName);
    this.countriesService.getCountry(this.countryName).subscribe( country => {
      console.log(country);
      this.countries = country;
    },
    errmess => this.errMess = <any>errmess);
  }
  onSelect(){
    this.dropdownMenu = document.getElementById('region');
    console.log(this.dropdownMenu);
    this.dropdownMenuValue = this.dropdownMenu.value;
    this.dropdownMenuValue.toUpperCase();
    this.countriesService.getCountryByRegion(this.dropdownMenuValue).subscribe(country => {
      console.log(country);
      this.countries = country;
    },
    errmess => this.errMess = <any>errmess);
  }

}
