import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setPokemonList: any;
  public getPokemonList: any;
  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      (res) => {
        this.setPokemonList = res.results;
        this.getPokemonList = this.setPokemonList;
      },
      (error) => {
        this.apiError = true;
      }
    );
  }

  public filterPokemonList(value: string) {
    const filter = this.setPokemonList.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getPokemonList = filter;
  }
}
