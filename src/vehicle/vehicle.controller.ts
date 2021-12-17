import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { firstValueFrom } from 'rxjs';

import { VehicleEntity } from './vehicle.entity';
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Post()
  create(@Body() entity: VehicleEntity): Promise<VehicleEntity> {
    return firstValueFrom(this.vehicleService.create(entity));
  }

  @Get('/:id')
  public retrieve(@Param('id') id: number): Promise<VehicleEntity> {
    return firstValueFrom(this.vehicleService.retrieve(id));
  }

  @Patch('/:id')
  public async update(
    @Param('id') id: number,
    @Body() entity: VehicleEntity,
  ): Promise<any> {
    return firstValueFrom(this.vehicleService.update(id, entity));
  }

  @Delete('/:id')
  public delete(@Param('id') id: number): Promise<any> {
    return firstValueFrom(this.vehicleService.delete(id));
  }

  @Get()
  public filter(): Promise<VehicleEntity[]> {
    return firstValueFrom(this.vehicleService.filter());
  }

  @Get('/count/value')
  public count(): Promise<number> {
    return;
  }
}
