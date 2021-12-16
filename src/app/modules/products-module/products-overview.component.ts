import { Component, OnInit } from '@angular/core';

import { distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { DataService } from '../../common/services/dataService.mock';

import { CartStateService } from '../../common/services/cartData.service';

@UntilDestroy()
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
    private _cartStateService: CartStateService
  ) { }

  ngOnInit(): void {
    this.productData$ = this._dataService.getDataForDataView();
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
      data: {
        productDetail: product,
        type: 'detail'
      }
    });
  }

  buyProduct(product: any) {
    this._dialogService.open(ProductDetailDialogComponent, {
      header: product.name,
      width: '600px',
      data: {
        productDetail: product,
        type: 'buy'
      }
    }).onClose.pipe(
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe((data) => {
      if (data)
        this.addProductToCart(data);
    });
  }

  addProductToCart(data: any) {
    const product = 
      this.productData$
        .getValue()
        .find((product: { id: any; }) => product.id === data.id);

    this._cartStateService.addToCart({
      price: Number(product.price),
      productId: Number(data.id),
      name: product.name,
      color: data.color.name,
      power: data.power?.name,
      storage: data.storage?.name,
      icon: product.icon
    });
  }
}
