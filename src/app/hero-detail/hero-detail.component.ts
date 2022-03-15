import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero = new Hero();
  superPowers: Array<string> = [
    "magnetic",
    "really smart",
    "rich",
    "hard",
    "biking"
  ];

  constructor(
    private ar: ActivatedRoute,
    private hService: HeroService
  ) {
    this.ar.params.subscribe( params => {
      this.hService.getOne(params['id']).forEach( hero => {
        this.hero = hero;
        console.log(this.hero)
      });
    } )
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("update", this.hero);
    this.hService.update(this.hero);
  }

}
