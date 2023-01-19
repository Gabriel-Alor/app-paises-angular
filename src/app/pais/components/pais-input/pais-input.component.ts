import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  public termino: string = '';

  //Se dispara una sola vez cuando el componente es creado y ya esta inicializado
  ngOnInit(): void {
    this.debouncer
    //no emitas el subscribe hasta que este observable deje de emitir valores por las proximas 300 milesimas de segundo
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    });
  }


  public buscar() {
    this.onEnter.emit( this.termino );
  }

  public teclaPresionada() {
    //mandas el siguiente valor 
    this.debouncer.next( this.termino );
  }


}
