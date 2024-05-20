import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { AppServerModule } from '../app.module.server';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

searchProduct: string  = '';

@ViewChild('productList') productListComponent: ProductListComponent;
  


onSearchProduct(value: string) {
 this.searchProduct = value;
}





}