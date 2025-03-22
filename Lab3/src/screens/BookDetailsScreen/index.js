import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { db } from '../../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useBorrowedBooks } from '../../contexts/BorrowedBooksContext';
import styles from "./styles";

const BookDetailsScreen = ({ route }) => {
  const { book } = route.params;
  const { borrowedBooks, setBorrowedBooks } = useBorrowedBooks();
  const [isBookBorrowed, setIsBookBorrowed] = useState(false);

  // Check if the book is already borrowed
  const checkIfBookBorrowed = async () => {
    try {
      const docRef = doc(db, 'borrowedBooks', 'allBorrowedBooks');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const borrowedBooksData = docSnap.data().books;
        if (borrowedBooksData.some((borrowedBook) => borrowedBook.title === book.title)) {
          setIsBookBorrowed(true);
        }
      }
    } catch (error) {
      console.error('Error fetching borrowed books:', error);
    }
  };

  // Borrow book function
  const handleBorrowBook = async () => {
    if (isBookBorrowed) {
      Alert.alert('You already borrowed this book!');
      return;
    }

    try {
      const docRef = doc(db, 'borrowedBooks', 'allBorrowedBooks');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const borrowedBooksData = docSnap.data().books;
        if (borrowedBooksData.length >= 3) {
          Alert.alert('Limit Reached', 'You can borrow a maximum of 3 books.');
          return;
        }

        // Add new borrowed book to the list
        await setDoc(docRef, {
          books: [...borrowedBooksData, book],
        }, { merge: true });

        // Update the context state immediately
        setBorrowedBooks([...borrowedBooks, book]);

      } else {
        // If the document doesn't exist, create it
        await setDoc(docRef, {
          books: [book],
        });

        // Update the context state immediately
        setBorrowedBooks([book]);
      }

      setIsBookBorrowed(true);
      Alert.alert('Success', 'Book borrowed successfully!');
    } catch (error) {
      console.error('Error borrowing book:', error);
    }
  };

  useEffect(() => {
    checkIfBookBorrowed();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>by {book.author}</Text>
      <Text style={styles.description}>{book.description}</Text>

      <TouchableOpacity
        style={[styles.borrowButton, isBookBorrowed && styles.disabledButton]}
        onPress={handleBorrowBook}
        disabled={isBookBorrowed}
      >
        <Text style={styles.buttonText}>
          {isBookBorrowed ? 'Book Borrowed' : 'Borrow Book'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookDetailsScreen;
