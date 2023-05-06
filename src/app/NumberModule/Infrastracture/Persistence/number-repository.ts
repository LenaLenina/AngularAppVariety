import { INumberRepository } from '../../ApplicationCore/Domain/Repositories/INumberRepository';


export class NumberRepository implements INumberRepository {

  arr: number[] = [1, 2, 3, 4, 1, 1, 1, 1, 2, 3, 5, 6, 7, 7, 8, 9, 9, 9];

  public getArrayOfNumbers(): number[] {
    return this.arr;
  }
}
