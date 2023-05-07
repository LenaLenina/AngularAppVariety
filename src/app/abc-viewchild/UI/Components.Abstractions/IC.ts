import { IA } from "./IA";
import { IB } from "./IB";

export abstract class IC {

    public aComponent!: IA;
    public bComponent!: IB;

    abstract funC(): void;

    public callA(): void {
        this.funC();
        this.aComponent.funA();
    }

    public callB(): void {
        this.funC();
        this.bComponent.funB();
    }
}
