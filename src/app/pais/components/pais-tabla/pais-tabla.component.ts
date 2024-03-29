import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent implements OnInit {

  @Input()
  public paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
