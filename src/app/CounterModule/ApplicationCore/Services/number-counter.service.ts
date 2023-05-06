import { Injectable } from '@angular/core';
import { ICounter } from '../Services.Abstractions/ICounter';
import { INumberEqualService } from '../../../NumberEqualModule/ApplicationCore/Services.Abstractions/INumberEqualService';

@Injectable()
export class NumberCounterService implements ICounter {

  constructor(private _equalService: INumberEqualService) { }

  public count(numbers: number[]): number {
    var count = 0;

    for (const number of numbers)
      if (this._equalService.isEqual(number)) 
        count += 1;

    return count;
  }
}
