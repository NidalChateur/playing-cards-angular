import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monter.model';

@Component({
  // nom du sélecteur pour faire appel au composant
  // dans le html parent <app-playing-card></app-playing-card>
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css',
})
export class PlayingCardComponent {
  //attribut d'un monstre présent dans une carte
  // que l'on pourra passer en attribut dans le html du composant parent
  // sinon ce sera le monster par défaut 
  // @Input() monster: Monster = new Monster();

  //signaux :
  monster: InputSignal<Monster>= input(new Monster()) 

}


  // avec le présence de {required:true}, 
  // cela signifie que le paramètre monster est toujours requis dans le html de composant parent
  //@Input({required:true}) monster: Monster = new Monster();

  //on peut également définir un alias pour monster
  //@Input({alias:'my-monster'}) monster: Monster = new Monster();

  // transform permet de transformer les attributs d'un objet
  // @Input(
  //   {transform:(value:Monster)=>{
  //     value.hp= value.hp/2

  //     return value
  //   }}) monster: Monster = new Monster();