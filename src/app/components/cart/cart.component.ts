import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // items:{ name:string, qty:number }[] = [
  //   { name: 'Test1', qty: 2 },
  //   { name: 'Test2', qty: 1 },
  // ];

  @Input() items;
  @Output() onItemRemove = new EventEmitter<string>();

  removeItem($event, itemName){
    this.onItemRemove.next(itemName);
  }
}
