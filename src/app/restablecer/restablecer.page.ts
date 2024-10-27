import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  formularioRestablecer: FormGroup;

  constructor(private formBuilder: FormBuilder, private alertController: AlertController) {
    this.formularioRestablecer = this.formBuilder.group({
      usuario: ['', Validators.required],
      nuevaContrasena: ['', Validators.required],
      codigoRecuperacion: ['', Validators.required]
    });
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.formularioRestablecer.valid) {
      const usuarioData = JSON.parse(localStorage.getItem('usuario') || '{}');
      const { usuario, codigoRecuperacion, nuevaContrasena } = this.formularioRestablecer.value;

      if (usuario === usuarioData.nombre && codigoRecuperacion === usuarioData.codigoRecuperacion) {
        usuarioData.password = nuevaContrasena;
        localStorage.setItem('usuario', JSON.stringify(usuarioData));

        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'La contraseña ha sido actualizada correctamente.',
          buttons: ['Aceptar']
        });
        await alert.present();
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Código de recuperación o usuario incorrecto.',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Formulario no válido',
        message: 'Por favor, complete todos los campos correctamente.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
}