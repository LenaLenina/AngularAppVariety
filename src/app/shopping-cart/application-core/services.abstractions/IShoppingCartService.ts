export abstract class IShoppingCartService {
    
    abstract buy(): void;

    abstract cancel(): void;

    abstract isBuy(): boolean;
}