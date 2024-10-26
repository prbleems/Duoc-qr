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
      correo: ['', [Validators.required, Validators.email]],
      nuevaContrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    // Cualquier inicialización adicional
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.formularioRestablecer.valid) {
      // Lógica para restablecer la contraseña
      console.log(this.formularioRestablecer.value);
    } else {
      // Manejo de errores
      console.log('Formulario no válido');
    }
  }
}