import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Car {
  @Field(() => Date, { nullable: false })
  pickDate: Date;

  @Field(() => Date, { nullable: false })
  returnDate: Date;
}
