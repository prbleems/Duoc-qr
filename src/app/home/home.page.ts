import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alertButtons = ['Action'];

  constructor(private navCtrl: NavController) {}

volverallogin() {
  // Cierra la sesión eliminando el valor ingresado
  localStorage.removeItem('ingresado');
  // Redirige al login
  this.navCtrl.navigateRoot('/login');
 }
}
