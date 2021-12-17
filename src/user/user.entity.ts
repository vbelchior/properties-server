import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  public static readonly USERNAME: string = 'username';

  public static readonly PASSWORD: string = 'password';

  public static readonly ID: keyof UserEntity = 'id';

  public static readonly NAME: keyof UserEntity = 'name';

  public static readonly SECRET: keyof UserEntity = 'secret';

  public static readonly PHONE: keyof UserEntity = 'phone';

  public static readonly EMAIL: keyof UserEntity = 'email';

  public static readonly EXTRA: keyof UserEntity = 'extra';

  public static readonly FEATURES: keyof UserEntity = 'features';

  public static readonly ADDRESS_ID: keyof UserEntity = 'addressId';

  public static readonly INSURANCE_COMPANY_ID: keyof UserEntity =
    'insuranceCompanyId';

  @PrimaryColumn('integer', { generated: 'increment' })
  public id: number;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public secret: string;

  @Column()
  public phone: number;

  @Column('json')
  public extra?: object;

  @Column('json')
  public features: object[];

  @Column()
  public addressId: number;

  @Column()
  public insuranceCompanyId: number;

  constructor(json?: any) {
    if (json != undefined && json != null) {
      const keys: Array<string> = Object.keys(json);
      if (keys.includes('id')) this.id = json.id ? Number(json.id) : json.id;
      if (keys.includes('name'))
        this.name = json.name ? String(json.name) : json.name;
      if (keys.includes('email'))
        this.email = json.email ? String(json.email) : json.email;
      if (keys.includes('secret'))
        this.secret = json.secret ? String(json.secret) : json.secret;
      if (keys.includes('phone'))
        this.phone = json.phone ? Number(json.phone) : json.phone;
      if (keys.includes('extra'))
        this.extra = json.extra ? Object(json.extra) : json.extra;
      if (keys.includes('features'))
        this.features = json.features
          ? Array(Object(json.features))
          : json.features;
      if (keys.includes('addressId'))
        this.addressId = json.addressId
          ? Number(json.addressId)
          : json.addressId;
      if (keys.includes('insuranceCompanyId'))
        this.insuranceCompanyId = json.insuranceCompanyId
          ? Number(json.insuranceCompanyId)
          : json.insuranceCompanyId;
    }
  }
}
