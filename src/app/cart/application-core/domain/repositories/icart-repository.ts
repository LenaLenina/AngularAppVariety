import { Product } from "src/app/ProductsModule/ApplicationCore/Domain/Entities/Product";

export abstract class ICartRepository{
    abstract addToCart(product: Product): void;
    abstract getItems(): Product[];
    abstract clearCart(): Product[];
}
