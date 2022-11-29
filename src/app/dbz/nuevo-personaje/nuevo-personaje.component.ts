import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './nuevo-personaje.component.html',
  styleUrls: ['./nuevo-personaje.component.css'],
})
export class NuevoPersonajeComponent implements OnInit {
  constructor( private dbzService: DbzService) {}

  ngOnInit(): void {}

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log( this.nuevo )
    
    // this.onNuevoPersonaje.emit( this.nuevo );

    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
