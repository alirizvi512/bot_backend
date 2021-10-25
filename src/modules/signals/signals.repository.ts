import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { SignalsEntity } from './signals.entity';

@EntityRepository(SignalsEntity)
export class SignalsRepository extends Repository<SignalsEntity> {}
