export type OrderStatus = "completed" | "pending" | "failed";
export type OrderType = "buy" | "sell";
export type Metal = "Gold" | "Silver" | "Platinum" | "Palladium";

export type typeOrderHistory = {
  id: string;
  date: string;
  metal: Metal;
  type: OrderType;
  amount: number; // in grams
  pricePerUnit: number; // NGN per gram
  total: number; // amount * pricePerUnit
  currency: "NGN";
  status: OrderStatus;
  method: "Bank Transfer" | "Card" | "USSD";
  account: string;
  reference: string;
  fee: number;
  reason?: string;
};

export const ordersHistory: typeOrderHistory[] = [
  {
    id: "or_001",
    date: "2026-01-01T09:15:00Z",
    metal: "Gold",
    type: "buy",
    amount: 10,
    pricePerUnit: 50000,
    total: 10 * 50000,
    currency: "NGN",
    status: "completed",
    method: "Bank Transfer",
    account: "GTBank •••• 2145",
    reference: "ORD-1GOLD",
    fee: 500
  },
  {
    id: "or_002",
    date: "2026-01-01T12:20:00Z",
    metal: "Silver",
    type: "sell",
    amount: 200,
    pricePerUnit: 650,
    total: 200 * 650,
    currency: "NGN",
    status: "pending",
    method: "USSD",
    account: "Access Bank •••• 8891",
    reference: "ORD-2SILV",
    fee: 100
  },
  {
    id: "or_003",
    date: "2026-01-02T08:50:00Z",
    metal: "Platinum",
    type: "buy",
    amount: 5,
    pricePerUnit: 28000,
    total: 5 * 28000,
    currency: "NGN",
    status: "failed",
    method: "Card",
    account: "UBA •••• 1029",
    reference: "ORD-3PLAT",
    fee: 0,
    reason: "Insufficient funds"
  },
  {
    id: "or_004",
    date: "2026-01-02T10:30:00Z",
    metal: "Palladium",
    type: "sell",
    amount: 2,
    pricePerUnit: 150000,
    total: 2 * 150000,
    currency: "NGN",
    status: "completed",
    method: "Bank Transfer",
    account: "Zenith Bank •••• 3344",
    reference: "ORD-4PALL",
    fee: 200
  },
  {
    id: "or_005",
    date: "2026-01-03T09:50:00Z",
    metal: "Gold",
    type: "buy",
    amount: 15,
    pricePerUnit: 50200,
    total: 15 * 50200,
    currency: "NGN",
    status: "completed",
    method: "USSD",
    account: "First Bank •••• 1122",
    reference: "ORD-5GOLD",
    fee: 500
  },
  {
    id: "or_006",
    date: "2026-01-03T14:10:00Z",
    metal: "Silver",
    type: "buy",
    amount: 300,
    pricePerUnit: 640,
    total: 300 * 640,
    currency: "NGN",
    status: "pending",
    method: "Card",
    account: "GTBank •••• 7788",
    reference: "ORD-6SILV",
    fee: 150
  },
  {
    id: "or_007",
    date: "2026-01-04T11:25:00Z",
    metal: "Platinum",
    type: "sell",
    amount: 7,
    pricePerUnit: 27900,
    total: 7 * 27900,
    currency: "NGN",
    status: "completed",
    method: "Bank Transfer",
    account: "Access Bank •••• 5566",
    reference: "ORD-7PLAT",
    fee: 350
  },
  {
    id: "or_008",
    date: "2026-01-04T15:40:00Z",
    metal: "Palladium",
    type: "buy",
    amount: 1,
    pricePerUnit: 151000,
    total: 1 * 151000,
    currency: "NGN",
    status: "failed",
    method: "USSD",
    account: "UBA •••• 9911",
    reference: "ORD-8PALL",
    fee: 0,
    reason: "Bank declined"
  },
  {
    id: "or_009",
    date: "2026-01-05T09:00:00Z",
    metal: "Gold",
    type: "sell",
    amount: 20,
    pricePerUnit: 49900,
    total: 20 * 49900,
    currency: "NGN",
    status: "completed",
    method: "Card",
    account: "Zenith Bank •••• 6677",
    reference: "ORD-9GOLD",
    fee: 600
  },
  {
    id: "or_010",
    date: "2026-01-05T13:15:00Z",
    metal: "Silver",
    type: "sell",
    amount: 150,
    pricePerUnit: 660,
    total: 150 * 660,
    currency: "NGN",
    status: "completed",
    method: "Bank Transfer",
    account: "First Bank •••• 2233",
    reference: "ORD-10SILV",
    fee: 100
  },

 
];
