// src/cart/cart.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CartItem } from './models/cart-item.model';
import { CartService } from './cart.service';

@Resolver(() => CartItem)
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  // Consulta para obtener los artículos del carrito
  @Query(() => [CartItem])
  cartItems(): CartItem[] {
    return this.cartService.getItems();
  }

  // Mutación para agregar un artículo al carrito
  @Mutation(() => CartItem)
  addItem(
    @Args('id') id: string,
    @Args('name') name: string,
    @Args('quantity') quantity: number,
    @Args('price') price: number,
  ): CartItem {
    const newItem: CartItem = { id, name, quantity, price };
    return this.cartService.addItem(newItem);
  }

  // Mutación para actualizar la cantidad de un artículo
  @Mutation(() => CartItem, { nullable: true })
  updateItem(
    @Args('id') id: string,
    @Args('quantity') quantity: number,
  ): CartItem | null {
    return this.cartService.updateItem(id, quantity);
  }

  // Mutación para eliminar un artículo
  @Mutation(() => CartItem, { nullable: true })
  removeItem(@Args('id') id: string): CartItem | null {
    return this.cartService.removeItem(id);
  }
}
