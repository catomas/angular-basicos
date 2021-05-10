import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/naruto.interface';

@Injectable()
export class NarutoService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Sakura',
          poder: 10000
        },
        { 
          nombre: 'Sasuke',
          poder: 15000
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    
    constructor(){}

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }

}