import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository } from 'typeorm';
import { VehicleEntity } from './vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(VehicleEntity)
    private claimRepository: Repository<VehicleEntity>,
  ) {}

  public create(entity: VehicleEntity): Observable<VehicleEntity> {
    return from(this.claimRepository.save(new VehicleEntity(entity)));
  }

  public retrieve(id: number): Observable<VehicleEntity> {
    return from(this.claimRepository.findOne(id));
  }

  public update(id: number, entity: VehicleEntity): Observable<any> {
    return from(this.claimRepository.update(id, new VehicleEntity(entity)));
  }

  public delete(id: number): Observable<DeleteResult> {
    return from(this.claimRepository.delete(id));
  }

  public filter(): Observable<VehicleEntity[]> {
    const query: object = {};
    return from(this.claimRepository.find({ where: query }));
  }
}
