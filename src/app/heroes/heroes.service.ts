import { Hero} from './hero.model'
import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { HttpClientModule, HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class HeroesService {
    private heroes: Hero[] = [];
    private heroesUpdated = new Subject<Hero[]>();
    private http: HttpClient;
    constructor(http: HttpClient) {
        this.http = http;
    }
    getHeroes() {
        
        this.http.get<Hero[]>("https://localhost:44388/api/hero")
            .subscribe((heroes) => {
                this.heroes = heroes;
                this.heroesUpdated.next([...this.heroes]);
                console.log(heroes.length);
            });
    }

    getHeroUpdateListener() { //Subject returns observable. 
        return this.heroesUpdated.asObservable(); //Gets subscribed to on init
        
    }
    addHero(hero: Hero) { //Instead of manipulating our original heroarray we make a copy and returns that.
        this.http.post<Hero>("https://localhost:44388/api/hero", hero)
            .subscribe((responseData) => {
                console.log(responseData);
            })
        this.heroes.push(hero); //Adds new hero to original array
        this.heroesUpdated.next([...this.heroes]); //Adds new array to subject
    }
}