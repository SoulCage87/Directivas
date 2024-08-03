import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tercer-caso',
  templateUrl: './tercer-caso.page.html',
  styleUrls: ['./tercer-caso.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonItem ,FormsModule, IonInput,IonLabel]
})
export class TercerCasoPage {

  dni: string = '';
  showDNI: boolean = false;

  showFunction(): void {
    if(this.dni.length > 14){
      this.showDNI = true;
    }else {
      this.showDNI = false;
    }
  }
}
