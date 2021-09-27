import { Car } from './../mongo/car.schema';
import { Args, Field, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarService } from '../car.service';

@Resolver(() => Car)
export class CarResolver {
  constructor(private readonly CarService: CarService) {}

  @Query(() => [Car])
  async getDate(): Promise<Car[]> {
    return this.CarService.getDate();
  }

  @Mutation(() => Car)
  async postDate(
    @Args({ name: 'pickDate', type: () => Date }) pickDate: Date,
    @Args({ name: 'returnDate', type: () => Date }) returnType: Date,
  ): Promise<Car> {
    return this.CarService.postDate(pickDate, returnType);
  }

  @Field()
  returnDate: Date;
}
