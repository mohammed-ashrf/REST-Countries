import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private homeComponent: HomeComponent) { }

  lightDark:string = "Dark";
  ngOnInit() {
  }

  toggle(){
    console.log("clicked");
    switch (this.lightDark) {
      case 'Dark':
        this.lightDark = "Light";
        break;
      case 'Light':
        this.lightDark = "Dark";
        break;
      default:
        console.log("defult");
    }
    document.body.classList.toggle("dark-Theme");
  }

  onClick() {
    this.homeComponent.countries = this.homeComponent.countriesCopy;
  }
}
