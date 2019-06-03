import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://pokeapi.co/api';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  constructor(private _http:HttpClient) { }

  getPokemon() {
    return this._http.get(`${ApiUrl}/v2/pokemon-form/`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}