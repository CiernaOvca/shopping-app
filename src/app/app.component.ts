import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartStateService } from './common/cart-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public numberOfItems$: BehaviorSubject<number>;
  public sumOfProducts$: BehaviorSubject<number>;

  public menuItems = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '' },
  ];

  constructor(
    private _cartStateService: CartStateService
  ) {
    this.numberOfItems$ = this._cartStateService.numberOfProducts$;
    this.sumOfProducts$ = this._cartStateService.sumOfProducts$;
  }
}
