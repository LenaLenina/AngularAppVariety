export abstract class IShoppingCartController {

    abstract isBuy(): boolean;

    abstract buy(): void;

    abstract cancel(): void;
}
