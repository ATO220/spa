import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  
  heroes:any[] = [];
  termino:string;

  constructor( private _heroesService:HeroesService,
               private router:Router,
               private activatedRoute:ActivatedRoute
  ) {
     this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
    })
   }
  ngOnInit() {
  }

  verHeroe( idx:number ) {
    this.router.navigate([ '/heroe',idx ]);
  }
}
