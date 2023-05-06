import { IDistinctArrayService } from '../Services.Abstractions/IDistinctService';

export class DistinctArrayService implements IDistinctArrayService {

  public distinct(arr: number[]): number[] {
    const result = [];

    for (let i = 0; i < arr.length; i++) 
      if (result.indexOf(arr[i]) === -1)
        result.push(arr[i]);

    return result;
  }
}
