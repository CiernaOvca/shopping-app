import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShoppingCartRoutingModule } from './shopping-cart.routing';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule, 

    ShoppingCartRoutingModule,

    ButtonModule,
    TableModule,
  ],
})
export class ShoppingCartModule { }
