import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { TypeUtil } from '@commons/utils';
import { DeleteResult, Repository } from 'typeorm';
import { ClaimEntity } from './claim.entity';

@Injectable()
export class ClaimService {
  constructor(
    @InjectRepository(ClaimEntity)
    private claimRepository: Repository<ClaimEntity>,
  ) {}

  public create(entity: ClaimEntity): Observable<ClaimEntity> {
    return from(this.claimRepository.save(new ClaimEntity(entity)));
  }

  public retrieve(id: number): Observable<ClaimEntity> {
    return from(this.claimRepository.findOne(id));
  }

  public update(id: number, entity: ClaimEntity): Observable<any> {
    return from(this.claimRepository.update(id, new ClaimEntity(entity)));
  }

  public delete(id: number): Observable<DeleteResult> {
    return from(this.claimRepository.delete(id));
  }

  public filter(): Observable<ClaimEntity[]> {
    const query: object = {};
    return from(this.claimRepository.find({ where: query }));
  }
}
