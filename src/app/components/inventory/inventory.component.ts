import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items:{ img:string, name:string }[] = [
    { img: '1.png', name: 'Item 1' },
    { img: '2.png', name: 'Item 2' },
    { img: '3.png', name: 'Item 3' },
    { img: '4.png', name: 'Item 4' }
  ];

  @Output() onItemAdd = new EventEmitter<string>();

  addItem($event, item) {
    this.onItemAdd.next(item);
  }
}
