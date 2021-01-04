/**
 * k线历史 bean
 */
export class KlineHistory {
  id: string;
  name: string;
  code: string;
  alphaCode: string;
  fullName: string;
  transferDate: string;
  openPrice: number;
  closePrice: number;
  yesterdayClosePrice: number;
  highestPrice: number;
  lowestPrice: number;
  fiveDayPrice: number;
  tenDayPrice: number;
  twentyDayPrice: number;
  thirtyDayPrice: number;
  sixtyDayPrice: number;
  yearPrice: number;
  marketIncreaseRate: number;
  marketIndex: number;
  transferAmount: number;
  transferVolume: number;
  increaseAmount: number;
  increaseRate: number;
  turnoverRate: number;
}
