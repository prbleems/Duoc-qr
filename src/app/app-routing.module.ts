import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { noIngresadoGuard } from './no-ingresado.guard';
import { ingresadoGuard } from './ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [ingresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [noIngresadoGuard]
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then(m => m.RestablecerPageModule),
    canActivate: [noIngresadoGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then(m => m.QrPageModule),
    canActivate: [ingresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule),
    canActivate: [noIngresadoGuard]
  },
  

  {
    path: 'lista',
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule),
    canActivate: [noIngresadoGuard]
  },
  {
    path: 'pe404',
    loadChildren: () => import('./pe404/pe404.module').then(m => m.Pe404PageModule)
  },

  {
    path: '**',
    redirectTo: 'pe404',
    pathMatch: 'full'
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }