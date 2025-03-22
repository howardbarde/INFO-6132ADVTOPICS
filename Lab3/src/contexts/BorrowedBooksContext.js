import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const BorrowedBooksContext = createContext();

export const useBorrowedBooks = () => {
  return useContext(BorrowedBooksContext);
};

export const BorrowedBooksProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // Load borrowed books from Firestore when app starts
  useEffect(() => {
    const loadBorrowedBooks = async () => {
      try {
        const docRef = doc(db, 'borrowedBooks', 'allBorrowedBooks');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBorrowedBooks(docSnap.data().books);
        }
      } catch (error) {
        console.error('Error loading borrowed books: ', error);
      }
    };

    loadBorrowedBooks();
  }, []);

  // Sync with Firestore when borrowedBooks change
  useEffect(() => {
    const syncBorrowedBooks = async () => {
      try {
        const docRef = doc(db, 'borrowedBooks', 'allBorrowedBooks');
        await updateDoc(docRef, { books: borrowedBooks });
      } catch (error) {
        console.error('Error syncing borrowed books: ', error);
      }
    };

    if (borrowedBooks.length > 0) {
      syncBorrowedBooks();
    }
  }, [borrowedBooks]);

  return (
    <BorrowedBooksContext.Provider value={{ borrowedBooks, setBorrowedBooks }}>
      {children}
    </BorrowedBooksContext.Provider>
  );
};
