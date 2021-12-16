import { NgModule } from '@angular/core';

import { CapitalizeFirstLetterPipe } from '../common/pipes/capitalizeFirstLetter.pipe';


@NgModule({
  declarations: [
    CapitalizeFirstLetterPipe,
  ],
  imports: [
  ],
  exports: [ 
    CapitalizeFirstLetterPipe
  ]
})
export class ShoppingCommonModule { }
