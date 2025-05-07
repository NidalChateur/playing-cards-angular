import { Component } from '@angular/core';
// 1. importer ici le composant enfant pour pouvoir y faire appel dans le composant enfant
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monter.model';

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
  //le ! signifie que la variable sera initialisé plus tard (dans le constructeur)
  monster1!: Monster;

  // on définit les attribut du monster1 ici dans le constructeur
  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Pik';
    this.monster1.hp = 40;
    this.monster1.figureCaption="N°002 Pik"
    // pour le reste on garde les paramètre par défaut
  }
}
