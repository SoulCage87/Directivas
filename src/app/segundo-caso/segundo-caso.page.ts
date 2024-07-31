import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-segundo-caso',
  templateUrl: './segundo-caso.page.html',
  styleUrls: ['./segundo-caso.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem]
})
export class SegundoCasoPage {

  animales: string[] = ['perro', 'gato', 'paloma', 'raton', 'cerdo']
  BestVideoGames: string[] = ['Breath of the Wild','Minecraft','The Legend of Zelda: Ocarina of Time', 'Tetris', 'Fortnite']

}
