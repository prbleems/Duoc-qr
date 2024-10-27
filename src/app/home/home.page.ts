import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  alertButtons = ['Action'];
  nombreUsuario: string = '';
  codigoRecuperacion: string = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    const usuarioData = localStorage.getItem('usuario');
    if (usuarioData) {
      const usuario = JSON.parse(usuarioData);
      this.nombreUsuario = usuario.nombre;
      this.codigoRecuperacion = usuario.codigoRecuperacion;
    }
  }

  volverallogin() {
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('/login');
  }
}
