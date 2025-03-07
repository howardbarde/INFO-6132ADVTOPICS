import React, { createContext, useState, ReactNode } from "react";

export type Transaction = {
  id: number;
  date: string;
  amount: number;
  description: string;
  location: string;
  type: "Credit" | "Debit" | "Refund";
  category: "Shopping" | "Travel" | "Utility";
};

type TransactionContextType = {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
};

export const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
