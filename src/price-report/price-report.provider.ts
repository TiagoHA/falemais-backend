import { DATABASE_CONNECTION, PRICE_REPORT_REPOSITORY } from 'src/database/database.constants';
import { Connection } from 'typeorm';
import { PriceReport } from './entities/price-report.entity';

export const priceReportProvider = [
  {
    provide: PRICE_REPORT_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(PriceReport),
    inject: [DATABASE_CONNECTION],
  },
];
