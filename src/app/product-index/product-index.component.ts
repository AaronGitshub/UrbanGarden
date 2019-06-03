import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/pokemon.service';
import { Pokemon } from "../models/Pokemon";
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {

  columnNames = ['details', 'PokeId', 'PokeName'];
  dataSource: MatTableDataSource<Pokemon>;

  constructor(private _pokeService: PokeService) { }

  ngOnInit() {
    this._pokeService.getPokemon().subscribe((pokemon: Pokemon[]) => {
      this.dataSource = new MatTableDataSource<Pokemon>(pokemon);
    })
  }

}
