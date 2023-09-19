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
} from '@angular/core';

const MORE_BUTTON_WIDTH = 65;

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterViewChecked {
  @Input()
  tabs: readonly string[] = [];

  @Output()
  readonly selectedTab = new EventEmitter<string>();

  @ViewChildren('tab')
  readonly tabElements: QueryList<ElementRef<HTMLElement>> = new QueryList();

  lastVisibleIndex = Infinity;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {
    const index = this.getLastVisibleIndex();

    if (index === this.lastVisibleIndex) {
      return;
    }

    this.lastVisibleIndex = index;
    this.cdr.detectChanges();
  }

  @HostListener('window:resize')
  onResize() {
    this.lastVisibleIndex = this.getLastVisibleIndex();
  }

  private getLastVisibleIndex(): number {
    const tabs = this.tabElements.map((tab) => tab.nativeElement);
    const { clientWidth } = this.elementRef.nativeElement;
    const width = clientWidth - MORE_BUTTON_WIDTH;

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
