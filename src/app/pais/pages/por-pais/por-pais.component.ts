import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  public termino: string = "";
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  public buscar( termino: string ) {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPais( this.termino )
        .subscribe({
          next: (paises) => {
            this.paises = paises;
            console.log(paises);
          },
          error: (err) => {
            this.hayError = true;
            this.paises = [];
            console.log(err);
          }
        })
  }

  public sugerencias( termino: string ){
    this.hayError = false;
    //TODO: CREAR SUGERENCIAS
  }

}
