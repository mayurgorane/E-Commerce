import { Component,ElementRef,EventEmitter, Output, ViewChild } from '@angular/core';
 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {



searchText: string = '';

@ViewChild('searchText') searchInputText: ElementRef;

@Output()
searchProduct : EventEmitter<string> = new EventEmitter<string>();
 
onSearchProduct(){
  this.searchProduct.emit(this.searchText);
}


updateSearch(event:any){
  this.searchText= event.target.value;
}

getProducts( ) {

  
  this.searchProduct.emit(this.searchInputText.nativeElement.value);
  }
   



}
