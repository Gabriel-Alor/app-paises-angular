import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  public termino: string = "";
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor(private paisSerivice: PaisService) { }

  ngOnInit(): void {
  }

  public buscar( termino: string ) {
    this.termino = termino;
    this.hayError = false;
    this.paisSerivice.buscarCapital( this.termino )
        .subscribe({
          next: (capital) => {
            this.paises = capital;
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
