import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
@Input() public hero: Hero;
  constructor(private heroService: HeroService, 
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
  }

}
