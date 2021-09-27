import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarService } from './car.service';
import { CarResolver } from './graphql/car.resolver';
import { Car, CarSchema } from './mongo/car.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Car.name,
        schema: CarSchema,
      },
    ]),
  ],
  providers: [CarService, CarResolver],
})
export class CarModule {}
