import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino : string = 'Hola Mundo';
  hayError: boolean = false;
  paises  : Country[] = [];


  constructor( private paisService: PaisService) { }

  public buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
    .subscribe( (paises) => {
      console.log(paises);
      this.paises = paises;
      console.log(paises);
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  public sugerencias( termino: string) {
    this.hayError = false;
    this.termino = termino;
  }

}
