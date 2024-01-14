import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './car/car.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:toor@mongo:27017/crud?authSource=admin'), CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
