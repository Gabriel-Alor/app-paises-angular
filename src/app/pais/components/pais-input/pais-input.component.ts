import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  //Sirve para emitar algun valor
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = "";

  //Observable
  debouncer: Subject<string> = new Subject();

  public termino: string = "";

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        //cuanto debo esperar antes de emitir el siguiente valor
        debounceTime(300)
      )
      .subscribe( valor => {
      this.onDebounce.emit( valor );
    })
  }

  public buscar() {
    this.onEnter.emit(this.termino);
  }

  public teclaPresionada( event: any) {
    const valor  = event.target.value;
    this.debouncer.next( valor );
  }

}
