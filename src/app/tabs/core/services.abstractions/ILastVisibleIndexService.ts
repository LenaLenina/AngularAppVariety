import { ChangeDetectorRef, ElementRef, Injectable, QueryList } from '@angular/core';

export abstract class ILastVisibleIndexService{

  tabElements!: QueryList<ElementRef<HTMLElement>>;
  elementRef!: ElementRef<HTMLElement>;
  cdr!: ChangeDetectorRef;

  abstract onNgAfterViewChecked(): void;
  abstract onWindowResize(): void;
  abstract isIndexMoreThanLastVisibleIndex(index: number): boolean;
  abstract lastVisibleIndexLessThanTabsLength(): boolean;
}
