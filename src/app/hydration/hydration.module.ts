import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HydrationPageRoutingModule } from './hydration-routing.module';

import { HydrationPage } from './hydration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HydrationPageRoutingModule
  ],
  declarations: [HydrationPage]
})
export class HydrationPageModule {}
