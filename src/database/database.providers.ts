import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from './database.constants';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'falemais',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
