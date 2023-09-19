import { ChangeDetectorRef, ElementRef, Injectable, QueryList } from '@angular/core';
import { ILastVisibleIndexService } from '../services.abstractions/ILastVisibleIndexService';

const MORE_BUTTON_WIDTH = 65;

export class LastVisibleIndexService implements ILastVisibleIndexService {

  tabElements!: QueryList<ElementRef<HTMLElement>>;
  elementRef!: ElementRef<HTMLElement>;
  cdr!: ChangeDetectorRef;
  moreButtonWidth: number = MORE_BUTTON_WIDTH;

  lastVisibleIndex = Infinity;
  
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

  public isIndexMoreThanLastVisibleIndex(index: number): boolean {
    console.log("isIndexMoreThanLastIndex");
    return index > this.lastVisibleIndex;
  }

  public lastVisibleIndexLessThanTabsLength(): boolean {
    if(!this.tabElements) return false;

    return this.lastVisibleIndex < this.tabElements.length;
  }

  public onNgAfterViewChecked() {
    const index = this.getLastVisibleIndex();

    if (index === this.lastVisibleIndex) {
      return;
    }

    this.lastVisibleIndex = index;
    this.cdr.detectChanges();
  }

  public onWindowResize() {
    this.lastVisibleIndex = this.getLastVisibleIndex();
  }
}
