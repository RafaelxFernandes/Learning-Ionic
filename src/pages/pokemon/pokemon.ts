import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokemonProvider } from '../../providers/pokemon/pokemon';

/**
 * Generated class for the PokemonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokemon',
  templateUrl: 'pokemon.html',
})
export class PokemonPage {

	pokemons = [];

	id: number;

	constructor(public pkmnProvider: PokemonProvider,public navCtrl: NavController, public navParams: NavParams) {
		this.id = 0;
	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad PokemonPage');
	}

	getPokemon(){
	  console.log("Entrei na função");
	  this.id++;
	  this.pkmnProvider.getPokemon(this.id).subscribe(
	    (res) => {
	      this.pokemons.push(res);
	      console.log(res);
	    });
	}
}
