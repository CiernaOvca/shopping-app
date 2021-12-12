import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/services/dataService.mock';

@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.scss']
})
export class ProductsOverviewComponent implements OnInit {
  productData$: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(
    private _dataService: DataService,
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

}
