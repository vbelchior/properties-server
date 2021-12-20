import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClaimController } from './claim.controller';
import { ClaimEntity } from './claim.entity';
import { ClaimService } from './claim.service';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([ClaimEntity])],
  controllers: [ClaimController],
  providers: [ClaimService],
  exports: [],
})
export class ClaimModule {}
