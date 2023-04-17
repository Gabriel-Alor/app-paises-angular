import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  public pais!: Country;

  constructor( private paisService: PaisService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .pipe(
          switchMap( ( param ) => this.paisService.buscarPaisPorCodigo( param['id'] ) ),
          tap( console.log )
        )
        .subscribe( pais => {
          this.pais = pais[0];
          console.log(this.pais);
        })

    // this.activatedRoute.params
    //     .subscribe( ({ id }) => {
    //       console.log( id );

    //       this.paisService.buscarPaisPorCodigo( id )
    //           .subscribe( pais => {
    //             console.log(pais);
    //           })
    //     })
  }

}
