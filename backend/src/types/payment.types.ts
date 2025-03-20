export interface BreakdownItem {
  amount: number;
  method: string;
}

export interface Payment {
  id: string;
  totalAmount: number;
  breakdown: BreakdownItem[];
  createdAt: Date;
}
