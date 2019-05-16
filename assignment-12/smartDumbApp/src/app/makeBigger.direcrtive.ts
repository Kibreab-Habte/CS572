import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit, OnInit} from '@angular/core';
//import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {

  private initSize : number = 20;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('dblclick')
  onDoubleClick() {

    this.initSize +=2;
    this.renderer.setStyle(this.element.nativeElement, 'font-size', `${this.initSize}px`)
  }

}