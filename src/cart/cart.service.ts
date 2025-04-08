// src/cart/cart.service.ts
import { Injectable } from '@nestjs/common';
import { CartItem } from './models/cart-item.model';

@Injectable()
export class CartService {
  private cartItems: CartItem[] = [];

  getItems(): CartItem[] {
    return this.cartItems;
  }

  addItem(item: CartItem): CartItem {
    this.cartItems.push(item);
    return item;
  }

  updateItem(id: string, quantity: number): CartItem | null {
    const item = this.cartItems.find((i) => i.id === id);
    if (item) {
      item.quantity = quantity;
      return item;
    }
    return null;
  }

  removeItem(id: string): CartItem | null {
    const index = this.cartItems.findIndex((i) => i.id === id);
    if (index > -1) {
      const removed = this.cartItems.splice(index, 1)[0];
      return removed;
    }
    return null;
  }
}
