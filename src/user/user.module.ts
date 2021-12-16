import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([UserEntity])],
  controllers: [],
  providers: [],
  exports: [],
})
export class UserModule {}
