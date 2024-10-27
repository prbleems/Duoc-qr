import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pe404Page } from './pe404.page';

const routes: Routes = [
  {
    path: '',
    component: Pe404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pe404PageRoutingModule {}
