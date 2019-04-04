import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor(private activateRoute: ActivatedRoute,
              private _heroesService: HeroeesService) { 
    this.activateRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params.id);
    });
  }

  ngOnInit() {
  }

  getLogo(): string {
    const casa = this.heroe.casa;
    if (casa === 'DC') {
      return 'assets/img/dc.png';
    }
    return 'assets/img/marvel.png';
  }

}
