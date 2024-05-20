import { Component ,EventEmitter,Input, Output } from '@angular/core';
import { Product } from '../../model/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() productListComp: ProductListComponent;
   
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  


  product: Product

  closePopup() {
    
  }
getSingleProduct(){
  this.product  = this.productListComp.selectedProduct ;
 
}


 
 
}
