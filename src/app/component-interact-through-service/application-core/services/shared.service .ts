import { ISharedService } from '../services.abstractions/ishared.service';

export class SharedService implements ISharedService {

  private _currentVisible: boolean = false;

  public GetVisible(): boolean {
    return this._currentVisible;
  }

  public ChangeVisible(): void {
    this._currentVisible = !this._currentVisible;
  }

}
