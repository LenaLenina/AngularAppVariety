import { IA } from "./IA";
import { IC } from "./IC";

export abstract class IB {

    public aComponent!: IA;
    public cComponent!: IC;

    abstract funB(): void;

    public callA(): void {
        this.funB();
        this.aComponent.funA();
    }

    public callC(): void {
        this.funB();
        this.cComponent.funC();
    }
}
