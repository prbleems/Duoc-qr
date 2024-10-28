import { Component, OnInit } from '@angular/core';
import { Proveedor1Service } from '../../app/providers/proveedor1.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  usuarios: any[] = []; // Inicialización del arreglo

  constructor(public navCtrl: NavController, public proveedor: Proveedor1Service) {}

  ngOnInit() {
    this.proveedor.getPosts().subscribe(
      (data) => {
        console.log('Datos recibidos:', data); // Verifica que los datos lleguen aquí
        this.usuarios = data; // Asigna correctamente los datos a usuarios
      },
      (error) => {
        console.log('Error al obtener los usuarios:', error);
      }
    );
  }
}