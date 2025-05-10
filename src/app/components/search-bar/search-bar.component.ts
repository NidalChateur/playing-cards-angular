import { Component, model } from '@angular/core';
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

  // model est à la fois un signal input et output
  search = model<string>('Initial');
}
