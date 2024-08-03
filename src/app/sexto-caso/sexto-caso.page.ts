import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sexto-caso',
  templateUrl: './sexto-caso.page.html',
  styleUrls: ['./sexto-caso.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton , CommonModule, FormsModule]
})
export class SextoCasoPage {

  colorButton: string = 'dark';
}
