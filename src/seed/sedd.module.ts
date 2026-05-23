import { Module } from '@nestjs/common';
import { SeddService } from './sedd.service';
import { SeddController } from './sedd.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  
  controllers: [SeddController],
  providers: [SeddService],
  imports: [
    PokemonModule,
    CommonModule
  ]
})
export class SeddModule {}
