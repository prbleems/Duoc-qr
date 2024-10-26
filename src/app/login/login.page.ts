import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertcontroller:AlertController,
    private router: Router,
    public navCtrl: NavController ) { 

    this.formularioLogin = this.fb.group({
      'nombre':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

  async ingresar() {
    var f = this.formularioLogin.value;
    var usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      if (usuario.nombre == f.nombre && usuario.password == f.password) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.navCtrl.navigateRoot(['/home']);
      } else {
        const alert = await this.alertcontroller.create({
          header: 'Datos incorrectos',
          message: 'Tienes que llenar todos los datos',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      
    }
  } 

}
