import { Inject, Injectable } from "@angular/core";
import { INumberEqualService } from "src/app/NumberEqualModule/ApplicationCore/Services.Abstractions/INumberEqualService";

@Injectable()
export abstract class ICounter
{
    constructor(@Inject(INumberEqualService) protected _equalService: INumberEqualService) { }

    abstract count(numbers: number[]): number;
}
