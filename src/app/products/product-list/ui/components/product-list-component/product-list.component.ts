import { Component } from '@angular/core';
import { Product } from 'src/app/products/product-list/application-core/domain/entities/Product';
import { IProductController } from '../../../presentation/controllers.abstract/IProductController';


@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor(private _controller: IProductController) { }

  public getProducts(): Product[] {
    return this._controller.getProducts();
  }

  share() {
    this._controller.share();
  }
}
