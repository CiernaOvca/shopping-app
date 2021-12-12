import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { DataService } from 'src/app/services/dataService.mock';
import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';

@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.scss']
})
export class ProductsOverviewComponent implements OnInit {
  productData$: BehaviorSubject<any> = new BehaviorSubject('');

  private dialogRef: DynamicDialogRef = new DynamicDialogRef;

  constructor(
    private _dataService: DataService,
    private _dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.productData$ = this._dataService.getDataForDataView();

    this.productData$.subscribe((value: any) => {
      console.log('value', value);
    })
  }

  getStockAvailability(product: any): string {
    if (!product)
      return 'none';

    if (product.options.some((o: { quantity: number; }) => o.quantity > 10)){
      return 'in';
    }
    else if (product.options.some((o: { quantity: number; }) => o.quantity > 0)) {
      return 'low';
    }
    return 'none';
  }

  showProductDetail(product: any) {
    this.dialogRef = this._dialogService.open(ProductDetailDialogComponent, {
      header: product.name,
      width: '600px',
      data: product
    });
  }

  buyProduct(product: any) {
    
  }

}
