export abstract class IShoppingCartService {
    
    abstract buy(): void;

    abstract cancel(): void;

    abstract add(): void;

    abstract sub(): void; 

    abstract isBuy(): boolean;
}