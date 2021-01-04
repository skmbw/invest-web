/**
 * 股票 bean
 */
export class Stock {
  id: string;
  name: string;
  code: string;
  alphaCode: string;
  fullName: string;
  currentPrice: number;
  openPrice: number;
  yesterdayClosePrice: number;
  increaseRate: number;
  marketValue: number;
  peRatio: number;
  dynamicPeRatio: number;
  ttmPeRatio: number;
  roe: number;
  pbRatio: number;
  equity: number;
}
