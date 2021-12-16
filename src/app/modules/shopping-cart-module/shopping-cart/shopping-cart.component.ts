import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartStateService } from '../../../common/services/cartData.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public productsInCart$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public numberOfProducts$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public sumOfProducts$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private _cartStateService: CartStateService
  ) { }

  ngOnInit(): void {
    this.productsInCart$ = this._cartStateService.getListOfSelectedProducts();
    this.numberOfProducts$ = this._cartStateService.getNumberOfProducts();
    this.sumOfProducts$ = this._cartStateService.getSumOfProducts();
  }

  public removeProduct(product: any): void {
    this._cartStateService.removeFromCart(product);
  }

}
