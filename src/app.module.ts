import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClaimModule } from '@app/claim/claim.module';
import { UserModule } from '@app/user/user.module';
import { VehicleModule } from '@app/vehicle/vehicle.module';
import { AddressModule } from '@app/address/address.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    UserModule,
    ClaimModule,
    VehicleModule,
    AddressModule,
  ],
})
export class AppModule {}
