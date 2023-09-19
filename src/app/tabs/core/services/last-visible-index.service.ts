import { ChangeDetectorRef, ElementRef, QueryList } from '@angular/core';
import { ILastVisibleIndexService } from '../services.abstractions/ILastVisibleIndexService';

const MORE_BUTTON_WIDTH = 65;

export class LastVisibleIndexService implements ILastVisibleIndexService {

  tabElements!: QueryList<ElementRef<HTMLElement>>;
  elementRef!: ElementRef<HTMLElement>;
  cdr!: ChangeDetectorRef;
  moreButtonWidth: number = MORE_BUTTON_WIDTH;

  lastVisibleIndex = Infinity;

  public getLastVisibleIndex(): number {
    const tabs = this.getTabsArray();
    const containerWidth = this.getContainerWidth();
  
    return this.calculateLastVisibleIndex(tabs, containerWidth);
  }

  private getTabsArray(): HTMLElement[] {
    if (!this.tabElements) return [];
    return this.tabElements.map((tab) => tab.nativeElement);
  }

  private getContainerWidth(): number {
    if (!this.elementRef || !this.elementRef.nativeElement) return 0;
    return this.elementRef.nativeElement.clientWidth - this.moreButtonWidth;
  }

  private calculateLastVisibleIndex(tabs: HTMLElement[], containerWidth: number): number {
    let accumulatedWidth = 0;
    let lastVisibleIndex = 0;
  
    for (let index = 0; index < tabs.length; index++) {
      accumulatedWidth += tabs[index].scrollWidth;
  
      if (accumulatedWidth >= containerWidth) return lastVisibleIndex;
  
      lastVisibleIndex = index;
    }
  
    return Infinity;
  }  

  public isIndexMoreThanLastVisibleIndex(index: number): boolean {
    return index > this.lastVisibleIndex;
  }

  public lastVisibleIndexLessThanTabsLength(): boolean {
    if(!this.tabElements) return false;

    return this.lastVisibleIndex < this.tabElements.length;
  }

  public onNgAfterViewChecked(): void {
    const index = this.getLastVisibleIndex();

    if (index === this.lastVisibleIndex) return;

    this.lastVisibleIndex = index;
    this.cdr.detectChanges();
  }

  public onWindowResize(): void {
    this.lastVisibleIndex = this.getLastVisibleIndex();
  }
}
