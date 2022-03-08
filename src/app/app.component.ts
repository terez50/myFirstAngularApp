import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './model/hero';
import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFirstAngularApp';
  myHero!: Hero;
  //  = {
  //   name: 'Magneto',
  //   address: 'New York',
  //   superpower: 'magnetic'
  // };
  listObservable!: Observable<any>;

  constructor( 
    private fService: FootballService,
    private hService: HeroService
  ) {
    this.listObservable = this.hService.getAll();

    // this.hService.getAll().forEach( value => {
    //   console.log('All heroes:', value);
    // })

    // this.hService.getOne(1).forEach( value => {
    //   console.log('Hero 1:', value);
    // })

    // this.hService.add(
    //   {name: "Jack", address: "Bp", superpower: "biking"})
    //   .forEach( value => {
    //     console.log('Hero added:', value);
    // })

    // this.hService.update(
    //   {id: 1, name: "Lucy", address: "Bp", superpower: "biking"})
    //   .forEach( value => {
    //     console.log('Hero 1 modified:', value);
    // })

    // this.hService.remove(3)
    //   .forEach( value => {
    //     console.log('Hero 3 deleted:', value);
    // })
  }
  setHero(hero: Hero): void {
    this.myHero = hero;
  }
}
