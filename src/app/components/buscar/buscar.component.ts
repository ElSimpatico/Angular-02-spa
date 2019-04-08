import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroeesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
  constructor(private activateRouter: ActivatedRoute,
              private _heroesService: HeroeesService) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes(params.termino);
    });
  }

}
