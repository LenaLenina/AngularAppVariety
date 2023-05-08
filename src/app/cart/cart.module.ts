import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICartRepository } from './application-core/domain/repositories/icart-repository';
import { CartRepository } from './infrastracture/persistence/cart-repository.service';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule
  ],
  exports: [ ],
  providers: [{ provide: ICartRepository, useClass: CartRepository }]
})
export class CartModule { }
