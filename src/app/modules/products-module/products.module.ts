import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';

import { ShoppingCommonModule } from 'src/app/common/common.module';

import { DataService } from 'src/app/services/dataService.mock';

import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { ProductsOverviewComponent } from './products-overview.component';
import { ProductsRoutingModule } from './products-routing.module';

// primeng components
import { FieldsetModule } from 'primeng/fieldset';
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

    FieldsetModule,
    DataViewModule,
    DropdownModule,
    TabViewModule,
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
