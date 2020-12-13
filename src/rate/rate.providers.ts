import { DATABASE_CONNECTION, RATE_REPOSITORY } from 'src/database/database.constants';
import { Connection } from 'typeorm';
import { Rate } from './entities/rate.entity';

export const rateProviders = [
  {
    provide: RATE_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Rate),
    inject: [DATABASE_CONNECTION],
  },
];
