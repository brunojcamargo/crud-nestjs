import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { Model } from 'mongoose';

@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car.name) private model: Model<Car>
  ){}

  create(createCarDto: CreateCarDto) {
    const created = new this.model(createCarDto);
    return created.save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return this.model.findByIdAndUpdate(id, updateCarDto);
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
