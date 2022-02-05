import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpen]'
})
export class OpenDirective {

  constructor() { }
  @HostBinding('class.side-menu-active') isOpened = false;
  @HostListener('click') click(){
    this.isOpened = !this.isOpened;
  }
}
