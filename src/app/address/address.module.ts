import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './address.controller';
import { AddressEntity } from './address.entity';
import { AddressService } from './address.service';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([AddressEntity])],
  controllers: [UserController],
  providers: [AddressService],
  exports: [],
})
export class AddressModule {}
