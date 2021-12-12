import { BehaviorSubject } from 'rxjs';
import { CartEntry } from './models/cartEntry';


export class CartStateService {
    public numberOfProducts$: BehaviorSubject<number> = new BehaviorSubject(0);
    public sumOfProducts$: BehaviorSubject<number> = new BehaviorSubject(0);

    private _numberOfProducts: number = 0;
    private _sumOfProducts: number = 0;

    public getNumberOfProducts(): BehaviorSubject<number> {
        return this.numberOfProducts$;
    }

    public getSumOfProducts(): BehaviorSubject<number> {
        return this.sumOfProducts$;
    }

    public addToCart(cartEntry: CartEntry) {
        this._numberOfProducts += cartEntry.numberOfProducts;
        this._sumOfProducts += cartEntry.sumOfProducts;

        this.numberOfProducts$.next(this._numberOfProducts);
        this.sumOfProducts$.next(this._sumOfProducts);
    }

    public removeFromCart(cartEntry: CartEntry) {
        this._numberOfProducts -= cartEntry.numberOfProducts;
        this._sumOfProducts -= cartEntry.sumOfProducts;

        this.numberOfProducts$.next(this._numberOfProducts);
        this.sumOfProducts$.next(this._sumOfProducts);
    }
}