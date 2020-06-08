import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  title='planet';
  data:any = []


  constructor(private http: HttpClient) { 
    //this.planetlist[];
  }

  getData(){

    const url ='https://assignment-machstatz.herokuapp.com/planet'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }


  ngOnInit(){
    this.getData()
  }

}
