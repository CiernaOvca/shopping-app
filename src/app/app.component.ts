import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartStateService } from './common/services/cartData.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public numberOfItems$: BehaviorSubject<number>;
  public sumOfProducts$: BehaviorSubject<number>;

  public menuItems = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
  ];

  constructor(
    private _cartStateService: CartStateService
  ) {
    this.numberOfItems$ = this._cartStateService.getNumberOfProducts();
    this.sumOfProducts$ = this._cartStateService.getSumOfProducts();
  }
}
