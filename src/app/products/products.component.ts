import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/pokemon.service';
import { Pokemon} from '../models/Pokemon';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  constructor(private _pokeService: PokeService) { }

  ngOnInit() {
    this._pokeService.getPokemon().subscribe((pokemon: Pokemon[]) => {

    });
  }

}
