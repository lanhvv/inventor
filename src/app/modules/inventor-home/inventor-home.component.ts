import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-inventor-home',
  templateUrl: './inventor-home.component.html',
  styleUrls: ['./inventor-home.component.css']
})



export class InventorHomeComponent {


  public labelInfo: any = [
    {name: "NEW ITEM", value: 741, unit: "Qty"},
    {name: "NEW ORDERS", value: 123, unit: "Qty"},
    {name: "REFUNDS", value: 12, unit: "Qty"},
    {name: "MESSAGE", value: 1, unit: "Qty"},
    {name: "GROUPS", value: 4, unit: "Qty"}
  ];

  public stock: any = [
    {name:"Low stock items", value: 12},
    {name:"Item categories", value: 6},
    {name:"Refunded items", value: 1},
  ];

  public stores: any = [
    {name: "Manchester, UK", employees: 23, items: 308, orders: 2},
    {name: "Manchester, UK", employees: 23, items: 308, orders: 2},
    {name: "Manchester, UK", employees: 23, items: 308, orders: 2},
    {name: "Manchester, UK", employees: 23, items: 308, orders: 2}
  ];
}


@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value: any): any[] {
    return Object.keys(value);
  }
}
