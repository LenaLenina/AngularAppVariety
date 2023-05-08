import { BehaviorSubject } from "rxjs";

export abstract class ISharedService{
    abstract isVisibleSource: BehaviorSubject<boolean>;
}
