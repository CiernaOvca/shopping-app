import { NgModule } from '@angular/core';

import { CapitalizeFirstLetterPipe } from 'src/app/common/pipes/capitalizeFirstLetter.pipe';


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
