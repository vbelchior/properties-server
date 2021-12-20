import { UserEntity } from '@app/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('vehicles')
export class VehicleEntity {
  public static readonly ID: keyof VehicleEntity = 'id';

  @PrimaryColumn('integer', { generated: 'increment' })
  public id: number;

  @Column()
  public model: string;

  @Column('integer')
  public year: number;

  @Column()
  public licensePlate: string;

  @Column()
  public manufacturer: string;

  @Column('integer')
  public userId: number;

  constructor(json?: any) {
    if (json != undefined && json != null) {
      const keys: Array<string> = Object.keys(json);
      if (keys.includes('id')) this.id = json.id ? Number(json.id) : json.id;
      if (keys.includes('model'))
        this.model = json.model ? String(json.model) : json.model;
      if (keys.includes('year'))
        this.year = json.year ? Number(json.year) : json.year;
      if (keys.includes('licensePlate'))
        this.licensePlate = json.licensePlate
          ? String(json.licensePlate)
          : json.licensePlate;
      if (keys.includes('manufacturer'))
        this.manufacturer = json.manufacturer
          ? String(json.manufacturer)
          : json.manufacturer;
      if (keys.includes('manufacturer'))
        this.manufacturer = json.manufacturer
          ? String(json.manufacturer)
          : json.manufacturer;
      if (keys.includes('userId'))
        this.userId = json.userId ? Number(json.userId) : json.userId;
    }
  }
}
