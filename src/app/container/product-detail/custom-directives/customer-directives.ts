import { Directive, ElementRef } from "@angular/core";

@Directive({
selector:'[setBackground]'

})

export class CustomDirectives{
 constructor(element: ElementRef){
 element.nativeElement.style.color ='white';
 }
}