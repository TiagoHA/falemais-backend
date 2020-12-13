import { Injectable } from '@nestjs/common';
import { PriceReport } from 'src/price-report/entities/price-report.entity';

@Injectable()
export class PlanCostService {
  finalPrice(report: PriceReport) {
    const withPlan = this.withPlan(report);
    const withoutPlan = this.withoutPlan(report);

    return { ...report, withPlan, withoutPlan };
  }

  finalPriceArr(reports: PriceReport[]) {
    const result = reports.map((report) => this.finalPrice(report));
    return result;
  }

  private withoutPlan(report: PriceReport) {
    const { minutesSpent, rate } = report;

    const result = minutesSpent * rate?.price;
    return result;
  }

  private withPlan(report: PriceReport) {
    const {
      minutesSpent,
      phonePlan: { minutes, percentageAdditionalMinuteCost },
      rate: { price },
    } = report;

    if (!minutes || minutesSpent < minutes) return 0;

    const additionalMinutes = minutesSpent - minutes;
    const percentageCost = percentageAdditionalMinuteCost / 100 + 1;
    const result = additionalMinutes * (price * percentageCost);
    return result;
  }
}
