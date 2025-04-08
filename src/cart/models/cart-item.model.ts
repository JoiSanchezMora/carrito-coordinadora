import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CartItem {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  quantity: number;

  @Field()
  price: number;
}
