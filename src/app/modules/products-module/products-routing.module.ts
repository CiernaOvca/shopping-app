import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductsOverviewComponent } from './products-overview.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductsOverviewComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
