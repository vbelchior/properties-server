import { VehicleEntity } from 'src/vehicle/vehicle.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('claims')
export class ClaimEntity {
  public static readonly ID: keyof ClaimEntity = 'id';

  public static readonly DESCRIPITION: keyof ClaimEntity = 'descripition';

  public static readonly THIRD_PARTIES: keyof ClaimEntity = 'thirdParties';

  public static readonly VEHICLE_ID: keyof ClaimEntity = 'vehicleId';

  @PrimaryColumn('integer', { generated: 'increment' })
  public id: number;

  @Column()
  public descripition: string;

  @Column('text', { array: true })
  public thirdParties: string[];

  @Column()
  public vehicleId: number;

  @ManyToOne(() => VehicleEntity, (vehicle) => vehicle.id)
  public vehicle: VehicleEntity;

  constructor(json?: any) {
    if (json != undefined && json != null) {
      const keys: Array<string> = Object.keys(json);
      if (keys.includes('id')) this.id = json.id ? Number(json.id) : json.id;
      if (keys.includes('descripition'))
        this.descripition = json.descripition
          ? String(json.descripition)
          : json.descripition;
      if (keys.includes('thirdParties'))
        this.thirdParties = json.thirdParties
          ? Array(String(json.thirdParties))
          : json.thirdParties;
      if (keys.includes('vehicleId'))
        this.vehicleId = json.vehicleId
          ? Number(json.vehicleId)
          : json.vehicleId;
    }
  }
}
