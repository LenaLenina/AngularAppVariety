import { Component, Input } from '@angular/core';
import { Product } from 'src/app/products/product-list/application-core/domain/entities/Product';
import { ICanNotify } from 'src/app/products/product-alerts/application-core/services.abstractions/ICanNotify';
import { IProductController } from 'src/app/products/product-list/presentation/controllers.abstract/IProductController';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {

  constructor(private _canNotify: ICanNotify, private _productController: IProductController) { }
  
  @Input() product!: Product;

   get canNotify(): boolean {
    return this._canNotify.canNotify(this.product);
  }

  notify() {
    window.alert('You will be notified when the product goes on sale');
    this._productController.share();
  }
}
