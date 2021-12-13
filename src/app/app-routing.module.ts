import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./modules/products-module/products.module').then(m => m.ProductsModule) 
  },
  { 
    path: 'shopping-cart',
    loadChildren: () => import('./modules/shopping-cart-module/shopping-cart.module').then(m => m.ShoppingCartModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
