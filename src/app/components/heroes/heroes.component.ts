import { Component, OnInit } from '@angular/core';
import { HeroeesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroeesService,
              private router: Router,
              private activedRoute: ActivatedRoute) { 

  this.activedRoute.params.subscribe(params => {
    this.heroes = params.termino ? this._heroesService.buscarHeroes(params.termino) : this._heroesService.getHeroes();
  });
}

  ngOnInit() {
    console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
    console.log(idx);
  }

}
