import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// services
import { DialogService } from 'primeng/dynamicdialog';
import { DataService } from './services/dataService.mock';

import { CoreModule } from './core/core.module';
import { ProductsModule } from './modules/products-module/products.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    ProductsModule,

    CoreModule,
  ],
  providers: [
    DialogService,
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
