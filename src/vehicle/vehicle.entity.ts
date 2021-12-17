import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('vehicles')
export class VehicleEntity {
  public static readonly ID: keyof VehicleEntity = 'id';

  public static readonly DESCRIPITION: keyof VehicleEntity = 'descripition';

  public static readonly THIRD_PARTIES: keyof VehicleEntity = 'thirdParties';

  public static readonly VEHICLE_ID: keyof VehicleEntity = 'vehicleId';

  @PrimaryColumn('integer', { generated: 'increment' })
  public id: number;

  @Column()
  public descripition: string;

  @Column('text', { array: true })
  public thirdParties: string[];

  @Column()
  public vehicleId: number;

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
