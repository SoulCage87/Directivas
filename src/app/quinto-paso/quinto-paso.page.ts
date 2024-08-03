import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-quinto-paso',
  templateUrl: './quinto-paso.page.html',
  styleUrls: ['./quinto-paso.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonLabel]
})
export class QuintoPasoPage {
 
color: string = '#2aff2b'
line: string = 'center'

}
