import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products:Product[] = [];

  constructor(private productService:ProductService){}
  ngOnInit(): void {
   this.productService.getProducts().then((products)=>{
    this.products = products;
   })
  }
  title = 'ModernWebDev4BHWII';

  OncLick(){
    alert("test")
  }
}
