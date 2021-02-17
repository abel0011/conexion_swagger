import { Component, OnInit } from '@angular/core';
import { NeptunoApiService } from './api/services';

import { Producto } from './api/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  ngOnInit(){
   console.log();
    this.cargar()
  }
  producto!: Producto[];
   constructor(private api: NeptunoApiService) {
  }
  cargar(){
    this.api.apiNeptunoApiGet$Json().subscribe(e=>{
      this.producto= e; 
      console.log(this.producto);
      
    })
  }

}
