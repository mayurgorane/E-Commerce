import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
 
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { CustomDirectives } from './container/product-detail/custom-directives/customer-directives';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
      SearchComponent,
      ProductListComponent,
      ProductComponent,
      FilterComponent,
      ProductDetailComponent,
      CustomDirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
