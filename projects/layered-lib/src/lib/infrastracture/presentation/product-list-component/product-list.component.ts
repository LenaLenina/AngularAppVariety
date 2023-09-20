import { Component } from '@angular/core';
import { IProductsRepository } from '../../../core/domain/repositories/i-products-repository';
import { Product } from '../../../core/domain/entities/Product';


@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor(private _repository: IProductsRepository) { }

  public getProducts(): Product[] {
    return this._repository.getProducts();
  }

  share() {
    window.alert('The product has been shared!');
  }
}
