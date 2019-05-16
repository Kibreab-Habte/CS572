import { Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements OnChanges{
  
  @Input('isVisible') visible: boolean;

  constructor(private element: ElementRef, private renderer: Renderer2) {}


  ngOnChanges(changes: SimpleChanges): void {
    
    const visibility = changes.visible.currentValue == true ? 'block' : 'none';
		this.renderer.setStyle(this.element.nativeElement, 'display', visibility);
  }
}
