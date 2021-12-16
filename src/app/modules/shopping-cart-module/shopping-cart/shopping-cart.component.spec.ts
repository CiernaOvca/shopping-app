import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TableModule, Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CartStateService } from '../../../common/services/cartData.service';

import { ShoppingCartComponent } from './shopping-cart.component';

const dummyCartStateService = {
  getListOfSelectedProducts() {
    
  },
  getNumberOfProducts() {

  },
  getSumOfProducts() {

  },
  removeFromCart() {
  }
}

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,

        ReactiveFormsModule,
        FormsModule,

        ButtonModule,
        TableModule,
        CardModule,
        TagModule,

        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ 
        ShoppingCartComponent,
      ],
      providers: [
        { provide: DialogService, useValue: {} },
        { provide: DynamicDialogRef, useValue: {} },
        { provide: CartStateService, useValue: dummyCartStateService },
        { provide: Table, useValue: {}}
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ShoppingCartComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call \'removeFromCart\' when calling removeProduct', () => {
    const spy = jest.spyOn(fixture.debugElement.injector.get(CartStateService), 'removeFromCart');

    fixture.componentInstance.removeProduct({});

    expect(spy).toHaveBeenCalled();
  });
});
