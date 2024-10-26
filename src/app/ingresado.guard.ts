import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import {ActivatedRouteSnapshot}from '@angular/router';
import {RouterStateSnapshot}from '@angular/router';
import {UrlTree}from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ingresadoGuard implements CanActivate {

  constructor(public navCtrl: NavController){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingresado')){
        return true;
      }else{
        this.navCtrl.navigateRoot('/login');        
        return false;
      }
  }
  
}