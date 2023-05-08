import { BehaviorSubject } from 'rxjs';
import { ISharedService } from '../services.abstractions/ishared.service';

export class SharedService implements ISharedService {
  isVisibleSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
