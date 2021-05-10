import { Component } from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';
import { NarutoService } from '../services/naruto.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
 
})
export class MainPageComponent  {
  
  nuevo: Personaje = {
    nombre: 'Naruto',
    poder: 13000
  }

  
  constructor(  ) {

  }
}
