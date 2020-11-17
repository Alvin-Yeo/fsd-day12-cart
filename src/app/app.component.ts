import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop-two';

  cart:{ img:string, name:string, qty:number }[] = [];
  
  passAddedItem(passedItem){
    const index = this.cart.findIndex(item => item.name === passedItem.name);
    
    if(index !== -1) {
      this.cart[index].qty += 1;
    } else {
      this.cart.push({
        img: passedItem.img,
        name: passedItem.name,
        qty: 1
      });
    }
  }

  passRemovedItem(passedItemName) {
    const index = this.cart.findIndex(item => item.name === passedItemName);
    this.cart.splice(index, 1);
  }
}
