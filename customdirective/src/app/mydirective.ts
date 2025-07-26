import { Directive,ElementRef,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[mydir]'
})
export class Mydirective {

  constructor(private elementRef:ElementRef) { }

 @HostBinding('style.backgroundColor')mycol:string='';
 @HostBinding('style.cursor')mycursor:string='';
 @HostBinding('style.fontWeight')fontWeight:string='bold';
 @HostBinding('style.removeStyle')removeStyle:string='';

  @HostListener('mouseover') pro() {
    // Logic to execute when the mouse enters the host element
    //this.elementRef.nativeElement.style.backgroundColor='blue';
    //this.elementRef.nativeElement.style.cursor='pointer';
    this.mycol='blue';
    this.mycursor='pointer';
  }

   @HostListener('mouseleave') pro2() {
    // Logic to execute when the mouse enters the host element
     //this.elementRef.nativeElement.style.backgroundColor='red';
    // this.elementRef.nativeElement.style.fontWeight='bold';
   // this.elementRef.nativeElement.removeStyle='cursor';
    this.mycol='red';
    this.removeStyle='cursor';
    
  }
  



}
