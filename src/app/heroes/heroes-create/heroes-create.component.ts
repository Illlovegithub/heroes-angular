import { Component, EventEmitter, Output } from '@angular/core';
import {Hero} from '../hero.model'
import { NgForm } from '@angular/forms';
import { HeroesService } from '../heroes.service';

@Component({
    selector: 'app-heroes-create',
    templateUrl: './heroes-create.component.html',
    styleUrls: ['./heroes-create.component.css']
})

export class HeroesCreateComponent {
    heroName: string = '';
    heroImagePath: string = '';
    heroesService: HeroesService;

    constructor(heroesService: HeroesService) {
        this.heroesService = heroesService;
    }
    onAddHero(form: NgForm){ //Gets called when form submits
        const newHero: Hero = {
            id: null,
            name: form.value.name,
            imagePath: form.value.imagePath
        }
    
        this.heroesService.addHero(newHero);
    };

    
    
}