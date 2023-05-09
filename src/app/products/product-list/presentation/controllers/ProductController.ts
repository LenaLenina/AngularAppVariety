import { Injectable } from "@angular/core";
import { Product } from "../../application-core/domain/entities/Product";
import { IProductController } from "../controllers.abstract/IProductController";
import { IProductsRepository } from "../../application-core/domain/repositories/IProductsRepository";

@Injectable()
export class ProductController implements IProductController {

    constructor(private _repository: IProductsRepository) {}
    
    public getProducts(): Product[] {
        return this._repository.getProducts();
    }

    public share(): void {
        window.alert('The product has been shared!');
    }

}
