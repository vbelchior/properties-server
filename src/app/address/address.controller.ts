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

import { AddressEntity } from './address.entity';
import { AddressService } from './address.service';

@Controller('addresses')
export class UserController {
  constructor(private userService: AddressService) {}

  @Post()
  create(@Body() entity: AddressEntity): Promise<AddressEntity> {
    return firstValueFrom(this.userService.create(entity));
  }

  @Get('/:id')
  public retrieve(@Param('id') id: number): Promise<AddressEntity> {
    return firstValueFrom(this.userService.retrieve(id));
  }

  @Patch('/:id')
  public async update(
    @Param('id') id: number,
    @Body() entity: AddressEntity,
  ): Promise<any> {
    return firstValueFrom(this.userService.update(id, entity));
  }

  @Delete('/:id')
  public delete(@Param('id') id: number): Promise<any> {
    return firstValueFrom(this.userService.delete(id));
  }

  @Get()
  public filter(): Promise<AddressEntity[]> {
    return firstValueFrom(this.userService.filter());
  }

  @Get('/count/value')
  public count(): Promise<number> {
    return;
  }
}
