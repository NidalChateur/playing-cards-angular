import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  // 1. permet d'accepter comme un Input() [ngModel] dans le html
  // et d'avoir un event ngModelChange que l'on peu écouter
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  count: number = 0;
  increaseCount() {
    this.count++;
  }

  // on passe comme paramètre à la balise input hmtl : la valeur Search 
  @Input() search = 'Initial';

  // création d'un event qui renvoi un string
  @Output() searchChange = new EventEmitter<string>

  // fonction appelé quand par l'écouteur html ngModelChange
  // déclenche l'event searchChange et lui passe 
  // en paramètre la valeur de changement
  updateSearch(value: string){
    this.searchChange.emit(value)
  }
}
