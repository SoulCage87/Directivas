import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-primer-caso',
  templateUrl: './primer-caso.page.html',
  styleUrls: ['./primer-caso.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonItem]
})
export class PrimerCasoPage  {

  contador: number = 0;
  Mensaje: boolean = false;

  ShowMessage(): void {
    this.contador ++
    if(this.contador >= 18) {
      this.Mensaje = true;
    }
  }

  Desincrementar():void {
    this.contador --
    if(this.contador < 18) {
      this.Mensaje = false;
    }
  }
}
