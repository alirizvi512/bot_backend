import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

import { SignalsController } from './signals.controller';
import { SignalsRepository } from './signals.repository';
import { SignalsService } from './signals.service';

@Module({
  imports: [ScheduleModule.forRoot(), TypeOrmModule.forFeature([SignalsRepository])],
  controllers: [SignalsController],
  exports: [SignalsService],
  providers: [SignalsService],
})
export class SignalsModule {}
