import { Component } from '@angular/core';
// 1. importer ici le composant enfant pour pouvoir y faire appel dans le composant enfant
import { PlayingCardComponent } from './components/playing-card/playing-card.component';

// paramètres du composant qui est la classe AppComponent
@Component({
  // sélecteur qui permet de faire appel au composant dans le html parent via <app-root></app-root>
  selector: 'app-root',
  // signifie qu'il n'a pas besoin de module pour exister (toujours à true sur les nouvelle versions)
  standalone: true,
  // 2. importer ici le composant enfant pour pouvoir y faire appel dans le composant enfant
  imports: [PlayingCardComponent],
  // chemin relatif du template html
  templateUrl: './app.component.html',
  //chemin relatif du fichier style
  styleUrl: './app.component.css',
})
export class AppComponent {


}
