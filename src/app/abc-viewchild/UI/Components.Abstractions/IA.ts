import { IB } from "./IB";
import { IC } from "./IC";

export abstract class IA {

    public bComponent!: IB;
    public cComponent!: IC;

    abstract funA(): void;

    public callB(): void {
        this.funA();
        this.bComponent.funB();
    }

    public callC(): void {
        this.funA();
        this.cComponent.funC();
    }
}
