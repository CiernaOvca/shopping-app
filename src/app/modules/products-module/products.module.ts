import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DataService } from 'src/app/services/dataService.mock';

import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { ProductsOverviewComponent } from './products-overview.component';
import { ProductsRoutingModule } from './products-routing.module';

// primeng components
import { FieldsetModule } from 'primeng/fieldset';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    ProductDetailDialogComponent,
    ProductsOverviewComponent,
  ],
  imports: [
    CommonModule,
    
    ProductsRoutingModule,

    FieldsetModule,
    DataViewModule,
    ButtonModule,
    TableModule,
    CardModule,
    TagModule,
  ],
  providers: [ 
    DataService 
  ]
})
export class ProductsModule { }
