import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioregistro: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.formularioregistro = this.fb.group({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmacionpassword: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}

  async guardar() {
    var f = this.formularioregistro.value;

    if (this.formularioregistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    const codigoRecuperacion = Math.random().toString(36).substring(2, 8).toUpperCase();

    const usuario = {
      nombre: f.nombre,
      password: f.password,
      codigoRecuperacion
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('ingresado', 'true');
    this.navCtrl.navigateRoot(['/home']);

    const alert = await this.alertController.create({
      header: '¡Cuenta creada!',
      message: `Tu cuenta ha sido creada exitosamente. Tu código de recuperación es: ${codigoRecuperacion}`,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
