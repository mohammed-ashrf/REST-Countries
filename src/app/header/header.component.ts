import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
}
