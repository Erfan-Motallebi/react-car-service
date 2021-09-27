import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;
@Schema({ collection: 'Car' })
export class Car {
  @Prop({ required: true, default: new Date() })
  pickDate: Date;

  @Prop({ required: true, default: new Date() })
  returnDate: Date;
}

export const CarSchema = SchemaFactory.createForClass(Car);
