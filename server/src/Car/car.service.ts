import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from './mongo/car.schema';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  async postDate(pickDate: Date, returnDate: Date): Promise<Car> {
    const newCarDate = this.carModel.create({
      pickDate,
      returnDate,
    });
    return (await newCarDate).save();
  }

  async getDate(): Promise<Car[]> {
    return this.carModel.find({});
  }
}
