import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioregistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertcontroller:AlertController) { 
    this.formularioregistro = this.fb.group({
      'nombre':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required),
      'confirmacionpassword':new FormControl("",Validators.required)
    });


  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioregistro.value;
    
    
    if(this.formularioregistro.invalid){
      const alert = await this.alertcontroller.create({
        header : 'Datos incompletos',
        message : 'Tienes que llenar los datos',
        buttons : ['aceptar']
      });

      await alert.present();
      return;
    }
    var usuario = {
      nombre : f.nombre,
      password : f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));

  
  }

}

