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

import { ClaimEntity } from './claim.entity';
import { ClaimService } from './claim.service';

@Controller('claims')
export class ClaimController {
  constructor(private claimService: ClaimService) {}

  @Post()
  create(@Body() entity: ClaimEntity): Promise<ClaimEntity> {
    return firstValueFrom(this.claimService.create(entity));
  }

  @Get('/:id')
  public retrieve(@Param('id') id: number): Promise<ClaimEntity> {
    return firstValueFrom(this.claimService.retrieve(id));
  }

  @Patch('/:id')
  public async update(
    @Param('id') id: number,
    @Body() entity: ClaimEntity,
  ): Promise<any> {
    return firstValueFrom(this.claimService.update(id, entity));
  }

  @Delete('/:id')
  public delete(@Param('id') id: number): Promise<any> {
    return firstValueFrom(this.claimService.delete(id));
  }

  @Get()
  public filter(): Promise<ClaimEntity[]> {
    return firstValueFrom(this.claimService.filter());
  }

  @Get('/count/value')
  public count(): Promise<number> {
    return;
  }
}
