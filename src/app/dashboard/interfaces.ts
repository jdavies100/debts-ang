export interface Debt {
  id: string;
  amount: number;
  note: string;
  timestamp: string;
}

export interface Person {
  id: string;
  name: string;
  debts: Debt[];
}
