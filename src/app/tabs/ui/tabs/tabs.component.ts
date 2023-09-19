import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  HostListener,
  AfterViewChecked,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';

import { ILastVisibleIndexService } from '../../core/services.abstractions/ILastVisibleIndexService';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterViewInit, AfterViewChecked {
  @Input()
  tabs: readonly string[] = [];

  @Output()
  readonly selectedTab = new EventEmitter<string>();

  @ViewChildren('tab')
  readonly tabElements: QueryList<ElementRef<HTMLElement>> = new QueryList();

  constructor(
    public readonly _lastVisibleIndexService: ILastVisibleIndexService,
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this._lastVisibleIndexService.elementRef = this.elementRef;
    this._lastVisibleIndexService.cdr = this.cdr;
  }

  ngAfterViewInit() {
    this._lastVisibleIndexService.tabElements = this.tabElements;
  }

  ngAfterViewChecked() {
    this._lastVisibleIndexService.onNgAfterViewChecked();
  }

  @HostListener('window:resize')
  onResize() {
    this._lastVisibleIndexService.onWindowResize();
  }

  isIndexMoreThanLastVisibleIndex(index: number) {
    return this._lastVisibleIndexService.isIndexMoreThanLastVisibleIndex(index);
  }

  lastVisibleIndexLessThanTabsLength(): boolean {
    return this._lastVisibleIndexService.lastVisibleIndexLessThanTabsLength();
  }
}
