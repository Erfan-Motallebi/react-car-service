import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CarModule } from './Car/car.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/GraphQLSchema.gql'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/car-service-nestjs'),
  CarModule],
})
export class AppModule {}
