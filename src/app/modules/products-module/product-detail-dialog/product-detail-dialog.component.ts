import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { distinctUntilChanged } from 'rxjs/operators';

import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@UntilDestroy()
@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.scss']
})
export class ProductDetailDialogComponent implements OnInit {
  public isDetail: boolean = true;
  public product: any;
  public isOutOfStock: boolean = false;

  // dropdown
  public colors: any;
  public storages: any;
  public powers: any;
  public formGroup: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) { }

  ngOnInit(): void {
    this.product = this.config.data.productDetail;
    this.isDetail = this.config.data.type === 'detail';

    if (!this.isDetail) {
      this.formGroup = this._getFormGroup();

      this._handleColorDropdown();

      this.formGroup.controls.color.valueChanges.pipe(
        distinctUntilChanged(),
        untilDestroyed(this)
      ).subscribe((selection) => {
        this._handleColorSelectionChange(selection.name);
      });
    }
  }

  addToCart(): void {
    this.dialogRef.close({
      ...this.formGroup.value,
      id: this.product.id
    });
  }

  private _handleColorDropdown() {
    this.colors = this.product.options.map(
      (option: any) => {
        return {
          name: option.color,
          code: option.color
        }
      }
    );
  }

  // get data for product options - powers or storages
  // check if there is enough quantity for a user to buy it
  private _handleColorSelectionChange(selectedColor: string) {
    if(!selectedColor)
      return;

    const productOptions = 
      this.product.options
        .find((option: { color: string; quantity: number; }) => option.color === selectedColor && option.quantity > 0);

    if (productOptions?.storage) {
      this.storages = 
        productOptions.storage
          .map((storage: any) => {
            return {
              name: storage,
              code: storage
            }
          });

      this.formGroup.controls.storage.enable();
    }
    else {
      this.storages = null;
      this.formGroup.controls.storage.patchValue(null);
      this.formGroup.controls.storage.disable();
    }

    if (productOptions?.power) {
      this.powers = 
        productOptions.power
          .map((power: any) => {
            return {
              name: power,
              code: power
            }
          });
  
      this.formGroup.controls.power.enable();
    }
    else {
      this.powers = null;
      this.formGroup.controls.power.patchValue(null);
      this.formGroup.controls.power.disable();
    }

    // if there is no option for storage and power AND 
    // the quantity of any it is 0 THEN
    // it's out of stock
    const product = this.product.options.find((p: { color: string; }) => p.color === selectedColor);
    if ((!this.storages && !this.powers) &&
        (product.storage && product.quantity === 0) || 
        (product.power && product.quantity === 0) || 
        (product.quantity === 0)
    ) {
      this.isOutOfStock = true;
    }
    else {
      this.isOutOfStock = false;
    }
  }

  private _getFormGroup(): FormGroup {
    return new FormGroup({
      color: new FormControl({ value: null, disabled: false }, Validators.required),
      power: new FormControl({ value: null, disabled: true }, Validators.required),
      storage: new FormControl({ value: null, disabled: true }, Validators.required),
    });
  }
}
