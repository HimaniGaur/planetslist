import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favList: any =[];
  constructor() { }

  ngOnInit(): void {

  }
}
