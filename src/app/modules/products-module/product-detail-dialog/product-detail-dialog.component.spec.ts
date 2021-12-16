import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { CapitalizeFirstLetterPipe } from '../../../common/pipes/capitalizeFirstLetter.pipe';
import { CartStateService } from '../../../common/services/cartData.service';
import { DataService } from '../../../common/services/dataService.mock';

import { ProductDetailDialogComponent } from './product-detail-dialog.component';
describe('ProductDetailDialogComponent', () => {
  let component: ProductDetailDialogComponent;
  let fixture: ComponentFixture<ProductDetailDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        
        ReactiveFormsModule,
        FormsModule,

        DropdownModule,
        ButtonModule,

        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ 
        ProductDetailDialogComponent,
        CapitalizeFirstLetterPipe,
      ],
      providers: [
        { provide: DynamicDialogRef, useValue: {}},
        { provide: CartStateService, useValue: {}},
        { provide: DataService, useValue: {}},
        { provide: DynamicDialogConfig, useValue: {}}
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailDialogComponent);
  }));

  it('should create ProductDetailDialogComponent', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });
});
