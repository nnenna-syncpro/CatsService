import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  //controllers and providers automatically addedd to the module by nest CLI
  imports: [HttpModule], //add HttpModule to make Http requests
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
