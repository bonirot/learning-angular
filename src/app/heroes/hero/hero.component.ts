import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Iron Man';
  public age: number = 45;

  //GETTERS es un método de clase pero se usa como una propiedad

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
    //TODO
    //throw 'Método no implementado'; estas dos cosas se escriben cuando hay cosas por hacer
  }

  changeAge(): void {
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'Iron Man';
    this.age = 45;
  }
}
