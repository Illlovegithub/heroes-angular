import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Hero} from '../hero.model'
import { HeroesService } from '../heroes.service';
@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html'
})

export class HeroesListComponent implements OnInit, OnDestroy {
    heroes: Hero[] = [];
    private heroesSub: Subscription;
    heroesService: HeroesService;
    constructor(heroesService: HeroesService){
        this.heroesService = heroesService;
    }

    ngOnInit() { //At start of app
        this.heroesService.getHeroes();  //Will allways be empty at init
        this.heroesSub = this.heroesService.
            getHeroUpdateListener(). //Returns the array as observable
            subscribe((heroes: Hero[]) => { 
                this.heroes = heroes;
            });
    }

    ngOnDestroy() {
        this.heroesSub.unsubscribe();
    }

}