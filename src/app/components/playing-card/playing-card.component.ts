import { Component, Input } from '@angular/core';

@Component({
  // nom du sélecteur pour faire appel au composant 
  // dans le html parent <app-playing-card></app-playing-card>
  selector: 'app-playing-card',
  standalone:true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
  //attribut d'un monstre présent dans une carte
  @Input() name: string = 'My Monster2';
  @Input() hp: number = 40;
  @Input() figureCaption: string = 'N°001 Monster';
  @Input() attackName: string = 'Geo Impact';
  @Input() attackStrength: number = 60;
  @Input() attackDescription:string= "This is a long description..."
}
