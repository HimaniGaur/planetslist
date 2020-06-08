import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
   @Output() messageEvent = new EventEmitter<any>();
  title='planet';
  data:any = []
  favourite:any = [] ;

  constructor(private http: HttpClient,private _snackBar: MatSnackBar) {
    //this.planetlist[];
  }

  getData(){

    const url ='https://assignment-machstatz.herokuapp.com/planet'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  onSelect(event,planet){
    if(event.checked){
      this.addToFav(planet);
    }
    else{
      this.removeFromFav(planet);
    }

  }
  addToFav(planet){
    planet.isFavourite=true;
    this.favourite.push(planet);
    this.messageEvent.emit(this.favourite);
  }

  removeFromFav(planet){
  planet.isFavourite=false;
  const index = this.favourite.indexOf(planet);
    if (index > -1) {
      this.favourite.splice(index, 1);
    }
  this.messageEvent.emit(this.favourite);
  }

  /* openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }
*/
  ngOnInit(){
    this.getData()
  }

}
