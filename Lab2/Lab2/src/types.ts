// src/types.ts
export type Transaction = {
    id: number;
    date: string;
    amount: number;
    description: string;
    location: string;
    type: "Credit" | "Debit" | "Refund"; // ✅ Fix: Explicit enum-like types
    category: string;
  };
  