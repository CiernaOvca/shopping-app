import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DataService } from 'src/app/services/dataService.mock';

import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { ProductsOverviewComponent } from './products-overview.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductDetailDialogComponent,
    ProductsOverviewComponent,
  ],
  imports: [
    CommonModule,
    
    ProductsRoutingModule,
  ],
  providers: [ DataService ]
})
export class ProductsModule { }
