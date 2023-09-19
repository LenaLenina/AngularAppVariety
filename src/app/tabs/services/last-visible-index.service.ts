import { ElementRef, Injectable, QueryList } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LastVisibleIndexService {

  tabElements!: QueryList<ElementRef<HTMLElement>>;
  elementRef!: ElementRef<HTMLElement>;
  moreButtonWidth!: number;
  
  public getLastVisibleIndex(
    
    ): number {

    if (!this.tabElements || !this.elementRef || !this.elementRef.nativeElement) return Infinity;

    const tabs = this.tabElements.map((tab) => tab.nativeElement);
    const { clientWidth } = this.elementRef.nativeElement;
    const width = clientWidth - this.moreButtonWidth;

    let accumulatedWidth = 0;
    let lastVisibleIndex = 0;

    for (let index = 0; index < tabs.length; index++) {
      accumulatedWidth += tabs[index].scrollWidth;

      if (accumulatedWidth >= width) {
        return lastVisibleIndex;
      }

      lastVisibleIndex = index;
    }

    return Infinity;
  }
}
