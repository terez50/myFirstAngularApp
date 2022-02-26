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
  myHero: Hero = {
    name: 'Magneto',
    address: 'New York',
    superpower: 'magnetic'
  };
  listObservable!: Observable<any>;

  constructor( 
    private fService: FootballService,
    private hService: HeroService
  ) {
    this.hService.getAll().forEach( value => {
      console.log('All heroes:', value);
    })

    this.hService.getOne(1).forEach( value => {
      console.log('Hero 1:', value);
    })

    this.hService.add(
      {id: 10, name: "Jack", address: "Bp", superpower: "biking"})
      .forEach( value => {
        console.log('Hero 2 added:', value);
    })

    this.hService.update(
      {id: 1, name: "Lucy", address: "Bp", superpower: "biking"})
      .forEach( value => {
        console.log('Hero 1 modified:', value);
    })

    this.hService.remove(2)
      .forEach( value => {
        console.log('Hero 2 deleted:', value);
    })
  }
}
