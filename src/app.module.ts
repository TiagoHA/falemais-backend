import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonePlansModule } from './phone-plans/phone-plans.module';

@Module({
  imports: [PhonePlansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
