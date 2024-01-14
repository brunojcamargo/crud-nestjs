import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Car extends Document {

  @Prop()
  modelo: string;

  @Prop()
  ano: number;

  @Prop()
  placa: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
