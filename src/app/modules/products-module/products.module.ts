import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';

import { ShoppingCommonModule } from '../../common/common.module';

import { DataService } from '../../common/services/dataService.mock';

import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { ProductsOverviewComponent } from './products-overview.component';
import { ProductsRoutingModule } from './products-routing.module';

// primeng components
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
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
    ShoppingCommonModule,
    
    ProductsRoutingModule,

    ReactiveFormsModule,
    FormsModule,

    DataViewModule,
    DropdownModule,
    TabViewModule,
    ButtonModule,
    TableModule,
    CardModule,
    TagModule,
  ],
  providers: [ 
    DataService,
  ]
})
export class ProductsModule { }
