import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from './database.constants';

export const databaseProviders = {
  provide: DATABASE_CONNECTION,
  useFactory: async () =>
    await createConnection({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: +process.env.PORT || 5432,
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_NAME || 'falemais',
      synchronize: process.env.DATABASE_SYNC === 'true',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
};
