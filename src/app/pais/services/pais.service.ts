import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor( private http: HttpClient) { }

  public buscarPais( termino: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${termino}`;
    return this.http.get<Country[]>( url );
  }

  public buscarCapital( termino: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${termino}`;
    return this.http.get<Country[]>( url );
  }

  public buscarPaisPorCodigo( id: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }


}
