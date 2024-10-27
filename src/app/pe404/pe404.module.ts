import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pe404PageRoutingModule } from './pe404-routing.module';

import { Pe404Page } from './pe404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pe404PageRoutingModule
  ],
  declarations: [Pe404Page]
})
export class Pe404PageModule {}
