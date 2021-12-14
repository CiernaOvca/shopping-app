import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartEntry } from '../models/cartEntry';
import { DataService } from './dataService.mock';

@Injectable({providedIn: 'root'})
export class CartStateService {
    private _numberOfProducts: number = 0;
    private _sumOfProducts: number = 0;
    private _listOfSelectedProducts: any[] = [];

    private numberOfProducts$: BehaviorSubject<number> = new BehaviorSubject(this._numberOfProducts);
    private sumOfProducts$: BehaviorSubject<number> = new BehaviorSubject(this._sumOfProducts);
    private listOfProducts$: BehaviorSubject<any[]> = new BehaviorSubject(this._listOfSelectedProducts);

    constructor(
        private _dataService: DataService
    ) {
    }


    public getNumberOfProducts(): BehaviorSubject<number> {
        return this.numberOfProducts$;
    }

    public getSumOfProducts(): BehaviorSubject<number> {
        return this.sumOfProducts$;
    }

    public getListOfSelectedProducts(): BehaviorSubject<any[]> {
        return this.listOfProducts$;
    }

    public addToCart(cartEntry: CartEntry) {
        this._listOfSelectedProducts.push(cartEntry);

        this._numberOfProducts++;
        this._sumOfProducts += cartEntry.price;

        this._dataService.increaseQuantity(cartEntry, 'decrease');

        this._notifySubscribers();
    }

    public removeFromCart(cartEntry: CartEntry) {
        this._listOfSelectedProducts.splice(this._listOfSelectedProducts.indexOf(
            cartEntry
        ), 1);
        this._numberOfProducts--;
        this._sumOfProducts -= cartEntry.price;

        this._dataService.increaseQuantity(cartEntry, 'increase');
        
        this._notifySubscribers();
    }

    private _notifySubscribers(): void {
        this.numberOfProducts$.next(this._numberOfProducts);
        this.sumOfProducts$.next(this._sumOfProducts);
        this.listOfProducts$.next(this._listOfSelectedProducts);
    }
}