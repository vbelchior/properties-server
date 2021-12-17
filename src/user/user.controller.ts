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

import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() entity: UserEntity): Promise<UserEntity> {
    return firstValueFrom(this.userService.create(entity));
  }

  @Get('/:id')
  public retrieve(@Param('id') id: number): Promise<UserEntity> {
    return firstValueFrom(this.userService.retrieve(id));
  }

  @Patch('/:id')
  public async update(
    @Param('id') id: number,
    @Body() entity: UserEntity,
  ): Promise<any> {
    return firstValueFrom(this.userService.update(id, entity));
  }

  @Delete('/:id')
  public delete(@Param('id') id: number): Promise<any> {
    return firstValueFrom(this.userService.delete(id));
  }

  @Get()
  public filter(): Promise<UserEntity[]> {
    return firstValueFrom(this.userService.filter());
  }

  @Get('/count/value')
  public count(): Promise<number> {
    return;
  }
}
