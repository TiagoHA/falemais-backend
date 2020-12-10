import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonePlansModule } from './phone-plans/phone-plans.module';
import { RateModule } from './rate/rate.module';

@Module({
  imports: [PhonePlansModule, RateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
