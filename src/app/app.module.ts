import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// services
import { DialogService } from 'primeng/dynamicdialog';
import { DataService } from './services/dataService.mock';

// modules
import { ProductsModule } from './modules/products-module/products.module';
import { CoreModule } from './core/core.module';

// primeng
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    ProductsModule,

    MenubarModule,
    ButtonModule,

    CoreModule,
  ],
  providers: [
    DialogService,
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
