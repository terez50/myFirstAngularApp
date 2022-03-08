import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './model/hero';
import { FootballService } from './service/football.service';

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
  listObservable: Observable<any>;

  constructor( private fService: FootballService ) {
    this.listObservable = new Observable( observer =>
      { 
        let to = setTimeout( () => {
          observer.next("Megjöttem...")}, 3000);
        let to2 = setTimeout( () => {
          observer.complete()}, 5000);
    });

    this.listObservable.subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info("complete")}
    );
  }
}
