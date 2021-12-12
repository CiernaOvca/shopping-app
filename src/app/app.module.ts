import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// app components
import { ProductsOverviewComponent } from './components/products-overview/products-overview.component';

// services
import { DialogService } from 'primeng/dynamicdialog';
import { DataService } from './services/dataService.mock';

// primeng components
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,

    ProductsOverviewComponent,
  ],
  imports: [
    AppRoutingModule,

    CoreModule,

    DataViewModule,
    ButtonModule,
    TableModule,
    TagModule
  ],
  providers: [
    DialogService,
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
