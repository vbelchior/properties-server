import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleController } from './vehicle.controller';
import { VehicleEntity } from './vehicle.entity';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([VehicleEntity])],
  controllers: [VehicleController],
  providers: [VehicleService],
  exports: [],
})
export class VehicleModule {}
