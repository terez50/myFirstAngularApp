  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { Observable } from 'rxjs';
  import { Hero } from '../model/hero';
  import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
  export class HeroComponent implements OnInit {
    heroList: Observable<Hero[]>;

    constructor(
      private hService: HeroService,
      private router: Router
      ) {
      this.heroList = this.hService.getAll();
      // this.heroList.subscribe(
      //   hl => console.log(hl)
      // )
    }

  ngOnInit(): void {
  }

  jumpToHero(hero: Hero): void {
    console.log(hero, hero.id);
    this.router.navigateByUrl(`/hero/${hero.id}`)
  }
}
