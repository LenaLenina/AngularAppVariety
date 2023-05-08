import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/ProductsModule/ApplicationCore/Domain/Entities/Product';
import { IProductsRepository } from 'src/app/ProductsModule/ApplicationCore/Domain/Repositories/IProductsRepository';
import { ICartRepository } from 'src/app/cart/application-core/domain/repositories/icart-repository';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, 
    private _productsRepository: IProductsRepository,
    private _cartRepository: ICartRepository) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = this._productsRepository.getProducts().find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this._cartRepository.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
