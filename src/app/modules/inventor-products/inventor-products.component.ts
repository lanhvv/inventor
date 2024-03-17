import { Component } from '@angular/core';

@Component({
  selector: 'app-inventor-products',
  templateUrl: './inventor-products.component.html',
  styleUrls: ['./inventor-products.component.css']
})
export class InventorProductsComponent {
  public products: any = [{img: '#', name: "T-shirt", status: 1, stockInfo: 10, category: "T-shirt", location: 1}];
}
