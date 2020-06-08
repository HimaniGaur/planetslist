import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
    {path:'planets', label:'Planets'},
    {path:'favourites', label:'Favourites'}
  ];
  title: any;
}
