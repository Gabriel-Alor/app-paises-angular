import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais!: Country;

  constructor( private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  //Aquí atrapamos el id de la ruta
  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ( { id } ) => this.paisService.getPaisPorAlpha( id )),
      tap( console.log)
    )
    .subscribe( pais => {
      this.pais = pais[0];
    });

    // this.activatedRoute.params
    // .subscribe( ({ id }) => {
    //   console.log(id);

    //   this.paisService.getPaisPorAlpha( id )
    //   .subscribe( pais => {
    //     console.log(pais);
    //   });
    // })
  }

}
