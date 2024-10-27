import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  formularioRestablecer: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioRestablecer = this.formBuilder.group({
      usuario: ['', Validators.required],
      nuevaContrasena: ['', [Validators.required, Validators.minLength(6)]],
      codigoRecuperacion: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.formularioRestablecer.valid) {
      const usuarioData = JSON.parse(localStorage.getItem('usuario') || '{}');
      const { usuario, codigoRecuperacion, nuevaContrasena } = this.formularioRestablecer.value;

      if (usuario === usuarioData.nombre && codigoRecuperacion === usuarioData.codigoRecuperacion) {
        usuarioData.password = nuevaContrasena;
        localStorage.setItem('usuario', JSON.stringify(usuarioData));
        console.log('Contraseña actualizada correctamente');
      } else {
        console.log('Código de recuperación o usuario incorrecto');
      }
    } else {
      console.log('Formulario no válido');
    }
  }
}
