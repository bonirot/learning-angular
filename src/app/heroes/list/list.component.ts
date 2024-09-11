import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Iron Man',
    'Hulk',
    'She-Hulk',
    'Thor',
  ];

  public deletedHero?: string; // puede ser igual a un string vacío o dejarlo como opcional con el '?'

  removeLastHero(): void {
    // this.heroNames.pop();
    // const deletedHero = this.heroNames.pop();
    this.deletedHero = this.heroNames.pop();
  }
}
