import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() //este decorador sirve para que la MainPage pueda acceder a esta info
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];
}
