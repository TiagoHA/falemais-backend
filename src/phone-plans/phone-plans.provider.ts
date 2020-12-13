import { DATABASE_CONNECTION, PHONE_PLANS_REPOSITORY } from 'src/database/database.constants';
import { Connection } from 'typeorm';
import { PhonePlan } from './entities/phone-plan.entity';

export const phonePlansProviders = [
  {
    provide: PHONE_PLANS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(PhonePlan),
    inject: [DATABASE_CONNECTION],
  },
];
