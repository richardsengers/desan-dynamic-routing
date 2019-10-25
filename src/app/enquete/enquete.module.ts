import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnqueteRoutingModule } from './enquete-routing.module';
import {EnqueteComponent} from './enquete/enquete.component';


@NgModule({
  declarations: [EnqueteComponent],
  imports: [
    CommonModule,
    EnqueteRoutingModule
  ]
})
export class EnqueteModule { }
