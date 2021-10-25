import {
    Controller,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger';
  import { TranslationService } from '../../shared/services/translation.service';
import { SignalsService } from './signals.service';
  
  @Controller('signals')
  @ApiTags('signals')
  export class SignalsController {
    constructor(
      private signalsService: SignalsService,
      private readonly translationService: TranslationService,
    ) {}
  

  }
  