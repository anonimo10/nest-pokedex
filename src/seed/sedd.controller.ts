import { Controller, Get, } from '@nestjs/common';
import { SeddService } from './sedd.service';


@Controller('seed')
export class SeddController {
  constructor(private readonly seddService: SeddService) {}



  @Get()
  excecuteSeed() {
    return this.seddService.executeSeed();
  }

 
}
