import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

//this is the ngModel
export class HeroesComponent implements OnInit {
  // public hero: Hero = {id: 1, name :"WindStorm"};
  public selectedHero: Hero;
  public heroes: Hero[];
  
  constructor(private heroService: HeroService) { } //inject service into constructor
  
  
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
