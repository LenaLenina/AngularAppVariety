import { Component } from '@angular/core';
import { Product } from 'src/app/ProductsModule/ApplicationCore/Domain/Entities/Product';
import { IProductsRepository } from 'src/app/ProductsModule/ApplicationCore/Domain/Repositories/IProductsRepository';


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
