import { Component, Input } from '@angular/core';
import { IConditionToNotify } from '../../../core/services.abstractions/i-condition-to-notify-service';
import { Product } from '../../../core/domain/entities/product';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {

  constructor(private _conditionToNotify: IConditionToNotify) { }
  
  @Input() product!: Product;

  conditionToNotifyIsEqual(): boolean {
    return this._conditionToNotify.isEqual(this.product);
  }

  notify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
