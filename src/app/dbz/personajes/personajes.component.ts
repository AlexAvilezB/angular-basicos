import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  constructor( private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  // @Input('data')
  // personajes: Personaje[] = [];
  
  get personajes() {
    return this.dbzService.personajes;
  }

}
