import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // colors: Array<string> = [
  //   'red',
  //   'yellow',
  //   'purple'
  // ]

  @HostListener('click') onMouseClick() {
    // let index = Math.floor(Math.random() * this.colors.length);
    // this.el.nativeElement.style.backgroundColor = this.colors[index];
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    this.el.nativeElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  constructor(
    private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
