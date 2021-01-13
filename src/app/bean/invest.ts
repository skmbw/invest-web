/**
 * 投资 bean
 */
export class Invest {
  id: string;
  name: string;
  code: string;
  price: number;
  sharesNumber: number;
  amount: number;
  costPrice: number;
  buyTime: string;
  cost: number;
  transferDate: string;
  selloutTime: string;
  profit: number;
  holdingDay: number;
  state: number;
  selloutPrice: number;
  selloutVolume: number;
  selloutAmount: number;
  refBuyingId: string;
  backup: string;
  remark: string;
  clearance: number;
  investList: Invest[];
}

export class InvestReply {
  code: number;
  message: string;
  name: string;
  key: string;
  data: any;
  investBeanList: Invest[];
}
